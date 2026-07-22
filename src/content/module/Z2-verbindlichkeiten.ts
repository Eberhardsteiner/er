// Zusatzmodul Z2 "Verbindlichkeiten": Shell ohne Fachinhalte (Phase Z0).
// Der Content folgt in einer eigenen Contentphase als reines Datenmodul.

import type { Zusatzmodul } from '../typen';

export const modulZ2: Zusatzmodul = {
  id: 'Z2',
  titel: 'Verbindlichkeiten',
  untertitel: 'Schulden im Griff',
  intro: { story: 'Inhalt folgt', inhalte: [], lernziele: [] },
  kacheln: [],
  quiz: [],
  faelle: [],
  shell: true,
};
