// Zentraler Einstiegspunkt fuer alle Inhalte.
// Spaetere Phasen ergaenzen hier nur weitere Lektionen, ohne Komponenten anzufassen.

import type { Bilanz, Lektion, RundenId } from './typen';
import { lektionR0 } from './lektionen/R0-demo';
import { lektionR1 } from './lektionen/R1-grundlagen';
import { lektionR2 } from './lektionen/R2-gob';
import { lektionR3 } from './lektionen/R3-ansatz';
import { lektionR4 } from './lektionen/R4-bewertung';
import { lektionR5 } from './lektionen/R5-anlagevermoegen';
import { lektionR6 } from './lektionen/R6-umlaufvermoegen';

// Lektionen in Spielreihenfolge. R0 ist die Demo-Runde und nur noch im
// Trainer-Modus sichtbar, fuer Studierende beginnt das Spiel mit R1.
export const lektionen: Lektion[] = [
  { ...lektionR0, nurTrainer: true },
  lektionR1,
  lektionR2,
  lektionR3,
  lektionR4,
  lektionR5,
  lektionR6,
];

// Alle Rundenplaetze in Spielreihenfolge, auch die noch nicht befuellten.
export const alleRundenIds: RundenId[] = ['R0', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7'];

export function findeLektion(id: RundenId): Lektion | undefined {
  return lektionen.find((l) => l.id === id);
}

// Lektionen, die Studierende sehen (Trainer sehen alle).
export function sichtbareLektionen(istTrainer: boolean): Lektion[] {
  return lektionen.filter((l) => istTrainer || !l.nurTrainer);
}

// Titel der noch nicht befuellten Runden laut Produktionsplan.
export const platzhalterTitel: Partial<Record<RundenId, string>> = {
  R7: 'Rückstellungen',
};

// Gruendungsbilanz der AlpenRad GmbH als Startbilanz.
export const startBilanz: Bilanz = {
  stichtagLabel: 'Gründungsbilanz zum 1. Jänner',
  aktiva: [
    {
      name: 'Umlaufvermögen',
      posten: [{ id: 'bank', name: 'Guthaben bei Kreditinstituten', betrag: 250000 }],
    },
  ],
  passiva: [
    {
      name: 'Eigenkapital',
      posten: [{ id: 'stammkapital', name: 'Stammkapital', betrag: 100000 }],
    },
    {
      name: 'Verbindlichkeiten',
      posten: [
        {
          id: 'bankdarlehen',
          name: 'Verbindlichkeiten gegenüber Kreditinstituten',
          betrag: 150000,
        },
      ],
    },
  ],
};
