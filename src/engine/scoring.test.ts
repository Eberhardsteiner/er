import { describe, expect, it } from 'vitest';
import type { Fall, QuizFrage } from '../content/typen';
import {
  ermittleRang,
  maxPunkteFall,
  parseZahlDeAT,
  punkteFall,
  punkteGesamt,
  punkteQuiz,
  punkteRunde,
  punkteTeilaufgabe,
} from './scoring';

function frage(richtig: 0 | 1 | 2 | 3 | 4): QuizFrage {
  return {
    id: `q${Math.floor(Math.random() * 1e9)}`,
    frage: 'Testfrage',
    antworten: ['a', 'b', 'c', 'd', 'e'],
    richtig,
    erklaerung: 'Erklärung',
  };
}

const testFall: Fall = {
  id: 'T1',
  titel: 'Testfall',
  sachverhalt: 'Sachverhalt',
  teilaufgaben: [
    { id: 'T1a', typ: 'zahl', frage: 'Zahl?', punkte: 20, loesung: 900, einheit: 'EUR' },
    { id: 'T1b', typ: 'zahl', frage: 'Zahl?', punkte: 20, loesung: 882, einheit: 'EUR' },
  ],
  hilfe: 'Hilfetext',
  loesung: 'Lösungstext',
};

describe('parseZahlDeAT', () => {
  it('parst de-AT-Eingaben wie "882,00"', () => {
    expect(parseZahlDeAT('882,00')).toBe(882);
  });
  it('parst Tausenderpunkte mit Komma', () => {
    expect(parseZahlDeAT('1.000,50')).toBe(1000.5);
  });
  it('parst reine Tausenderpunkte', () => {
    expect(parseZahlDeAT('1.000')).toBe(1000);
  });
  it('parst einfache Zahlen', () => {
    expect(parseZahlDeAT('882')).toBe(882);
    expect(parseZahlDeAT(' 900 ')).toBe(900);
    expect(parseZahlDeAT('-15,5')).toBe(-15.5);
  });
  it('liefert null bei ungueltiger Eingabe', () => {
    expect(parseZahlDeAT('')).toBeNull();
    expect(parseZahlDeAT('abc')).toBeNull();
    expect(parseZahlDeAT('12a')).toBeNull();
  });
});

describe('punkteQuiz', () => {
  const fragen = [frage(0), frage(1), frage(2), frage(3), frage(4)];

  it('gibt 2 Punkte je richtiger Antwort', () => {
    expect(punkteQuiz(fragen, [0, 1, 2, 3, 4])).toBe(10);
  });
  it('wertet unbeantwortete Fragen als falsch', () => {
    expect(punkteQuiz(fragen, [0, null, null, null, null])).toBe(2);
    expect(punkteQuiz(fragen, [])).toBe(0);
  });
  it('wertet falsche Antworten mit 0', () => {
    expect(punkteQuiz(fragen, [1, 0, 0, 0, 0])).toBe(0);
  });
});

describe('punkteTeilaufgabe', () => {
  const zahl = testFall.teilaufgaben[0];

  it('vergleicht Zahlen mit Standardtoleranz 0,5 und de-AT-Eingabe', () => {
    expect(punkteTeilaufgabe(zahl, '900,00')).toBe(20);
    expect(punkteTeilaufgabe(zahl, '900,5')).toBe(20);
    expect(punkteTeilaufgabe(zahl, '901')).toBe(0);
  });
  it('respektiert eine eigene Toleranz', () => {
    const grob = { ...zahl, toleranz: 10 } as typeof zahl;
    expect(punkteTeilaufgabe(grob, '905')).toBe(20);
    expect(punkteTeilaufgabe(grob, '911')).toBe(0);
  });
  it('wertet leere und ungueltige Eingaben mit 0', () => {
    expect(punkteTeilaufgabe(zahl, null)).toBe(0);
    expect(punkteTeilaufgabe(zahl, 'abc')).toBe(0);
  });
  it('prueft Choice-Aufgaben ueber den Index', () => {
    const choice = {
      id: 'c',
      typ: 'choice' as const,
      frage: 'Wahl?',
      optionen: ['A', 'B', 'C'],
      richtig: 1,
      punkte: 20,
    };
    expect(punkteTeilaufgabe(choice, 1)).toBe(20);
    expect(punkteTeilaufgabe(choice, 0)).toBe(0);
    expect(punkteTeilaufgabe(choice, null)).toBe(0);
  });
});

describe('punkteFall', () => {
  it('summiert richtige Teilaufgaben', () => {
    expect(punkteFall(testFall, { T1a: '900', T1b: '882,00' }, false, false)).toBe(40);
    expect(punkteFall(testFall, { T1a: '900', T1b: '800' }, false, false)).toBe(20);
  });
  it('deckelt bei genutzter Hilfe auf die Haelfte der Fallmaximalpunkte', () => {
    expect(punkteFall(testFall, { T1a: '900', T1b: '882' }, true, false)).toBe(20);
    expect(punkteFall(testFall, { T1a: '900', T1b: '800' }, true, false)).toBe(20);
  });
  it('rundet die Haelfte kaufmaennisch', () => {
    const ungerade: Fall = {
      ...testFall,
      teilaufgaben: [
        { id: 'u1', typ: 'zahl', frage: 'Zahl?', punkte: 15, loesung: 1 },
        { id: 'u2', typ: 'zahl', frage: 'Zahl?', punkte: 10, loesung: 2 },
      ],
    };
    // Maximum 25, Haelfte 12,5, kaufmaennisch gerundet 13.
    expect(punkteFall(ungerade, { u1: '1', u2: '2' }, true, false)).toBe(13);
  });
  it('setzt bei genutzter Loesung 0 Punkte', () => {
    expect(punkteFall(testFall, { T1a: '900', T1b: '882' }, false, true)).toBe(0);
    expect(punkteFall(testFall, { T1a: '900', T1b: '882' }, true, true)).toBe(0);
  });
  it('kennt die Fallmaximalpunkte', () => {
    expect(maxPunkteFall(testFall)).toBe(40);
  });
});

describe('punkteRunde und punkteGesamt', () => {
  it('summiert Quiz und Faelle bis maximal 100', () => {
    expect(punkteRunde(20, 80)).toBe(100);
    expect(punkteRunde(10, 40)).toBe(50);
  });
  it('zaehlt R0 nicht in die Gesamtwertung', () => {
    expect(punkteGesamt({ R0: 100, R1: 50, R2: 30 })).toBe(80);
  });
  it('deckelt die Gesamtwertung bei 700', () => {
    expect(
      punkteGesamt({ R1: 100, R2: 100, R3: 100, R4: 100, R5: 100, R6: 100, R7: 100 }),
    ).toBe(700);
  });
});

describe('ermittleRang', () => {
  it('vergibt die Raenge nach Prozentgrenzen', () => {
    expect(ermittleRang(630)).toBe('Bilanzmeister');
    expect(ermittleRang(629)).toBe('Abschlussprofi');
    expect(ermittleRang(525)).toBe('Abschlussprofi');
    expect(ermittleRang(524)).toBe('Solide Basis');
    expect(ermittleRang(350)).toBe('Solide Basis');
    expect(ermittleRang(349)).toBe('Trainingsrunde empfohlen');
  });
});
