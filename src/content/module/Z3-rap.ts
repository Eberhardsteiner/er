// Zusatzmodul Z3 "Rechnungsabgrenzungsposten": Shell ohne Fachinhalte (Phase Z0).
// Der Content folgt in einer eigenen Contentphase als reines Datenmodul.

import type { Zusatzmodul } from '../typen';

export const modulZ3: Zusatzmodul = {
  id: 'Z3',
  titel: 'Rechnungsabgrenzungsposten',
  untertitel: 'Die Zeit in der Bilanz',
  intro: { story: 'Inhalt folgt', inhalte: [], lernziele: [] },
  kacheln: [],
  quiz: [],
  faelle: [],
  shell: true,
};
