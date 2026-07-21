import { describe, expect, it } from 'vitest';
import type { Bilanz, BilanzDelta } from '../content/typen';
import { startBilanz } from '../content';
import { lektionR0 } from '../content/lektionen/R0-demo';
import {
  geaendertePostenIds,
  pruefeBilanz,
  sichtbarePosten,
  summeSeite,
  wendeDeltaAn,
} from './bilanz';

describe('wendeDeltaAn', () => {
  it('wendet das R0-Delta an und legt den neuen Posten samt Gruppe an', () => {
    const delta = lektionR0.bilanzDelta;
    expect(delta).toBeDefined();
    const neu = wendeDeltaAn(startBilanz, delta as BilanzDelta);

    expect(neu.stichtagLabel).toBe('Probelauf, nach Einkauf');
    // Neue Gruppe Anlagevermoegen vor dem Umlaufvermoegen
    expect(neu.aktiva[0].name).toBe('Anlagevermögen');
    expect(neu.aktiva[0].posten[0]).toMatchObject({ id: 'bga', betrag: 882 });
    // Bank um 882 reduziert
    const bank = neu.aktiva[1].posten.find((p) => p.id === 'bank');
    expect(bank?.betrag).toBe(99118);
    // Invariante haelt
    expect(() => pruefeBilanz(neu)).not.toThrow();
    expect(summeSeite(neu.aktiva)).toBe(100000);
  });

  it('veraendert die Ausgangsbilanz nicht', () => {
    const delta = lektionR0.bilanzDelta as BilanzDelta;
    wendeDeltaAn(startBilanz, delta);
    expect(startBilanz.aktiva[0].posten[0].betrag).toBe(100000);
    expect(startBilanz.aktiva.length).toBe(1);
  });

  it('wirft bei unbekannter postenId einen Fehler', () => {
    const delta: BilanzDelta = {
      erlaeuterung: 'Test',
      neuerStichtagLabel: 'Test',
      aenderungen: [{ postenId: 'gibtEsNicht', delta: 100 }],
    };
    expect(() => wendeDeltaAn(startBilanz, delta)).toThrow(/gibtEsNicht/);
  });

  it('markiert Posten, die auf 0 fallen, als vorher befuellt', () => {
    const delta: BilanzDelta = {
      erlaeuterung: 'Test',
      neuerStichtagLabel: 'Test',
      neuePosten: [
        {
          seite: 'passiva',
          gruppe: 'Verbindlichkeiten',
          posten: { id: 'llVerb', name: 'Verbindlichkeiten aus Lieferungen und Leistungen' },
        },
      ],
      aenderungen: [
        { postenId: 'bankdarlehen', delta: -65000 },
        { postenId: 'llVerb', delta: 65000 },
      ],
    };
    const neu = wendeDeltaAn(startBilanz, delta);
    const verbGruppe = neu.passiva.find((g) => g.name === 'Verbindlichkeiten');
    expect(verbGruppe).toBeDefined();
    const sichtbar = sichtbarePosten(verbGruppe!);
    // bankdarlehen steht auf 0, war aber befuellt und bleibt sichtbar
    expect(sichtbar.map((p) => p.id)).toContain('bankdarlehen');
    expect(sichtbar.find((p) => p.id === 'bankdarlehen')?.betrag).toBe(0);
  });
});

describe('pruefeBilanz', () => {
  it('wirft bei unausgeglichener Bilanz einen Fehler mit Differenzbetrag', () => {
    const kaputt: Bilanz = {
      stichtagLabel: 'Test',
      aktiva: [{ name: 'A', posten: [{ id: 'x', name: 'X', betrag: 100 }] }],
      passiva: [{ name: 'P', posten: [{ id: 'y', name: 'Y', betrag: 90 }] }],
    };
    expect(() => pruefeBilanz(kaputt)).toThrow(/Differenz 10/);
  });

  it('akzeptiert die Startbilanz', () => {
    expect(() => pruefeBilanz(startBilanz)).not.toThrow();
  });
});

describe('sichtbarePosten', () => {
  it('blendet Posten mit Betrag 0 ohne Vorbefuellung aus', () => {
    const gruppe = {
      name: 'Test',
      posten: [
        { id: 'a', name: 'A', betrag: 0 },
        { id: 'b', name: 'B', betrag: 5 },
      ],
    };
    expect(sichtbarePosten(gruppe).map((p) => p.id)).toEqual(['b']);
  });
});

describe('geaendertePostenIds', () => {
  it('liefert veraenderte und neu angelegte Posten', () => {
    const ids = geaendertePostenIds(lektionR0.bilanzDelta as BilanzDelta);
    expect(ids.has('bank')).toBe(true);
    expect(ids.has('bga')).toBe(true);
  });
});
