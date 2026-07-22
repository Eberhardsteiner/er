import { describe, expect, it } from 'vitest';
import type { Bilanz, Zusatzmodul } from '../content/typen';
import { pruefeBilanz, pruefeGuV, vertiefungsbilanz } from './bilanz';
import {
  pruefeModulDeltaEinzeln,
  pruefeModulDisjunktheit,
  pruefeModulKombination,
} from './module';
import { schlussBilanz, zusatzbereichSichtbar, zusatzPunkte } from './ableitung';
import { punkteGesamt } from './scoring';
import { migriereSpielstand, useSpielstand } from '../store/spielstand';
import type { RundenStand, SpielStand } from '../store/spielstand';
import { pruefeModulKennwort } from './kennwort';

// Zwei Test-Deltas auf disjunkten Posten (Basis Schlussbilanz).
function testModul(id: 'Z1' | 'Z2', vorzeichenPosten: string): Zusatzmodul {
  return {
    id,
    titel: `Testmodul ${id}`,
    untertitel: 'Test',
    intro: { story: '', inhalte: [], lernziele: [] },
    kacheln: [],
    quiz: [],
    faelle: [],
    bilanzDelta: {
      erlaeuterung: 'Test',
      neuerStichtagLabel: `Test ${id}`,
      neuePosten: [
        {
          seite: 'passiva',
          gruppe: 'Verbindlichkeiten',
          posten: { id: vorzeichenPosten, name: `Testposten ${id}` },
        },
      ],
      aenderungen: [
        { postenId: 'bank', delta: id === 'Z1' ? 10000 : 0 },
        { postenId: vorzeichenPosten, delta: id === 'Z1' ? 10000 : 5000 },
        ...(id === 'Z2' ? [{ postenId: 'bankdarlehen', delta: -5000 }] : []),
      ],
    },
  };
}

// Z1 erhoeht Bank gegen neuen Posten, Z2 gliedert Bankdarlehen um.
// Gemeinsame Posten: keine (bank nur in Z1, bankdarlehen nur in Z2).
const modulA = testModul('Z1', 'testA');
const modulB: Zusatzmodul = {
  ...testModul('Z2', 'testB'),
  bilanzDelta: {
    erlaeuterung: 'Test',
    neuerStichtagLabel: 'Test Z2',
    neuePosten: [
      {
        seite: 'passiva',
        gruppe: 'Verbindlichkeiten',
        posten: { id: 'testB', name: 'Testposten Z2' },
      },
    ],
    aenderungen: [
      { postenId: 'bankdarlehen', delta: -5000 },
      { postenId: 'testB', delta: 5000 },
    ],
  },
};

function bilanzGleich(a: Bilanz, b: Bilanz): void {
  const posten = (bilanz: Bilanz) =>
    [...bilanz.aktiva, ...bilanz.passiva]
      .flatMap((g) => g.posten.map((p) => `${p.id}:${p.betrag}`))
      .sort();
  expect(posten(a)).toEqual(posten(b));
}

describe('vertiefungsbilanz', () => {
  it('wendet Modul-Deltas auf die Schlussbilanz an und bleibt ausgeglichen', () => {
    const bilanz = vertiefungsbilanz(schlussBilanz(), [modulA, modulB]);
    expect(bilanz.stichtagLabel).toBe('Vertiefungsbilanz zum 1. Jänner');
    expect(() => pruefeBilanz(bilanz)).not.toThrow();
  });

  it('ist kommutativ bei disjunkten Deltas', () => {
    const ab = vertiefungsbilanz(schlussBilanz(), [modulA, modulB]);
    const ba = vertiefungsbilanz(schlussBilanz(), [modulB, modulA]);
    bilanzGleich(ab, ba);
  });

  it('laesst die Schlussbilanz der Kernkette unveraendert', () => {
    const vorher = JSON.stringify(schlussBilanz());
    vertiefungsbilanz(schlussBilanz(), [modulA, modulB]);
    expect(JSON.stringify(schlussBilanz())).toBe(vorher);
  });
});

describe('Modulregeln', () => {
  it('erkennt einzeln balancierte Deltas an', () => {
    expect(pruefeModulDeltaEinzeln(schlussBilanz(), modulA)).toEqual([]);
    expect(pruefeModulDeltaEinzeln(schlussBilanz(), modulB)).toEqual([]);
  });

  it('meldet ein unbalanciertes Delta', () => {
    const kaputt: Zusatzmodul = {
      ...modulA,
      bilanzDelta: {
        erlaeuterung: 'Test',
        neuerStichtagLabel: 'Kaputt',
        aenderungen: [{ postenId: 'bank', delta: 999 }],
      },
    };
    expect(pruefeModulDeltaEinzeln(schlussBilanz(), kaputt).length).toBeGreaterThan(0);
  });

  it('meldet eine bewusste Posten-Kollision zweier Module', () => {
    const kollision: Zusatzmodul = {
      ...modulB,
      id: 'Z3',
      bilanzDelta: {
        erlaeuterung: 'Test',
        neuerStichtagLabel: 'Kollision',
        aenderungen: [
          { postenId: 'bank', delta: -1000 },
          { postenId: 'bankdarlehen', delta: -1000 },
        ],
      },
    };
    const fehler = pruefeModulDisjunktheit([modulA, kollision]);
    expect(fehler.length).toBeGreaterThan(0);
    expect(fehler[0]).toContain('bank');
  });

  it('bestaetigt disjunkte Module und die Kombination', () => {
    expect(pruefeModulDisjunktheit([modulA, modulB])).toEqual([]);
    expect(pruefeModulKombination(schlussBilanz(), [modulA, modulB])).toEqual([]);
  });
});

