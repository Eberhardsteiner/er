// Zentraler Einstiegspunkt fuer alle Inhalte.
// Spaetere Phasen ergaenzen hier nur weitere Lektionen, ohne Komponenten anzufassen.

import type { Bilanz, Lektion, RundenId } from './typen';
import { lektionR0 } from './lektionen/R0-demo';

// Lektionen in Spielreihenfolge. Phase 0 enthaelt nur die Demo-Runde R0.
export const lektionen: Lektion[] = [lektionR0];

// Alle Rundenplaetze in Spielreihenfolge, auch die noch nicht befuellten.
export const alleRundenIds: RundenId[] = ['R0', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7'];

export function findeLektion(id: RundenId): Lektion | undefined {
  return lektionen.find((l) => l.id === id);
}

// Startbilanz Phase 0 (Demo-Bilanz).
export const startBilanz: Bilanz = {
  stichtagLabel: 'Probelauf, Gründung',
  aktiva: [
    {
      name: 'Umlaufvermögen',
      posten: [{ id: 'bank', name: 'Guthaben bei Kreditinstituten', betrag: 100000 }],
    },
  ],
  passiva: [
    {
      name: 'Eigenkapital',
      posten: [{ id: 'stammkapital', name: 'Stammkapital', betrag: 35000 }],
    },
    {
      name: 'Verbindlichkeiten',
      posten: [
        { id: 'bankdarlehen', name: 'Verbindlichkeiten gegenüber Kreditinstituten', betrag: 65000 },
      ],
    },
  ],
};
