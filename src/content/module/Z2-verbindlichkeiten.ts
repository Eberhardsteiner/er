// Zusatzmodul Z2 "Verbindlichkeiten": Schulden im Griff.
//
// Rechtsstand 21.07.2026, § 211 und § 225 UGB im Volltext geprueft, § 196,
// § 199 und die Verbindlichkeitsarten gegen Skript Teil G abgeglichen.
//
// Alle fachlichen Texte und Bilanzwerte stammen woertlich beziehungsweise
// zahlengenau aus dem Mega-Prompt Z2 und duerfen nicht veraendert werden.
// Das Delta wirkt nur auf die Vertiefungsbilanz zum 1. Jaenner.

import type { Zusatzmodul } from '../typen';

export const modulZ2: Zusatzmodul = {
  id: 'Z2',
  titel: 'Verbindlichkeiten',
  untertitel: 'Schulden im Griff',
  intro: {
    story:
      'Ende Jänner, Termin bei der Steirischen Landesbank. Nach Waldners Einstieg will die Bank die Finanzierung neu ordnen: Die erste Tilgungsrate des Investitionsdarlehens ist fällig, und der Berater will für das nächste Gespräch eine saubere Aufstellung der Restlaufzeiten sehen. Gleichzeitig überweist die Stadt Graz eine Anzahlung für die bestellte Lastenrad-Flotte. Mag. Huber packt die Unterlagen aus: ‚Verbindlichkeiten sind die ehrlichste Seite der Bilanz. Sicher nach Grund und Höhe, streng bewertet, klar gegliedert. Zeig der Bank, dass Du sie im Griff hast.‘',
    inhalte: [
      'Begriff und Arten der Verbindlichkeiten (§ 224 Abs 3 C UGB)',
      'Abgrenzung zu Rückstellungen und Haftungsverhältnissen (§ 199 UGB)',
      'Bewertung zum Erfüllungsbetrag und Fremdwährung (§ 211 UGB)',
      'Erhaltene Anzahlungen und Restlaufzeiten-Ausweis (§ 225 UGB)',
    ],
    lernziele: [
      'Du ordnest Schulden den richtigen Verbindlichkeitsposten zu',
      'Du buchst Tilgung und erhaltene Anzahlung und erklärst ihre Bilanzwirkung',
      'Du bewertest Verbindlichkeiten zum Erfüllungsbetrag, auch in fremder Währung',
      'Du erstellst den Restlaufzeiten-Ausweis für das Bankgespräch',
    ],
  },
  kacheln: [
    {
      id: 'Z2-K1',
      titel: 'Verbindlichkeiten: die sicheren Schulden',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Verbindlichkeiten sind Schulden, die nach Grund und Höhe sicher sind, das Gegenstück zu den ungewissen Rückstellungen aus Runde 7. Das Vollständigkeitsgebot verlangt ihren lückenlosen Ansatz (§ 196 Abs 1 UGB), das Verrechnungsverbot untersagt die Saldierung mit Forderungen (§ 196 Abs 2 UGB), auch gegenüber demselben Geschäftspartner gilt Vorsicht (Runde 2).',
        },
        {
          typ: 'absatz',
          text: 'Die Bilanz gliedert nach der Art der Schuld (§ 224 Abs 3 C UGB): Anleihen, Verbindlichkeiten gegenüber Kreditinstituten, erhaltene Anzahlungen auf Bestellungen, Verbindlichkeiten aus Lieferungen und Leistungen, Wechselverbindlichkeiten, Verbindlichkeiten gegenüber verbundenen Unternehmen und sonstige Verbindlichkeiten, etwa Steuerschulden und noch abzuführende Sozialversicherungsbeiträge.',
        },
        {
          typ: 'beispiel',
          text: 'Wichtig bei Bankkrediten: Passiviert wird nur der tatsächlich ausgeschöpfte Betrag. Ein eingeräumter, aber ungenutzter Kreditrahmen ist keine Verbindlichkeit.',
        },
      ],
      merksatz: 'Sicher nach Grund und Höhe, gegliedert nach der Art, niemals saldiert.',
    },
    {
      id: 'Z2-K2',
      titel: 'Was daneben steht: Haftungen und Verpflichtungen',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Nicht jede mögliche Belastung ist eine Verbindlichkeit. Unwahrscheinliche Eventualschulden wie Bürgschaften, Garantien oder Wechselhaftungen werden als Haftungsverhältnisse unter der Bilanz vermerkt (§ 199 UGB), das kennst Du von Mosers Bürgschaft aus Runde 3. Wird die Inanspruchnahme wahrscheinlich, wandert die Position als Rückstellung in die Bilanz.',
        },
        {
          typ: 'absatz',
          text: 'Daneben gibt es sonstige finanzielle Verpflichtungen, die weder passiviert noch vermerkt, sondern im Anhang angegeben werden: etwa künftige Raten aus langfristigen Miet- und Wartungsverträgen oder Abnahmeverpflichtungen. Sie zeigen der Bilanzleserin, welche fixen Zahlungsströme auf das Unternehmen zukommen.',
        },
        {
          typ: 'beispiel',
          text: 'Drei Stufen der Sichtbarkeit: sichere Schuld in der Bilanz, unwahrscheinliche Haftung unter der Bilanz, künftige Vertragsbindung im Anhang.',
        },
      ],
      merksatz: 'Bilanz, unter der Bilanz, Anhang: je unsicherer, desto weiter draußen.',
    },
    {
      id: 'Z2-K3',
      titel: 'Bewertung: der Erfüllungsbetrag (§ 211 UGB)',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Verbindlichkeiten sind zu ihrem Erfüllungsbetrag anzusetzen, Rentenverpflichtungen zum Barwert der zukünftigen Auszahlungen (§ 211 Abs 1 UGB). Der Erfüllungsbetrag ist der Betrag, den das Unternehmen zur Tilgung aufbringen muss, bei Sachleistungspflichten der Wert der geschuldeten Leistung.',
        },
        {
          typ: 'absatz',
          text: 'Aus dem Imparitätsprinzip folgt das Höchstwertprinzip: Steigt der Erfüllungsbetrag über den Buchwert, ist der höhere Wert anzusetzen, der drohende Mehraufwand wird sofort erfasst. Sinkt er wieder, wird analog zur Wertaufholung abgewertet, aber nie unter den ursprünglichen Erfüllungsbetrag. Und Vorsicht bei zinslosen Schulden: Ein Abzinsen auf einen niedrigeren Barwert verbietet sich, das würde einen unrealisierten Vorteil vorwegnehmen.',
        },
        {
          typ: 'beispiel',
          text: 'Das Investitionsdarlehen steht mit dem geschuldeten Betrag in der Bilanz. Künftige Zinsen sind kein Teil der Verbindlichkeit, sie werden als Aufwand der Periode gebucht, in der sie anfallen.',
        },
      ],
      merksatz: 'Erfüllungsbetrag als Boden, Höchstwertprinzip nach oben.',
    },
    {
      id: 'Z2-K4',
      titel: 'Fremdwährung: wenn der Kurs mitschreibt',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Fremdwährungsverbindlichkeiten werden mit dem Kurs im Zeitpunkt ihres Entstehens eingebucht. Am Abschlussstichtag gilt das Höchstwertprinzip: Ist der Kurs gestiegen, steigt der Erfüllungsbetrag in Euro, die Verbindlichkeit ist zuzuschreiben und der Kursverlust sofort Aufwand, auch wenn die Zahlung erst später fällig ist.',
        },
        {
          typ: 'absatz',
          text: 'Fällt der Kurs später wieder, wird der Buchwert gesenkt, höchstens aber bis zum ursprünglichen Einbuchungsbetrag, ein Kursgewinn unter die Einstandsbasis bleibt unrealisiert (Realisationsprinzip, Runde 2). Sicherungsgeschäfte wie Devisentermingeschäfte können das Kursrisiko wirtschaftlich deckeln.',
        },
        {
          typ: 'beispiel',
          text: 'Ein Pfund-Darlehen über 10.000 GBP, aufgenommen bei 1,15 Euro je Pfund, steht mit 11.500 Euro in den Büchern. Klettert der Kurs zum Stichtag auf 1,22, sind 12.200 Euro anzusetzen.',
        },
      ],
      merksatz: 'Kurssteigerung sofort, Kursgewinn erst bei Realisierung.',
    },
    {
      id: 'Z2-K5',
      titel: 'Anzahlungen und Restlaufzeiten',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Erhaltene Anzahlungen auf Bestellungen sind Fremdkapital: Der Kunde hat vorgeleistet, das Unternehmen schuldet noch die Lieferung, bei Nichterfüllung die Rückzahlung. Sie sind unter den Verbindlichkeiten gesondert auszuweisen, alternativ dürfen Anzahlungen auf Vorräte offen von den Vorräten abgesetzt werden (§ 225 Abs 6 UGB). Erst mit der Lieferung wird aus der Anzahlung Umsatz.',
        },
        {
          typ: 'absatz',
          text: 'Für das Bild der Fristigkeit verlangt § 225 Abs 6 UGB bei jedem Verbindlichkeitsposten die gesonderte Angabe der Beträge mit einer Restlaufzeit bis zu einem Jahr und von mehr als einem Jahr, jeweils auch insgesamt. Spiegelbildlich ist bei den Forderungen der Betrag mit Restlaufzeit über einem Jahr anzumerken (§ 225 Abs 3 UGB). So sieht die Bank auf einen Blick, was kurzfristig fällig wird.',
        },
        {
          typ: 'beispiel',
          text: 'Die Anzahlung der Stadt Graz über 25.000 steht als ‚erhaltene Anzahlungen auf Bestellungen‘ in der Bilanz, bis die Flotte im Frühjahr geliefert ist.',
        },
      ],
      merksatz: 'Anzahlung ist Schuld bis zur Lieferung, Restlaufzeiten machen Fälligkeit sichtbar.',
    },
    {
      id: 'Z2-K6',
      titel: 'Jänner bei AlpenRad: Tilgen und Kassieren',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Zwei Vorgänge gehen in die Vertiefungsbilanz. Die erste Tilgungsrate: 40.000 fließen von der Bank an die Steirische Landesbank, das Bankdarlehen sinkt auf 560.000. Eine reine Bilanzverkürzung, beide Seiten schrumpfen, das Ergebnis bleibt unberührt, denn getilgt wird Schuld, nicht Aufwand. Die Zinsen des neuen Jahres wären dagegen Aufwand, sie spielen in unserem Vertiefungsmonat noch keine Rolle.',
        },
        {
          typ: 'absatz',
          text: 'Und die Stadt Graz zahlt 25.000 an: Bank steigt, die erhaltene Anzahlung entsteht als neue Verbindlichkeit, eine Bilanzverlängerung ohne Ertrag, denn geliefert ist noch nichts (Realisationsprinzip). Per Saldo sinkt die Vertiefungsbilanz allein durch Z2 von 719.305 auf 704.305. Spielst Du auch das Eigenkapital-Modul, kombinieren sich die Effekte: Dann stehen 764.305 in der Bilanz und 135.000 auf der Bank.',
        },
      ],
      merksatz: 'Tilgung verkürzt, Anzahlung verlängert, Ertrag bringt erst die Lieferung.',
    },
  ],
  quiz: [
    {
      id: 'Z2-Q1',
      frage: 'Was unterscheidet Verbindlichkeiten von Rückstellungen?',
      antworten: [
        'Verbindlichkeiten sind immer langfristig',
        'Rückstellungen sind Eigenkapital',
        'Verbindlichkeiten stehen nur im Anhang',
        'Verbindlichkeiten sind nach Grund und Höhe sicher, Rückstellungen ungewiss',
        'Es gibt keinen Unterschied',
      ],
      richtig: 3,
      erklaerung:
        'Die Sicherheit trennt die beiden: sichere Schulden sind Verbindlichkeiten, ungewisse werden zurückgestellt.',
    },
    {
      id: 'Z2-Q2',
      frage: 'Mit welchem Wert sind Verbindlichkeiten anzusetzen?',
      antworten: [
        'Mit dem Barwert nach freiem Ermessen',
        'Mit ihrem Erfüllungsbetrag (§ 211 Abs 1 UGB)',
        'Mit den Anschaffungskosten',
        'Mit dem Börsenkurs',
        'Mit dem halben Nennwert',
      ],
      richtig: 1,
      erklaerung:
        'Es zählt der Betrag, der zur Erfüllung aufzubringen ist. Nur Rentenverpflichtungen werden mit dem Barwert angesetzt.',
    },
    {
      id: 'Z2-Q3',
      frage: 'Wie ist eine Rentenverpflichtung anzusetzen?',
      antworten: [
        'Mit der ersten Jahresrate',
        'Mit der Summe aller Nominalraten',
        'Gar nicht',
        'Mit dem Durchschnitt der letzten drei Jahre',
        'Mit dem Barwert der zukünftigen Auszahlungen (§ 211 Abs 1 UGB)',
      ],
      richtig: 4,
      erklaerung: 'Bei Renten verlangt das Gesetz ausdrücklich den Barwert.',
    },
    {
      id: 'Z2-Q4',
      frage:
        'AlpenRad hat einen Kreditrahmen von 100.000, ausgeschöpft sind 60.000. Was steht in der Bilanz?',
      antworten: [
        '60.000, nur der ausgeschöpfte Betrag',
        '100.000, der volle Rahmen',
        '160.000, beides zusammen',
        '40.000, der freie Rahmen',
        'Nichts, Rahmen sind anhangfrei',
      ],
      richtig: 0,
      erklaerung:
        'Passiviert wird die tatsächliche Schuld. Der ungenutzte Rahmen ist keine Verbindlichkeit.',
    },
    {
      id: 'Z2-Q5',
      frage: 'Wie sind erhaltene Anzahlungen auszuweisen?',
      antworten: [
        'Als Umsatzerlös bei Zahlungseingang',
        'Als Eigenkapital',
        'Gesondert unter den Verbindlichkeiten, bei Vorratsbezug alternativ offen von den Vorräten abgesetzt (§ 225 Abs 6 UGB)',
        'Als Rückstellung',
        'Unter der Bilanz',
      ],
      richtig: 2,
      erklaerung:
        'Bis zur Lieferung ist die Anzahlung Fremdkapital. Ertrag entsteht erst mit der Leistung (Realisationsprinzip).',
    },
    {
      id: 'Z2-Q6',
      frage: 'Der Kurs einer Fremdwährungsverbindlichkeit steigt zum Stichtag. Was gilt?',
      antworten: [
        'Der Einbuchungskurs bleibt bis zur Zahlung',
        'Es besteht ein Wahlrecht',
        'Der Gewinn wird sofort gebucht',
        'Der höhere Erfüllungsbetrag ist anzusetzen, der Kursverlust ist sofort Aufwand (Höchstwertprinzip)',
        'Die Verbindlichkeit wird ausgebucht',
      ],
      richtig: 3,
      erklaerung:
        'Drohende Mehrbelastungen werden vorweggenommen, das ist die Imparität auf der Passivseite.',
    },
    {
      id: 'Z2-Q7',
      frage: 'Welche Posten gehören typischerweise zu den sonstigen Verbindlichkeiten?',
      antworten: [
        'Bankdarlehen und Anleihen',
        'Noch abzuführende Steuern und Sozialversicherungsbeiträge',
        'Erhaltene Anzahlungen',
        'Lieferantenschulden',
        'Das Stammkapital',
      ],
      richtig: 1,
      erklaerung:
        'Sonstige Verbindlichkeiten sind der Sammelposten, etwa für Steuer- und Abgabenschulden.',
    },
    {
      id: 'Z2-Q8',
      frage: 'Wo erscheint eine Bürgschaft, deren Inanspruchnahme unwahrscheinlich ist?',
      antworten: [
        'Als Verbindlichkeit',
        'Als Rückstellung',
        'Als Forderung',
        'Im Eigenkapital',
        'Als Haftungsverhältnis unter der Bilanz (§ 199 UGB)',
      ],
      richtig: 4,
      erklaerung:
        'Unwahrscheinliche Eventualschulden werden vermerkt, nicht passiviert. Wird die Inanspruchnahme wahrscheinlich, wird zurückgestellt.',
    },
    {
      id: 'Z2-Q9',
      frage: 'Wie wirkt die Tilgung eines Darlehens auf die Bilanz?',
      antworten: [
        'Als Bilanzverkürzung ohne Ergebniswirkung: Bank und Verbindlichkeit sinken',
        'Als Aufwand in voller Höhe',
        'Als Ertrag',
        'Als Bilanzverlängerung',
        'Nur als Anhangangabe',
      ],
      richtig: 0,
      erklaerung: 'Getilgt wird Schuld, nicht Aufwand. Nur die Zinsen sind Aufwand der Periode.',
    },
    {
      id: 'Z2-Q10',
      frage: 'Welche Restlaufzeitangaben verlangt § 225 Abs 6 UGB bei den Verbindlichkeiten?',
      antworten: [
        'Keine',
        'Nur den Gesamtbetrag',
        'Je Posten die Beträge mit Restlaufzeit bis zu einem Jahr und über einem Jahr, jeweils auch insgesamt',
        'Nur Beträge über fünf Jahre',
        'Nur bei Anleihen',
      ],
      richtig: 2,
      erklaerung:
        'Die Fristigkeit muss je Posten und insgesamt sichtbar sein, so erkennt die Bilanzleserin die kurzfristige Belastung.',
    },
  ],
  faelle: [
    {
      id: 'FZ2-1',
      titel: 'Ordnung im Schuldenstand',
      sachverhalt:
        'Für das Bankgespräch sortierst Du fünf Positionen. Ordne jede dem richtigen Ausweis zu.',
      teilaufgaben: [
        {
          id: 'FZ2-1a',
          typ: 'choice',
          frage: 'Das Investitionsdarlehen der Steirischen Landesbank',
          optionen: [
            'Verbindlichkeiten gegenüber Kreditinstituten',
            'Erhaltene Anzahlungen auf Bestellungen',
            'Verbindlichkeiten aus Lieferungen und Leistungen',
            'Sonstige Verbindlichkeiten',
            'Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 0,
          punkte: 4,
        },
        {
          id: 'FZ2-1b',
          typ: 'choice',
          frage: 'Die Vorauszahlung der Stadt Graz für die Lastenrad-Flotte',
          optionen: [
            'Verbindlichkeiten gegenüber Kreditinstituten',
            'Erhaltene Anzahlungen auf Bestellungen',
            'Verbindlichkeiten aus Lieferungen und Leistungen',
            'Sonstige Verbindlichkeiten',
            'Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 1,
          punkte: 4,
        },
        {
          id: 'FZ2-1c',
          typ: 'choice',
          frage: 'Noch abzuführende Lohnsteuer und Sozialversicherungsbeiträge für Dezember',
          optionen: [
            'Verbindlichkeiten gegenüber Kreditinstituten',
            'Erhaltene Anzahlungen auf Bestellungen',
            'Verbindlichkeiten aus Lieferungen und Leistungen',
            'Sonstige Verbindlichkeiten',
            'Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 3,
          punkte: 4,
        },
        {
          id: 'FZ2-1d',
          typ: 'choice',
          frage:
            'Die Bürgschaft für Mosers Modernisierungskredit (Inanspruchnahme weiter unwahrscheinlich)',
          optionen: [
            'Verbindlichkeiten gegenüber Kreditinstituten',
            'Erhaltene Anzahlungen auf Bestellungen',
            'Verbindlichkeiten aus Lieferungen und Leistungen',
            'Sonstige Verbindlichkeiten',
            'Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 4,
          punkte: 4,
        },
        {
          id: 'FZ2-1e',
          typ: 'choice',
          frage: 'Eine neue Reifenlieferung auf Ziel',
          optionen: [
            'Verbindlichkeiten gegenüber Kreditinstituten',
            'Erhaltene Anzahlungen auf Bestellungen',
            'Verbindlichkeiten aus Lieferungen und Leistungen',
            'Sonstige Verbindlichkeiten',
            'Haftungsverhältnis unter der Bilanz',
          ],
          richtig: 2,
          punkte: 4,
        },
      ],
      hilfe:
        'Frag nach der Art der Schuld: Wem wird geschuldet und woraus? Banken, Kunden mit Vorleistung, Lieferanten, Fiskus und Sozialversicherung, und ganz außen die bloße Haftung.',
      loesung:
        'Das Darlehen gehört zu den Verbindlichkeiten gegenüber Kreditinstituten. Die Vorauszahlung der Stadt Graz ist eine erhaltene Anzahlung auf Bestellungen, Fremdkapital bis zur Lieferung. Lohnsteuer und Sozialversicherungsbeiträge sind sonstige Verbindlichkeiten. Die Bürgschaft bleibt als unwahrscheinliche Eventualschuld Haftungsverhältnis unter der Bilanz (§ 199 UGB). Die Reifenlieferung auf Ziel ist eine Verbindlichkeit aus Lieferungen und Leistungen. Gliederungsgrundlage ist § 224 Abs 3 C UGB.',
    },
    {
      id: 'FZ2-2',
      titel: 'Tilgung und Anzahlung',
      sachverhalt:
        'Zwei Buchungen im Jänner, gerechnet auf Basis der Schlussbilanz (Bank 90.000, Bankdarlehen 600.000): Erstens zahlt AlpenRad die erste Tilgungsrate von 40.000 Euro an die Steirische Landesbank. Zweitens überweist die Stadt Graz eine Anzahlung von 25.000 Euro für die im Frühjahr zu liefernde Lastenrad-Flotte.',
      teilaufgaben: [
        {
          id: 'FZ2-2a',
          typ: 'zahl',
          frage: 'Wie hoch ist das Bankdarlehen nach der Tilgung (in Euro)?',
          punkte: 5,
          loesung: 560000,
          einheit: 'EUR',
        },
        {
          id: 'FZ2-2b',
          typ: 'choice',
          frage: 'Wie wirkt die Tilgung?',
          optionen: [
            'Als Aufwand von 40.000',
            'Als Ertrag von 40.000',
            'Als Aktivtausch',
            'Als Bilanzverkürzung: Bank und Darlehen sinken um 40.000, das Ergebnis bleibt unberührt',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'FZ2-2c',
          typ: 'zahl',
          frage: 'Wie hoch ist das Bankguthaben nach beiden Vorgängen (in Euro, Basis Schlussbilanz)?',
          punkte: 5,
          loesung: 75000,
          einheit: 'EUR',
        },
        {
          id: 'FZ2-2d',
          typ: 'choice',
          frage: 'Warum ist die Anzahlung der Stadt Graz Fremdkapital und kein Ertrag?',
          optionen: [
            'Weil AlpenRad die Lieferung noch schuldet, Ertrag entsteht erst mit der Lieferung (Realisationsprinzip)',
            'Weil Städte keine Erträge auslösen',
            'Weil der Betrag zu klein ist',
            'Weil Anzahlungen steuerfrei sind',
          ],
          richtig: 0,
          punkte: 5,
        },
      ],
      hilfe:
        '90.000 minus 40.000 plus 25.000. Tilgung ist Schuldrückzahlung, kein Aufwand. Und für die Anzahlung: Runde 2, wann ist ein Ertrag realisiert?',
      loesung:
        'Nach der Tilgung steht das Bankdarlehen bei 560.000 Euro. Die Tilgung ist eine Bilanzverkürzung: Bank minus 40.000, Verbindlichkeit minus 40.000, kein Aufwand, denn zurückgezahlt wird Schuld (nur Zinsen wären Aufwand). Bank danach: 90.000 minus 40.000 plus 25.000 gleich 75.000 Euro. Die Anzahlung ist eine Bilanzverlängerung und Fremdkapital, weil die Lieferung noch aussteht. Erst mit der Übergabe der Flotte im Frühjahr wird daraus Umsatz (Realisationsprinzip, § 201 Abs 2 Z 4 lit a UGB).',
    },
    {
      id: 'FZ2-3',
      titel: 'Das Pfund-Darlehen (Übungsszenario)',
      sachverhalt:
        'Ein Übungsszenario von Mag. Huber ohne Buchung in unseren Büchern: Ein Unternehmen nimmt ein Darlehen über 10.000 Pfund auf. Beim Entstehen kostet ein Pfund 1,15 Euro. Zum Abschlussstichtag notiert das Pfund bei 1,22 Euro, im Folgejahr fällt es auf 1,10 Euro.',
      teilaufgaben: [
        {
          id: 'FZ2-3a',
          typ: 'zahl',
          frage: 'Mit welchem Betrag (in Euro) wird das Darlehen eingebucht?',
          punkte: 5,
          loesung: 11500,
          einheit: 'EUR',
        },
        {
          id: 'FZ2-3b',
          typ: 'zahl',
          frage: 'Mit welchem Betrag (in Euro) steht es zum Abschlussstichtag in der Bilanz?',
          punkte: 5,
          loesung: 12200,
          einheit: 'EUR',
        },
        {
          id: 'FZ2-3c',
          typ: 'choice',
          frage: 'Warum ist zum Stichtag der höhere Betrag anzusetzen?',
          optionen: [
            'Weil Banken das verlangen',
            'Höchstwertprinzip: Der gestiegene Erfüllungsbetrag ist anzusetzen, der drohende Kursverlust sofort Aufwand',
            'Weil Fremdwährungen immer aufgerundet werden',
            'Ein Wahlrecht erlaubt beides',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'FZ2-3d',
          typ: 'choice',
          frage:
            'Das Pfund fällt im Folgejahr auf 1,10. Mit welchem Betrag steht das Darlehen dann höchstens beziehungsweise mindestens da?',
          optionen: [
            'Mit 11.000, dem neuen Kurswert',
            'Weiter mit 12.200, Abwertung verboten',
            'Mit 11.500, gesenkt bis höchstens zum ursprünglichen Erfüllungsbetrag',
            'Mit 0, das Darlehen gilt als getilgt',
          ],
          richtig: 2,
          punkte: 5,
        },
      ],
      hilfe:
        '10.000 mal Kurs. Nach oben zwingt die Imparität, nach unten deckelt der ursprüngliche Erfüllungsbetrag, ein Kursgewinn darunter wäre unrealisiert.',
      loesung:
        'Einbuchung: 10.000 mal 1,15 gleich 11.500 Euro. Zum Stichtag gilt das Höchstwertprinzip: 10.000 mal 1,22 gleich 12.200 Euro, der Kursverlust von 700 ist sofort Aufwand, obwohl die Zahlung erst später fällig ist (§ 211 Abs 1 UGB, Imparitätsprinzip). Fällt der Kurs im Folgejahr auf 1,10, wird der Buchwert gesenkt, aber nur bis zum ursprünglichen Erfüllungsbetrag von 11.500 Euro. Der rechnerische Kursgewinn darunter (500) bleibt unrealisiert, bis tatsächlich getilgt wird (Realisationsprinzip).',
    },
    {
      id: 'FZ2-4',
      titel: 'Restlaufzeiten fürs Bankgespräch',
      sachverhalt:
        'Der Bankberater will die Fristigkeit sehen. Das Bankdarlehen steht nach der Tilgung bei 560.000 Euro, der Tilgungsplan sieht 40.000 Euro pro Jahr vor. Erstelle die Restlaufzeitangaben nach § 225 Abs 6 UGB.',
      teilaufgaben: [
        {
          id: 'FZ2-4a',
          typ: 'zahl',
          frage: 'Wie hoch ist der Betrag mit einer Restlaufzeit bis zu einem Jahr (in Euro)?',
          punkte: 5,
          loesung: 40000,
          einheit: 'EUR',
        },
        {
          id: 'FZ2-4b',
          typ: 'zahl',
          frage: 'Wie hoch ist der Betrag mit einer Restlaufzeit von mehr als einem Jahr (in Euro)?',
          punkte: 5,
          loesung: 520000,
          einheit: 'EUR',
        },
        {
          id: 'FZ2-4c',
          typ: 'choice',
          frage: 'In welcher Form verlangt § 225 Abs 6 UGB diese Angaben?',
          optionen: [
            'Bei jedem Verbindlichkeitsposten gesondert und für die Posten insgesamt',
            'Nur als Fußnote im Lagebericht',
            'Nur mündlich gegenüber der Bank',
            'Gar nicht, das ist freiwillig',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'FZ2-4d',
          typ: 'choice',
          frage: 'Warum interessiert die Bank diese Aufteilung?',
          optionen: [
            'Aus steuerlichen Gründen',
            'Für die Berechnung der Umsatzsteuer',
            'Wegen der Größenklassen',
            'Sie zeigt, welche Zahlungen kurzfristig fällig werden und ob die Liquidität dafür reicht',
          ],
          richtig: 3,
          punkte: 5,
        },
      ],
      hilfe:
        'Bis zu einem Jahr ist genau eine Jahresrate fällig. Der Rest läuft länger. Und § 225 Abs 6 verlangt beide Beträge je Posten plus die Gesamtsumme.',
      loesung:
        'Binnen Jahresfrist ist die nächste Rate von 40.000 Euro fällig, die übrigen 520.000 Euro laufen länger als ein Jahr. § 225 Abs 6 UGB verlangt beide Beträge bei jedem gesondert ausgewiesenen Verbindlichkeitsposten und zusätzlich in Summe. Für die Bank ist das der Fristigkeitsröntgenblick: Den 40.000 kurzfristig fälligen Euro stehen 75.000 Euro Bankguthaben gegenüber, das geht sich aus, und genau das will der Berater sehen.',
    },
  ],
  bilanzDelta: {
    erlaeuterung:
      'Ordnung im Schuldenstand: Die erste Tilgungsrate von 40.000 senkt das Bankdarlehen auf 560.000 (Bilanzverkürzung ohne Ergebniswirkung), und die Anzahlung der Stadt Graz über 25.000 entsteht als neue Verbindlichkeit (Bilanzverlängerung ohne Ertrag, geliefert wird im Frühjahr). Per Saldo sinkt die Vertiefungsbilanz allein durch dieses Modul auf 704.305. Der Bankberater nickt: ‚Tilgungsplan eingehalten, Fristigkeiten sauber. Weiter so.‘',
    neuerStichtagLabel: 'Vertiefungsbilanz zum Jänner (nach Tilgung und Anzahlung)',
    neuePosten: [
      {
        seite: 'passiva',
        gruppe: 'Verbindlichkeiten',
        postenEinfuegenVor: 'lieferverb',
        posten: { id: 'erhalteneAnzahlungen', name: 'Erhaltene Anzahlungen auf Bestellungen' },
      },
    ],
    aenderungen: [
      { postenId: 'bank', delta: -15000 },
      { postenId: 'bankdarlehen', delta: -40000 },
      { postenId: 'erhalteneAnzahlungen', delta: 25000 },
    ],
  },
};
