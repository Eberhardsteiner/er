// Regeln der Zusatzmodule (Phase Z0): Disjunktheit der Modul-Deltas,
// Einzel- und Kombinationsbalance auf Basis der Schlussbilanz.
// Reine Funktionen, genutzt vom Content-Validator und von den Tests.

import type { Bilanz, Zusatzmodul } from '../content/typen';
import { geaendertePostenIds, pruefeBilanz, wendeDeltaAn } from './bilanz';

// Jedes Modul-Delta muss FUER SICH auf Basis der Schlussbilanz balancieren.
export function pruefeModulDeltaEinzeln(schlussbilanz: Bilanz, modul: Zusatzmodul): string[] {
  if (!modul.bilanzDelta) return [];
  try {
    pruefeBilanz(wendeDeltaAn(schlussbilanz, modul.bilanzDelta));
    return [];
  } catch (fehler) {
    return [`Modul ${modul.id}: ${(fehler as Error).message}`];
  }
}

// Das gemeinsame Geldkonto: Posten dieser Liste sind von der
// Disjunktheitspruefung ausgenommen, denn alle Module buchen ueber die Bank.
// Deltas sind reine Additionen auf den Betrag, Additionen kommutieren, die
// Reihenfolgeunabhaengigkeit der Modulkombinationen bleibt deshalb gewahrt.
export const GEMEINSAME_POSTEN: string[] = ['bank'];

// Disjunktheitsregel: Kein Posten darf von mehr als einem Modul veraendert
// oder angelegt werden, mit Ausnahme der GEMEINSAME_POSTEN. Dadurch sind die
// Deltas kommutativ und jede Modulkombination geht auf.
export function pruefeModulDisjunktheit(module: Zusatzmodul[]): string[] {
  const fehler: string[] = [];
  const belegt = new Map<string, string>();
  for (const modul of module) {
    if (!modul.bilanzDelta) continue;
    for (const postenId of geaendertePostenIds(modul.bilanzDelta)) {
      if (GEMEINSAME_POSTEN.includes(postenId)) continue;
      const anderes = belegt.get(postenId);
      if (anderes && anderes !== modul.id) {
        fehler.push(
          `Disjunktheitsregel verletzt: Posten "${postenId}" wird von Modul ${anderes} und Modul ${modul.id} veraendert oder angelegt.`,
        );
      } else {
        belegt.set(postenId, modul.id);
      }
    }
  }
  return fehler;
}

// Kombinationspruefung: Schlussbilanz plus alle Modul-Deltas gemeinsam balanciert.
export function pruefeModulKombination(schlussbilanz: Bilanz, module: Zusatzmodul[]): string[] {
  try {
    let bilanz = schlussbilanz;
    for (const modul of module) {
      if (modul.bilanzDelta) {
        bilanz = wendeDeltaAn(bilanz, modul.bilanzDelta);
      }
    }
    pruefeBilanz(bilanz);
    return [];
  } catch (fehler) {
    return [`Modulkombination: ${(fehler as Error).message}`];
  }
}
