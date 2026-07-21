// Abgeleitete Werte aus Spielstand und Inhalten (Bilanzstaende, Punkte).

import { lektionen, startBilanz } from '../content';
import type { Bilanz, RundenId } from '../content/typen';
import type { RundenStand } from '../store/spielstand';
import { pruefeBilanz, wendeDeltaAn } from './bilanz';
import { punkteGesamt } from './scoring';

function pruefeImDevModus(bilanz: Bilanz): Bilanz {
  if (import.meta.env.DEV) {
    pruefeBilanz(bilanz);
  }
  return bilanz;
}

// Lektionen, die in die Musterbilanz-Kette eingehen. Die Demo-Runde R0
// (nurTrainer) bleibt aussen vor, ihr Testdelta darf die Musterbilanz der
// echten Runden nicht veraendern.
function bilanzLektionen() {
  return lektionen.filter((l) => !l.nurTrainer);
}

// Die Bilanz folgt der Musterloesung: Alle Deltas ausgewerteter Runden werden
// in Spielreihenfolge auf die Startbilanz angewendet, auch bei uebersprungenen
// Runden. So bleibt die Bilanz ueber alle Runden konsistent.
export function aktuelleBilanz(runden: Record<RundenId, RundenStand>): Bilanz {
  let bilanz = startBilanz;
  for (const lektion of bilanzLektionen()) {
    if (lektion.bilanzDelta && runden[lektion.id].status === 'ausgewertet') {
      bilanz = wendeDeltaAn(bilanz, lektion.bilanzDelta);
    }
  }
  return pruefeImDevModus(bilanz);
}

// Bilanz vor Beginn einer Runde (alle Deltas frueherer Runden angewendet).
export function bilanzVorRunde(runde: RundenId): Bilanz {
  let bilanz = startBilanz;
  for (const lektion of bilanzLektionen()) {
    if (lektion.id === runde) break;
    if (lektion.bilanzDelta) {
      bilanz = wendeDeltaAn(bilanz, lektion.bilanzDelta);
    }
  }
  return pruefeImDevModus(bilanz);
}

// Bilanz nach einer Runde (inklusive deren Delta, falls vorhanden).
// Fuer die Trainer-Demo-Runde R0 wird das eigene Delta weiterhin gezeigt.
export function bilanzNachRunde(runde: RundenId): Bilanz {
  let bilanz = bilanzVorRunde(runde);
  const lektion = lektionen.find((l) => l.id === runde);
  if (lektion?.bilanzDelta) {
    bilanz = wendeDeltaAn(bilanz, lektion.bilanzDelta);
  }
  return pruefeImDevModus(bilanz);
}

// Schlussbilanz nach allen vorhandenen Runden.
export function schlussBilanz(): Bilanz {
  let bilanz = startBilanz;
  for (const lektion of bilanzLektionen()) {
    if (lektion.bilanzDelta) {
      bilanz = wendeDeltaAn(bilanz, lektion.bilanzDelta);
    }
  }
  return pruefeImDevModus(bilanz);
}

// Gesamtpunkte R1 bis R7 (R0 zaehlt als Probelauf nicht mit).
export function gesamtPunkte(runden: Record<RundenId, RundenStand>): number {
  const punkte: Partial<Record<RundenId, number>> = {};
  for (const id of Object.keys(runden) as RundenId[]) {
    punkte[id] = runden[id].punkteQuiz + runden[id].punkteFaelle;
  }
  return punkteGesamt(punkte);
}
