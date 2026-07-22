// Kennwortlogik fuer Runden, Sprungfunktion und Trainerzugang.
//
// HINWEIS: Die Base64-Ablage ist bewusst nur Sichtschutz gegen zufaelliges
// Mitlesen im Quelltext. Sie ist KEINE Sicherheitsmassnahme. Fuer ein
// Planspiel ohne Pruefungscharakter ist das akzeptiert (siehe Produktionsplan).

import { alleRundenIds } from '../content';
import type { ModulId, RundenId, SpielId } from '../content/typen';

const KENNWOERTER_B64: Record<RundenId, string> = {
  R0: 'VGVzdERyaXZl',
  R1: 'R3JlZW5GaWVsZA==',
  R2: 'R29sZGVuUnVsZQ==',
  R3: 'Q29ybmVyU3RvbmU=',
  R4: 'RmFpclZhbHVl',
  R5: 'SXJvbldvcmtz',
  R6: 'UXVpY2tTaWx2ZXI=',
  R7: 'U2FmZUhhcmJvcg==',
};

// Kennwoerter der Zusatzmodule: schalten das Modul frei und bestaetigen
// spaeter auch das Kennwort-Gate des Moduls (einheitliche Bedienung).
const MODUL_KENNWOERTER_B64: Record<ModulId, string> = {
  Z1: 'R29sZGVuU2hhcmU=',
  Z2: 'SXJvbkJyaWRnZQ==',
  Z3: 'VGltZUdhdGU=',
  Z4: 'Q2xlYXJXYXRlcg==',
};

const TRAINER_B64 = 'Q29udHJvbCM5OQ==';

function dekodiere(b64: string): string {
  return atob(b64);
}

// Normalisierter Vergleich: trim und Kleinschreibung.
// Der Trainercode Control#99 wird gleich behandelt.
export function normalisiere(eingabe: string): string {
  return eingabe.trim().toLowerCase();
}

export function kennwortFuerRunde(id: RundenId): string {
  return dekodiere(KENNWOERTER_B64[id]);
}

export function trainerKennwort(): string {
  return dekodiere(TRAINER_B64);
}

export function kennwortFuerModul(id: ModulId): string {
  return dekodiere(MODUL_KENNWOERTER_B64[id]);
}

export function pruefeKennwort(id: RundenId, eingabe: string): boolean {
  return normalisiere(eingabe) === normalisiere(kennwortFuerRunde(id));
}

export function pruefeModulKennwort(id: ModulId, eingabe: string): boolean {
  return normalisiere(eingabe) === normalisiere(kennwortFuerModul(id));
}

// Einheitlicher Vergleich fuer Kernrunden und Zusatzmodule (Kennwort-Gate).
export function pruefeEinheitKennwort(id: SpielId, eingabe: string): boolean {
  return id.startsWith('Z')
    ? pruefeModulKennwort(id as ModulId, eingabe)
    : pruefeKennwort(id as RundenId, eingabe);
}

export function pruefeTrainerKennwort(eingabe: string): boolean {
  return normalisiere(eingabe) === normalisiere(trainerKennwort());
}

// Sprungdialog am Start: Das Kennwort von Runde n startet das Spiel direkt in
// Runde n+1. Liefert die Zielrunde oder null, wenn kein Kennwort passt oder
// es nach der letzten Runde keine Folgerunde gibt.
// Der Sprung in Runde 1 braucht kein Kennwort und laeuft nicht ueber diese Funktion.
export function sprungziel(eingabe: string): RundenId | null {
  for (let i = 0; i < alleRundenIds.length; i++) {
    if (pruefeKennwort(alleRundenIds[i], eingabe)) {
      return i + 1 < alleRundenIds.length ? alleRundenIds[i + 1] : null;
    }
  }
  return null;
}
