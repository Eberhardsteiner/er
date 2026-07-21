// Reine Scoring-Funktionen. Keine Seiteneffekte, vollstaendig getestet.

import type { Fall, QuizFrage, RundenId, Teilaufgabe } from '../content/typen';

export const PUNKTE_JE_QUIZFRAGE = 2;
export const MAX_PUNKTE_QUIZ = 20;
export const MAX_PUNKTE_FAELLE = 80;
export const MAX_PUNKTE_RUNDE = 100;
export const MAX_PUNKTE_GESAMT = 700;
export const STANDARD_TOLERANZ = 0.5;

// Zahleneingaben im Format de-AT parsen, etwa "882,00" oder "1.000,50".
// Liefert null bei nicht interpretierbarer Eingabe.
export function parseZahlDeAT(eingabe: string): number | null {
  const roh = eingabe.trim().replace(/\s/g, '');
  if (roh === '') return null;
  let normalisiert: string;
  if (roh.includes(',')) {
    // Punkte sind Tausendertrennzeichen, Komma ist Dezimaltrennzeichen.
    normalisiert = roh.replace(/\./g, '').replace(',', '.');
  } else if (/^-?\d{1,3}(\.\d{3})+$/.test(roh)) {
    // Nur Punkte im Tausendermuster: als Tausendertrennzeichen behandeln.
    normalisiert = roh.replace(/\./g, '');
  } else {
    normalisiert = roh;
  }
  if (!/^-?\d+(\.\d+)?$/.test(normalisiert)) return null;
  const wert = Number(normalisiert);
  return Number.isFinite(wert) ? wert : null;
}

// Quiz: 2 Punkte je richtiger Antwort, Maximum 20. Unbeantwortet zaehlt als falsch.
export function punkteQuiz(fragen: QuizFrage[], antworten: (number | null)[]): number {
  let punkte = 0;
  fragen.forEach((frage, i) => {
    if (antworten[i] !== null && antworten[i] !== undefined && antworten[i] === frage.richtig) {
      punkte += PUNKTE_JE_QUIZFRAGE;
    }
  });
  return Math.min(punkte, MAX_PUNKTE_QUIZ);
}

export function maxPunkteFall(fall: Fall): number {
  return fall.teilaufgaben.reduce((summe, t) => summe + t.punkte, 0);
}

// Prueft eine einzelne Teilaufgabe und liefert die erreichten Punkte.
export function punkteTeilaufgabe(
  teilaufgabe: Teilaufgabe,
  eingabe: string | number | null | undefined,
): number {
  if (eingabe === null || eingabe === undefined) return 0;
  if (teilaufgabe.typ === 'choice') {
    return eingabe === teilaufgabe.richtig ? teilaufgabe.punkte : 0;
  }
  const wert = typeof eingabe === 'number' ? eingabe : parseZahlDeAT(eingabe);
  if (wert === null) return 0;
  const toleranz = teilaufgabe.toleranz ?? STANDARD_TOLERANZ;
  return Math.abs(wert - teilaufgabe.loesung) <= toleranz ? teilaufgabe.punkte : 0;
}

// Kaufmaennische Rundung (ab 0,5 aufrunden) fuer die Hilfe-Deckelung.
export function rundeKaufmaennisch(wert: number): number {
  return Math.round(wert);
}

// Fall: Summe der Punkte richtiger Teilaufgaben.
// Bei hilfeGenutzt wird das Ergebnis auf die Haelfte der Fallmaximalpunkte
// gedeckelt (kaufmaennisch gerundet). Bei loesungGenutzt 0 Punkte.
export function punkteFall(
  fall: Fall,
  eingaben: Record<string, string | number | null>,
  hilfeGenutzt: boolean,
  loesungGenutzt: boolean,
): number {
  if (loesungGenutzt) return 0;
  const roh = fall.teilaufgaben.reduce(
    (summe, t) => summe + punkteTeilaufgabe(t, eingaben[t.id]),
    0,
  );
  if (hilfeGenutzt) {
    const deckel = rundeKaufmaennisch(maxPunkteFall(fall) / 2);
    return Math.min(roh, deckel);
  }
  return roh;
}

// Runde: Quiz plus Faelle, Maximum 100.
export function punkteRunde(punkteQuizWert: number, punkteFaelleWert: number): number {
  return Math.min(punkteQuizWert + punkteFaelleWert, MAX_PUNKTE_RUNDE);
}

// Gesamt: Summe ueber R1 bis R7, Maximum 700.
// R0 zaehlt nicht in die Gesamtwertung und wird separat als Probelauf ausgewiesen.
export function punkteGesamt(
  rundenPunkte: Partial<Record<RundenId, number>>,
): number {
  const gewertet: RundenId[] = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7'];
  const summe = gewertet.reduce((s, id) => s + (rundenPunkte[id] ?? 0), 0);
  return Math.min(summe, MAX_PUNKTE_GESAMT);
}

export type Rang =
  | 'Bilanzmeister'
  | 'Abschlussprofi'
  | 'Solide Basis'
  | 'Trainingsrunde empfohlen';

// Rang in der Gesamtauswertung nach Prozent von 700.
export function ermittleRang(gesamtPunkte: number): Rang {
  const prozent = (gesamtPunkte / MAX_PUNKTE_GESAMT) * 100;
  if (prozent >= 90) return 'Bilanzmeister';
  if (prozent >= 75) return 'Abschlussprofi';
  if (prozent >= 50) return 'Solide Basis';
  return 'Trainingsrunde empfohlen';
}
