// Zentrale Typen fuer alle Lektionsinhalte.
// Contentphasen liefern nur Datenmodule, die diese Typen erfuellen.

export type RundenId = 'R0' | 'R1' | 'R2' | 'R3' | 'R4' | 'R5' | 'R6' | 'R7';

export interface Lektion {
  id: RundenId;
  titel: string;
  untertitel: string;
  intro: { story: string; inhalte: string[]; lernziele: string[] };
  kacheln: Kachel[]; // genau 6
  quiz: QuizFrage[]; // genau 10
  faelle: Fall[]; // 2 bis 5, Punktsumme aller Teilaufgaben = 80
  bilanzDelta?: BilanzDelta; // ab R3, R0 zu Testzwecken erlaubt
}

export interface Kachel {
  id: string;
  titel: string;
  bloecke: KachelBlock[];
  merksatz?: string;
}

export type KachelBlock =
  | { typ: 'absatz'; text: string }
  | { typ: 'liste'; punkte: string[] }
  | { typ: 'beispiel'; text: string }
  | { typ: 'paragraf'; text: string }; // Gesetzeszitat oder Normhinweis

export interface QuizFrage {
  id: string;
  frage: string;
  antworten: [string, string, string, string, string];
  richtig: 0 | 1 | 2 | 3 | 4;
  erklaerung: string;
}

export interface Fall {
  id: string;
  titel: string;
  sachverhalt: string;
  teilaufgaben: Teilaufgabe[];
  hilfe: string; // Text hinter dem Hilfe-Button
  loesung: string; // Musterloesung hinter dem Loesung-Button und in der Auswertung
}

export type Teilaufgabe =
  | {
      id: string;
      typ: 'zahl';
      frage: string;
      punkte: number;
      loesung: number;
      toleranz?: number;
      einheit?: string;
    }
  | {
      id: string;
      typ: 'choice';
      frage: string;
      optionen: string[];
      richtig: number;
      punkte: number;
    };

export interface BilanzPosten {
  id: string;
  name: string;
  betrag: number;
  // Technische Erweiterung: wird von der Bilanz-Engine gesetzt, wenn ein Posten
  // frueher einen Betrag hatte und spaeter auf 0 faellt. Solche Posten werden
  // in der Anzeige mit 0 gezeigt statt ausgeblendet.
  warBefuellt?: boolean;
}

export interface BilanzGruppe {
  name: string;
  posten: BilanzPosten[];
}

export interface Bilanz {
  stichtagLabel: string;
  aktiva: BilanzGruppe[];
  passiva: BilanzGruppe[];
}

// Technische Erweiterung gegenueber der Vorgabe: neuePosten erlaubt einer Runde,
// bislang nicht vorhandene Bilanzposten anzulegen (mit Seite und Gruppe).
// gruppeEinfuegenVor steuert optional die Einfuegeposition einer neuen Gruppe,
// damit etwa das Anlagevermoegen vor dem Umlaufvermoegen erscheint.
export interface NeuerPosten {
  seite: 'aktiva' | 'passiva';
  gruppe: string;
  gruppeEinfuegenVor?: string;
  posten: { id: string; name: string };
}

export interface BilanzDelta {
  erlaeuterung: string; // wird in der Auswertung angezeigt
  neuerStichtagLabel: string;
  neuePosten?: NeuerPosten[];
  aenderungen: { postenId: string; delta: number }[];
}
