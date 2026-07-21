// Gate-Logik: Welche Stufe einer Runde ist wann zugaenglich?
// Reine Funktionen ohne Seiteneffekte.

import type { Lektion } from '../content/typen';
import type { RundenStand } from '../store/spielstand';

export function alleKachelnGelesen(lektion: Lektion, stand: RundenStand): boolean {
  return lektion.kacheln.every((k) => stand.kachelnGelesen.includes(k.id));
}

// Quiz-Zugang erst, wenn alle 6 Kacheln geoeffnet wurden. Trainer darf sofort weiter.
export function darfQuizStarten(
  lektion: Lektion,
  stand: RundenStand,
  istTrainer: boolean,
): boolean {
  if (stand.status !== 'offen') return false;
  return istTrainer || alleKachelnGelesen(lektion, stand);
}

// Faelle erst nach Quizabgabe.
export function darfFaelleBearbeiten(stand: RundenStand): boolean {
  return stand.status === 'quizAbgegeben' || stand.status === 'faelleAbgegeben';
}

export function alleFaelleAbgegeben(lektion: Lektion, stand: RundenStand): boolean {
  return lektion.faelle.every((f) => stand.fallStaende[f.id]?.abgegeben === true);
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
