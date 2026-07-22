// Zusatzmodul Z4 "GuV": Shell ohne Fachinhalte (Phase Z0).
// Der Content folgt in einer eigenen Contentphase als reines Datenmodul.

import type { Zusatzmodul } from '../typen';

export const modulZ4: Zusatzmodul = {
  id: 'Z4',
  titel: 'GuV',
  untertitel: 'Woher kommt das Ergebnis?',
  intro: { story: 'Inhalt folgt', inhalte: [], lernziele: [] },
  kacheln: [],
  quiz: [],
  faelle: [],
  shell: true,
};
