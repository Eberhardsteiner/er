// Tests fuer Spielstand-Export und -Import (Phase 9).

import { describe, expect, it } from 'vitest';
import type { SpielStand } from '../store/spielstand';
import { anfangsZustand, SPIELSTAND_VERSION } from '../store/spielstand';
import {
  nurSpielstandDaten,
  parseSpielstandDatei,
  serialisiereSpielstand,
  spielstandDateiname,
} from './spielstandDatei';

function musterStand(): SpielStand {
  const stand = anfangsZustand();
  stand.name = 'Anna Musterfrau';
  stand.onboardingGesehen = true;
  stand.runden.R1 = {
    ...stand.runden.R1,
    status: 'ausgewertet',
    punkteQuiz: 20,
    punkteFaelle: 80,
    kachelnGelesen: ['R1-K1'],
    quizAntworten: [1, 2, 3, 4, 0, 1, 2, 3, 4, 0],
  };
  stand.module = {
    Z1: {
      status: 'ausgewertet',
      uebersprungen: false,
      kachelnGelesen: [],
      quizAntworten: [],
      fallStaende: {},
      punkteQuiz: 20,
      punkteFaelle: 80,
      quizUebersprungen: false,
    },
  };
  stand.freigeschalteteModule = ['Z1'];
  stand.notizen = { R1: 'Meine Notiz' };
  return stand;
}

describe('spielstandDateiname', () => {
  it('bildet den Dateinamen aus Slug und Datum', () => {
    expect(spielstandDateiname('Anna Musterfrau', new Date(2026, 6, 22))).toBe(
      'alpenrad-spielstand-Anna_Musterfrau-2026-07-22.json',
    );
  });

  it('nutzt einen Ersatz-Slug, wenn kein Name vorhanden ist', () => {
    expect(spielstandDateiname(null, new Date(2026, 0, 5))).toBe(
      'alpenrad-spielstand-Spielstand-2026-01-05.json',
    );
  });
});

describe('Export-Import-Roundtrip', () => {
  it('liefert nach Sichern und Laden einen identischen Stand', () => {
    const original = musterStand();
    const datei = serialisiereSpielstand(original, '2026-07-22T10:00:00.000Z');
    const geladen = parseSpielstandDatei(datei);
    expect(geladen).toEqual(nurSpielstandDaten(original));
  });

  it('schreibt den Exportzeitpunkt in die Datei', () => {
    const datei = serialisiereSpielstand(musterStand(), '2026-07-22T10:00:00.000Z');
    expect(JSON.parse(datei).exportiertAm).toBe('2026-07-22T10:00:00.000Z');
  });
});

describe('Ungueltige Dateien', () => {
  it('lehnt kaputtes JSON mit klarer Meldung ab', () => {
    expect(() => parseSpielstandDatei('kaputt{')).toThrow(/kein gültiges JSON/);
  });

  it('lehnt JSON ohne Spielstand-Struktur ab', () => {
    expect(() => parseSpielstandDatei('[1, 2, 3]')).toThrow(/keinen Spielstand/);
    expect(() => parseSpielstandDatei('{}')).toThrow(/Versionsfeld/);
    expect(() => parseSpielstandDatei('{"version": 4}')).toThrow(/Spielername/);
    expect(() => parseSpielstandDatei('{"version": 4, "name": "Anna"}')).toThrow(/Rundenstände/);
  });

  it('lehnt Staende aus einer neueren Version ab', () => {
    const datei = JSON.stringify({ ...musterStand(), version: SPIELSTAND_VERSION + 1 });
    expect(() => parseSpielstandDatei(datei)).toThrow(/neueren Version/);
  });

  it('lehnt Staende mit fehlenden Runden ab', () => {
    const stand = musterStand();
    const runden: Partial<SpielStand['runden']> = { ...stand.runden };
    delete runden.R7;
    expect(() => parseSpielstandDatei(JSON.stringify({ ...stand, runden }))).toThrow(/Runde R7/);
  });
});

describe('Migration alter Dateiversionen', () => {
  it('migriert einen Version-1-Stand auf die aktuelle Version', () => {
    const alt = anfangsZustand() as Partial<SpielStand> & { version: number };
    alt.version = 1;
    alt.name = 'Alter Stand';
    alt.runden!.R1 = { ...alt.runden!.R1, status: 'gesperrt' };
    delete alt.module;
    delete alt.freigeschalteteModule;
    delete alt.notizen;

    const geladen = parseSpielstandDatei(JSON.stringify(alt));
    expect(geladen.version).toBe(SPIELSTAND_VERSION);
    expect(geladen.runden.R1.status).toBe('offen');
    expect(geladen.module).toEqual({});
    expect(geladen.freigeschalteteModule).toEqual([]);
    expect(geladen.notizen).toEqual({});
  });
});
