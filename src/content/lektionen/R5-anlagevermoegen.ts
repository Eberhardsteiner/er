// Lektion R5 "Anlagevermoegen": Abschreiben, abwerten, zuschreiben.
//
// Rechtsstand 21.07.2026, § 203 Abs 5, § 204 und § 208 UGB im Volltext
// geprueft, § 197 Abs 2, § 199, § 226 und § 227 gegen Skript Teil D abgeglichen.
//
// Alle fachlichen Texte und Bilanzwerte stammen woertlich beziehungsweise
// zahlengenau aus dem Mega-Prompt 6 (Runde 5) und duerfen nicht veraendert werden.

import type { Lektion } from '../typen';

export const lektionR5: Lektion = {
  id: 'R5',
  titel: 'Anlagevermögen',
  untertitel: 'Abschreiben, abwerten, zuschreiben',
  intro: {
    story:
      'Ende November. Der Umzug in die neue Halle ist geschafft, aber nicht ohne Blessuren: Beim Verladen ist die Montagelinie schwer beschädigt worden, ein Modul ist wirtschaftlich nicht mehr zu reparieren. Gleichzeitig stehen die ersten Abschlussarbeiten an, denn zum 31.12. müssen alle Abschreibungen des Jahres in die Bücher. Und als wäre das nicht genug, erzählt Jakob beim Kaffee, Herr Moser denke ans Aufhören: ‚Was wäre seine Werkstatt eigentlich wert, wenn wir sie kaufen?‘ Mag. Huber verteilt die Arbeit: ‚Erst die Pflicht, dann die Kür. Abschreibungsplan durchziehen, Schaden bewerten, und dann rechnen wir Mosers Firmenwert, rein auf Probe.‘',
    inhalte: [
      'Die drei Klassen des Anlagevermögens und der Anlagespiegel (§ 226 UGB)',
      'Immaterielles Anlagevermögen und Geschäfts(Firmen)wert (§ 197 Abs 2, § 203 Abs 5 UGB)',
      'Planmäßige und außerplanmäßige Abschreibung im Abschluss (§ 204 UGB)',
      'Finanzanlagen und Wertaufholung (§ 204 Abs 2, § 208 UGB)',
    ],
    lernziele: [
      'Du buchst die planmäßigen Abschreibungen eines ganzen Jahres in die Bilanz',
      'Du wendest das gemilderte Niederstwertprinzip auf einen Schadensfall an',
      'Du berechnest einen derivativen Firmenwert und kennst seine Abschreibungsregeln',
      'Du entscheidest sicher zwischen Abschreibungspflicht, Wahlrecht und Zuschreibungspflicht',
    ],
  },
  kacheln: [
    {
      id: 'R5-K1',
      titel: 'Das Anlagevermögen im Überblick',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Das Anlagevermögen umfasst alles, was dazu bestimmt ist, dauernd dem Geschäftsbetrieb zu dienen (§ 198 Abs 2 UGB), in drei Klassen: immaterielle Vermögensgegenstände, Sachanlagen und Finanzanlagen. Bei AlpenRad sind das die CAD-Lizenz, dann Grundstück, Gebäude und Maschinen, Finanzanlagen halten wir bisher keine.',
        },
        {
          typ: 'absatz',
          text: 'Kapitalgesellschaften zeigen die Entwicklung des Anlagevermögens im Anlagespiegel (§ 226 UGB): historische Anschaffungs- und Herstellungskosten, Zugänge, Abgänge, Umbuchungen, Zuschreibungen, kumulierte Abschreibungen und Restbuchwerte. So bleibt nachvollziehbar, was mit jedem Anlagegut über die Jahre passiert ist, auch wenn es längst voll abgeschrieben ist.',
        },
        {
          typ: 'beispiel',
          text: 'Unser Anlagenverzeichnis ist die kleine Schwester des Anlagespiegels: je Anlagegut Anschaffungskosten, Nutzungsdauer, Inbetriebnahme und Abschreibung.',
        },
      ],
      merksatz: 'Drei Klassen, ein Spiegel: immateriell, Sachen, Finanzen.',
    },
    {
      id: 'R5-K2',
      titel: 'Immaterielles Anlagevermögen und Firmenwert',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Ein wirtschaftlicher Vorteil, der einzelverwertbar und unkörperlich ist, ist ein immaterieller Vermögensgegenstand: Konzessionen, Patente, Marken-, Urheber- und Nutzungsrechte, Lizenzen und ungeschützte Werte wie Rezepturen. Es gilt die Trennlinie aus Runde 3: entgeltlich erworben heißt Ansatzpflicht, selbst geschaffen heißt Ansatzverbot (§ 197 Abs 2 UGB). Immaterielle Anlagegüter sind regelmäßig abnutzbar, die Nutzungsdauer begrenzen Schutzfristen oder die kürzere wirtschaftliche Nutzbarkeit.',
        },
        {
          typ: 'absatz',
          text: 'Der Sonderfall ist der Geschäfts(Firmen)wert: der Betrag, um den der Kaufpreis eines Betriebs das übernommene Nettovermögen (Zeitwerte der Vermögensgegenstände minus Schulden) übersteigt (§ 203 Abs 5 UGB). Der gekaufte, derivative Firmenwert ist anzusetzen und planmäßig abzuschreiben, kann die Nutzungsdauer nicht verlässlich geschätzt werden, dann über 10 Jahre gleichmäßig, mit Erläuterung im Anhang. Der selbst aufgebaute, originäre Firmenwert (guter Ruf, Stammkundschaft) darf nie angesetzt werden.',
        },
        {
          typ: 'beispiel',
          text: 'Eine Werbekampagne schafft vielleicht Markenwert, aber keinen einzeln verwertbaren Vermögensgegenstand: sofort Aufwand. Erst wer das ganze Unternehmen kauft, bezahlt diesen Wert mit und aktiviert ihn als Firmenwert.',
        },
      ],
      merksatz: 'Firmenwert: gekauft Pflicht, selbst gemacht verboten, im Zweifel 10 Jahre.',
    },
    {
      id: 'R5-K3',
      titel: 'Sachanlagen: von der Baustelle bis zum Abgang',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Bei den Sachanlagen trennen wir Grundstücke (nicht abnutzbar, keine planmäßige Abschreibung) von Gebäuden und Maschinen (abnutzbar). Betriebsvorrichtungen wie Krananlagen oder Förderbänder zählen zu den technischen Anlagen, auch wenn sie fest mit dem Gebäude verbunden sind. Noch nicht fertige Investitionen parken als ‚Anlagen im Bau‘, geleistete Anzahlungen auf Anlagen ebenso: Beide werden aktiviert, aber noch nicht abgeschrieben.',
        },
        {
          typ: 'absatz',
          text: 'Die Abschreibung beginnt erst mit der Fertigstellung und Inbetriebnahme, dann wird von ‚Anlagen im Bau‘ auf die endgültige Position umgebucht. Nachträgliche Anschaffungs- oder Herstellungskosten (Erweiterung, wesentliche Verbesserung) erhöhen den Buchwert, bloße Erhaltung (Reparatur, Service) ist sofort Aufwand.',
        },
        {
          typ: 'beispiel',
          text: 'Hätte AlpenRad die Lackierkabine zum 31.12. erst halb fertig, stünde sie als Anlage im Bau in der Bilanz, ohne Abschreibung, bis zur Inbetriebnahme im Folgejahr.',
        },
      ],
      merksatz: 'Im Bau geparkt, ab Inbetriebnahme abgeschrieben.',
    },
    {
      id: 'R5-K4',
      titel: 'Die Abschreibungen kommen in die Bücher',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Zum Abschlussstichtag werden alle planmäßigen Abschreibungen des Jahres gebucht. Für AlpenRad laut Anlagenverzeichnis, monatsgenau ab Inbetriebnahme: CAD-Lizenz 2.000 (8/12 von 3.000), Montagelinie 8.000 (8/12 von 12.000), Gebäude 3.745 (6/12 von 7.490), Schweißanlage 1.950 (6/12 von 3.900), zusammen 15.695. Das Grundstück wird nicht planmäßig abgeschrieben.',
        },
        {
          typ: 'absatz',
          text: 'Die Wirkung ist doppelt: Die Buchwerte der Anlagegüter sinken, und derselbe Betrag mindert als Aufwand das Ergebnis und damit das Eigenkapital. Zur Erinnerung an Runde 4: AlpenRad schreibt bewusst monatsgenau ab und nicht nach der steuerlichen Halbjahresregel, weil der Bank ein möglichst gutes Ergebnis gezeigt werden soll. Diese Wahl gilt stetig.',
        },
        {
          typ: 'beispiel',
          text: 'Nach der Buchung stehen die Maschinen bei 149.050 (159.000 minus 9.950), das Gebäude bei 295.855, die Lizenz bei 13.000.',
        },
      ],
      merksatz: 'Buchwert runter, Aufwand rauf, Eigenkapital sinkt mit.',
    },
    {
      id: 'R5-K5',
      titel: 'Außerplanmäßig: wenn etwas passiert',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Fällt der Wert eines Anlageguts unter den Buchwert, entscheidet die Dauerhaftigkeit: Bei voraussichtlich dauernder Wertminderung ist außerplanmäßig auf den niedrigeren beizulegenden Wert abzuschreiben, ohne Rücksicht darauf, ob die Nutzung zeitlich begrenzt ist (§ 204 Abs 2 UGB), das trifft also auch Grundstücke und Finanzanlagen. Bei bloß vorübergehender Wertminderung gilt ein Abschreibungsverbot, nur Finanzanlagen haben dann ein Abschreibungswahlrecht (§ 204 Abs 2 zweiter Satz UGB).',
        },
        {
          typ: 'absatz',
          text: 'Der beizulegende Wert ist der Betrag, den ein Erwerber des ganzen Unternehmens für den einzelnen Gegenstand ansetzen würde, unter Fortführungsannahme (§ 189a UGB). Typische Auslöser: Beschädigung, technischer Fortschritt, Fehlinvestition, dauerhafter Nachfragerückgang. Nach der außerplanmäßigen Abschreibung wird der neue Buchwert auf die Restnutzungsdauer verteilt.',
        },
        {
          typ: 'beispiel',
          text: 'Die beim Umzug beschädigte Montagelinie: Buchwert nach planmäßiger Abschreibung 112.000, beizulegender Wert laut Gutachten 92.000, Schaden von Dauer, also außerplanmäßige Abschreibung 20.000, Pflicht.',
        },
      ],
      merksatz: 'Dauernd heißt Pflicht, vorübergehend heißt Verbot, außer bei Finanzanlagen.',
    },
    {
      id: 'R5-K6',
      titel: 'Finanzanlagen und die Zuschreibung',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Finanzanlagen sind dauerhaft gehaltene Finanzwerte: Anteile an verbundenen Unternehmen, Beteiligungen (Anteile, die durch eine dauernde Verbindung dem Geschäftsbetrieb dienen sollen, vermutet ab 20 Prozent, § 189a UGB), Wertpapiere des Anlagevermögens und Ausleihungen (langfristige Finanzforderungen, § 227 UGB). Sie sind nicht abnutzbar, es gibt nur die außerplanmäßige Abschreibung: Pflicht bei dauernder, Wahlrecht bei vorübergehender Wertminderung.',
        },
        {
          typ: 'absatz',
          text: 'Fallen die Gründe einer früheren außerplanmäßigen Abschreibung später weg, ist zuzuschreiben (§ 208 Abs 1 UGB), im Umfang der Werterhöhung und unter Berücksichtigung der inzwischen fälligen planmäßigen Abschreibungen. Obergrenze sind immer die fortgeführten Anschaffungs- oder Herstellungskosten. Einzige Ausnahme: Beim Geschäfts(Firmen)wert gibt es keine Zuschreibung (§ 208 Abs 2 UGB), ein einmal abgewerteter Firmenwert bleibt unten.',
        },
        {
          typ: 'beispiel',
          text: 'Aktien im Anlagevermögen, angeschafft um 6.000, abgewertet auf 4.400, Kurs erholt sich nachhaltig auf 7.000: Zuschreibung, aber nur bis 6.000. Über die Anschaffungskosten geht es nie.',
        },
      ],
      merksatz: 'Gründe weg heißt zuschreiben, Deckel sind die Anschaffungskosten, der Firmenwert bleibt unten.',
    },
  ],
  quiz: [
    {
      id: 'R5-Q1',
      frage: 'Welche drei Klassen bilden das Anlagevermögen?',
      antworten: [
        'Vorräte, Forderungen, Wertpapiere',
        'Immaterielle Vermögensgegenstände, Sachanlagen, Finanzanlagen',
        'Gebäude, Maschinen, Fuhrpark',
        'Eigenkapital, Rückstellungen, Verbindlichkeiten',
        'Bar, Bank, Wertpapiere',
      ],
      richtig: 1,
      erklaerung:
        'So gliedert die Bilanz das Anlagevermögen, bei AlpenRad: CAD-Lizenz, dann Grund, Gebäude und Maschinen, Finanzanlagen derzeit keine.',
    },
    {
      id: 'R5-Q2',
      frage: 'Was zeigt der Anlagespiegel (§ 226 UGB)?',
      antworten: [
        'Die Entwicklung des Anlagevermögens von den historischen Anschaffungskosten über Zu- und Abgänge bis zu den Restbuchwerten',
        'Nur die aktuellen Buchwerte',
        'Die geplanten Investitionen des Folgejahres',
        'Die stillen Reserven',
        'Den Marktwert aller Anlagen',
      ],
      richtig: 0,
      erklaerung:
        'Der Anlagespiegel macht die Entwicklung jedes Anlagepostens über das Jahr nachvollziehbar, inklusive Umbuchungen und Zuschreibungen.',
    },
    {
      id: 'R5-Q3',
      frage: 'Wie entsteht ein aktivierungsfähiger Geschäfts(Firmen)wert?',
      antworten: [
        'Durch jahrelange gute Werbung',
        'Durch Beschluss der Geschäftsführung',
        'Durch Eintragung ins Firmenbuch',
        'Durch den entgeltlichen Erwerb eines Betriebs, wenn der Kaufpreis das übernommene Nettovermögen übersteigt',
        'Durch ein Gutachten',
      ],
      richtig: 3,
      erklaerung:
        '§ 203 Abs 5 UGB: Nur der derivative, beim Unternehmenskauf bezahlte Firmenwert ist anzusetzen. Der selbst aufgebaute ist nach § 197 Abs 2 UGB verboten.',
    },
    {
      id: 'R5-Q4',
      frage:
        'Über welchen Zeitraum wird der Firmenwert abgeschrieben, wenn seine Nutzungsdauer nicht verlässlich schätzbar ist?',
      antworten: ['5 Jahre', '10 Jahre, gleichmäßig verteilt', '20 Jahre', '40 Jahre', 'Gar nicht, nur bei Wertminderung'],
      richtig: 1,
      erklaerung:
        '§ 203 Abs 5 UGB: mangels verlässlicher Schätzung 10 Jahre gleichmäßig, der Zeitraum ist im Anhang zu erläutern.',
    },
    {
      id: 'R5-Q5',
      frage: 'Eine zum 31.12. halbfertige Anlage in Eigenbau wird...',
      antworten: [
        '...gar nicht bilanziert',
        '...sofort voll abgeschrieben',
        '...als Aufwand gebucht',
        '...als Vorrat ausgewiesen',
        '...als Anlage im Bau aktiviert und noch nicht abgeschrieben',
      ],
      richtig: 4,
      erklaerung:
        'Anlagen im Bau werden mit den bisherigen Herstellungskosten aktiviert. Die Abschreibung beginnt erst mit Fertigstellung und Inbetriebnahme, dann wird umgebucht.',
    },
    {
      id: 'R5-Q6',
      frage:
        'Reparatur des Hallentors (2.800 Euro) versus Anbau eines zweiten Rolltors samt Rampe: Was gilt?',
      antworten: [
        'Beides sofort Aufwand',
        'Beides aktivieren',
        'Die Reparatur ist Aufwand, der Anbau nachträgliche Anschaffungs- oder Herstellungskosten',
        'Die Reparatur aktivieren, den Anbau als Aufwand buchen',
        'Beides in den Anhang',
      ],
      richtig: 2,
      erklaerung:
        'Erhaltung ist sofort Aufwand. Erweiterung und wesentliche Verbesserung erhöhen als nachträgliche Kosten den Buchwert.',
    },
    {
      id: 'R5-Q7',
      frage: 'Wann ist eine außerplanmäßige Abschreibung im Anlagevermögen PFLICHT?',
      antworten: [
        'Bei voraussichtlich dauernder Wertminderung, Abschreibung auf den beizulegenden Wert',
        'Bei jeder Wertschwankung',
        'Nur bei Finanzanlagen',
        'Nur, wenn das Jahr mit Gewinn endet',
        'Nie, sie ist immer freiwillig',
      ],
      richtig: 0,
      erklaerung:
        '§ 204 Abs 2 UGB: Bei dauernder Wertminderung besteht Abschreibungspflicht, unabhängig davon, ob das Gut abnutzbar ist.',
    },
    {
      id: 'R5-Q8',
      frage:
        'Der Kurs einer als Finanzanlage gehaltenen Aktie sinkt, eine Erholung ist wahrscheinlich. Was gilt?',
      antworten: [
        'Abschreibungspflicht',
        'Abschreibungsverbot ohne Ausnahme',
        'Abschreibungswahlrecht, weil es eine Finanzanlage ist',
        'Zuschreibungspflicht',
        'Umgliederung ins Umlaufvermögen',
      ],
      richtig: 2,
      erklaerung:
        'Bei bloß vorübergehender Wertminderung dürfen nur Finanzanlagen abgeschrieben werden (§ 204 Abs 2 zweiter Satz UGB), für alle anderen Anlagegüter gilt ein Verbot.',
    },
    {
      id: 'R5-Q9',
      frage:
        'Die Gründe einer früheren außerplanmäßigen Abschreibung sind weggefallen. Was verlangt § 208 UGB?',
      antworten: [
        'Nichts, der niedrige Wert bleibt',
        'Zuschreibung bis zum aktuellen Marktwert',
        'Neubewertung des gesamten Anlagevermögens',
        'Zuschreibung, höchstens bis zu den fortgeführten Anschaffungs- oder Herstellungskosten',
        'Ein Wahlrecht',
      ],
      richtig: 3,
      erklaerung:
        '§ 208 Abs 1 UGB ordnet die Zuschreibung an, gedeckelt durch die fortgeführten Anschaffungs- oder Herstellungskosten.',
    },
    {
      id: 'R5-Q10',
      frage: 'Für welchen Posten gilt das Zuschreibungsgebot NICHT?',
      antworten: [
        'Für Gebäude',
        'Für Beteiligungen',
        'Für Wertpapiere des Anlagevermögens',
        'Für Vorräte',
        'Für den Geschäfts(Firmen)wert',
      ],
      richtig: 4,
      erklaerung:
        '§ 208 Abs 2 UGB: Beim Firmenwert wird nicht zugeschrieben, ein abgewerteter Firmenwert bleibt unten.',
    },
  ],
  faelle: [
    {
      id: 'F5-1',
      titel: 'Abschlussarbeiten: die Abschreibungen des Jahres',
      sachverhalt:
        'Mag. Huber legt Dir das Anlagenverzeichnis vor: CAD-Lizenz 15.000 (5 Jahre, ab Mai), Montagelinie 120.000 (10 Jahre, ab Mai), Gebäude 299.600 (40 Jahre, ab Juli), Schweißanlage 39.000 (10 Jahre, ab Juli), Grundstück 128.400 (nicht abnutzbar). Abgeschrieben wird linear und monatsgenau. Buche die planmäßigen Abschreibungen des ersten Geschäftsjahres.',
      teilaufgaben: [
        {
          id: 'F5-1a',
          typ: 'zahl',
          frage: 'Wie hoch ist die Summe aller planmäßigen Abschreibungen des Jahres (in Euro)?',
          punkte: 6,
          loesung: 15695,
          einheit: 'EUR',
        },
        {
          id: 'F5-1b',
          typ: 'zahl',
          frage: 'Mit welchem Buchwert steht das Gebäude danach in der Bilanz (in Euro)?',
          punkte: 5,
          loesung: 295855,
          einheit: 'EUR',
        },
        {
          id: 'F5-1c',
          typ: 'zahl',
          frage:
            'Mit welchem Buchwert steht die Montagelinie nach der planmäßigen Abschreibung da (in Euro, vor Berücksichtigung des Unfalls)?',
          punkte: 5,
          loesung: 112000,
          einheit: 'EUR',
        },
        {
          id: 'F5-1d',
          typ: 'choice',
          frage: 'Wie wirkt die Buchung auf die Bilanz?',
          optionen: [
            'Nur die Aktivseite sinkt',
            'Die Bank zahlt die Abschreibung',
            'Buchwerte sinken und derselbe Betrag mindert über das Ergebnis das Eigenkapital',
            'Die Bilanzsumme bleibt gleich',
          ],
          richtig: 2,
          punkte: 4,
        },
      ],
      hilfe:
        'Rechne je Anlagegut: Anschaffungskosten durch Nutzungsdauer, dann mal Nutzungsmonate durch 12 (Mai bedeutet 8 Monate, Juli 6 Monate). Das Grundstück bleibt außen vor. Für die Buchwerte: Anschaffungskosten minus Jahresabschreibung.',
      loesung:
        'CAD-Lizenz 3.000 mal 8/12 gleich 2.000. Montagelinie 12.000 mal 8/12 gleich 8.000. Gebäude 7.490 mal 6/12 gleich 3.745. Schweißanlage 3.900 mal 6/12 gleich 1.950. Summe 15.695 Euro. Buchwerte danach: Gebäude 299.600 minus 3.745 gleich 295.855, Montagelinie 120.000 minus 8.000 gleich 112.000, Lizenz 13.000, Schweißanlage 37.050. Die Abschreibung ist Aufwand: Die Buchwerte sinken um 15.695, und das Ergebnis (und damit das Eigenkapital) sinkt um denselben Betrag (§ 204 Abs 1 UGB).',
    },
    {
      id: 'F5-2',
      titel: 'Der Umzugsschaden',
      sachverhalt:
        'Beim Verladen in die neue Halle wurde die Montagelinie schwer beschädigt, ein Modul ist wirtschaftlich nicht mehr zu reparieren. Der Sachverständige beziffert den beizulegenden Wert zum 31.12. mit 92.000 Euro, die Minderung ist von Dauer. Der Buchwert nach planmäßiger Abschreibung beträgt 112.000 Euro.',
      teilaufgaben: [
        {
          id: 'F5-2a',
          typ: 'choice',
          frage: 'Muss AlpenRad außerplanmäßig abschreiben?',
          optionen: [
            'Nein, es besteht ein Wahlrecht',
            'Nein, Maschinen werden nur planmäßig abgeschrieben',
            'Nur, wenn die Versicherung nicht zahlt',
            'Ja, bei voraussichtlich dauernder Wertminderung besteht Abschreibungspflicht auf den beizulegenden Wert',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'F5-2b',
          typ: 'zahl',
          frage: 'Wie hoch ist die außerplanmäßige Abschreibung (in Euro)?',
          punkte: 6,
          loesung: 20000,
          einheit: 'EUR',
        },
        {
          id: 'F5-2c',
          typ: 'choice',
          frage:
            'Angenommen, der Schaden wäre durch eine im Jänner bestätigte Reparatur nur vorübergehend. Was gälte dann?',
          optionen: [
            'Ebenfalls Abschreibungspflicht',
            'Abschreibungswahlrecht',
            'Abschreibungsverbot, denn die Maschine ist keine Finanzanlage',
            'Zuschreibungspflicht',
          ],
          richtig: 2,
          punkte: 5,
        },
        {
          id: 'F5-2d',
          typ: 'choice',
          frage: 'Wie wird nach der außerplanmäßigen Abschreibung künftig planmäßig abgeschrieben?',
          optionen: [
            'Der neue Buchwert wird auf die Restnutzungsdauer verteilt',
            'Weiter mit den alten 12.000 pro Jahr',
            'Gar nicht mehr',
            'Nach der Halbjahresregel',
          ],
          richtig: 0,
          punkte: 4,
        },
      ],
      hilfe:
        'Vergleiche Buchwert und beizulegenden Wert und denk an das gemilderte Niederstwertprinzip: Dauerhaftigkeit entscheidet über Pflicht oder Verbot, das Finanzanlagen-Wahlrecht gilt hier nicht.',
      loesung:
        'Die Wertminderung ist von Dauer, also besteht Abschreibungspflicht auf den beizulegenden Wert (§ 204 Abs 2 UGB): 112.000 minus 92.000 gleich 20.000 Euro außerplanmäßige Abschreibung. Wäre die Minderung nur vorübergehend, dürfte NICHT abgeschrieben werden, denn das Wahlrecht des § 204 Abs 2 zweiter Satz UGB gilt nur für Finanzanlagen. Künftig wird der neue Buchwert von 92.000 auf die Restnutzungsdauer verteilt. Sollten die Gründe später wegfallen, wäre nach § 208 Abs 1 UGB zuzuschreiben, höchstens bis zu den fortgeführten Anschaffungskosten.',
    },
    {
      id: 'F5-3',
      titel: 'Aktien im Anlagevermögen',
      sachverhalt:
        'Ein Übungsszenario von Mag. Huber, ohne Buchung in unseren Büchern: Ein Unternehmen hält 200 Aktien der Steira Components AG als langfristige Finanzanlage, Anschaffungskosten 30 Euro je Stück (gesamt 6.000 Euro). Variante 1: Der Kurs fällt auf 22 Euro, die Branche steckt in einer strukturellen Krise, eine Erholung ist nicht absehbar. Variante 2: Der Kurs fällt auf 22 Euro, aber nur wegen einer kurzfristigen Marktpanik, die Erholung gilt als wahrscheinlich. Variante 3: Nach einer Abschreibung auf 4.400 Euro steigt der Kurs nachhaltig auf 35 Euro.',
      teilaufgaben: [
        {
          id: 'F5-3a',
          typ: 'choice',
          frage: 'Variante 1: Was gilt?',
          optionen: [
            'Abschreibungswahlrecht',
            'Abschreibungsverbot',
            'Abschreibungspflicht auf den beizulegenden Wert, auch bei Finanzanlagen',
            'Umbuchung ins Umlaufvermögen',
          ],
          richtig: 2,
          punkte: 5,
        },
        {
          id: 'F5-3b',
          typ: 'zahl',
          frage:
            'Variante 1: Mit welchem Betrag stehen die Aktien nach der Abschreibung in der Bilanz (in Euro)?',
          punkte: 5,
          loesung: 4400,
          einheit: 'EUR',
        },
        {
          id: 'F5-3c',
          typ: 'choice',
          frage: 'Variante 2: Was gilt bei der nur vorübergehenden Wertminderung?',
          optionen: [
            'Abschreibungspflicht',
            'Abschreibungsverbot ohne Ausnahme',
            'Zuschreibungspflicht',
            'Abschreibungswahlrecht, weil es Finanzanlagen sind',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'F5-3d',
          typ: 'choice',
          frage: 'Variante 3: Was gilt nach der nachhaltigen Kurserholung auf 35 Euro?',
          optionen: [
            'Zuschreibung auf 7.000 Euro (200 mal 35)',
            'Zuschreibungspflicht, aber nur bis zu den Anschaffungskosten von 6.000 Euro',
            'Keine Zuschreibung, der niedrige Wert bleibt',
            'Wahlrecht zwischen 4.400 und 7.000',
          ],
          richtig: 1,
          punkte: 5,
        },
      ],
      hilfe:
        'Finanzanlagen: dauernd heißt Pflicht, vorübergehend heißt Wahlrecht (§ 204 Abs 2 UGB). Für die Erholung: § 208 UGB mit der Obergrenze der Anschaffungskosten.',
      loesung:
        'Variante 1: dauernde Wertminderung, Abschreibungspflicht auch für Finanzanlagen, Ansatz 200 mal 22 gleich 4.400 Euro. Variante 2: vorübergehende Wertminderung, hier greift das Abschreibungswahlrecht, das nur Finanzanlagen haben (§ 204 Abs 2 zweiter Satz UGB). Variante 3: Die Gründe der Abschreibung sind weggefallen, § 208 Abs 1 UGB verlangt die Zuschreibung, aber höchstens bis zu den (fortgeführten) Anschaffungskosten von 6.000 Euro. Der Kursgewinn darüber bleibt als stille Reserve unrealisiert, das ist das Anschaffungswertprinzip aus Runde 2.',
    },
    {
      id: 'F5-4',
      titel: 'Was wäre Moser wert?',
      sachverhalt:
        'Herr Moser denkt ans Aufhören, und Lena will wissen, was eine Übernahme bedeuten würde. Eine reine Planrechnung ohne Buchung: Der Kaufpreis für die Radwerkstatt Moser läge bei 300.000 Euro. Die Zeitwerte der übernommenen Vermögensgegenstände betragen 420.000 Euro, die übernommenen Schulden 180.000 Euro. Falls es je dazu kommt, ließe sich die Nutzungsdauer des Firmenwerts nicht verlässlich schätzen.',
      teilaufgaben: [
        {
          id: 'F5-4a',
          typ: 'zahl',
          frage: 'Wie hoch wäre der derivative Geschäfts(Firmen)wert (in Euro)?',
          punkte: 6,
          loesung: 60000,
          einheit: 'EUR',
        },
        {
          id: 'F5-4b',
          typ: 'choice',
          frage: 'Wie wäre dieser Firmenwert abzuschreiben?',
          optionen: [
            'Planmäßig, mangels verlässlicher Schätzung über 10 Jahre gleichmäßig, mit Anhangerläuterung',
            'Gar nicht, Firmenwerte werden nie abgeschrieben',
            'Sofort zur Gänze im ersten Jahr',
            'Nur bei Wertminderung',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'F5-4c',
          typ: 'zahl',
          frage: 'Wie hoch wäre die jährliche Abschreibung des Firmenwerts (in Euro)?',
          punkte: 4,
          loesung: 6000,
          einheit: 'EUR',
        },
        {
          id: 'F5-4d',
          typ: 'choice',
          frage: 'Und der gute Ruf, den sich AlpenRad selbst aufgebaut hat?',
          optionen: [
            'Darf als originärer Firmenwert aktiviert werden',
            'Darf zur Hälfte aktiviert werden',
            'Darf nicht angesetzt werden, Verbot für nicht entgeltlich erworbene immaterielle Anlagegüter',
            'Muss als Rückstellung passiviert werden',
          ],
          richtig: 2,
          punkte: 5,
        },
      ],
      hilfe:
        'Firmenwert gleich Kaufpreis minus Nettovermögen (Zeitwerte der Vermögensgegenstände minus Schulden), § 203 Abs 5 UGB. Für den eigenen Ruf: Denk an § 197 Abs 2 UGB aus Runde 3.',
      loesung:
        'Nettovermögen: 420.000 minus 180.000 gleich 240.000 Euro. Derivativer Firmenwert: 300.000 minus 240.000 gleich 60.000 Euro, bei einem Kauf anzusetzen (§ 203 Abs 5 UGB). Abschreibung: planmäßig, mangels verlässlich schätzbarer Nutzungsdauer über 10 Jahre gleichmäßig, also 6.000 Euro pro Jahr, der Zeitraum ist im Anhang zu erläutern. Eine spätere Zuschreibung wäre ausgeschlossen (§ 208 Abs 2 UGB). Der selbst aufgebaute gute Ruf von AlpenRad ist ein originärer Firmenwert und darf nach § 197 Abs 2 UGB nicht angesetzt werden, es bleibt eine Planrechnung ohne Buchung.',
    },
  ],
  bilanzDelta: {
    erlaeuterung:
      'Abschlussarbeiten am Anlagevermögen: Die planmäßigen Abschreibungen des Jahres (15.695 laut Anlagenverzeichnis) und die außerplanmäßige Abschreibung der beschädigten Montagelinie (20.000 auf den beizulegenden Wert, § 204 Abs 2 UGB) sind gebucht. Zusammen 35.695 Aufwand: Die Buchwerte sinken, das Ergebnis rutscht auf minus 55.695. Lena bleibt ruhig: ‚Abschreibungen kosten kein Geld, das Geld ist längst investiert. Jetzt müssen die Räder Umsatz bringen.‘',
    neuerStichtagLabel: 'Bilanz nach Runde 5 (Abschlussarbeiten Anlagevermögen)',
    aenderungen: [
      { postenId: 'immaterielle', delta: -2000 },
      { postenId: 'gebaeude', delta: -3745 },
      { postenId: 'maschinen', delta: -29950 },
      { postenId: 'ergebnis', delta: -35695 },
    ],
  },
};
