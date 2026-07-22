// Gate-Logik: Welche Stufe einer Runde oder eines Zusatzmoduls ist wann
// zugaenglich? Reine Funktionen ohne Seiteneffekte. Seit Phase Z0 arbeiten
// die Gates strukturell auf Kacheln und Faellen und gelten damit fuer
// Lektionen und Zusatzmodule gleichermassen.

import type { Fall, Kachel } from '../content/typen';
import type { RundenStand } from '../store/spielstand';

export function alleKachelnGelesen(
  einheit: { kacheln: Kachel[] },
  stand: RundenStand,
): boolean {
  return einheit.kacheln.every((k) => stand.kachelnGelesen.includes(k.id));
}

// Quiz-Zugang erst, wenn alle 6 Kacheln geoeffnet wurden. Trainer darf sofort weiter.
export function darfQuizStarten(
  einheit: { kacheln: Kachel[] },
  stand: RundenStand,
  istTrainer: boolean,
): boolean {
  if (stand.status !== 'offen') return false;
  return istTrainer || alleKachelnGelesen(einheit, stand);
}

// Faelle erst nach Quizabgabe.
export function darfFaelleBearbeiten(stand: RundenStand): boolean {
  return stand.status === 'quizAbgegeben' || stand.status === 'faelleAbgegeben';
}

export function alleFaelleAbgegeben(
  einheit: { faelle: Fall[] },
  stand: RundenStand,
): boolean {
  return einheit.faelle.every((f) => stand.fallStaende[f.id]?.abgegeben === true);
}

// Kennwort-Gate erscheint, wenn alle Faelle abgegeben sind.
export function kennwortGateAktiv(stand: RundenStand): boolean {
  return stand.status === 'faelleAbgegeben';
}

// Auswertung erst nach Kennworteingabe.
export function darfAuswertungSehen(stand: RundenStand): boolean {
  return stand.status === 'ausgewertet';
}

// Folgerunde erst nach Auswertung der Vorrunde.
export function istRundeSpielbar(stand: RundenStand): boolean {
  return stand.status !== 'gesperrt';
}
