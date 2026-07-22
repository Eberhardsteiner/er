// Abgeleitete Werte aus Spielstand und Inhalten (Bilanzstaende, Punkte).

import { lektionen, startBilanz, zusatzmodule } from '../content';
import type { Bilanz, ModulId, RundenId, Zusatzmodul } from '../content/typen';
import type { ModulStand, RundenStand } from '../store/spielstand';
import { pruefeBilanz, vertiefungsbilanz, wendeDeltaAn } from './bilanz';
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

// Die Bilanz folgt der Musterloesung: Alle Deltas bis zur hoechsten
// ausgewerteten Runde werden in Spielreihenfolge auf die Startbilanz
// angewendet, auch bei uebersprungenen Runden. Die Kette laeuft bewusst bis
// zur letzten ausgewerteten Runde durch, damit auch Trainer-Direkteinstiege
// in spaete Runden eine konsistente Musterbilanz zeigen (die Deltas bauen
// aufeinander auf).
export function aktuelleBilanz(runden: Record<RundenId, RundenStand>): Bilanz {
  let bilanz = startBilanz;
  const kette = bilanzLektionen();
  const letzteAusgewertete = [...kette]
    .reverse()
    .find((l) => runden[l.id].status === 'ausgewertet');
  if (!letzteAusgewertete) return pruefeImDevModus(bilanz);
  for (const lektion of kette) {
    if (lektion.bilanzDelta) {
      bilanz = wendeDeltaAn(bilanz, lektion.bilanzDelta);
    }
    if (lektion.id === letzteAusgewertete.id) break;
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

// ---- Zusatzmodule (Phase Z0) ----

// Der Zusatzmodul-Bereich erscheint fuer Studierende erst nach der
// R7-Auswertung, der Trainer sieht ihn immer.
export function zusatzbereichSichtbar(
  runden: Record<RundenId, RundenStand>,
  istTrainer: boolean,
): boolean {
  return istTrainer || runden.R7.status === 'ausgewertet';
}

// Freigeschaltete UND ausgewertete Module (nur deren Deltas wirken).
export function ausgewerteteModule(
  module: Partial<Record<ModulId, ModulStand>>,
  freigeschaltet: ModulId[],
): Zusatzmodul[] {
  return zusatzmodule.filter(
    (m) => freigeschaltet.includes(m.id) && module[m.id]?.status === 'ausgewertet',
  );
}

// Vertiefungsbilanz zum 1. Jaenner: Schlussbilanz plus die Deltas aller
// freigeschalteten und ausgewerteten Module. Die Kernkette bleibt unberuehrt.
export function aktuelleVertiefungsbilanz(
  module: Partial<Record<ModulId, ModulStand>>,
  freigeschaltet: ModulId[],
): Bilanz {
  return vertiefungsbilanz(schlussBilanz(), ausgewerteteModule(module, freigeschaltet));
}

// Zusatzpunkte laufen getrennt von der Kernwertung.
export function zusatzPunkte(module: Partial<Record<ModulId, ModulStand>>): number {
  return Object.values(module).reduce(
    (summe, stand) => summe + (stand ? stand.punkteQuiz + stand.punkteFaelle : 0),
    0,
  );
}

// Maximal erreichbare Zusatzpunkte: 100 je Modul mit geliefertem Content.
export function maxZusatzPunkte(): number {
  return zusatzmodule.filter((m) => !m.shell).length * 100;
}

// Anzahl ausgewerteter Module (fuer "n von 4 gespielt").
export function anzahlGespielteModule(module: Partial<Record<ModulId, ModulStand>>): number {
  return Object.values(module).filter((stand) => stand?.status === 'ausgewertet').length;
}
