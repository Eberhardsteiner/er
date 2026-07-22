// Lektion R6 "Umlaufvermoegen": Verkaufen, bewerten, wertberichtigen.
//
// Rechtsstand 21.07.2026, § 201 Abs 2 Z 7, § 204 und § 208 UGB im Volltext
// geprueft (Vorphasen), § 198 Abs 4, § 206, § 207 und § 209 gegen Skript
// Teil E abgeglichen. Umsatzsteuer bleibt spielweit ausgeklammert
// (Nettobetrachtung).
//
// Alle fachlichen Texte und Bilanzwerte stammen woertlich beziehungsweise
// zahlengenau aus dem Mega-Prompt 7 (Runde 6) und duerfen nicht veraendert
// werden. Die Antwortreihenfolgen sind bereits gleichverteilt vorgegeben.

import type { Lektion } from '../typen';

export const lektionR6: Lektion = {
  id: 'R6',
  titel: 'Umlaufvermögen',
  untertitel: 'Verkaufen, bewerten, wertberichtigen',
  intro: {
    story:
      'Dezember, Hochsaison. Die zwölf Lastenräder gehen um 180.000 Euro an Fachhändler in Graz und Wien, erste Zahlungen treffen ein, die Lieferantenrechnungen sind endlich getilgt. Dann kommt die Inventur: Akkuzellen sind am Weltmarkt billiger geworden, und ausgerechnet das Radhaus Wien, einer der Käufer, meldet Insolvenz an. Mag. Huber bleibt trocken: ‚Willkommen im Umlaufvermögen. Hier wird verkauft, gezählt und wertberichtigt. Und heute siehst Du, wie unser Ergebnis zum ersten Mal ins Plus dreht.‘',
    inhalte: [
      'Posten und Bewegung des Umlaufvermögens (§ 198 Abs 4 UGB)',
      'Strenges Niederstwertprinzip und Wertherleitung (§ 206, § 207 UGB)',
      'Bewertungsvereinfachung: Festwert, Gruppenbewertung, Verbrauchsfolgen (§ 209 UGB)',
      'Forderungsbewertung mit Einzel- und Pauschalwertberichtigung (§ 201 Abs 2 Z 7 UGB)',
    ],
    lernziele: [
      'Du buchst Verkauf, Zahlungseingang und Tilgung und erklärst ihre Bilanzwirkung',
      'Du wendest das strenge Niederstwertprinzip an und grenzt es vom Anlagevermögen ab',
      'Du bewertest Endbestände nach FIFO und gewogenem Durchschnitt',
      'Du bildest Einzel- und Pauschalwertberichtigungen auf Forderungen',
    ],
  },
  kacheln: [
    {
      id: 'R6-K1',
      titel: 'Das Umlaufvermögen im Überblick',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Als Umlaufvermögen sind die Gegenstände auszuweisen, die nicht bestimmt sind, dauernd dem Geschäftsbetrieb zu dienen (§ 198 Abs 4 UGB). Zu den Vorräten zählen Rohstoffe (Hauptbestandteile des Produkts, bei uns Rahmen und Akkus), Hilfsstoffe (untergeordnete Bestandteile wie Schrauben), Betriebsstoffe (werden verbraucht, ohne ins Produkt einzugehen, etwa Schmiermittel), unfertige und fertige Erzeugnisse, Waren und geleistete Anzahlungen.',
        },
        {
          typ: 'absatz',
          text: 'Dazu kommen die Forderungen aus Lieferungen und Leistungen (das Unternehmen hat geliefert, der Kunde noch nicht bezahlt), sonstige Vermögensgegenstände, Wertpapiere des Umlaufvermögens und die liquiden Mittel. Das Umlaufvermögen kennt keine planmäßige Abschreibung, dafür ein besonders strenges Bewertungsregime.',
        },
        {
          typ: 'beispiel',
          text: 'Bei AlpenRad wandert der Wert durch die Bilanz: Rohstoffe werden zu fertigen Erzeugnissen, der Verkauf macht daraus Forderungen, die Zahlung macht daraus Bankguthaben.',
        },
      ],
      merksatz: 'Das Umlaufvermögen ist Vermögen in Bewegung.',
    },
    {
      id: 'R6-K2',
      titel: 'Verkauf: Der Ertrag kommt in die Bücher',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Mit der Lieferung ist der Erfolg realisiert (Runde 2): Die Forderung entsteht in Höhe des Verkaufspreises, die verkauften Erzeugnisse verlassen zum Buchwert die Vorräte. Die Differenz ist der Ergebnisbeitrag. Erst die Zahlung macht aus der Forderung Bankguthaben, das ist dann ein reiner Aktivtausch ohne Ergebniswirkung.',
        },
        {
          typ: 'absatz',
          text: 'Für AlpenRad heißt das: 180.000 Erlös gegen 96.000 Buchwert der zwölf Lastenräder ergibt plus 84.000 Ergebnisbeitrag. Die Herstellungskosten aus Runde 4 werden jetzt zum Aufwand, genau im Jahr des Ertrags, das ist die sachliche Abgrenzung. Und die Tilgung der Lieferverbindlichkeiten gegen Bank ist eine Bilanzverkürzung: beide Seiten sinken um 60.000.',
        },
        {
          typ: 'beispiel',
          text: 'Merke den Dreischritt: Verkauf auf Ziel bringt Ertrag und Forderung, Zahlungseingang tauscht Forderung gegen Bank, Tilgung verkürzt die Bilanz.',
        },
      ],
      merksatz: 'Ertrag bei Lieferung, Liquidität bei Zahlung.',
    },
    {
      id: 'R6-K3',
      titel: 'Bewertungsvereinfachung nach § 209 UGB',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Grundsätzlich gilt Einzelbewertung (§ 201 Abs 2 Z 3 UGB). § 209 UGB erlaubt Vereinfachungen: Der Festwert (§ 209 Abs 1) setzt Sachanlagen sowie Roh-, Hilfs- und Betriebsstoffe, die regelmäßig ersetzt werden, deren Gesamtwert nachrangig ist und deren Bestand nur gering schwankt, mit gleichbleibender Menge und gleichbleibendem Wert an, mit körperlicher Bestandsaufnahme in der Regel alle fünf Jahre. Ersatzbeschaffungen werden sofort Aufwand.',
        },
        {
          typ: 'absatz',
          text: 'Die Gruppenbewertung (§ 209 Abs 2) fasst gleichartige und annähernd gleichwertige Gegenstände zusammen und bewertet sie mit dem gewogenen Durchschnitt. Und für gleichartige Vorräte dürfen Verbrauchsfolgen unterstellt werden, soweit das den GoB entspricht: FIFO (die ältesten Bestände gelten als zuerst verbraucht, der Endbestand stammt aus den jüngsten Zugängen) oder LIFO (umgekehrt). Die gewählte Methode bindet über die Stetigkeit.',
        },
        {
          typ: 'beispiel',
          text: 'Bei fallenden Einkaufspreisen liefert FIFO den niedrigeren Endbestandswert, denn der Endbestand besteht aus den letzten, billigeren Zugängen. Bei steigenden Preisen ist es umgekehrt.',
        },
      ],
      merksatz: 'Festwert für den eisernen Bestand, Durchschnitt und Verbrauchsfolge für das Lager.',
    },
    {
      id: 'R6-K4',
      titel: 'Das strenge Niederstwertprinzip (§ 207 UGB)',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Auch im Umlaufvermögen sind die Anschaffungs- oder Herstellungskosten die Obergrenze (§ 206 UGB). Nach unten gilt das strenge Niederstwertprinzip (§ 207 UGB): Liegt der Börsen- oder Marktpreis am Abschlussstichtag darunter, MUSS abgeschrieben werden, auch wenn die Wertminderung voraussichtlich nicht von Dauer ist. Das ist der Unterschied zum gemilderten Prinzip des Anlagevermögens aus Runde 5.',
        },
        {
          typ: 'absatz',
          text: 'Die Wertherleitung hängt vom Posten ab: Roh-, Hilfs- und Betriebsstoffe orientieren sich am Beschaffungsmarkt (Wiederbeschaffungskosten), fertige Erzeugnisse am Absatzmarkt (erzielbarer Verkaufserlös abzüglich noch anfallender Aufwendungen, verlustfreie Bewertung). Fallen die Gründe der Abwertung später weg, ist nach § 208 UGB zuzuschreiben, höchstens bis zu den Anschaffungs- oder Herstellungskosten.',
        },
        {
          typ: 'beispiel',
          text: 'Unsere Akkuzellen stehen mit 12.000 im Lager, der Marktpreis ist auf 9.000 gefallen, eine Erholung gilt als wahrscheinlich. Trotzdem: abschreiben, 3.000 Aufwand. Streng heißt streng.',
        },
      ],
      merksatz: 'Im Umlaufvermögen wird immer abgewertet, Erholung hin oder her.',
    },
    {
      id: 'R6-K5',
      titel: 'Forderungen: vom Nennwert zur Wertberichtigung',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Forderungen werden zum Nennwert angesetzt. Bestehen bei einem einzelnen Schuldner konkrete Zweifel (Insolvenzantrag, geplatzte Zahlungen, massive Zielüberschreitung), wird die Forderung einzeln wertberichtigt: Angesetzt wird der wahrscheinlich einbringliche Betrag, der erwartete Ausfall ist Aufwand (Einzelwertberichtigung). Endgültig uneinbringliche Forderungen werden ausgebucht.',
        },
        {
          typ: 'absatz',
          text: 'Für das allgemeine Ausfallrisiko des restlichen Bestands sorgt die Pauschalwertberichtigung: ein Erfahrungssatz auf die unzweifelhaften Forderungen. Schätzungen brauchen eine umsichtige Beurteilung, statistisch ermittelbare Erfahrungswerte aus gleich gelagerten Sachverhalten sind zu berücksichtigen (§ 201 Abs 2 Z 7 UGB). Im Spiel setzen wir beide Wertberichtigungen direkt von den Forderungen ab, ausgewiesen wird der Nettobetrag.',
        },
        {
          typ: 'beispiel',
          text: 'Radhaus Wien schuldet 10.000 und ist insolvent, erwartete Quote 50 Prozent: Einzelwertberichtigung 5.000. Auf die übrigen 50.000 kommen erfahrungsgemäß 2 Prozent: Pauschalwertberichtigung 1.000.',
        },
      ],
      merksatz: 'Konkret zweifelhaft heißt einzeln, allgemein riskant heißt pauschal.',
    },
    {
      id: 'R6-K6',
      titel: 'Dezember bei AlpenRad: die Zahlen drehen',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Vier Blöcke gehen in die Bilanz: Der Verkauf bringt plus 84.000 Ergebnis (180.000 Erlös gegen 96.000 Buchwertabgang). Zahlungseingang 120.000 und Tilgung der Lieferverbindlichkeiten 60.000 entspannen die Liquidität auf 90.000, die Lieferverbindlichkeiten stehen auf null. Die Inventur kostet 3.000 (strenges Niederstwertprinzip auf die Akkuzellen), die Forderungsbewertung 6.000 (Einzelwertberichtigung 5.000, Pauschalwertberichtigung 1.000).',
        },
        {
          typ: 'absatz',
          text: 'Unterm Strich springt das Ergebnis von minus 55.695 auf plus 19.305, die Bilanzsumme steigt auf 719.305. Lena grinst zum ersten Mal seit dem Sommer: ‚Verluste im Aufbau, Gewinn im Verkauf. Genau so war es geplant.‘ Offen bleibt ein letzter Brocken: die Rückstellungen für Garantie und Co. in Runde 7.',
        },
      ],
      merksatz: 'Verkäufe drehen das Ergebnis, Vorsicht bremst es dosiert.',
    },
  ],
  quiz: [
    {
      id: 'R6-Q1',
      frage: 'Welche Aufzählung nennt NUR Vorratsposten?',
      antworten: [
        'Forderungen, Bank, Kassa',
        'Maschinen, Gebäude, Lizenzen',
        'Roh-, Hilfs- und Betriebsstoffe, unfertige und fertige Erzeugnisse, Waren, geleistete Anzahlungen',
        'Stammkapital und Rücklagen',
        'Beteiligungen und Ausleihungen',
      ],
      richtig: 2,
      erklaerung:
        'Das sind die Vorratsposten des Umlaufvermögens. Forderungen und Bank sind eigenes Umlaufvermögen, aber keine Vorräte.',
    },
    {
      id: 'R6-Q2',
      frage: 'Wann entsteht die Forderung aus einem Verkauf auf Ziel?',
      antworten: [
        'Mit der Lieferung, denn damit ist der Ertrag realisiert',
        'Erst mit der Bezahlung',
        'Mit der Bestellung',
        'Am Abschlussstichtag',
        'Mit der Mahnung',
      ],
      richtig: 0,
      erklaerung:
        'Lieferung realisiert den Ertrag (Runde 2), gleichzeitig entsteht die Forderung. Die Zahlung ist später nur noch ein Aktivtausch.',
    },
    {
      id: 'R6-Q3',
      frage: 'Was verlangt das strenge Niederstwertprinzip des § 207 UGB?',
      antworten: [
        'Abwertung nur bei dauernder Wertminderung',
        'Abwertung nur mit Zustimmung des Prüfers',
        'Ein Abwertungswahlrecht',
        'Abwertung nur bei Finanzanlagen',
        'Abwertung auf den niedrigeren Börsen- oder Marktpreis, auch wenn die Minderung nicht von Dauer ist',
      ],
      richtig: 4,
      erklaerung:
        'Im Umlaufvermögen ist die Abwertung Pflicht, Dauerhaftigkeit spielt keine Rolle. Das ist der Unterschied zum gemilderten Prinzip des Anlagevermögens.',
    },
    {
      id: 'R6-Q4',
      frage: 'Welche Bewertungsvereinfachungen erlaubt § 209 Abs 2 UGB für gleichartige Vorräte?',
      antworten: [
        'Nur die Einzelbewertung',
        'Gewogenen Durchschnitt und unterstellte Verbrauchsfolgen wie FIFO oder LIFO, soweit GoB-konform',
        'Bewertung zum Verkaufspreis',
        'Bewertung nach Gutdünken der Geschäftsführung',
        'Nur die Bewertung zum letzten Einkaufspreis',
      ],
      richtig: 1,
      erklaerung:
        '§ 209 Abs 2 UGB erlaubt Sammelbewertung mit Durchschnittspreis oder Verbrauchsfolgefiktion, die Methode bindet über die Stetigkeit.',
    },
    {
      id: 'R6-Q5',
      frage: 'Die Einkaufspreise fallen über das Jahr. Wie wirkt FIFO auf den Endbestandswert?',
      antworten: [
        'FIFO ergibt den höchsten Wert',
        'FIFO und LIFO ergeben immer denselben Wert',
        'FIFO ist bei fallenden Preisen verboten',
        'FIFO ergibt einen niedrigeren Wert, weil der Endbestand aus den letzten, billigeren Zugängen stammt',
        'FIFO bewertet zum Stichtagspreis',
      ],
      richtig: 3,
      erklaerung:
        'Bei FIFO gelten die ältesten Bestände als verbraucht, der Endbestand trägt die jüngsten Preise, bei fallenden Preisen also die niedrigen.',
    },
    {
      id: 'R6-Q6',
      frage: 'Wofür ist der Festwert nach § 209 Abs 1 UGB gedacht?',
      antworten: [
        'Für regelmäßig ersetzte Bestände von nachrangigem Gesamtwert mit geringen Schwankungen, etwa den eisernen Ersatzteilbestand',
        'Für das gesamte Anlagevermögen',
        'Für Forderungen',
        'Für die Bewertung des Bankguthabens',
        'Für alle Vorräte ohne Ausnahme',
      ],
      richtig: 0,
      erklaerung:
        'Festwert heißt gleichbleibende Menge und gleichbleibender Wert, Ersatzbeschaffungen werden sofort Aufwand, Bestandsaufnahme in der Regel alle fünf Jahre.',
    },
    {
      id: 'R6-Q7',
      frage: 'Was deckt die Pauschalwertberichtigung ab?',
      antworten: [
        'Den Ausfall eines bestimmten insolventen Kunden',
        'Bereits ausgebuchte Forderungen',
        'Wechselkursverluste',
        'Skontoabzüge der Kunden',
        'Das allgemeine Ausfallrisiko des unzweifelhaften Forderungsbestands, bemessen mit Erfahrungssätzen',
      ],
      richtig: 4,
      erklaerung:
        'Die Pauschalwertberichtigung erfasst das statistische Restrisiko. Der konkrete Einzelfall gehört in die Einzelwertberichtigung.',
    },
    {
      id: 'R6-Q8',
      frage: 'Was ist der typische Anlass für eine Einzelwertberichtigung?',
      antworten: [
        'Ein allgemein schwaches Wirtschaftsjahr',
        'Der Wunsch nach einem niedrigeren Gewinn',
        'Konkrete Zweifel an der Einbringlichkeit bei einem einzelnen Schuldner, etwa ein Insolvenzantrag',
        'Jede Forderung über 10.000 Euro',
        'Eine Zielüberschreitung um einen Tag',
      ],
      richtig: 2,
      erklaerung:
        'Einzeln wertberichtigt wird bei konkreten Anhaltspunkten beim einzelnen Schuldner, angesetzt wird der wahrscheinlich einbringliche Betrag.',
    },
    {
      id: 'R6-Q9',
      frage: 'Der Grund einer früheren Vorratsabwertung fällt weg. Was gilt?',
      antworten: [
        'Der niedrige Wert bleibt für immer',
        'Zuschreibungspflicht, höchstens bis zu den Anschaffungs- oder Herstellungskosten',
        'Zuschreibung auf den aktuellen Marktpreis ohne Obergrenze',
        'Ein Wahlrecht ohne Grenzen',
        'Die Vorräte werden neu angeschafft',
      ],
      richtig: 1,
      erklaerung:
        '§ 208 UGB gilt auch im Umlaufvermögen: zuschreiben, aber nie über die fortgeführten Anschaffungs- oder Herstellungskosten.',
    },
    {
      id: 'R6-Q10',
      frage: 'Woher leitet sich der Vergleichswert für Rohstoffe beim Niederstwerttest ab?',
      antworten: [
        'Vom Absatzmarkt der Fertigprodukte',
        'Vom Anschaffungspreis des Vorjahres',
        'Vom Verkaufspreis der Konkurrenz',
        'Vom Beschaffungsmarkt, also den Wiederbeschaffungskosten am Stichtag',
        'Vom Buchwert der Maschinen',
      ],
      richtig: 3,
      erklaerung:
        'Roh-, Hilfs- und Betriebsstoffe orientieren sich am Beschaffungsmarkt. Fertige Erzeugnisse dagegen am Absatzmarkt, verlustfrei gerechnet.',
    },
  ],
  faelle: [
    {
      id: 'F6-1',
      titel: 'Der große Dezember',
      sachverhalt:
        'Die zwölf Lastenräder (Buchwert 96.000 Euro, fertige Erzeugnisse) gehen um insgesamt 180.000 Euro auf Ziel an Fachhändler in Graz und Wien. Noch im Dezember überweisen Händler 120.000 Euro. Außerdem tilgt AlpenRad die offenen Lieferverbindlichkeiten von 60.000 Euro. Alle Beträge netto, die Umsatzsteuer bleibt spielweit ausgeklammert.',
      teilaufgaben: [
        {
          id: 'F6-1a',
          typ: 'zahl',
          frage: 'Wie hoch sind die Umsatzerlöse aus dem Lastenradverkauf (in Euro)?',
          punkte: 5,
          loesung: 180000,
          einheit: 'EUR',
        },
        {
          id: 'F6-1b',
          typ: 'zahl',
          frage: 'Wie hoch ist der Ergebnisbeitrag des Verkaufs (Erlös minus Buchwertabgang, in Euro)?',
          punkte: 6,
          loesung: 84000,
          einheit: 'EUR',
        },
        {
          id: 'F6-1c',
          typ: 'choice',
          frage: 'Was bewirkt der Zahlungseingang von 120.000?',
          optionen: [
            'Zusätzlichen Ertrag von 120.000',
            'Eine Bilanzverlängerung',
            'Einen Aktivtausch: Forderungen sinken, Bank steigt, das Ergebnis bleibt unberührt',
            'Eine Minderung des Eigenkapitals',
          ],
          richtig: 2,
          punkte: 5,
        },
        {
          id: 'F6-1d',
          typ: 'choice',
          frage: 'Was bewirkt die Tilgung der Lieferverbindlichkeiten von 60.000?',
          optionen: [
            'Eine Bilanzverkürzung: Bank und Verbindlichkeiten sinken um 60.000',
            'Einen Aufwand von 60.000',
            'Einen Ertrag von 60.000',
            'Keine Bilanzwirkung',
          ],
          richtig: 0,
          punkte: 4,
        },
      ],
      hilfe:
        'Der Ertrag ist mit der Lieferung realisiert. Zahlungseingang und Tilgung verändern kein Ergebnis mehr: Einmal tauschen Aktiva untereinander, einmal schrumpfen beide Bilanzseiten.',
      loesung:
        'Umsatzerlöse 180.000 Euro, dagegen verlassen die fertigen Erzeugnisse mit 96.000 die Vorräte: Ergebnisbeitrag plus 84.000 Euro. Damit werden die Herstellungskosten aus Runde 4 genau im Jahr des Ertrags zum Aufwand (sachliche Abgrenzung). Der Zahlungseingang ist ein Aktivtausch (Forderungen minus 120.000, Bank plus 120.000). Die Tilgung ist eine Bilanzverkürzung: Bank und Lieferverbindlichkeiten sinken um je 60.000, das Ergebnis bleibt in beiden Fällen unberührt.',
    },
    {
      id: 'F6-2',
      titel: 'Verbrauchsfolge im Zellenlager',
      sachverhalt:
        'Ein Übungsszenario von Mag. Huber mit handlichen Zahlen: Ein Lager an Akkuzellen startet ohne Anfangsbestand. Zugänge: im März 100 Stück zu 40 Euro (4.000 Euro), im September 100 Stück zu 32 Euro (3.200 Euro). Verbraucht wurden 150 Stück, der Endbestand laut Inventur beträgt 50 Stück.',
      teilaufgaben: [
        {
          id: 'F6-2a',
          typ: 'zahl',
          frage: 'Wie hoch ist der Endbestandswert nach Perioden-FIFO (in Euro)?',
          punkte: 6,
          loesung: 1600,
          einheit: 'EUR',
        },
        {
          id: 'F6-2b',
          typ: 'zahl',
          frage: 'Wie hoch ist der Endbestandswert nach dem gewogenen Durchschnitt (in Euro)?',
          punkte: 5,
          loesung: 1800,
          einheit: 'EUR',
        },
        {
          id: 'F6-2c',
          typ: 'choice',
          frage: 'Auf welcher Grundlage sind solche Sammelbewertungen zulässig?',
          optionen: [
            'Sie sind im UGB verboten',
            '§ 209 Abs 2 UGB, für gleichartige Vorräte und soweit GoB-konform',
            'Nur mit Bewilligung des Finanzamts',
            'Nur für Kapitalgesellschaften',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'F6-2d',
          typ: 'choice',
          frage: 'Darf AlpenRad die Methode jedes Jahr frei wechseln?',
          optionen: [
            'Ja, die Wahl ist jährlich frei',
            'Ja, wenn es das Ergebnis verbessert',
            'Nur in Verlustjahren',
            'Nein, die gewählte Methode bindet über die Stetigkeit, Abweichung nur bei besonderen Umständen',
          ],
          richtig: 3,
          punkte: 4,
        },
      ],
      hilfe:
        'FIFO: Die ältesten Zellen gelten als zuerst verbraucht, der Endbestand stammt aus dem September-Zugang. Durchschnitt: Gesamtwert aller Zugänge durch Gesamtstückzahl, mal Endbestand.',
      loesung:
        'FIFO: Verbraucht gelten die 100 März-Stücke und 50 September-Stücke, der Endbestand von 50 Stück stammt aus dem September-Zugang zu 32 Euro: 1.600 Euro. Gewogener Durchschnitt: 7.200 Euro durch 200 Stück gleich 36 Euro je Stück, mal 50 gleich 1.800 Euro. Beide Verfahren erlaubt § 209 Abs 2 UGB für gleichartige Vorräte, soweit die Anwendung den GoB entspricht. Die gewählte Methode ist stetig beizubehalten (§ 201 Abs 2 Z 1 UGB), sonst wäre das Ergebnis beliebig steuerbar.',
    },
    {
      id: 'F6-3',
      titel: 'Inventur: die Akkuzellen',
      sachverhalt:
        'Die Inventur bestätigt den Rohstoffbestand (Rahmen, Akkuzellen, Komponenten) mit Anschaffungskosten von 12.000 Euro. Der Wiederbeschaffungspreis der Akkuzellen ist eingebrochen, der Marktwert des Bestands liegt am Stichtag bei 9.000 Euro. Der Einkäufer ist sicher: ‚Im Frühjahr sind die Preise wieder oben.‘',
      teilaufgaben: [
        {
          id: 'F6-3a',
          typ: 'choice',
          frage: 'Muss AlpenRad abwerten, obwohl die Erholung wahrscheinlich ist?',
          optionen: [
            'Nein, bei vorübergehender Minderung gilt ein Verbot',
            'Nein, es besteht ein Wahlrecht',
            'Nur bei Zustimmung der Gesellschafter',
            'Ja, im Umlaufvermögen gilt das strenge Niederstwertprinzip, Dauerhaftigkeit ist egal',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'F6-3b',
          typ: 'zahl',
          frage: 'Wie hoch ist die Abwertung (in Euro)?',
          punkte: 5,
          loesung: 3000,
          einheit: 'EUR',
        },
        {
          id: 'F6-3c',
          typ: 'choice',
          frage: 'Wie wäre derselbe Fall bei einer Maschine des Anlagevermögens?',
          optionen: [
            'Bei bloß vorübergehender Minderung dürfte NICHT abgeschrieben werden (gemildertes Niederstwertprinzip)',
            'Genauso streng wie im Umlaufvermögen',
            'Maschinen werden nie außerplanmäßig abgeschrieben',
            'Es gälte ein Wahlrecht wie bei Finanzanlagen',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'F6-3d',
          typ: 'choice',
          frage: 'Die Preise erholen sich im Folgejahr nachhaltig. Was gilt?',
          optionen: [
            'Der niedrige Wert bleibt',
            'Zuschreibung auf den neuen Marktpreis ohne Grenze',
            'Zuschreibungspflicht bis höchstens zu den Anschaffungskosten (§ 208 UGB)',
            'Neubewertung des gesamten Lagers',
          ],
          richtig: 2,
          punkte: 5,
        },
      ],
      hilfe:
        '§ 207 gegen § 204 Abs 2: streng gegen gemildert. Für die Höhe: Anschaffungskosten minus Marktwert am Stichtag. Für die Erholung: Runde 5, § 208.',
      loesung:
        'Im Umlaufvermögen gilt das strenge Niederstwertprinzip (§ 207 UGB): Abwertung auf den niedrigeren Marktpreis ist Pflicht, auch wenn die Minderung voraussichtlich nicht von Dauer ist. Abwertung: 12.000 minus 9.000 gleich 3.000 Euro Aufwand. Eine Maschine des Anlagevermögens dürfte bei bloß vorübergehender Minderung dagegen NICHT abgeschrieben werden (§ 204 Abs 2 UGB, gemildert, das Wahlrecht hätten nur Finanzanlagen). Erholen sich die Preise nachhaltig, verlangt § 208 UGB die Zuschreibung, gedeckelt mit den Anschaffungskosten. Rohstoffe werden dabei vom Beschaffungsmarkt her bewertet.',
    },
    {
      id: 'F6-4',
      titel: 'Radhaus Wien und das Restrisiko',
      sachverhalt:
        'Nach dem Zahlungseingang stehen noch 60.000 Euro Forderungen offen. Davon entfallen 10.000 Euro auf das Radhaus Wien, das Insolvenz angemeldet hat, die Masseverwalterin stellt eine Quote von 50 Prozent in Aussicht. Auf den übrigen Forderungen liegt nach Branchenerfahrung ein allgemeines Ausfallrisiko von 2 Prozent. Alle Beträge netto.',
      teilaufgaben: [
        {
          id: 'F6-4a',
          typ: 'zahl',
          frage: 'Wie hoch ist die Einzelwertberichtigung für das Radhaus Wien (in Euro)?',
          punkte: 6,
          loesung: 5000,
          einheit: 'EUR',
        },
        {
          id: 'F6-4b',
          typ: 'zahl',
          frage: 'Wie hoch ist die Pauschalwertberichtigung auf die übrigen Forderungen (in Euro)?',
          punkte: 5,
          loesung: 1000,
          einheit: 'EUR',
        },
        {
          id: 'F6-4c',
          typ: 'zahl',
          frage: 'Mit welchem Nettobetrag stehen die Forderungen danach in der Bilanz (in Euro)?',
          punkte: 5,
          loesung: 54000,
          einheit: 'EUR',
        },
        {
          id: 'F6-4d',
          typ: 'choice',
          frage: 'Worauf stützt sich die Schätzung der 2 Prozent?',
          optionen: [
            'Auf das Bauchgefühl des Einkäufers',
            'Auf eine umsichtige Beurteilung samt statistischer Erfahrungswerte aus gleich gelagerten Sachverhalten (§ 201 Abs 2 Z 7 UGB)',
            'Auf den Wunsch nach einem runden Ergebnis',
            'Auf eine Vorgabe des Firmenbuchgerichts',
          ],
          richtig: 1,
          punkte: 4,
        },
      ],
      hilfe:
        'Einzeln: 10.000 mal den erwarteten Ausfall (100 minus Quote). Pauschal: 2 Prozent von den verbleibenden 50.000. Bilanzansatz: 60.000 minus beide Wertberichtigungen.',
      loesung:
        'Einzelwertberichtigung: Bei 50 Prozent Quote fällt die Hälfte aus, 10.000 mal 50 Prozent gleich 5.000 Euro. Pauschalwertberichtigung: 2 Prozent von den unzweifelhaften 50.000 gleich 1.000 Euro, gestützt auf Erfahrungswerte nach § 201 Abs 2 Z 7 UGB. Bilanzansatz der Forderungen: 60.000 minus 5.000 minus 1.000 gleich 54.000 Euro, im Spiel als direkte Absetzung vom Forderungsposten. Fiele das Radhaus später endgültig aus, würde die Forderung ausgebucht.',
    },
  ],
  bilanzDelta: {
    erlaeuterung:
      'Der Dezember dreht die Zahlen: Verkauf der zwölf Lastenräder um 180.000 auf Ziel (Buchwertabgang 96.000, Ergebnisbeitrag plus 84.000), Zahlungseingang 120.000, Tilgung der Lieferverbindlichkeiten 60.000. Die Inventur kostet 3.000 (strenges Niederstwertprinzip auf die Akkuzellen, § 207 UGB), die Forderungsbewertung 6.000 (Einzelwertberichtigung Radhaus Wien 5.000, Pauschalwertberichtigung 1.000). Das Ergebnis springt von minus 55.695 auf plus 19.305. Lena: ‚Verluste im Aufbau, Gewinn im Verkauf. Genau so war es geplant.‘',
    neuerStichtagLabel: 'Bilanz nach Runde 6 (Dezembergeschäft und Inventur)',
    neuePosten: [
      {
        seite: 'aktiva',
        gruppe: 'Umlaufvermögen',
        postenEinfuegenVor: 'bank',
        posten: { id: 'forderungen', name: 'Forderungen aus Lieferungen und Leistungen' },
      },
    ],
    aenderungen: [
      { postenId: 'vorraete', delta: -99000 },
      { postenId: 'forderungen', delta: 54000 },
      { postenId: 'bank', delta: 60000 },
      { postenId: 'lieferverb', delta: -60000 },
      { postenId: 'ergebnis', delta: 75000 },
    ],
  },
};
