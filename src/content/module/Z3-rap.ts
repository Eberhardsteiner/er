// Zusatzmodul Z3 "Rechnungsabgrenzungsposten": Die Zeit in der Bilanz.
//
// Rechtsstand 21.07.2026, § 198 Abs 5 bis 7 und § 201 Abs 2 Z 5 UGB im
// Volltext geprueft (Vorphasen), Vier-Felder-Systematik gegen Skript Teil I
// abgeglichen. Der Disagio-Widerspruch in Teil I (Wahlrecht nach ‚198 VI‘)
// ist zugunsten der geltenden Aktivierungspflicht nach § 198 Abs 7 UGB
// aufgeloest.
//
// Alle fachlichen Texte und Bilanzwerte stammen woertlich beziehungsweise
// zahlengenau aus dem Mega-Prompt Z3 und duerfen nicht veraendert werden.
// Das Delta wirkt nur auf die Vertiefungsbilanz zum 1. Jaenner.

import type { Zusatzmodul } from '../typen';

export const modulZ3: Zusatzmodul = {
  id: 'Z3',
  titel: 'Rechnungsabgrenzungsposten',
  untertitel: 'Die Zeit in der Bilanz',
  intro: {
    story:
      'Ende Jänner. Zwei Zahlungen passen nicht ins Bild: AlpenRad hat die Miete für das neue Ersatzteillager gleich für Feber bis April überwiesen, und die Kaffeerösterei Lend hat ihre Feber-Miete für die Werbefläche an unserer Halle schon jetzt bezahlt. Jakob will beides ins Jänner-Ergebnis packen. Mag. Huber schüttelt den Kopf: ‚Zahlung und Erfolg sind zwei Paar Schuhe, das weißt Du seit den GoB. Für die Lücke dazwischen hat die Bilanz eine eigene Zeitmaschine: die Rechnungsabgrenzung.‘',
    inhalte: [
      'Zweck der Rechnungsabgrenzung: periodengerechter Erfolg (§ 201 Abs 2 Z 5 UGB)',
      'Aktive und passive Rechnungsabgrenzungsposten (§ 198 Abs 5 und 6 UGB)',
      'Antizipative Abgrenzung über sonstige Forderungen und Verbindlichkeiten',
      'Sonderfall Disagio (§ 198 Abs 7 UGB)',
    ],
    lernziele: [
      'Du trennst Zahlungszeitpunkt und Erfolgsperiode sauber',
      'Du bildest aktive und passive Rechnungsabgrenzungsposten und rechnest sie zeitanteilig',
      'Du grenzt transitorische von antizipativen Posten ab',
      'Du behandelst das Disagio nach geltender Rechtslage',
    ],
  },
  kacheln: [
    {
      id: 'Z3-K1',
      titel: 'Warum die Bilanz eine Zeitmaschine braucht',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Aufwendungen und Erträge des Geschäftsjahres sind unabhängig vom Zeitpunkt der Zahlung zu berücksichtigen (§ 201 Abs 2 Z 5 UGB), das ist die Periodenabgrenzung aus Runde 2. Fließt Geld in einer anderen Periode als der Erfolg entsteht, braucht die Bilanz einen Merkposten, der die Differenz überbrückt: den Rechnungsabgrenzungsposten.',
        },
        {
          typ: 'absatz',
          text: 'Die Gliederung kennt ihn auf beiden Seiten: als letzten Aktivposten (§ 224 Abs 2 C UGB) und als letzten Passivposten (§ 224 Abs 3 D UGB). Ein aktiver Posten sagt: Wir haben schon gezahlt, der Aufwand kommt erst. Ein passiver sagt: Wir haben schon kassiert, die Leistung kommt erst.',
        },
        {
          typ: 'beispiel',
          text: 'Vier Konstellationen gibt es insgesamt: Zahlung vor Erfolg (transitorisch, echte Rechnungsabgrenzungsposten) und Erfolg vor Zahlung (antizipativ, sonstige Forderungen oder Verbindlichkeiten). Dieses Vier-Felder-Schema trägt das ganze Modul.',
        },
      ],
      merksatz: 'Zahlung und Erfolg auseinander heißt abgrenzen.',
    },
    {
      id: 'Z3-K2',
      titel: 'Aktive Rechnungsabgrenzung (§ 198 Abs 5 UGB)',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Als aktive Rechnungsabgrenzungsposten sind Ausgaben vor dem Abschlussstichtag auszuweisen, soweit sie Aufwand für eine bestimmte Zeit nach diesem Tag sind (§ 198 Abs 5 UGB). Klassiker: vorausgezahlte Mieten, Versicherungsprämien, Zinsen, Kraftfahrzeugsteuern.',
        },
        {
          typ: 'absatz',
          text: 'Die ‚bestimmte Zeit‘ ist das strenge Eintrittsticket: Der Zeitraum muss kalendermäßig festgelegt oder zumindest rechenbar sein. Gerechnet wird zeitanteilig, meist nach Monaten. Im neuen Jahr wird der Posten aufgelöst und wandert als Aufwand in die richtige Periode. Bei unwesentlichen Kleinbeträgen darf aus Wesentlichkeitsgründen auf die Abgrenzung verzichtet werden.',
        },
        {
          typ: 'beispiel',
          text: 'Eine am 1. September gezahlte Jahresprämie von 1.350 gehört mit 4/12 (450) ins alte Jahr, die restlichen 8/12 (900) stehen zum 31.12. als aktiver Rechnungsabgrenzungsposten.',
        },
      ],
      merksatz: 'Schon gezahlt, noch kein Aufwand: aktiv abgrenzen.',
    },
    {
      id: 'Z3-K3',
      titel: 'Passive Rechnungsabgrenzung (§ 198 Abs 6 UGB)',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Spiegelbildlich sind als passive Rechnungsabgrenzungsposten Einnahmen vor dem Abschlussstichtag auszuweisen, soweit sie Ertrag für eine bestimmte Zeit nach diesem Tag sind (§ 198 Abs 6 UGB). Wer Miete, Zinsen oder Gebühren im Voraus kassiert, schuldet die Leistung noch und darf den Ertrag nicht vorziehen, das verlangt schon das Realisationsprinzip.',
        },
        {
          typ: 'absatz',
          text: 'Der passive Posten ist also verwandt mit der erhaltenen Anzahlung aus dem Verbindlichkeiten-Modul, aber mit einem Unterschied: Die Anzahlung betrifft einen Leistungsaustausch (Lieferung), die passive Abgrenzung einen zeitraumbezogenen Dauerertrag. Anzahlungen sind deshalb keine Rechnungsabgrenzungsposten.',
        },
        {
          typ: 'beispiel',
          text: 'Die Feber-Miete der Werbefläche, im Jänner vereinnahmt: 1.500 als passiver Rechnungsabgrenzungsposten, im Feber wird daraus Ertrag.',
        },
      ],
      merksatz: 'Schon kassiert, noch kein Ertrag: passiv abgrenzen.',
    },
    {
      id: 'Z3-K4',
      titel: 'Antizipativ: wenn der Erfolg vorausläuft',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Die Rechnungsabgrenzungsposten des § 198 UGB erfassen nur die transitorischen Fälle, also Zahlung vor Erfolg. Läuft es umgekehrt, entsteht der Erfolg im alten Jahr und das Geld fließt erst im neuen, dann wird antizipativ abgegrenzt: über sonstige Forderungen (Ertrag schon verdient, Zahlung ausständig) oder sonstige Verbindlichkeiten (Aufwand schon entstanden, Zahlung ausständig).',
        },
        {
          typ: 'absatz',
          text: 'Das Skript folgt dabei einer imparitätischen Linie: Auf der Aktivseite wird das Kriterium der bestimmten Zeit streng ausgelegt, auf der Passivseite milder, ganz im Geist der Vorsicht. Merke Dir die Zuordnung: transitorisch in die Rechnungsabgrenzungsposten, antizipativ in die sonstigen Forderungen und Verbindlichkeiten.',
        },
        {
          typ: 'beispiel',
          text: 'Dezember-Zinsen, die die Bank erst am 2. Jänner abbucht, sind Aufwand des alten Jahres: sonstige Verbindlichkeit. Eine Dezember-Zinsgutschrift, die erst im Jänner einlangt, ist Ertrag des alten Jahres: sonstige Forderung.',
        },
      ],
      merksatz: 'Transitorisch in die RAP, antizipativ in die Sonstigen.',
    },
    {
      id: 'Z3-K5',
      titel: 'Der Sonderfall Disagio (§ 198 Abs 7 UGB)',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Wird ein Kredit unter dem Rückzahlungsbetrag ausbezahlt, heißt der Unterschied Disagio: ein vorweggenommener, versteckter Zins. Ist der Rückzahlungsbetrag einer Verbindlichkeit höher als der Ausgabebetrag, IST der Unterschiedsbetrag in den Rechnungsabgrenzungsposten auf der Aktivseite aufzunehmen, gesondert auszuweisen und durch planmäßige jährliche Abschreibung zu tilgen (§ 198 Abs 7 UGB).',
        },
        {
          typ: 'absatz',
          text: 'Das ist geltendes Recht eine Pflicht, kein Wahlrecht: Das Disagio wird aktiviert und über die Kreditlaufzeit verteilt, linear oder nach der Effektivzinsmethode. So trifft der Zinsaufwand jede Periode der Kreditnutzung, nicht nur das Aufnahmejahr.',
        },
        {
          typ: 'beispiel',
          text: 'Ein Kredit über 800.000 mit 98 Prozent Auszahlung: 784.000 fließen zu, 16.000 Disagio wandern in den aktiven Rechnungsabgrenzungsposten und werden bei 5 Jahren Laufzeit mit 3.200 pro Jahr abgeschrieben.',
        },
      ],
      merksatz: 'Disagio aktivieren und planmäßig verteilen, das ist Pflicht.',
    },
    {
      id: 'Z3-K6',
      titel: 'Ende Jänner bei AlpenRad: die Zeit wird gebucht',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Zwei Buchungen gehen in die Vertiefungsbilanz. Die Lagermiete für Feber bis April (4.500) ist gezahlt, aber noch kein Aufwand: Bank sinkt, der aktive Rechnungsabgrenzungsposten entsteht, ein Aktivtausch. Die Feber-Miete der Kaffeerösterei Lend (1.500) ist kassiert, aber noch kein Ertrag: Bank steigt, der passive Rechnungsabgrenzungsposten entsteht, eine Bilanzverlängerung.',
        },
        {
          typ: 'absatz',
          text: 'Beide Vorgänge sind ergebnisneutral, denn Aufwand und Ertrag gehören in die Monate Feber bis April. Die Vertiefungsbilanz zeigt erstmals beide Abgrenzungsgruppen und steht allein durch dieses Modul bei 720.805 (Bank 87.000). Spielst Du alle drei bisherigen Module, sind es 765.805 mit Bank 132.000. Und im Feber? Da löst die Buchhaltung auf: aus dem aktiven Posten wird Monat für Monat Mietaufwand, aus dem passiven wird Mietertrag. Die Zeitmaschine liefert pünktlich.',
        },
      ],
      merksatz: 'Abgrenzen ist ergebnisneutral, die Auflösung bringt den Erfolg zur richtigen Zeit.',
    },
  ],
  quiz: [
    {
      id: 'Z3-Q1',
      frage: 'Wozu dienen Rechnungsabgrenzungsposten?',
      antworten: [
        'Zur Erhöhung der Bilanzsumme',
        'Zur Steuervermeidung',
        'Zur periodengerechten Zuordnung von Aufwand und Ertrag, wenn Zahlung und Erfolg auseinanderfallen',
        'Zum Ausweis stiller Reserven',
        'Zur Verbuchung von Anzahlungen',
      ],
      richtig: 2,
      erklaerung:
        'Sie überbrücken die Lücke zwischen Zahlungszeitpunkt und Erfolgsperiode (§ 201 Abs 2 Z 5 UGB).',
    },
    {
      id: 'Z3-Q2',
      frage: 'Was ist ein aktiver Rechnungsabgrenzungsposten?',
      antworten: [
        'Eine Ausgabe vor dem Stichtag, die Aufwand für eine bestimmte Zeit danach ist (§ 198 Abs 5 UGB)',
        'Eine Einnahme vor dem Stichtag',
        'Eine offene Kundenforderung',
        'Ein Vermögensgegenstand des Anlagevermögens',
        'Ein Sonderposten des Eigenkapitals',
      ],
      richtig: 0,
      erklaerung:
        'Schon gezahlt, noch kein Aufwand: Der aktive Posten parkt die Vorleistung bis zur richtigen Periode.',
    },
    {
      id: 'Z3-Q3',
      frage: 'Und ein passiver Rechnungsabgrenzungsposten?',
      antworten: [
        'Eine Schuld gegenüber der Bank',
        'Eine Rückstellung',
        'Ein Korrekturposten zum Anlagevermögen',
        'Eine Einnahme vor dem Stichtag, die Ertrag für eine bestimmte Zeit danach ist (§ 198 Abs 6 UGB)',
        'Ein Teil des Bilanzgewinns',
      ],
      richtig: 3,
      erklaerung: 'Schon kassiert, noch kein Ertrag: Der Ertrag folgt erst im richtigen Zeitraum.',
    },
    {
      id: 'Z3-Q4',
      frage: 'Der Aufwand entsteht im alten Jahr, gezahlt wird erst im neuen. Wie wird abgegrenzt?',
      antworten: [
        'Als aktiver Rechnungsabgrenzungsposten',
        'Antizipativ als sonstige Verbindlichkeit',
        'Gar nicht',
        'Als passiver Rechnungsabgrenzungsposten',
        'Als Anzahlung',
      ],
      richtig: 1,
      erklaerung:
        'Erfolg vor Zahlung ist der antizipative Fall: Er läuft über sonstige Forderungen und Verbindlichkeiten, nicht über die Rechnungsabgrenzungsposten.',
    },
    {
      id: 'Z3-Q5',
      frage: 'Was verlangt das Kriterium der ‚bestimmten Zeit‘?',
      antworten: [
        'Einen Zeitraum von mindestens fünf Jahren',
        'Eine notarielle Beglaubigung',
        'Die Zustimmung des Abschlussprüfers',
        'Nur einen ungefähren Zeitrahmen',
        'Einen kalendermäßig festgelegten oder rechenbaren Zeitraum',
      ],
      richtig: 4,
      erklaerung:
        'Ohne bestimmbaren Zeitraum keine Rechnungsabgrenzung, das hält den Posten objektiv.',
    },
    {
      id: 'Z3-Q6',
      frage:
        'AlpenRad zahlt im Dezember die Versicherungsprämie für das Folgejahr. Was entsteht zum 31.12.?',
      antworten: [
        'Ein Aufwand des alten Jahres',
        'Eine Rückstellung',
        'Ein aktiver Rechnungsabgrenzungsposten in voller Höhe',
        'Ein passiver Rechnungsabgrenzungsposten',
        'Eine Forderung aus Lieferungen und Leistungen',
      ],
      richtig: 2,
      erklaerung:
        'Ausgabe vor dem Stichtag, Aufwand komplett danach: aktiver Posten nach § 198 Abs 5 UGB.',
    },
    {
      id: 'Z3-Q7',
      frage:
        'Ein Mieter überweist im Dezember die Jänner-Miete. Was zeigt die Bilanz des Vermieters zum 31.12.?',
      antworten: [
        'Einen passiven Rechnungsabgrenzungsposten',
        'Einen Umsatzerlös des alten Jahres',
        'Eine sonstige Forderung',
        'Einen aktiven Rechnungsabgrenzungsposten',
        'Nichts',
      ],
      richtig: 0,
      erklaerung:
        'Einnahme vor dem Stichtag, Ertrag danach: passiver Posten nach § 198 Abs 6 UGB, der Ertrag gehört in den Jänner.',
    },
    {
      id: 'Z3-Q8',
      frage: 'Warum ist eine erhaltene Anzahlung KEIN Rechnungsabgrenzungsposten?',
      antworten: [
        'Weil sie zu klein ist',
        'Weil sie das Eigenkapital betrifft',
        'Weil Anzahlungen bar bezahlt werden',
        'Weil sie einen Leistungsaustausch betrifft und keinen zeitraumbezogenen Dauerertrag',
        'Doch, sie ist einer',
      ],
      richtig: 3,
      erklaerung:
        'Die Anzahlung wartet auf eine Lieferung, die Rechnungsabgrenzung auf den Ablauf einer bestimmten Zeit.',
    },
    {
      id: 'Z3-Q9',
      frage: 'Wie ist das Disagio nach geltendem UGB zu behandeln?',
      antworten: [
        'Sofort als Aufwand, Aktivierung verboten',
        'Pflicht zur Aktivierung im aktiven Rechnungsabgrenzungsposten mit planmäßiger jährlicher Abschreibung (§ 198 Abs 7 UGB)',
        'Wahlrecht zwischen Aufwand und Aktivierung',
        'Passivierung als Rückstellung',
        'Verrechnung mit dem Eigenkapital',
      ],
      richtig: 1,
      erklaerung:
        'Der Unterschiedsbetrag IST zu aktivieren und über die Laufzeit zu tilgen. Das frühere Wahlrecht gilt nicht mehr.',
    },
    {
      id: 'Z3-Q10',
      frage: 'Was passiert mit den Rechnungsabgrenzungsposten im neuen Jahr?',
      antworten: [
        'Sie bleiben unverändert stehen',
        'Sie werden mit dem Eigenkapital verrechnet',
        'Sie verjähren nach drei Jahren',
        'Sie werden in Rückstellungen umgewandelt',
        'Sie werden aufgelöst und zu Aufwand beziehungsweise Ertrag der richtigen Periode',
      ],
      richtig: 4,
      erklaerung:
        'Die Abgrenzung ist ein Parkplatz auf Zeit: Mit Beginn der Erfolgsperiode wird aufgelöst.',
    },
  ],
  faelle: [
    {
      id: 'FZ3-1',
      titel: 'Die Zeitmaschine sortiert',
      sachverhalt:
        'Fünf Sachverhalte rund um den Jahreswechsel. Ordne jeden dem richtigen Abgrenzungsinstrument zu.',
      teilaufgaben: [
        {
          id: 'FZ3-1a',
          typ: 'choice',
          frage: 'Die im Jänner vorausgezahlte Lagermiete für Feber bis April',
          optionen: [
            'Aktiver Rechnungsabgrenzungsposten',
            'Passiver Rechnungsabgrenzungsposten',
            'Sonstige Forderung (antizipativ)',
            'Sonstige Verbindlichkeit (antizipativ)',
          ],
          richtig: 0,
          punkte: 4,
        },
        {
          id: 'FZ3-1b',
          typ: 'choice',
          frage: 'Die im Jänner vereinnahmte Feber-Miete der Werbefläche',
          optionen: [
            'Aktiver Rechnungsabgrenzungsposten',
            'Passiver Rechnungsabgrenzungsposten',
            'Sonstige Forderung (antizipativ)',
            'Sonstige Verbindlichkeit (antizipativ)',
          ],
          richtig: 1,
          punkte: 4,
        },
        {
          id: 'FZ3-1c',
          typ: 'choice',
          frage: 'Dezember-Kreditzinsen, die die Bank erst am 2. Jänner abbucht',
          optionen: [
            'Aktiver Rechnungsabgrenzungsposten',
            'Passiver Rechnungsabgrenzungsposten',
            'Sonstige Forderung (antizipativ)',
            'Sonstige Verbindlichkeit (antizipativ)',
          ],
          richtig: 3,
          punkte: 4,
        },
        {
          id: 'FZ3-1d',
          typ: 'choice',
          frage: 'Eine Dezember-Zinsgutschrift der Bank, die erst im Jänner am Konto einlangt',
          optionen: [
            'Aktiver Rechnungsabgrenzungsposten',
            'Passiver Rechnungsabgrenzungsposten',
            'Sonstige Forderung (antizipativ)',
            'Sonstige Verbindlichkeit (antizipativ)',
          ],
          richtig: 2,
          punkte: 4,
        },
        {
          id: 'FZ3-1e',
          typ: 'choice',
          frage:
            'Der auf die Monate nach dem Stichtag entfallende Teil einer im September gezahlten Jahresversicherungsprämie',
          optionen: [
            'Aktiver Rechnungsabgrenzungsposten',
            'Passiver Rechnungsabgrenzungsposten',
            'Sonstige Forderung (antizipativ)',
            'Sonstige Verbindlichkeit (antizipativ)',
          ],
          richtig: 0,
          punkte: 4,
        },
      ],
      hilfe:
        'Zwei Fragen je Sachverhalt: Kam die Zahlung VOR dem Erfolg (transitorisch, Rechnungsabgrenzungsposten) oder der Erfolg vor der Zahlung (antizipativ, Sonstige)? Und auf welcher Seite steht unser Unternehmen: zahlt es oder kassiert es?',
      loesung:
        'Vorausgezahlte Lagermiete und der Nach-Stichtags-Anteil der Versicherungsprämie sind Ausgaben vor dem Erfolg: aktive Rechnungsabgrenzungsposten (§ 198 Abs 5 UGB). Die vereinnahmte Feber-Miete ist eine Einnahme vor dem Ertrag: passiver Posten (§ 198 Abs 6 UGB). Die Dezember-Zinsen sind Aufwand des alten Jahres mit späterer Zahlung: sonstige Verbindlichkeit. Die Dezember-Gutschrift ist Ertrag des alten Jahres mit späterem Zufluss: sonstige Forderung. Transitorisch in die Rechnungsabgrenzungsposten, antizipativ in die Sonstigen.',
    },
    {
      id: 'FZ3-2',
      titel: 'Abgrenzen und rechnen',
      sachverhalt:
        'Drei Rechnungen aus der Praxis. Erstens: Eine am 1. September gezahlte Kfz-Jahresprämie von 1.350 Euro (Deckungszeitraum September bis August). Zweitens: die Ende Jänner vorausgezahlte Lagermiete von 4.500 Euro für Feber bis April. Drittens: die im Jänner vereinnahmte Feber-Werbeflächenmiete von 1.500 Euro.',
      teilaufgaben: [
        {
          id: 'FZ3-2a',
          typ: 'zahl',
          frage:
            'Wie hoch ist der aktive Rechnungsabgrenzungsposten aus der Kfz-Prämie zum 31.12. (in Euro)?',
          punkte: 5,
          loesung: 900,
          einheit: 'EUR',
        },
        {
          id: 'FZ3-2b',
          typ: 'zahl',
          frage:
            'Wie hoch ist der aktive Rechnungsabgrenzungsposten aus der Lagermiete Ende Jänner (in Euro)?',
          punkte: 5,
          loesung: 4500,
          einheit: 'EUR',
        },
        {
          id: 'FZ3-2c',
          typ: 'zahl',
          frage: 'Wie hoch ist der passive Rechnungsabgrenzungsposten aus der Werbeflächenmiete (in Euro)?',
          punkte: 5,
          loesung: 1500,
          einheit: 'EUR',
        },
        {
          id: 'FZ3-2d',
          typ: 'choice',
          frage: 'Welcher Grundsatz steht hinter all diesen Abgrenzungen?',
          optionen: [
            'Das Höchstwertprinzip',
            'Das Saldierungsverbot',
            'Die Periodenabgrenzung: Aufwendungen und Erträge unabhängig vom Zahlungszeitpunkt (§ 201 Abs 2 Z 5 UGB)',
            'Die Maßgeblichkeit der Steuerbilanz',
          ],
          richtig: 2,
          punkte: 5,
        },
      ],
      hilfe:
        'Kfz-Prämie: 4 von 12 Monaten gehören ins alte Jahr, der Rest wird abgegrenzt. Lagermiete und Werbemiete betreffen zur Gänze künftige Monate.',
      loesung:
        'Kfz-Prämie: 1.350 mal 8/12 gleich 900 Euro bleiben zum 31.12. als aktiver Posten, 450 sind Aufwand des alten Jahres. Die Lagermiete betrifft komplett Feber bis April: 4.500 Euro aktiver Posten. Die Werbeflächenmiete betrifft komplett den Feber: 1.500 Euro passiver Posten. Grundlage ist die Periodenabgrenzung des § 201 Abs 2 Z 5 UGB, konkretisiert durch § 198 Abs 5 und 6 UGB.',
    },
    {
      id: 'FZ3-3',
      titel: 'Transitorisch oder antizipativ?',
      sachverhalt: 'Mag. Huber prüft, ob Du die Systematik wirklich verstanden hast.',
      teilaufgaben: [
        {
          id: 'FZ3-3a',
          typ: 'choice',
          frage: 'Was kennzeichnet die transitorische Abgrenzung?',
          optionen: [
            'Erfolg vor Zahlung',
            'Zahlung vor Erfolg, ausgewiesen in den Rechnungsabgrenzungsposten',
            'Zahlung und Erfolg im selben Monat',
            'Nur Bargeschäfte',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'FZ3-3b',
          typ: 'choice',
          frage: 'Und die antizipative Abgrenzung?',
          optionen: [
            'Sie ist im UGB verboten',
            'Zahlung vor Erfolg',
            'Sie betrifft nur Anzahlungen',
            'Erfolg vor Zahlung, ausgewiesen unter sonstigen Forderungen beziehungsweise sonstigen Verbindlichkeiten',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'FZ3-3c',
          typ: 'choice',
          frage: 'Welche Rolle spielt die ‚bestimmte Zeit‘?',
          optionen: [
            'Sie ist Ansatzvoraussetzung der Rechnungsabgrenzungsposten: kalendermäßig festgelegt oder rechenbar',
            'Sie gilt nur für Rückstellungen',
            'Sie bestimmt die Nutzungsdauer von Maschinen',
            'Sie ist ein steuerliches Wahlrecht',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'FZ3-3d',
          typ: 'choice',
          frage:
            'Warum ist eine geleistete Anzahlung an einen Lieferanten kein aktiver Rechnungsabgrenzungsposten?',
          optionen: [
            'Weil sie zu hoch ist',
            'Weil sie passiviert wird',
            'Weil ihr ein Leistungsaustausch gegenübersteht und kein bestimmter Zeitraum',
            'Weil Anzahlungen nie bilanziert werden',
          ],
          richtig: 2,
          punkte: 5,
        },
      ],
      hilfe:
        'Transitorisch heißt hinüberwandernd: Das Geld ist schon geflossen. Antizipativ heißt vorwegnehmend: Der Erfolg ist schon da. Und Anzahlungen warten auf eine Lieferung, nicht auf einen Zeitablauf.',
      loesung:
        'Transitorisch: Zahlung vor Erfolg, dafür sind die Rechnungsabgrenzungsposten des § 198 Abs 5 und 6 UGB reserviert. Antizipativ: Erfolg vor Zahlung, ausgewiesen unter den sonstigen Forderungen und Verbindlichkeiten. Die bestimmte Zeit ist die Ansatzvoraussetzung der Abgrenzungsposten und hält sie objektiv. Anzahlungen (geleistete wie erhaltene) betreffen einen Leistungsaustausch und gehören deshalb zu den Vorräten beziehungsweise Verbindlichkeiten, nicht in die Rechnungsabgrenzung.',
    },
    {
      id: 'FZ3-4',
      titel: 'Das Disagio (Übungsszenario)',
      sachverhalt:
        'Ein Übungsszenario von Mag. Huber ohne Buchung in unseren Büchern: Ein Unternehmen nimmt einen Kredit über 800.000 Euro auf, Laufzeit 5 Jahre, Auszahlung 98 Prozent.',
      teilaufgaben: [
        {
          id: 'FZ3-4a',
          typ: 'zahl',
          frage: 'Welcher Betrag (in Euro) fließt dem Unternehmen zu?',
          punkte: 5,
          loesung: 784000,
          einheit: 'EUR',
        },
        {
          id: 'FZ3-4b',
          typ: 'zahl',
          frage: 'Wie hoch ist das Disagio (in Euro)?',
          punkte: 5,
          loesung: 16000,
          einheit: 'EUR',
        },
        {
          id: 'FZ3-4c',
          typ: 'choice',
          frage: 'Wie ist das Disagio nach geltendem UGB zu behandeln?',
          optionen: [
            'Sofort zur Gänze als Zinsaufwand',
            'Wahlweise Aufwand oder Aktivposten',
            'Als Minderung der Verbindlichkeit',
            'Pflicht: Aktivierung im aktiven Rechnungsabgrenzungsposten, gesonderter Ausweis, planmäßige jährliche Abschreibung (§ 198 Abs 7 UGB)',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'FZ3-4d',
          typ: 'zahl',
          frage: 'Wie hoch ist die jährliche Abschreibung des Disagios bei linearer Verteilung (in Euro)?',
          punkte: 5,
          loesung: 3200,
          einheit: 'EUR',
        },
      ],
      hilfe:
        '98 Prozent von 800.000 werden ausgezahlt, der Rest ist versteckter Zins. Der wandert auf die Aktivseite und wird über die 5 Jahre verteilt.',
      loesung:
        'Ausgezahlt werden 784.000 Euro, die Verbindlichkeit steht aber mit dem Rückzahlungsbetrag von 800.000 in der Bilanz (Erfüllungsbetrag, Z2). Der Unterschied von 16.000 Euro ist das Disagio, ein vorweggenommener Zins. Nach § 198 Abs 7 UGB ist er zwingend in den aktiven Rechnungsabgrenzungsposten aufzunehmen, gesondert auszuweisen und planmäßig zu tilgen: bei 5 Jahren linear 3.200 Euro pro Jahr Zinsaufwand. Ein Wahlrecht, wie es das deutsche Recht kennt, gibt es im UGB nicht.',
    },
  ],
  bilanzDelta: {
    erlaeuterung:
      'Die Zeit wird gebucht: Die vorausgezahlte Lagermiete für Feber bis April (4.500) wandert als aktiver Rechnungsabgrenzungsposten auf die Aktivseite (Aktivtausch), die vereinnahmte Feber-Miete der Kaffeerösterei Lend (1.500) steht als passiver Rechnungsabgrenzungsposten in der Bilanz (Bilanzverlängerung). Beides ist ergebnisneutral, der Erfolg gehört in die Folgemonate (§ 198 Abs 5 und 6, § 201 Abs 2 Z 5 UGB). Mag. Huber: ‚Jetzt stimmt nicht nur die Bilanz, jetzt stimmt auch die Zeit.‘',
    neuerStichtagLabel: 'Vertiefungsbilanz Ende Jänner (nach Rechnungsabgrenzung)',
    neuePosten: [
      {
        seite: 'aktiva',
        gruppe: 'Rechnungsabgrenzungsposten',
        posten: { id: 'aktiveRap', name: 'Aktive Rechnungsabgrenzungsposten' },
      },
      {
        seite: 'passiva',
        gruppe: 'Rechnungsabgrenzungsposten',
        posten: { id: 'passiveRap', name: 'Passive Rechnungsabgrenzungsposten' },
      },
    ],
    aenderungen: [
      { postenId: 'bank', delta: -3000 },
      { postenId: 'aktiveRap', delta: 4500 },
      { postenId: 'passiveRap', delta: 1500 },
    ],
  },
};
