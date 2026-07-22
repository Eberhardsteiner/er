// Goldener-Pfad-Regressionstest (Phase 9): sichert die komplette Zahlenwelt
// des Planspiels dauerhaft auf Engine-Ebene ab, ohne Browser.
// Kontrollwerte laut docs/KONSISTENZ.md.

import { describe, expect, it } from 'vitest';
import { alleRundenIds, findeModul, lektionen, startBilanz, zusatzmodule } from '../content';
import type { Bilanz, Lektion, RundenId, Zusatzmodul } from '../content/typen';
import { pruefeBilanz, pruefeGuV, summeSeite, vertiefungsbilanz, wendeDeltaAn } from './bilanz';
import { gesamtPunkte, maxZusatzPunkte, zusatzPunkte } from './ableitung';
import {
  kennwortFuerModul,
  kennwortFuerRunde,
  pruefeEinheitKennwort,
  pruefeTrainerKennwort,
  trainerKennwort,
} from './kennwort';
import { punkteFall, punkteQuiz } from './scoring';
import type { RundenStand } from '../store/spielstand';

function postenBetrag(bilanz: Bilanz, postenId: string): number {
  for (const seite of [bilanz.aktiva, bilanz.passiva]) {
    for (const gruppe of seite) {
      const posten = gruppe.posten.find((p) => p.id === postenId);
      if (posten) return posten.betrag;
    }
  }
  throw new Error(`Posten "${postenId}" nicht gefunden.`);
}

function gruppenSumme(bilanz: Bilanz, gruppenName: string): number {
  for (const seite of [bilanz.aktiva, bilanz.passiva]) {
    const gruppe = seite.find((g) => g.name === gruppenName);
    if (gruppe) return gruppe.posten.reduce((s, p) => s + p.betrag, 0);
  }
  throw new Error(`Gruppe "${gruppenName}" nicht gefunden.`);
}

function permutationen<T>(elemente: T[]): T[][] {
  if (elemente.length <= 1) return [elemente];
  return elemente.flatMap((element, i) =>
    permutationen([...elemente.slice(0, i), ...elemente.slice(i + 1)]).map((rest) => [
      element,
      ...rest,
    ]),
  );
}

// Kernkette in Spielreihenfolge ohne die Demo-Runde R0 (nurTrainer).
const kernLektionen = lektionen.filter((l) => !l.nurTrainer);

describe('Goldener Pfad: Kernkette der Musterbilanz', () => {
  const sollBilanzsummen: Partial<Record<RundenId, number>> = {
    R3: 290000,
    R4: 740000,
    R5: 704305,
    R6: 719305,
    R7: 719305,
  };

  it('startet mit der Gründungsbilanz 250.000 und trifft jeden Rundenkontrollwert', () => {
    expect(summeSeite(startBilanz.aktiva)).toBe(250000);
    expect(summeSeite(startBilanz.passiva)).toBe(250000);
    pruefeBilanz(startBilanz);

    let bilanz = startBilanz;
    for (const lektion of kernLektionen) {
      if (lektion.bilanzDelta) {
        bilanz = wendeDeltaAn(bilanz, lektion.bilanzDelta);
      }
      expect(() => pruefeBilanz(bilanz)).not.toThrow();
      const soll = sollBilanzsummen[lektion.id];
      if (soll !== undefined) {
        expect(summeSeite(bilanz.aktiva)).toBe(soll);
        expect(summeSeite(bilanz.passiva)).toBe(soll);
      }
    }
  });

  it('liefert die Schlussbilanz mit Eigenkapital 102.705, Rückstellungen 16.600 und Darlehen 600.000', () => {
    let bilanz = startBilanz;
    for (const lektion of kernLektionen) {
      if (lektion.bilanzDelta) {
        bilanz = wendeDeltaAn(bilanz, lektion.bilanzDelta);
      }
    }
    expect(postenBetrag(bilanz, 'stammkapital')).toBe(100000);
    expect(postenBetrag(bilanz, 'ergebnis')).toBe(2705);
    expect(gruppenSumme(bilanz, 'Eigenkapital')).toBe(102705);
    expect(gruppenSumme(bilanz, 'Rückstellungen')).toBe(16600);
    expect(postenBetrag(bilanz, 'bankdarlehen')).toBe(600000);
  });
});

describe('Goldener Pfad: Zusatzmodule in jeder Reihenfolge', () => {
  function schlussbilanz(): Bilanz {
    let bilanz = startBilanz;
    for (const lektion of kernLektionen) {
      if (lektion.bilanzDelta) {
        bilanz = wendeDeltaAn(bilanz, lektion.bilanzDelta);
      }
    }
    return bilanz;
  }

  it('ergibt in allen 24 Reihenfolgen 765.805 mit Bank 132.000', () => {
    const alleReihenfolgen = permutationen<Zusatzmodul>(zusatzmodule);
    expect(alleReihenfolgen).toHaveLength(24);
    const basis = schlussbilanz();
    for (const reihenfolge of alleReihenfolgen) {
      const bilanz = vertiefungsbilanz(basis, reihenfolge);
      expect(() => pruefeBilanz(bilanz)).not.toThrow();
      expect(summeSeite(bilanz.aktiva)).toBe(765805);
      expect(summeSeite(bilanz.passiva)).toBe(765805);
      expect(postenBetrag(bilanz, 'bank')).toBe(132000);
    }
  });

  it('verprobt die GuV-Staffel von Z4 auf 2.705', () => {
    const guv = findeModul('Z4')?.guv;
    expect(guv).toBeDefined();
    expect(() => pruefeGuV(guv!, 2705)).not.toThrow();
  });
});

