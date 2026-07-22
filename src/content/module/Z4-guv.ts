// Zusatzmodul Z4 "GuV": Woher kommt das Ergebnis?
//
// Rechtsstand 21.07.2026, § 231 UGB im Volltext geprueft, GKV/UKV-Systematik
// gegen Skript Teil J abgeglichen. Der veraltete Zwischenposten ‚Ergebnis der
// gewoehnlichen Geschaeftstaetigkeit‘ aus Teil J wurde durch ‚Ergebnis vor
// Steuern‘ (§ 231 Abs 2 Z 17 UGB) ersetzt. Steuern vom Einkommen sind im
// Planspiel vereinfachend ausgeklammert und als solche gekennzeichnet.
//
// Alle fachlichen Texte und Zahlen stammen woertlich beziehungsweise
// zahlengenau aus dem Mega-Prompt Z4 und duerfen nicht veraendert werden.
// Dieses Modul bucht NICHTS in die Bilanz (kein bilanzDelta), es leitet die
// Jahres-GuV ab und verprobt sie gegen den Bilanzgewinn 2.705.

import type { Zusatzmodul } from '../typen';

export const modulZ4: Zusatzmodul = {
  id: 'Z4',
  titel: 'GuV',
  untertitel: 'Woher kommt das Ergebnis?',
  intro: {
    story:
      'Feber. Petra Waldner blättert durch den Abschluss und tippt auf den Bilanzgewinn: ‚2.705. Hübsch. Aber WOHER kommt die Zahl?‘ Lena zuckt mit den Schultern und schaut zu Dir. Mag. Huber holt ein leeres Blatt: ‚Dafür gibt es die zweite Hälfte des Jahresabschlusses, die Gewinn- und Verlustrechnung. Sie erzählt dieselbe Geschichte wie die Bilanz, nur als Film statt als Foto. Und wenn wir sie sauber aufstellen, muss am Ende exakt dieselbe Zahl stehen.‘',
    inhalte: [
      'Wesen der GuV: Zeitraumrechnung und Erfolgsquellen',
      'Die Staffel nach § 231 UGB mit ihren Zwischenergebnissen',
      'Gesamtkosten- und Umsatzkostenverfahren im Vergleich',
      'Die AlpenRad-GuV des Spieljahres und ihre Abstimmung auf die Bilanz',
    ],
    lernziele: [
      'Du liest und baust eine GuV in Staffelform',
      'Du erklärst den Unterschied zwischen Gesamtkosten- und Umsatzkostenverfahren',
      'Du ordnest die Geschäftsfälle des Spieljahres den GuV-Positionen zu',
      'Du verprobst das GuV-Ergebnis gegen den Bilanzgewinn',
    ],
  },
  kacheln: [
    {
      id: 'Z4-K1',
      titel: 'Die GuV: der Film zum Foto',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Die Bilanz zeigt Bestände zu einem Stichtag, die GuV zeigt Ströme eines Zeitraums: alle Aufwendungen und Erträge des Geschäftsjahres, geordnet nach ihren Quellen. Beide ermitteln denselben Erfolg, die Bilanz über den Eigenkapitalvergleich, die GuV über die Gegenüberstellung von Ertrag und Aufwand. Das kennst Du als doppelte Erfolgsermittlung seit Runde 1.',
        },
        {
          typ: 'absatz',
          text: 'Kapitalgesellschaften müssen die GuV in Staffelform aufstellen, wahlweise nach dem Gesamtkosten- oder dem Umsatzkostenverfahren (§ 231 Abs 1 UGB). Die Staffel rechnet von den Umsatzerlösen schrittweise nach unten und macht mit ihren Zwischenergebnissen sichtbar, WO das Ergebnis entsteht.',
        },
        {
          typ: 'beispiel',
          text: 'Ein hoher Gewinn aus dem Verkauf von Rädern erzählt eine andere Geschichte als derselbe Gewinn aus Zinserträgen. Die Staffel trennt genau das.',
        },
      ],
      merksatz: 'Bilanz ist das Foto, GuV der Film, das Ergebnis ist dasselbe.',
    },
    {
      id: 'Z4-K2',
      titel: 'Die Staffel nach § 231 UGB',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Das Gesamtkostenverfahren reiht (verkürzt): Umsatzerlöse, Bestandsveränderungen, aktivierte Eigenleistungen und sonstige Erträge, dann Materialaufwand, Personalaufwand, Abschreibungen (getrennt nach Anlagevermögen und außergewöhnlichen Abwertungen des Umlaufvermögens) und sonstige betriebliche Aufwendungen. Die Zwischensumme daraus ist wirtschaftlich das Betriebsergebnis (§ 231 Abs 2 Z 1 bis 9 UGB).',
        },
        {
          typ: 'absatz',
          text: 'Darunter folgen die Finanzposten (Beteiligungs-, Wertpapier- und Zinserträge, Finanzabschreibungen, Zinsaufwendungen) mit ihrer Zwischensumme, dem Finanzergebnis. Beides zusammen ergibt das Ergebnis vor Steuern (Z 17), nach den Steuern folgt der Jahresüberschuss oder Jahresfehlbetrag (Z 21), und über Rücklagenbewegungen und Gewinnvortrag endet die Staffel beim Bilanzgewinn (Z 26), exakt der Zahl aus der Bilanz. Den früheren Zwischenposten ‚Ergebnis der gewöhnlichen Geschäftstätigkeit‘ gibt es seit dem RÄG 2014 nicht mehr.',
        },
        {
          typ: 'beispiel',
          text: 'Kleine Gesellschaften dürfen die meisten Zwischensummen weglassen (§ 231 Abs 4 UGB), AlpenRad zeigt sie freiwillig, der Bank zuliebe.',
        },
      ],
      merksatz: 'Von den Umsatzerlösen über Betriebs- und Finanzergebnis bis zum Bilanzgewinn.',
    },
    {
      id: 'Z4-K3',
      titel: 'Gesamtkostenverfahren: die Produktionsbrille',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Das Gesamtkostenverfahren zeigt sämtliche Aufwendungen der Periode nach Kostenarten (Material, Personal, Abschreibungen, Sonstiges). Damit Produktion und Absatz zusammenpassen, korrigieren zwei Ertragsposten: Bestandserhöhungen an fertigen und unfertigen Erzeugnissen zählen als Ertrag (produziert, noch nicht verkauft), Bestandsminderungen als Kürzung, und selbst erstellte Anlagen erscheinen als aktivierte Eigenleistungen.',
        },
        {
          typ: 'absatz',
          text: 'Die Logik kennst Du aus Runde 4: Dort haben die aktivierten Herstellungskosten den Aufwand neutralisiert. Das Gesamtkostenverfahren macht genau diese Neutralisierung in der GuV sichtbar, als eigene Zeile statt versteckt.',
        },
        {
          typ: 'beispiel',
          text: 'Produziert AlpenRad zwölf Räder (96.000) und verkauft alle zwölf, ist die Bestandsveränderung null: Der volle Herstellungsaufwand trifft auf den vollen Umsatz.',
        },
      ],
      merksatz: 'Alle Kosten der Periode, Bestandsveränderung als Ausgleich.',
    },
    {
      id: 'Z4-K4',
      titel: 'Umsatzkostenverfahren: die Absatzbrille',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Das Umsatzkostenverfahren stellt den Umsatzerlösen nur die Herstellungskosten der tatsächlich abgesetzten Leistungen gegenüber (Bruttoergebnis vom Umsatz), danach folgen Vertriebskosten und allgemeine Verwaltungskosten als eigene Funktionsbereiche (§ 231 Abs 3 UGB). Bestandsveränderungen gibt es hier nicht, was nicht verkauft wurde, bleibt einfach im Lager stehen.',
        },
        {
          typ: 'absatz',
          text: 'Beide Verfahren liefern zwingend denselben Erfolg, sie sortieren nur anders: das Gesamtkostenverfahren nach Kostenarten (produktionsorientiert), das Umsatzkostenverfahren nach Funktionen (absatzorientiert). Wer das Umsatzkostenverfahren wählt, muss Material- und Personalaufwand im Anhang nachliefern.',
        },
        {
          typ: 'beispiel',
          text: 'Übungszahlen aus dem Skript: Umsatz 100, Bestandserhöhung 20, Gesamtaufwand 110, davon 90 auf die abgesetzten Produkte. Gesamtkostenverfahren: 100 plus 20 minus 110 gleich 10. Umsatzkostenverfahren: 100 minus 90 gleich 10. Gleicher Gewinn, andere Brille.',
        },
      ],
      merksatz: 'GKV sortiert nach Kostenarten, UKV nach Funktionen, der Gewinn ist identisch.',
    },
    {
      id: 'Z4-K5',
      titel: 'Die AlpenRad-GuV: ein Jahr in einer Staffel',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Jede Zeile unserer Jahres-GuV stammt aus einer Runde: Die Umsatzerlöse 180.000 aus dem Dezemberverkauf (Runde 6). Die Bestandsveränderung ist null, zwölf Räder produziert, zwölf verkauft. Materialaufwand 48.000, Personalaufwand 30.000 und Gemeinkosten 18.000 aus der Fertigung (Runde 4). Der Entwicklungsaufwand 20.000 aus dem Aktivierungsverbot (Runde 3). Abschreibungen 35.695 auf Anlagevermögen (Runde 5), Abwertungen 9.000 auf Vorräte und Forderungen (Runde 6), Rückstellungsdotierungen 16.600 (Runde 7).',
        },
        {
          typ: 'absatz',
          text: 'Das Finanzergebnis ist null, die Darlehen waren im ersten Jahr zins- und tilgungsfrei gestellt. Steuern vom Einkommen klammert das Planspiel vereinfachend aus, das gehört in die Steuerlehre. So bleibt: Betriebsergebnis 2.705, Ergebnis vor Steuern 2.705, Jahresüberschuss 2.705, Bilanzgewinn 2.705. Eine Zahl, viermal bestätigt.',
        },
      ],
      merksatz: 'Jede GuV-Zeile hat ihre Runde, am Ende steht die bekannte Zahl.',
    },
    {
      id: 'Z4-K6',
      titel: 'Die Verprobung: der Kreis schließt sich',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Der schönste Moment des Jahresabschlusses: Die GuV endet mit dem Bilanzgewinn von 2.705, exakt der Zahl, die in der Schlussbilanz im Eigenkapital steht. Zwei völlig verschiedene Rechnungen, ein Ergebnis, das ist die eingebaute Selbstkontrolle der doppelten Buchhaltung. Stimmen die Zahlen nicht überein, ist irgendwo ein Fehler.',
        },
        {
          typ: 'absatz',
          text: 'Damit ist auch das Planspiel komplett: Du hast die AlpenRad GmbH von der Gründungsbilanz mit 250.000 über Investitionen, Abschreibungen, Verkäufe und Rückstellungen bis zur Schlussbilanz mit 719.305 geführt, in den Zusatzmodulen Eigenkapital, Schulden und Zeit vertieft, und jetzt erklärt die GuV, woher die schwarze Null wirklich kommt. Mag. Huber hebt die Kaffeetasse: ‚Bilanz und GuV erzählen dieselbe Geschichte. Und Du kannst jetzt beide lesen.‘',
        },
      ],
      merksatz: 'GuV-Ergebnis gleich Bilanzgewinn, sonst stimmt etwas nicht.',
    },
  ],
  quiz: [
    {
      id: 'Z4-Q1',
      frage: 'Was zeigt die GuV im Unterschied zur Bilanz?',
      antworten: [
        'Bestände zu einem Stichtag',
        'Nur die Liquidität',
        'Die Vermögensstruktur',
        'Die Schulden',
        'Aufwendungen und Erträge eines Zeitraums, geordnet nach Erfolgsquellen',
      ],
      richtig: 4,
      erklaerung:
        'Die Bilanz ist die Zeitpunktrechnung, die GuV die Zeitraumrechnung. Beide ermitteln denselben Erfolg.',
    },
    {
      id: 'Z4-Q2',
      frage: 'In welcher Form müssen Kapitalgesellschaften die GuV aufstellen?',
      antworten: [
        'In Kontoform',
        'Formfrei',
        'In Staffelform nach Gesamtkosten- oder Umsatzkostenverfahren (§ 231 Abs 1 UGB)',
        'Als Kapitalflussrechnung',
        'Als Anhangtabelle',
      ],
      richtig: 2,
      erklaerung: '§ 231 Abs 1 UGB schreibt die Staffelform vor, das Verfahren ist wählbar.',
    },
    {
      id: 'Z4-Q3',
      frage: 'Was kennzeichnet das Gesamtkostenverfahren?',
      antworten: [
        'Es zeigt alle Periodenaufwendungen nach Kostenarten und gleicht über Bestandsveränderungen und aktivierte Eigenleistungen aus',
        'Es zeigt nur die Kosten der verkauften Produkte',
        'Es kennt keine Abschreibungen',
        'Es ist im UGB verboten',
        'Es endet beim Bruttoergebnis',
      ],
      richtig: 0,
      erklaerung:
        'Das GKV trägt die Produktionsbrille: alle Kosten der Periode, Bestandsveränderung als Ausgleichsposten.',
    },
    {
      id: 'Z4-Q4',
      frage: 'Und das Umsatzkostenverfahren?',
      antworten: [
        'Es weist Bestandsveränderungen als Ertrag aus',
        'Es verzichtet auf Umsatzerlöse',
        'Es ist nur für Banken zulässig',
        'Es stellt den Umsatzerlösen die Herstellungskosten der abgesetzten Leistungen gegenüber, danach Vertriebs- und Verwaltungskosten',
        'Es zeigt nur Zahlungsströme',
      ],
      richtig: 3,
      erklaerung:
        'Das UKV trägt die Absatzbrille und sortiert nach Funktionsbereichen, Material- und Personalaufwand kommen in den Anhang.',
    },
    {
      id: 'Z4-Q5',
      frage: 'Wie verhalten sich die Ergebnisse beider Verfahren zueinander?',
      antworten: [
        'Das GKV ergibt immer mehr',
        'Beide liefern zwingend denselben Erfolg, sie sortieren nur anders',
        'Das UKV ergibt immer mehr',
        'Sie unterscheiden sich um die Bestandsveränderung',
        'Das hängt vom Steuersatz ab',
      ],
      richtig: 1,
      erklaerung:
        'Gleicher Gewinn, andere Brille: Die Verfahren unterscheiden sich im Ausweis, nie im Ergebnis.',
    },
    {
      id: 'Z4-Q6',
      frage: 'Wie werden Umsatzerlöse ausgewiesen?',
      antworten: [
        'Brutto inklusive Umsatzsteuer',
        'Inklusive aller Rabatte',
        'Nach Schätzung des Vorstands',
        'Nur bei Barzahlung',
        'Netto, nach Abzug von Erlösschmälerungen wie Rabatten und Skonti',
      ],
      richtig: 4,
      erklaerung:
        'Ausgewiesen wird der um Erlösschmälerungen und Umsatzsteuer bereinigte Betrag.',
    },
    {
      id: 'Z4-Q7',
      frage: 'Wo stehen die planmäßigen Abschreibungen des Anlagevermögens in der GKV-Staffel?',
      antworten: [
        'In den Umsatzerlösen',
        'In der Bestandsveränderung',
        'Als eigene Abschreibungsposition vor den sonstigen betrieblichen Aufwendungen (§ 231 Abs 2 Z 7 UGB)',
        'Im Finanzergebnis',
        'Gar nicht, sie stehen nur in der Bilanz',
      ],
      richtig: 2,
      erklaerung:
        'Z 7 trennt Abschreibungen auf Anlagevermögen und außergewöhnliche Abwertungen des Umlaufvermögens als eigene Position.',
    },
    {
      id: 'Z4-Q8',
      frage: 'Was trennt Betriebsergebnis und Finanzergebnis?',
      antworten: [
        'Die Herkunft des Erfolgs: betrieblicher Leistungsprozess gegen Finanzierung und Kapitalanlage',
        'Die Höhe der Beträge',
        'Die Währung',
        'Der Zeitpunkt der Zahlung',
        'Nichts, beide sind identisch',
      ],
      richtig: 0,
      erklaerung:
        'Die Zwischensummen zeigen die Erfolgsquellen: Kerngeschäft hier, Zinsen und Beteiligungen dort.',
    },
    {
      id: 'Z4-Q9',
      frage: 'Welchen Zwischenposten gibt es seit dem RÄG 2014 NICHT mehr?',
      antworten: [
        'Das Betriebsergebnis',
        'Das Ergebnis vor Steuern',
        'Den Jahresüberschuss',
        'Das Ergebnis der gewöhnlichen Geschäftstätigkeit',
        'Den Bilanzgewinn',
      ],
      richtig: 3,
      erklaerung:
        'Das EGT wurde gestrichen, heute folgt auf die Zwischensummen das Ergebnis vor Steuern (§ 231 Abs 2 Z 17 UGB).',
    },
    {
      id: 'Z4-Q10',
      frage: 'Womit endet die vollständige GuV-Staffel nach § 231 Abs 2 UGB?',
      antworten: [
        'Mit den Umsatzerlösen',
        'Mit dem Bilanzgewinn oder Bilanzverlust (Z 26), der Zahl aus der Bilanz',
        'Mit den Steuern',
        'Mit der Bilanzsumme',
        'Mit dem Anlagevermögen',
      ],
      richtig: 1,
      erklaerung:
        'Über Jahresüberschuss, Rücklagenbewegungen und Gewinnvortrag läuft die Staffel bis zum Bilanzgewinn, exakt dem Eigenkapitalposten der Bilanz.',
    },
  ],
  faelle: [
    {
      id: 'FZ4-1',
      titel: 'Die Staffel des Jahres',
      sachverhalt:
        'Du stellst die Jahres-GuV der AlpenRad GmbH auf (Gesamtkostenverfahren). Die Zeilen: Umsatzerlöse 180.000, Bestandsveränderung 0, Materialaufwand 48.000, Personalaufwand 30.000, Abschreibungen auf das Anlagevermögen 35.695, Abwertungen auf Vorräte und Forderungen 9.000, sonstige betriebliche Aufwendungen 54.600 (Gemeinkosten 18.000, Entwicklungsaufwand 20.000, Rückstellungsdotierungen 16.600). Finanzergebnis 0, Steuern im Planspiel ausgeklammert.',
      teilaufgaben: [
        {
          id: 'FZ4-1a',
          typ: 'zahl',
          frage: 'Wie hoch ist die Summe aller Aufwandszeilen (in Euro)?',
          punkte: 5,
          loesung: 177295,
          einheit: 'EUR',
        },
        {
          id: 'FZ4-1b',
          typ: 'zahl',
          frage: 'Wie hoch ist der Jahresüberschuss (in Euro)?',
          punkte: 5,
          loesung: 2705,
          einheit: 'EUR',
        },
        {
          id: 'FZ4-1c',
          typ: 'choice',
          frage: 'Warum beträgt die Bestandsveränderung null?',
          optionen: [
            'Weil AlpenRad nichts produziert hat',
            'Weil Bestandsveränderungen verboten sind',
            'Weil zwölf Räder produziert und alle zwölf verkauft wurden, Zugang und Abgang gleichen sich aus',
            'Weil das Lager leer ist',
          ],
          richtig: 2,
          punkte: 5,
        },
        {
          id: 'FZ4-1d',
          typ: 'choice',
          frage: 'Was bestätigt der Jahresüberschuss von 2.705?',
          optionen: [
            'Die Höhe des Bankguthabens',
            'Er entspricht exakt dem Bilanzgewinn der Schlussbilanz, GuV und Bilanz verproben einander',
            'Die Höhe der Rückstellungen',
            'Den Umsatz des Folgejahres',
          ],
          richtig: 1,
          punkte: 5,
        },
      ],
      hilfe:
        'Addiere die fünf Aufwandszeilen. Ziehe sie von 180.000 ab. Und erinnere Dich an Runde 1: Bilanz und GuV müssen denselben Erfolg zeigen.',
      loesung:
        'Aufwand gesamt: 48.000 plus 30.000 plus 35.695 plus 9.000 plus 54.600 gleich 177.295 Euro. Jahresüberschuss: 180.000 minus 177.295 gleich 2.705 Euro. Die Bestandsveränderung ist null, weil die zwölf produzierten Räder (96.000 Herstellungskosten) im selben Jahr verkauft wurden, Zugang und Abgang heben sich auf. Und die 2.705 sind exakt der Bilanzgewinn der Schlussbilanz: die doppelte Erfolgsermittlung als eingebaute Selbstkontrolle.',
    },
    {
      id: 'FZ4-2',
      titel: 'GKV gegen UKV (Übungsszenario)',
      sachverhalt:
        'Das Übungsbeispiel aus dem Skript: Ein Unternehmen erzielt Umsatzerlöse von 100, der Lagerbestand an fertigen Erzeugnissen steigt um 20. Der Gesamtaufwand der Periode beträgt 110 (Material 40, Personal 45, Sonstiges 25), davon entfallen 90 auf die abgesetzten Produkte (32, 37, 21).',
      teilaufgaben: [
        {
          id: 'FZ4-2a',
          typ: 'zahl',
          frage: 'Welcher Gewinn ergibt sich nach dem Gesamtkostenverfahren?',
          punkte: 5,
          loesung: 10,
          einheit: 'GE',
        },
        {
          id: 'FZ4-2b',
          typ: 'zahl',
          frage: 'Welcher Gewinn ergibt sich nach dem Umsatzkostenverfahren?',
          punkte: 5,
          loesung: 10,
          einheit: 'GE',
        },
        {
          id: 'FZ4-2c',
          typ: 'choice',
          frage: 'Worin liegt der Unterschied der beiden Rechnungen?',
          optionen: [
            'Im Gewinn',
            'Das GKV zeigt alle Periodenkosten plus Bestandsveränderung als Ertrag, das UKV nur die Herstellungskosten der abgesetzten Produkte',
            'Das UKV ignoriert den Personalaufwand',
            'Das GKV gilt nur für Händler',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'FZ4-2d',
          typ: 'choice',
          frage: 'Welche Rechtslage gilt für die Verfahrenswahl?',
          optionen: [
            'Nur das GKV ist zulässig',
            'Nur das UKV ist zulässig',
            'Beide sind nach § 231 UGB zulässig, für Kapitalgesellschaften in Staffelform, die Wahl bindet über die Stetigkeit',
            'Die Bank entscheidet',
          ],
          richtig: 2,
          punkte: 5,
        },
      ],
      hilfe:
        'GKV: Umsatz plus Bestandserhöhung minus Gesamtaufwand. UKV: Umsatz minus Aufwand der abgesetzten Produkte. Und denk an Runde 2: einmal gewählt, stetig beibehalten.',
      loesung:
        'Gesamtkostenverfahren: 100 plus 20 minus 110 gleich 10. Umsatzkostenverfahren: 100 minus 90 gleich 10. Beide Verfahren liefern zwingend denselben Gewinn, sie unterscheiden sich nur im Ausweis: alle Periodenkosten mit Bestandsausgleich gegen die Kosten der abgesetzten Leistungen. Zulässig sind beide (§ 231 Abs 1 UGB), Kapitalgesellschaften stellen in Staffelform auf, und die getroffene Wahl bindet über die Stetigkeit (§ 201 Abs 2 Z 1 UGB).',
    },
    {
      id: 'FZ4-3',
      titel: 'Wo landet was?',
      sachverhalt:
        'Fünf Geschäftsfälle aus dem Spieljahr. Ordne jeden seiner GuV-Position im Gesamtkostenverfahren zu.',
      teilaufgaben: [
        {
          id: 'FZ4-3a',
          typ: 'choice',
          frage: 'Der Verkauf der zwölf Lastenräder um 180.000',
          optionen: [
            'Umsatzerlöse',
            'Materialaufwand',
            'Personalaufwand',
            'Abschreibungen',
            'Sonstige betriebliche Aufwendungen',
          ],
          richtig: 0,
          punkte: 4,
        },
        {
          id: 'FZ4-3b',
          typ: 'choice',
          frage: 'Der Verbrauch der Rahmen und Akkus in der Fertigung (48.000)',
          optionen: [
            'Umsatzerlöse',
            'Materialaufwand',
            'Personalaufwand',
            'Abschreibungen',
            'Sonstige betriebliche Aufwendungen',
          ],
          richtig: 1,
          punkte: 4,
        },
        {
          id: 'FZ4-3c',
          typ: 'choice',
          frage: 'Die Fertigungslöhne (30.000)',
          optionen: [
            'Umsatzerlöse',
            'Materialaufwand',
            'Personalaufwand',
            'Abschreibungen',
            'Sonstige betriebliche Aufwendungen',
          ],
          richtig: 2,
          punkte: 4,
        },
        {
          id: 'FZ4-3d',
          typ: 'choice',
          frage: 'Die planmäßige Abschreibung der Montagelinie',
          optionen: [
            'Umsatzerlöse',
            'Materialaufwand',
            'Personalaufwand',
            'Abschreibungen',
            'Sonstige betriebliche Aufwendungen',
          ],
          richtig: 3,
          punkte: 4,
        },
        {
          id: 'FZ4-3e',
          typ: 'choice',
          frage: 'Die Dotierung der Gewährleistungsrückstellung (5.400)',
          optionen: [
            'Umsatzerlöse',
            'Materialaufwand',
            'Personalaufwand',
            'Abschreibungen',
            'Sonstige betriebliche Aufwendungen',
          ],
          richtig: 4,
          punkte: 4,
        },
      ],
      hilfe:
        'Denk in Kostenarten: Was wurde verkauft, was verbraucht, wer hat gearbeitet, was hat sich abgenutzt, und was bleibt als Sonstiges?',
      loesung:
        'Der Radverkauf sind die Umsatzerlöse. Der Rahmen- und Akkuverbrauch ist Materialaufwand, die Fertigungslöhne sind Personalaufwand. Die planmäßige Abschreibung der Montagelinie steht in der Abschreibungsposition (§ 231 Abs 2 Z 7 UGB). Die Rückstellungsdotierung gehört zu den sonstigen betrieblichen Aufwendungen, dort sammelt sich, was keine eigene Kostenart hat.',
    },
    {
      id: 'FZ4-4',
      titel: 'Erfolgsquellen lesen',
      sachverhalt:
        'Petra Waldner will die Staffel nicht nur sehen, sondern verstehen. Vier Fragen aus dem Gespräch.',
      teilaufgaben: [
        {
          id: 'FZ4-4a',
          typ: 'choice',
          frage: 'Was unterscheidet Betriebs- und Finanzergebnis?',
          optionen: [
            'Die Rechtsform',
            'Der Zeitraum',
            'Die Erfolgsquelle: Leistungsprozess gegen Finanzierung und Kapitalanlage',
            'Die Währung',
          ],
          richtig: 2,
          punkte: 5,
        },
        {
          id: 'FZ4-4b',
          typ: 'choice',
          frage: 'Warum ist das Finanzergebnis der AlpenRad GmbH heuer null?',
          optionen: [
            'Die Darlehen waren im ersten Jahr zins- und tilgungsfrei gestellt, Finanzerträge gab es keine',
            'Weil Zinsen nie in die GuV gehören',
            'Weil die Bank darauf verzichtet hat, sie auszuweisen',
            'Weil das Finanzergebnis nur bei AGs gezeigt wird',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'FZ4-4c',
          typ: 'choice',
          frage: 'Welchen Vorteil hat die Staffelform gegenüber der Kontoform?',
          optionen: [
            'Sie ist kürzer',
            'Sie versteckt Verluste besser',
            'Sie braucht keine Buchhaltung',
            'Ihre Zwischenergebnisse zeigen, aus welchen Quellen der Erfolg stammt',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'FZ4-4d',
          typ: 'choice',
          frage:
            'Waldner fragt nach dem ‚Ergebnis der gewöhnlichen Geschäftstätigkeit‘. Was antwortest Du?',
          optionen: [
            'Das steht in Zeile 9',
            'Diesen Zwischenposten gibt es seit dem RÄG 2014 nicht mehr, heute folgt das Ergebnis vor Steuern',
            'Das ist ein anderes Wort für Umsatz',
            'Das gibt es nur im Konzernabschluss',
          ],
          richtig: 1,
          punkte: 5,
        },
      ],
      hilfe:
        'Quellen trennen, den zins- und tilgungsfreien Deal aus Runde 4 erinnern, und für die letzte Frage: Die Rechtslage hat sich mit dem RÄG 2014 geändert.',
      loesung:
        'Betriebsergebnis und Finanzergebnis trennen die Erfolgsquellen: das Kerngeschäft mit Rädern gegen Zinsen und Kapitalanlagen. Bei AlpenRad ist das Finanzergebnis null, die Investitions- und Gründungsdarlehen waren im ersten Jahr zins- und tilgungsfrei gestellt, und Finanzanlagen hält die Gesellschaft keine. Die Staffelform macht mit ihren Zwischenergebnissen die Herkunft des Erfolgs sichtbar, genau dafür ist sie vorgeschrieben. Und das ‚Ergebnis der gewöhnlichen Geschäftstätigkeit‘ ist Geschichte: Seit dem RÄG 2014 folgt auf Betriebs- und Finanzergebnis unmittelbar das Ergebnis vor Steuern (§ 231 Abs 2 Z 17 UGB).',
    },
  ],
  guv: [
    { id: 'umsatz', bezeichnung: '1. Umsatzerlöse', betrag: 180000 },
    {
      id: 'bestand',
      bezeichnung: '2. Veränderung des Bestands an fertigen und unfertigen Erzeugnissen',
      betrag: 0,
    },
    { id: 'material', bezeichnung: '5. Materialaufwand', betrag: -48000 },
    { id: 'personal', bezeichnung: '6. Personalaufwand', betrag: -30000 },
    {
      id: 'abschreibungenAv',
      bezeichnung:
        '7a. Abschreibungen auf immaterielle Gegenstände des Anlagevermögens und Sachanlagen',
      betrag: -35695,
    },
    {
      id: 'abschreibungenUv',
      bezeichnung:
        '7b. Abschreibungen auf das Umlaufvermögen und Forderungswertberichtigungen (vereinfacht)',
      betrag: -9000,
    },
    {
      id: 'sonstige',
      bezeichnung:
        '8. Sonstige betriebliche Aufwendungen (Gemeinkosten 18.000, Entwicklungsaufwand 20.000, Rückstellungsdotierungen 16.600)',
      betrag: -54600,
    },
    {
      id: 'betriebsergebnis',
      bezeichnung: 'Zwischensumme (Betriebsergebnis)',
      betrag: 2705,
      istZwischensumme: true,
    },
    {
      id: 'finanzergebnis',
      bezeichnung: 'Finanzergebnis (Darlehen im ersten Jahr zins- und tilgungsfrei gestellt)',
      betrag: 0,
    },
    {
      id: 'ergebnisVorSteuern',
      bezeichnung: '17. Ergebnis vor Steuern',
      betrag: 2705,
      istZwischensumme: true,
    },
    {
      id: 'steuern',
      bezeichnung: '18. Steuern vom Einkommen (im Planspiel vereinfachend ausgeklammert)',
      betrag: 0,
    },
    {
      id: 'jahresueberschuss',
      bezeichnung: '21. Jahresüberschuss',
      betrag: 2705,
      istZwischensumme: true,
    },
    {
      id: 'bilanzgewinn',
      bezeichnung: '26. Bilanzgewinn (entspricht dem Ausweis in der Schlussbilanz)',
      betrag: 2705,
      istZwischensumme: true,
    },
  ],
};