describe('pruefeGuV', () => {
  const stimmig = [
    { id: 'umsatz', bezeichnung: 'Umsatzerlöse', betrag: 180000 },
    { id: 'material', bezeichnung: 'Materialaufwand', betrag: -100000 },
    { id: 'personal', bezeichnung: 'Personalaufwand', betrag: -77295 },
    { id: 'ergebnis', bezeichnung: 'Jahresergebnis', betrag: 2705, istZwischensumme: true },
  ];

  it('akzeptiert eine stimmige Staffel', () => {
    expect(() => pruefeGuV(stimmig, 2705)).not.toThrow();
  });

  it('meldet eine unstimmige Staffel mit Differenz', () => {
    const falsch = stimmig.map((z) =>
      z.id === 'material' ? { ...z, betrag: -99000 } : z,
    );
    expect(() => pruefeGuV(falsch, 2705)).toThrow(/Differenz 1000/);
  });

  it('meldet eine falsche Zwischensumme', () => {
    const falsch = stimmig.map((z) =>
      z.id === 'ergebnis' ? { ...z, betrag: 9999 } : z,
    );
    expect(() => pruefeGuV(falsch, 2705)).toThrow(/Zwischensumme/);
  });
});

describe('Zusatzpunkte und Sichtbarkeit', () => {
  const stand = (status: RundenStand['status'], punkte = 0): RundenStand => ({
    status,
    uebersprungen: false,
    kachelnGelesen: [],
    quizAntworten: [],
    fallStaende: {},
    punkteQuiz: punkte,
    punkteFaelle: 0,
    quizUebersprungen: false,
  });

  it('haelt Zusatzpunkte getrennt von den Kernpunkten', () => {
    expect(zusatzPunkte({ Z1: stand('ausgewertet', 20), Z2: stand('offen', 10) })).toBe(30);
    // Die Kernwertung kennt nur R1 bis R7, Module gehen nicht ein.
    expect(punkteGesamt({ R1: 100, R7: 50 })).toBe(150);
  });

  it('zeigt den Zusatzbereich erst nach der R7-Auswertung, dem Trainer immer', () => {
    const runden = {
      R7: stand('offen'),
    } as unknown as Record<'R0' | 'R1' | 'R2' | 'R3' | 'R4' | 'R5' | 'R6' | 'R7', RundenStand>;
    expect(zusatzbereichSichtbar(runden, false)).toBe(false);
    expect(zusatzbereichSichtbar(runden, true)).toBe(true);
    runden.R7 = stand('ausgewertet');
    expect(zusatzbereichSichtbar(runden, false)).toBe(true);
  });
});

describe('Freischaltlogik', () => {
  it('prueft Modul-Kennwoerter normalisiert und weist falsche ab', () => {
    expect(pruefeModulKennwort('Z1', ' goldenshare ')).toBe(true);
    expect(pruefeModulKennwort('Z1', 'IronBridge')).toBe(false);
    expect(pruefeModulKennwort('Z2', 'IronBridge')).toBe(true);
    expect(pruefeModulKennwort('Z3', 'TimeGate')).toBe(true);
    expect(pruefeModulKennwort('Z4', 'clearwater')).toBe(true);
  });

  it('schaltet Module frei, Deaktivieren geht nur im Trainer-Modus', () => {
    const s = () => useSpielstand.getState();
    s().spielZuruecksetzen();

    s().schalteModulFrei('Z1');
    expect(s().freigeschalteteModule).toContain('Z1');
    expect(s().module.Z1?.status).toBe('offen');

    // Ohne Trainer-Modus bleibt die Freischaltung bestehen.
    s().deaktiviereModul('Z1');
    expect(s().freigeschalteteModule).toContain('Z1');

    // Trainer kann deaktivieren, der Modulstand bleibt erhalten.
    s().setzeTrainer(true);
    s().deaktiviereModul('Z1');
    expect(s().freigeschalteteModule).not.toContain('Z1');
    expect(s().module.Z1).toBeDefined();

    s().setzeTrainer(false);
    s().spielZuruecksetzen();
  });
});

describe('Migration', () => {
  it('ergaenzt alten Spielstaenden die Modulfelder', () => {
    const alt = {
      version: 3,
      name: 'Test Person',
      istTrainer: false,
      onboardingGesehen: true,
      runden: {},
      notizen: { R1: 'alte Notiz' },
    } as unknown as SpielStand;
    const migriert = migriereSpielstand(alt, 3);
    expect(migriert.module).toEqual({});
    expect(migriert.freigeschalteteModule).toEqual([]);
    expect(migriert.name).toBe('Test Person');
    expect(migriert.notizen.R1).toBe('alte Notiz');
  });
});
