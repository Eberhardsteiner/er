// Lektion R3 "Bilanzierung dem Grunde nach": Was kommt in die Bilanz und was nicht?
//
// Rechtsstand 21.07.2026, § 197 und § 198 UGB im Volltext geprueft, § 196,
// § 199, § 204 Abs 1a und § 224 gegen Skript Teil C abgeglichen.
//
// Alle fachlichen Texte und Bilanzwerte stammen woertlich beziehungsweise
// zahlengenau aus dem Mega-Prompt 4 (Runde 3) und duerfen nicht veraendert werden.
// Ab dieser Runde veraendern die Faelle erstmals die Musterbilanz (bilanzDelta).

import type { Lektion } from '../typen';

export const lektionR3: Lektion = {
  id: 'R3',
  titel: 'Bilanzierung dem Grunde nach',
  untertitel: 'Was kommt in die Bilanz und was nicht?',
  intro: {
    story:
      'Mai. Die AlpenRad GmbH investiert: Eine Montagelinie ist bestellt, eine CAD-Softwarelizenz gekauft, das Lager füllt sich mit Rahmen und Akkus. Jakob hat außerdem 20.000 Euro in die Entwicklung einer eigenen E-Antrieb-Steuerung gesteckt und träumt schon davon, ‚das als Vermögen zu zeigen‘. Mag. Huber bremst: ‚Langsam. Für jede Position klären wir zuerst, OB sie in die Bilanz darf. Ab heute buchen wir echt, Deine Ergebnisse siehst Du in unserer Bilanz.‘',
    inhalte: [
      'Die drei Stufen der Bilanzierung: Ansatz, Bewertung, Ausweis',
      'Abstrakte und konkrete Aktivierungsfähigkeit',
      'Bilanzierungspflichten, Wahlrechte und Verbote (§ 196, § 197, § 198, § 204 UGB)',
      'Anlage- und Umlaufvermögen, Passivseite und Haftungsverhältnisse',
    ],
    lernziele: [
      'Du prüfst in der richtigen Reihenfolge, ob eine Position anzusetzen ist',
      'Du wendest die Bilanzierungsverbote des § 197 UGB sicher an',
      'Du ordnest Vermögen dem Anlage- oder Umlaufvermögen und Schulden der richtigen Kategorie zu',
      'Du verfolgst erstmals, wie Geschäftsfälle die Bilanz der AlpenRad GmbH verändern',
    ],
  },
  kacheln: [
    {
      id: 'R3-K1',
      titel: 'Bilanzierung in drei Stufen',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Bilanzierung im weiteren Sinn beantwortet drei Fragen nacheinander. Erstens die Bilanzierung dem Grunde nach (Bilanzansatz): Was wird in der Bilanz erfasst? Hier geht es um Bilanzierungspflicht, Bilanzierungswahlrecht und Bilanzierungsverbot. Zweitens die Bewertung: Mit welchem Wert wird es erfasst? Dazu gehören Zugangsbewertung und Folgebewertung. Drittens der Ausweis: Wo wird es erfasst, also in welcher Bilanz- oder GuV-Position?',
        },
        {
          typ: 'absatz',
          text: 'Diese Runde behandelt die erste Frage. Die Bewertung folgt in Runde 4. Merke Dir die Reihenfolge: Erst wenn der Ansatz geklärt ist, lohnt sich die Frage nach dem Wert.',
        },
        {
          typ: 'beispiel',
          text: 'Die neue Montagelinie: Ansatz ja (Vermögensgegenstand der AlpenRad GmbH), Wert 120.000 Euro Anschaffungskosten, Ausweis unter den technischen Anlagen und Maschinen im Anlagevermögen.',
        },
      ],
      merksatz: 'Ob, wie viel, wo: immer in dieser Reihenfolge.',
    },
    {
      id: 'R3-K2',
      titel: 'Abstrakt und konkret aktivierungsfähig',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Abstrakt aktivierungsfähig ist, was überhaupt ein Vermögensgegenstand ist: Sachen (etwa Maschinen), Rechte (etwa Patente und Lizenzen) und rein wirtschaftliche Werte (etwa Geheimverfahren), sofern sie einen wirtschaftlichen Vorteil verkörpern und einzeln verwertbar sind. Konkret aktivierungsfähig ist davon, was auch angesetzt werden darf.',
        },
        {
          typ: 'absatz',
          text: 'Das Prüfschema: Liegt ein Vermögensgegenstand oder eine Schuld vor? Gehört die Position zum Vermögen der Gesellschaft? Greift ein Bilanzierungsverbot (§ 197 UGB) oder ein Wahlrecht? Wenn weder Verbot noch Wahlrecht greifen, muss angesetzt werden, das verlangt das Vollständigkeitsgebot (§ 196 Abs 1 UGB). Der Pflichtansatz ist der Mindestumfang der Bilanz, mit den ausgeübten Wahlrechten ergibt sich der Höchstumfang.',
        },
        {
          typ: 'paragraf',
          text: '§ 196 Abs 1 UGB: Der Jahresabschluss hat sämtliche Vermögensgegenstände, Rückstellungen, Verbindlichkeiten, Rechnungsabgrenzungsposten, Aufwendungen und Erträge zu enthalten, soweit gesetzlich nichts anderes bestimmt ist.',
        },
      ],
      merksatz: 'Erst Vermögensgegenstand, dann Verbot oder Wahlrecht, sonst Pflicht.',
    },
    {
      id: 'R3-K3',
      titel: 'Die Verbote des § 197 UGB',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Zwei Verbote musst Du sicher beherrschen. Erstens: Aufwendungen für die Gründung des Unternehmens und für die Beschaffung des Eigenkapitals dürfen nicht aktiviert werden (§ 197 Abs 1 UGB). Notar, Firmenbucheintragung und Beratungskosten der Gründung sind sofort Aufwand. Zweitens: Für immaterielle Gegenstände des Anlagevermögens, die nicht entgeltlich erworben wurden, darf kein Aktivposten angesetzt werden (§ 197 Abs 2 UGB).',
        },
        {
          typ: 'absatz',
          text: 'Das zweite Verbot trifft alles Selbstgeschaffene: eigene Entwicklungskosten, selbst aufgebaute Marken, Kundenlisten und der originäre Firmenwert bleiben draußen, egal wie wertvoll sie wirtschaftlich sind. Die Grenze ist der entgeltliche Erwerb: Ein gekauftes Patent oder eine gekaufte Softwarelizenz sind aktivierungspflichtig, denn der Markt hat ihren Wert durch den Kaufpreis objektiviert.',
        },
        {
          typ: 'beispiel',
          text: 'Jakobs 20.000 Euro Entwicklungsaufwand für die E-Antrieb-Steuerung sind sofort Aufwand (§ 197 Abs 2 UGB). Die um 15.000 Euro gekaufte CAD-Lizenz wird aktiviert.',
        },
      ],
      merksatz: 'Selbst geschaffen bleibt draußen, entgeltlich erworben kommt hinein.',
    },
    {
      id: 'R3-K4',
      titel: 'Die Wahlrechte',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Neben Pflicht und Verbot kennt das UGB wenige Ansatzwahlrechte. Geringwertige Vermögensgegenstände des Anlagevermögens dürfen im Jahr der Anschaffung voll abgeschrieben werden (§ 204 Abs 1a UGB), sie tauchen dann in der Bilanz nicht auf. Das dient der Wesentlichkeit: Die Information wäre den Aufwand der jahrelangen Abschreibung nicht wert.',
        },
        {
          typ: 'absatz',
          text: 'Auf der Passivseite dürfen Aufwandsrückstellungen für ihrer Eigenart nach genau umschriebene Aufwendungen gebildet werden, wenn sie dem Geschäftsjahr oder einem früheren zuzuordnen und am Abschlussstichtag wahrscheinlich oder sicher, aber in Höhe oder Zeitpunkt unbestimmt sind (§ 198 Abs 8 Z 2 UGB). Kleine Gesellschaften dürfen aktive latente Steuern nur ansetzen, wenn sie die unverrechneten Beträge im Anhang aufschlüsseln (§ 198 Abs 9 UGB). Beide Themen streifen wir hier nur, wichtig ist: Wahlrechte sind die Ausnahme, die Pflicht ist die Regel.',
        },
        {
          typ: 'beispiel',
          text: 'Die geplanten Werkzeugsätze um je 750 Euro kann AlpenRad im Anschaffungsjahr sofort voll abschreiben (§ 204 Abs 1a UGB).',
        },
      ],
      merksatz: 'Wahlrechte sind eng: geringwertig, Aufwandsrückstellung, latente Steuern.',
    },
    {
      id: 'R3-K5',
      titel: 'Anlagevermögen oder Umlaufvermögen?',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Als Anlagevermögen sind die Gegenstände auszuweisen, die bestimmt sind, dauernd dem Geschäftsbetrieb zu dienen (§ 198 Abs 2 UGB). Als Umlaufvermögen die Gegenstände, die das nicht sind (§ 198 Abs 4 UGB). Es entscheidet die Zweckwidmung, nicht die Art des Gegenstands: Ein E-Bike im Verkaufslager ist Umlaufvermögen, das gleiche E-Bike als dauerhaftes Vorführrad wäre Anlagevermögen. Was das Unternehmen innerhalb des Geschäftsjahres wieder verlässt, gehört jedenfalls zum Umlaufvermögen.',
        },
        {
          typ: 'absatz',
          text: 'Das Anlagevermögen gliedert sich in immaterielle Vermögensgegenstände (Rechte und Werte), Sachanlagen (physisch greifbar) und Finanzanlagen (langfristige Geldanlagen). Wichtig für später: Abnutzbares Anlagevermögen wird planmäßig abgeschrieben (§ 204 UGB), nicht abnutzbares (Grundstücke, Finanzanlagen) nur außerplanmäßig. Umlaufvermögen kennt keine planmäßige Abschreibung.',
        },
        {
          typ: 'beispiel',
          text: 'Bei AlpenRad: Montagelinie und CAD-Lizenz sind Anlagevermögen (dauernd dem Betrieb gewidmet), der Rahmen- und Akkuvorrat ist Umlaufvermögen (er wird verbaut und verkauft), das Bankguthaben ebenso.',
        },
      ],
      merksatz: 'Die Zweckwidmung entscheidet: dauernd dienen heißt Anlagevermögen.',
    },
    {
      id: 'R3-K6',
      titel: 'Die Passivseite und was daneben steht',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Auf der Passivseite stehen das Eigenkapital (bei AlpenRad: Stammkapital und Bilanzgewinn oder Bilanzverlust) und das Fremdkapital. Beim Fremdkapital gilt die Dreiteilung aus Runde 1: Verbindlichkeiten sind sichere Schulden und anzusetzen. Rückstellungen sind ungewisse, aber wahrscheinliche oder sichere Schulden, sie sind nach § 198 Abs 8 Z 1 UGB zu bilden. Andere Rückstellungen als die gesetzlich vorgesehenen dürfen nicht gebildet werden (§ 198 Abs 8 Z 3 UGB).',
        },
        {
          typ: 'absatz',
          text: 'Unsichere UND unwahrscheinliche Verpflichtungen (Eventualschulden) kommen nicht in die Bilanz. Typisch ist die Bürgschaft: Solange die Inanspruchnahme nicht erwartet wird, wird sie als Haftungsverhältnis unter der Bilanz ausgewiesen (§ 199 UGB). Die Gliederung der ganzen Bilanz regelt § 224 UGB: Aktiva von Anlagevermögen zu Umlaufvermögen, Passiva von Eigenkapital über Rückstellungen zu Verbindlichkeiten.',
        },
        {
          typ: 'beispiel',
          text: 'Übernimmt AlpenRad eine Bürgschaft für einen Kredit der Radwerkstatt Moser, erscheint sie nicht in der Bilanz, sondern als Haftungsverhältnis unter der Bilanz (§ 199 UGB).',
        },
      ],
      merksatz: 'Sicher passivieren, ungewiss zurückstellen, unwahrscheinlich unter die Bilanz.',
    },
  ],
  quiz: [
    {
      id: 'R3-Q1',
      frage: 'In welcher Reihenfolge klärst Du eine Bilanzposition?',
      antworten: [
        'Wert, Ausweis, Ansatz',
        'Ansatz, Bewertung, Ausweis',
        'Ausweis, Ansatz, Bewertung',
        'Bewertung, Ansatz, Ausweis',
        'Die Reihenfolge ist beliebig',
      ],
      richtig: 1,
      erklaerung: 'Erst ob (Ansatz), dann mit welchem Wert (Bewertung), dann wo (Ausweis).',
    },
    {
      id: 'R3-Q2',
      frage: 'Was prüfst Du beim Bilanzansatz zuerst?',
      antworten: [
        'Ob ein Bilanzierungsverbot greift',
        'Ob die Position wesentlich ist',
        'Ob die Anschaffungskosten bekannt sind',
        'Ob überhaupt ein Vermögensgegenstand oder eine Schuld vorliegt',
        'Ob der Steuerberater zustimmt',
      ],
      richtig: 3,
      erklaerung:
        'Ohne Vermögensgegenstand oder Schuld stellt sich die Ansatzfrage gar nicht. Danach folgen Zugehörigkeit, Verbote und Wahlrechte.',
    },
    {
      id: 'R3-Q3',
      frage: 'Die Gründungskosten der AlpenRad GmbH (Notar, Firmenbuch) sind...',
      antworten: [
        '...als Aufwand zu erfassen, Aktivierung ist verboten',
        '...als immaterielles Anlagevermögen zu aktivieren',
        '...wahlweise zu aktivieren',
        '...mit dem Stammkapital zu verrechnen',
        '...unter der Bilanz auszuweisen',
      ],
      richtig: 0,
      erklaerung:
        '§ 197 Abs 1 UGB verbietet die Aktivierung von Gründungs- und Eigenkapitalbeschaffungsaufwand.',
    },
    {
      id: 'R3-Q4',
      frage: 'Jakob will die selbst entwickelte E-Antrieb-Steuerung aktivieren. Was gilt?',
      antworten: [
        'Aktivierungspflicht wegen Vollständigkeit',
        'Aktivierungswahlrecht wie im deutschen HGB',
        'Aktivierungsverbot, da nicht entgeltlich erworbenes immaterielles Anlagevermögen',
        'Aktivierung nur bis 50 Prozent der Kosten',
        'Aktivierung nur mit Zustimmung des Abschlussprüfers',
      ],
      richtig: 2,
      erklaerung:
        '§ 197 Abs 2 UGB: Selbst geschaffene immaterielle Anlagegüter dürfen nicht angesetzt werden. Das österreichische Recht kennt hier, anders als das deutsche, kein Wahlrecht.',
    },
    {
      id: 'R3-Q5',
      frage: 'Die um 15.000 Euro gekaufte CAD-Softwarelizenz ist...',
      antworten: [
        '...aktivierungspflichtig als entgeltlich erworbenes immaterielles Anlagevermögen',
        '...nicht aktivierungsfähig, Software ist immer Aufwand',
        '...nur aktivierbar, wenn sie weiterverkauft wird',
        '...als Sachanlage zu aktivieren',
        '...unter der Bilanz auszuweisen',
      ],
      richtig: 0,
      erklaerung:
        'Entgeltlich erworbene immaterielle Anlagegüter fallen nicht unter das Verbot des § 197 Abs 2 UGB, es gilt die Ansatzpflicht aus § 196 Abs 1 UGB.',
    },
    {
      id: 'R3-Q6',
      frage:
        'Was erlaubt § 204 Abs 1a UGB für geringwertige Vermögensgegenstände des Anlagevermögens?',
      antworten: [
        'Den Verzicht auf jede Buchung',
        'Den Ansatz zum doppelten Wert',
        'Die Umgliederung ins Umlaufvermögen',
        'Die Aktivierung ohne Beleg',
        'Die volle Abschreibung im Jahr der Anschaffung',
      ],
      richtig: 4,
      erklaerung:
        'Geringwertige Anlagegüter dürfen im Anschaffungsjahr voll abgeschrieben werden, ein Ausfluss der Wesentlichkeit.',
    },
    {
      id: 'R3-Q7',
      frage: '200 Akkupacks liegen im Lager und werden in den nächsten Monaten verbaut. Zuordnung?',
      antworten: [
        'Anlagevermögen, weil sie dem Betrieb dienen',
        'Umlaufvermögen, weil sie nicht dauernd dem Geschäftsbetrieb dienen',
        'Immaterielles Vermögen',
        'Haftungsverhältnis',
        'Eigenkapital',
      ],
      richtig: 1,
      erklaerung:
        'Die Zweckwidmung entscheidet: Was verbaut und verkauft wird, dient nicht dauernd dem Betrieb (§ 198 Abs 2 und 4 UGB).',
    },
    {
      id: 'R3-Q8',
      frage:
        'AlpenRad bürgt für einen Kredit der Radwerkstatt Moser, eine Inanspruchnahme wird nicht erwartet. Wie wird die Bürgschaft behandelt?',
      antworten: [
        'Als Verbindlichkeit passivieren',
        'Als Rückstellung passivieren',
        'Als Haftungsverhältnis unter der Bilanz ausweisen',
        'Gar nicht erwähnen',
        'Als Aufwand buchen',
      ],
      richtig: 2,
      erklaerung:
        'Unwahrscheinliche Eventualschulden werden nicht passiviert, sondern als Haftungsverhältnis unter der Bilanz gezeigt (§ 199 UGB).',
    },
    {
      id: 'R3-Q9',
      frage: 'Darf AlpenRad eine Rückstellung ‚für allgemeine Zukunftsrisiken‘ bilden?',
      antworten: [
        'Ja, Vorsicht geht immer vor',
        'Ja, bis 10 Prozent der Bilanzsumme',
        'Ja, mit Zustimmung der Gesellschafter',
        'Nein, andere als die gesetzlich vorgesehenen Rückstellungen dürfen nicht gebildet werden',
        'Nein, GmbHs dürfen gar keine Rückstellungen bilden',
      ],
      richtig: 3,
      erklaerung:
        '§ 198 Abs 8 Z 3 UGB verbietet Rückstellungen außerhalb der gesetzlich vorgesehenen Fälle. Pauschale Zukunftsvorsorge wäre Willkür.',
    },
    {
      id: 'R3-Q10',
      frage: 'Welche Aussage zur Abschreibung stimmt?',
      antworten: [
        'Auch Vorräte werden planmäßig abgeschrieben',
        'Grundstücke werden planmäßig abgeschrieben',
        'Finanzanlagen werden planmäßig abgeschrieben',
        'Planmäßige Abschreibung ist ein Wahlrecht',
        'Nur abnutzbares Anlagevermögen wird planmäßig abgeschrieben',
      ],
      richtig: 4,
      erklaerung:
        'Planmäßig abgeschrieben wird nur abnutzbares Anlagevermögen (§ 204 UGB). Grundstücke und Finanzanlagen sind nicht abnutzbar, Umlaufvermögen kennt nur außerplanmäßige Abwertungen.',
    },
  ],
  faelle: [
    {
      id: 'F3-1',
      titel: 'Die Einkaufsliste',
      sachverhalt:
        'Mag. Huber legt Dir die Investitionsliste des Frühjahrs vor. Ordne jede Position der richtigen Kategorie zu. Erstens: die Montagelinie für die E-Bike-Fertigung, geliefert und bezahlt, 120.000 Euro. Zweitens: die gekaufte CAD-Softwarelizenz für die Rahmenkonstruktion, 15.000 Euro, dauerhaft im Einsatz. Drittens: das Lager an Rahmen, Akkus und Komponenten, 60.000 Euro, wird laufend verbaut. Viertens: Jakobs privat gekauftes Rennrad, das im Büro steht. Fünftens: das Guthaben auf dem Geschäftskonto.',
      teilaufgaben: [
        {
          id: 'F3-1a',
          typ: 'choice',
          frage: 'Montagelinie?',
          optionen: [
            'Sachanlagen (Anlagevermögen)',
            'Immaterielle Vermögensgegenstände (Anlagevermögen)',
            'Umlaufvermögen',
            'Nicht bilanzierbar, da kein Vermögen der GmbH',
            'Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 0,
          punkte: 4,
        },
        {
          id: 'F3-1b',
          typ: 'choice',
          frage: 'CAD-Softwarelizenz?',
          optionen: [
            'Sachanlagen (Anlagevermögen)',
            'Immaterielle Vermögensgegenstände (Anlagevermögen)',
            'Umlaufvermögen',
            'Nicht bilanzierbar, da kein Vermögen der GmbH',
            'Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 1,
          punkte: 4,
        },
        {
          id: 'F3-1c',
          typ: 'choice',
          frage: 'Rahmen-, Akku- und Komponentenlager?',
          optionen: [
            'Sachanlagen (Anlagevermögen)',
            'Immaterielle Vermögensgegenstände (Anlagevermögen)',
            'Umlaufvermögen',
            'Nicht bilanzierbar, da kein Vermögen der GmbH',
            'Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 2,
          punkte: 4,
        },
        {
          id: 'F3-1d',
          typ: 'choice',
          frage: 'Jakobs privates Rennrad?',
          optionen: [
            'Sachanlagen (Anlagevermögen)',
            'Immaterielle Vermögensgegenstände (Anlagevermögen)',
            'Umlaufvermögen',
            'Nicht bilanzierbar, da kein Vermögen der GmbH',
            'Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 3,
          punkte: 4,
        },
        {
          id: 'F3-1e',
          typ: 'choice',
          frage: 'Guthaben auf dem Geschäftskonto?',
          optionen: [
            'Sachanlagen (Anlagevermögen)',
            'Immaterielle Vermögensgegenstände (Anlagevermögen)',
            'Umlaufvermögen',
            'Nicht bilanzierbar, da kein Vermögen der GmbH',
            'Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 2,
          punkte: 4,
        },
      ],
      hilfe:
        'Zwei Prüffragen je Position: Gehört sie überhaupt der GmbH? Und ist sie dazu bestimmt, dauernd dem Geschäftsbetrieb zu dienen (§ 198 Abs 2 UGB) oder nicht (§ 198 Abs 4 UGB)? Bedenke: Auch Bankguthaben steht in der Bilanz.',
      loesung:
        'Montagelinie: physisch greifbar und dauernd dem Betrieb gewidmet, Sachanlagevermögen. CAD-Lizenz: entgeltlich erworbenes Recht im Dauereinsatz, immaterielles Anlagevermögen. Lager: wird verbaut und verkauft, dient nicht dauernd dem Betrieb, Umlaufvermögen (Vorräte). Jakobs Rennrad: Privateigentum des Gesellschafters, kein Vermögen der GmbH, eine Kapitalgesellschaft bilanziert nur ihr eigenes Vermögen. Bankguthaben: Umlaufvermögen (liquide Mittel), es dient der Abwicklung des Umsatzprozesses.',
    },
    {
      id: 'F3-2',
      titel: 'Die Passivseite im Blick',
      sachverhalt:
        'Nach den Investitionen sortierst Du mit Mag. Huber die Passivseite und alles, was daneben steht. Erstens: das Bankdarlehen über 150.000 Euro. Zweitens: die offenen Lieferantenrechnungen aus dem Vorratskauf, 60.000 Euro, Zahlungsziel 60 Tage. Drittens: erfahrungsgemäß verursachen Garantiefälle Kosten von rund 3 Prozent des Umsatzes, deren genaue Höhe und deren Zeitpunkt offen sind. Viertens: AlpenRad übernimmt eine Bürgschaft für einen Modernisierungskredit der Radwerkstatt Moser, mit einer Inanspruchnahme rechnet niemand.',
      teilaufgaben: [
        {
          id: 'F3-2a',
          typ: 'choice',
          frage: 'Bankdarlehen 150.000 Euro?',
          optionen: [
            'Verbindlichkeit',
            'Rückstellung',
            'Haftungsverhältnis unter der Bilanz',
            'Eigenkapital',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'F3-2b',
          typ: 'choice',
          frage: 'Lieferantenrechnungen 60.000 Euro?',
          optionen: [
            'Verbindlichkeit',
            'Rückstellung',
            'Haftungsverhältnis unter der Bilanz',
            'Eigenkapital',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'F3-2c',
          typ: 'choice',
          frage: 'Künftige Gewährleistungsarbeiten?',
          optionen: [
            'Verbindlichkeit',
            'Rückstellung',
            'Haftungsverhältnis unter der Bilanz',
            'Eigenkapital',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'F3-2d',
          typ: 'choice',
          frage: 'Bürgschaft für Moser?',
          optionen: [
            'Verbindlichkeit',
            'Rückstellung',
            'Haftungsverhältnis unter der Bilanz',
            'Eigenkapital',
          ],
          richtig: 2,
          punkte: 5,
        },
      ],
      hilfe:
        'Sortiere nach Sicherheit: Grund und Höhe sicher heißt Verbindlichkeit. Wahrscheinlich oder sicher, aber Höhe oder Zeitpunkt offen, heißt Rückstellung (§ 198 Abs 8 Z 1 UGB). Unwahrscheinlich heißt Haftungsverhältnis unter der Bilanz (§ 199 UGB).',
      loesung:
        'Bankdarlehen und Lieferantenrechnungen sind nach Grund und Höhe sicher, also Verbindlichkeiten (gegenüber Kreditinstituten beziehungsweise aus Lieferungen und Leistungen). Die Gewährleistungen sind dem Grunde nach wahrscheinlich, der Höhe nach unbestimmt, also Rückstellung nach § 198 Abs 8 Z 1 UGB, die konkrete Bildung folgt in Runde 7. Die Bürgschaft ist eine unwahrscheinliche Eventualschuld, sie wird nicht passiviert, sondern nach § 199 UGB als Haftungsverhältnis unter der Bilanz ausgewiesen.',
    },
    {
      id: 'F3-3',
      titel: 'Pflicht, Wahlrecht oder Verbot?',
      sachverhalt: 'Jakob kommt mit fünf Ideen zur ‚Bilanzverschönerung‘. Prüfe jede einzeln.',
      teilaufgaben: [
        {
          id: 'F3-3a',
          typ: 'choice',
          frage:
            'Die 20.000 Euro Entwicklungsaufwand für die selbst entwickelte E-Antrieb-Steuerung aktivieren.',
          optionen: ['Ansatzpflicht', 'Ansatzwahlrecht', 'Ansatzverbot'],
          richtig: 2,
          punkte: 4,
        },
        {
          id: 'F3-3b',
          typ: 'choice',
          frage: 'Die um 15.000 Euro gekaufte CAD-Softwarelizenz aktivieren.',
          optionen: ['Ansatzpflicht', 'Ansatzwahlrecht', 'Ansatzverbot'],
          richtig: 0,
          punkte: 4,
        },
        {
          id: 'F3-3c',
          typ: 'choice',
          frage: 'Die Gründungskosten der GmbH (Notar, Firmenbuch, 4.000 Euro) aktivieren.',
          optionen: ['Ansatzpflicht', 'Ansatzwahlrecht', 'Ansatzverbot'],
          richtig: 2,
          punkte: 4,
        },
        {
          id: 'F3-3d',
          typ: 'choice',
          frage:
            'Die geplanten Werkzeugsätze um je 750 Euro im Anschaffungsjahr sofort voll abschreiben.',
          optionen: ['Ansatzpflicht', 'Ansatzwahlrecht', 'Ansatzverbot'],
          richtig: 1,
          punkte: 4,
        },
        {
          id: 'F3-3e',
          typ: 'choice',
          frage: 'Die selbst aufgebaute Händler- und Kundenkartei als Vermögen ansetzen.',
          optionen: ['Ansatzpflicht', 'Ansatzwahlrecht', 'Ansatzverbot'],
          richtig: 2,
          punkte: 4,
        },
      ],
      hilfe:
        'Denk an die zwei Verbote des § 197 UGB (Gründungs- und Eigenkapitalbeschaffungsaufwand, nicht entgeltlich erworbene immaterielle Anlagegüter), an die Pflicht aus § 196 Abs 1 UGB und an das Wahlrecht des § 204 Abs 1a UGB für Geringwertiges.',
      loesung:
        'Entwicklungsaufwand: nicht entgeltlich erworbenes immaterielles Anlagevermögen, Ansatzverbot nach § 197 Abs 2 UGB, die 20.000 Euro sind Aufwand. CAD-Lizenz: entgeltlich erworben, Ansatzpflicht aus dem Vollständigkeitsgebot des § 196 Abs 1 UGB. Gründungskosten: Ansatzverbot nach § 197 Abs 1 UGB. Werkzeugsätze: geringwertige Vermögensgegenstände, Wahlrecht zur sofortigen vollen Abschreibung nach § 204 Abs 1a UGB. Kundenkartei: selbst geschaffen, also nicht entgeltlich erworben, Ansatzverbot nach § 197 Abs 2 UGB, gleich, wie wertvoll sie wirtschaftlich ist.',
    },
    {
      id: 'F3-4',
      titel: 'Die Bilanz wächst',
      sachverhalt:
        'Jetzt wird gebucht. Vier Geschäftsfälle des Frühjahrs gehen in die Bilanz der AlpenRad GmbH ein, Ausgangspunkt ist die Gründungsbilanz mit der Bilanzsumme 250.000 Euro. Erstens: Kauf der Montagelinie um 120.000 Euro gegen Banküberweisung. Zweitens: Kauf der CAD-Softwarelizenz um 15.000 Euro gegen Banküberweisung. Drittens: Vorratsaufbau um 60.000 Euro auf Ziel (Lieferantenverbindlichkeit, 60 Tage). Viertens: Zahlung der 20.000 Euro Entwicklungsaufwand gegen Banküberweisung, eine Aktivierung ist verboten.',
      teilaufgaben: [
        {
          id: 'F3-4a',
          typ: 'choice',
          frage: 'Welche Gliederungsreihenfolge der Aktivseite entspricht § 224 UGB?',
          optionen: [
            'Anlagevermögen vor Umlaufvermögen',
            'Umlaufvermögen vor Anlagevermögen',
            'Alphabetisch nach Postennamen',
            'Nach Betragshöhe absteigend',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'F3-4b',
          typ: 'zahl',
          frage: 'Wie hoch ist die Bilanzsumme (in Euro) nach den vier Geschäftsfällen?',
          punkte: 5,
          loesung: 290000,
          einheit: 'EUR',
        },
        {
          id: 'F3-4c',
          typ: 'choice',
          frage: 'Wo landet der Entwicklungsaufwand von 20.000 Euro?',
          optionen: [
            'Als immaterielles Anlagevermögen auf der Aktivseite',
            'Als Rückstellung',
            'Als Aufwand, er mindert über das Ergebnis das Eigenkapital',
            'Als Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 2,
          punkte: 5,
        },
        {
          id: 'F3-4d',
          typ: 'choice',
          frage: 'Verändert die Bürgschaft für Moser die Bilanzsumme?',
          optionen: [
            'Ja, sie erhöht die Passiva um die Bürgschaftssumme',
            'Ja, sie mindert das Eigenkapital',
            'Nur, wenn Moser zahlt',
            'Nein, sie steht als Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 3,
          punkte: 5,
        },
      ],
      hilfe:
        'Rechne die Bilanzsumme über die Aktivseite: Bank 250.000 minus 120.000 minus 15.000 minus 20.000, dazu Montagelinie 120.000, Lizenz 15.000 und Vorräte 60.000. Der Vorratskauf auf Ziel erhöht Aktiva UND Passiva. Der Entwicklungsaufwand verlässt die Bank, ohne dass ein Aktivposten entsteht.',
      loesung:
        'Bank: 250.000 minus 155.000 Auszahlungen ergibt 95.000 Euro. Aktiva neu: Immaterielle Vermögensgegenstände 15.000, Technische Anlagen und Maschinen 120.000, Vorräte 60.000, Bank 95.000, Summe 290.000 Euro. Passiva neu: Stammkapital 100.000, Bilanzverlust 20.000 (der Entwicklungsaufwand mindert über das Ergebnis das Eigenkapital), Bankdarlehen 150.000, Lieferverbindlichkeiten 60.000, Summe 290.000 Euro. Die Gliederung folgt § 224 UGB: Anlagevermögen vor Umlaufvermögen. Die Bürgschaft bleibt außerhalb der Bilanz (§ 199 UGB) und ändert die Bilanzsumme nicht.',
    },
  ],
  bilanzDelta: {
    erlaeuterung:
      'Vier Geschäftsfälle des Frühjahrs sind gebucht: Montagelinie 120.000 und CAD-Lizenz 15.000 gegen Bank, Vorratsaufbau 60.000 auf Ziel, Entwicklungsaufwand 20.000 gegen Bank. Der Entwicklungsaufwand darf nicht aktiviert werden (§ 197 Abs 2 UGB) und mindert als Bilanzverlust das Eigenkapital.',
    neuerStichtagLabel: 'Bilanz nach Runde 3 (Frühjahr)',
    neuePosten: [
      {
        seite: 'aktiva',
        gruppe: 'Anlagevermögen',
        gruppeEinfuegenVor: 'Umlaufvermögen',
        posten: { id: 'immaterielle', name: 'Immaterielle Vermögensgegenstände' },
      },
      {
        seite: 'aktiva',
        gruppe: 'Anlagevermögen',
        posten: { id: 'maschinen', name: 'Technische Anlagen und Maschinen' },
      },
      {
        seite: 'aktiva',
        gruppe: 'Umlaufvermögen',
        postenEinfuegenVor: 'bank',
        posten: { id: 'vorraete', name: 'Vorräte' },
      },
      {
        seite: 'passiva',
        gruppe: 'Eigenkapital',
        posten: { id: 'ergebnis', name: 'Bilanzgewinn/Bilanzverlust' },
      },
      {
        seite: 'passiva',
        gruppe: 'Verbindlichkeiten',
        posten: { id: 'lieferverb', name: 'Verbindlichkeiten aus Lieferungen und Leistungen' },
      },
    ],
    aenderungen: [
      { postenId: 'bank', delta: -155000 },
      { postenId: 'immaterielle', delta: 15000 },
      { postenId: 'maschinen', delta: 120000 },
      { postenId: 'vorraete', delta: 60000 },
      { postenId: 'ergebnis', delta: -20000 },
      { postenId: 'lieferverb', delta: 60000 },
    ],
  },
};