describe('Goldener Pfad: Maximalpunkte mit Musterlösungen', () => {
  function vollerStand(quiz: number, faelle: number): RundenStand {
    return {
      status: 'ausgewertet',
      uebersprungen: false,
      kachelnGelesen: [],
      quizAntworten: [],
      fallStaende: {},
      punkteQuiz: quiz,
      punkteFaelle: faelle,
      quizUebersprungen: false,
    };
  }

  // Punkte einer Einheit, wenn alle Antworten der Musterlösung entsprechen.
  function musterPunkte(einheit: { quiz: Lektion['quiz']; faelle: Lektion['faelle'] }) {
    const quiz = punkteQuiz(
      einheit.quiz,
      einheit.quiz.map((f) => f.richtig),
    );
    const faelle = einheit.faelle.reduce((summe, fall) => {
      const eingaben: Record<string, string | number | null> = {};
      for (const t of fall.teilaufgaben) {
        eingaben[t.id] = t.typ === 'choice' ? t.richtig : t.loesung;
      }
      return summe + punkteFall(fall, eingaben, false, false);
    }, 0);
    return { quiz, faelle };
  }

  it('bringt in jeder Kernrunde 20 plus 80 Punkte, gesamt 700', () => {
    const runden = {} as Record<RundenId, RundenStand>;
    for (const id of alleRundenIds) runden[id] = vollerStand(0, 0);
    for (const lektion of kernLektionen) {
      const { quiz, faelle } = musterPunkte(lektion);
      expect(quiz, `Quiz ${lektion.id}`).toBe(20);
      expect(faelle, `Fälle ${lektion.id}`).toBe(80);
      runden[lektion.id] = vollerStand(quiz, faelle);
    }
    expect(gesamtPunkte(runden)).toBe(700);
  });

  it('zählt die Demo-Runde R0 nicht in die Gesamtwertung', () => {
    const runden = {} as Record<RundenId, RundenStand>;
    for (const id of alleRundenIds) runden[id] = vollerStand(20, 80);
    expect(gesamtPunkte(runden)).toBe(700);
  });

  it('bringt in jedem Zusatzmodul 100 Punkte, zusammen 400 Zusatzpunkte', () => {
    const module: Partial<Record<'Z1' | 'Z2' | 'Z3' | 'Z4', RundenStand>> = {};
    for (const modul of zusatzmodule) {
      const { quiz, faelle } = musterPunkte(modul);
      expect(quiz, `Quiz ${modul.id}`).toBe(20);
      expect(faelle, `Fälle ${modul.id}`).toBe(80);
      module[modul.id] = vollerStand(quiz, faelle);
    }
    expect(zusatzPunkte(module)).toBe(400);
    expect(maxZusatzPunkte()).toBe(400);
  });
});

describe('Goldener Pfad: Kennwort-Normalisierung', () => {
  const sollRunden: Record<RundenId, string> = {
    R0: 'TestDrive',
    R1: 'GreenField',
    R2: 'GoldenRule',
    R3: 'CornerStone',
    R4: 'FairValue',
    R5: 'IronWorks',
    R6: 'QuickSilver',
    R7: 'SafeHarbor',
  };
  const sollModule = { Z1: 'GoldenShare', Z2: 'IronBridge', Z3: 'TimeGate', Z4: 'ClearWater' } as const;

  it('akzeptiert alle Runden-Kennwörter mit Leerzeichen und abweichender Schreibung', () => {
    for (const id of alleRundenIds) {
      const kennwort = sollRunden[id];
      expect(kennwortFuerRunde(id)).toBe(kennwort);
      expect(pruefeEinheitKennwort(id, kennwort)).toBe(true);
      expect(pruefeEinheitKennwort(id, `  ${kennwort.toUpperCase()}  `)).toBe(true);
      expect(pruefeEinheitKennwort(id, kennwort.toLowerCase())).toBe(true);
      expect(pruefeEinheitKennwort(id, `${kennwort}x`)).toBe(false);
      expect(pruefeEinheitKennwort(id, '')).toBe(false);
    }
  });

  it('akzeptiert alle Modul-Kennwörter mit Leerzeichen und abweichender Schreibung', () => {
    for (const [id, kennwort] of Object.entries(sollModule) as ['Z1' | 'Z2' | 'Z3' | 'Z4', string][]) {
      expect(kennwortFuerModul(id)).toBe(kennwort);
      expect(pruefeEinheitKennwort(id, `  ${kennwort.toUpperCase()}  `)).toBe(true);
      expect(pruefeEinheitKennwort(id, kennwort.toLowerCase())).toBe(true);
      expect(pruefeEinheitKennwort(id, `${kennwort}x`)).toBe(false);
    }
  });

  it('akzeptiert den Trainerzugang Control#99 normalisiert und lehnt Falsches ab', () => {
    expect(trainerKennwort()).toBe('Control#99');
    expect(pruefeTrainerKennwort('Control#99')).toBe(true);
    expect(pruefeTrainerKennwort('  CONTROL#99  ')).toBe(true);
    expect(pruefeTrainerKennwort('control#98')).toBe(false);
    expect(pruefeTrainerKennwort('')).toBe(false);
  });
});
