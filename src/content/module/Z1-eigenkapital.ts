// Zusatzmodul Z1 "Eigenkapital": Shell ohne Fachinhalte (Phase Z0).
// Der Content folgt in einer eigenen Contentphase als reines Datenmodul.

import type { Zusatzmodul } from '../typen';

export const modulZ1: Zusatzmodul = {
  id: 'Z1',
  titel: 'Eigenkapital',
  untertitel: 'Wem gehört die AlpenRad GmbH?',
  intro: { story: 'Inhalt folgt', inhalte: [], lernziele: [] },
  kacheln: [],
  quiz: [],
  faelle: [],
  shell: true,
};
