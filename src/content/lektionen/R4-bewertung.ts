// Lektion R4 "Bewertung": Was ist es wert? Anschaffungs- und Herstellungskosten.
//
// Rechtsstand 21.07.2026, § 203 UGB im Volltext geprueft, § 204, § 207 und
// § 208 gegen Skript Teil C abgeglichen.
//
// Alle fachlichen Texte und Bilanzwerte stammen woertlich beziehungsweise
// zahlengenau aus dem Mega-Prompt 5 (Runde 4) und duerfen nicht veraendert werden.

import type { Lektion } from '../typen';

export const lektionR4: Lektion = {
  id: 'R4',
  titel: 'Bewertung',
  untertitel: 'Was ist es wert? Anschaffungs- und Herstellungskosten',
  intro: {
    story:
      'Hochsommer. AlpenRad wagt den großen Schritt: Eine eigene Halle in Graz-Puntigam ist gefunden, die Steirische Landesbank finanziert mit einem Investitionsdarlehen über 450.000 Euro, im ersten Jahr tilgungs- und zinsfrei. Dazu kommt eine Schweißanlage, und die erste Kleinserie von zwölf Lastenrädern steht fertig im Lager. Mag. Huber tippt auf den Kaufvertrag: ‚In Runde 3 hast Du gelernt, OB etwas in die Bilanz kommt. Jetzt klären wir, MIT WELCHEM WERT. Und ich warne Dich: Nicht alles, was Geld gekostet hat, gehört in den Wert hinein.‘',
    inhalte: [
      'Zugangs- und Folgebewertung, fortgeführte Anschaffungs- und Herstellungskosten',
      'Anschaffungskosten und ihre Bestandteile (§ 203 Abs 2 UGB)',
      'Herstellungskosten: Pflicht, Wahlrecht, Verbot (§ 203 Abs 3 und 4 UGB)',
      'Planmäßige Abschreibung und der Blick auf die außerplanmäßige (§ 204, § 207 UGB)',
    ],
    lernziele: [
      'Du ermittelst Anschaffungskosten mit Nebenkosten, Rabatt und Skonto',
      'Du berechnest den Pflichtumfang der Herstellungskosten und kennst Wahlrechte und Verbote',
      'Du stellst einen linearen Abschreibungsplan mit monatsgenauem Beginn auf',
      'Du erklärst, warum Aktivierung den Aufwand neutralisiert und die Bilanz wachsen lässt',
    ],
  },
  kacheln: [
    {
      id: 'R4-K1',
      titel: 'Bewertung im Überblick',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Die Bewertung beantwortet die Frage der Bilanzierung der Höhe nach. Beim erstmaligen Ansatz spricht man von Zugangsbewertung: Bei Fremdbezug gelten die Anschaffungskosten, bei eigener Herstellung die Herstellungskosten (§ 203 UGB). In den Folgejahren gilt die Folgebewertung: Abnutzbares Anlagevermögen wird planmäßig abgeschrieben, dazu können außerplanmäßige Abschreibungen kommen.',
        },
        {
          typ: 'absatz',
          text: 'Die Anschaffungs- oder Herstellungskosten sind zugleich die absolute Wertobergrenze: Gegenstände des Anlagevermögens sind höchstens mit den um Abschreibungen verminderten Anschaffungs- oder Herstellungskosten anzusetzen (§ 203 Abs 1 UGB), den sogenannten fortgeführten Anschaffungs- oder Herstellungskosten. Ein gestiegener Marktwert bleibt außen vor, das kennst Du als Anschaffungswertprinzip aus Runde 2.',
        },
        {
          typ: 'beispiel',
          text: 'Die Halle in Graz-Puntigam mag in fünf Jahren mehr wert sein. In der Bilanz steht sie trotzdem nie über ihren Anschaffungskosten.',
        },
      ],
      merksatz: 'Zugang zu AK oder HK, danach fortgeführt, niemals darüber.',
    },
    {
      id: 'R4-K2',
      titel: 'Anschaffungskosten (§ 203 Abs 2 UGB)',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Anschaffungskosten sind die Aufwendungen, die geleistet werden, um einen Vermögensgegenstand zu erwerben und ihn in einen betriebsbereiten Zustand zu versetzen, soweit sie ihm einzeln zugeordnet werden können. Das Schema: Anschaffungspreis (netto, ohne Umsatzsteuer bei Vorsteuerabzug) minus Anschaffungspreisminderungen (Rabatte sofort, Skonti bei tatsächlicher Inanspruchnahme) plus Anschaffungsnebenkosten (etwa Transport, Montage, Zölle, Grunderwerbsteuer, Vertragserrichtung, Eintragungsgebühren) plus nachträgliche Anschaffungskosten (Erweiterung, wesentliche Verbesserung).',
        },
        {
          typ: 'absatz',
          text: 'Nicht zu den Anschaffungskosten gehören Kosten ohne Einzelzurechenbarkeit, etwa anteilige Verwaltungsgemeinkosten des Einkaufs, und laufende, jährlich wiederkehrende Abgaben wie Grundsteuer oder Kanalbenutzung. Auch Fremdkapitalzinsen der Finanzierung zählen grundsätzlich nicht dazu.',
        },
        {
          typ: 'beispiel',
          text: 'Schweißanlage: Listenpreis 40.000, minus 10 Prozent Rabatt, minus 2 Prozent Skonto, plus Transport 1.200 und Montage 2.520. Die Anschaffungskosten betragen 39.000 Euro, wie Du im Fall selbst nachrechnest.',
        },
      ],
      merksatz: 'Preis minus Minderungen plus Nebenkosten, alles netto und einzeln zurechenbar.',
    },
    {
      id: 'R4-K3',
      titel: 'Herstellungskosten (§ 203 Abs 3 und 4 UGB)',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Herstellungskosten sind die Aufwendungen für die Herstellung eines Vermögensgegenstands, seine Erweiterung oder seine wesentliche Verbesserung. Pflichtbestandteile sind die Einzelkosten (Fertigungsmaterial, Fertigungslöhne, Sondereinzelkosten der Fertigung) UND angemessene Teile der nur mittelbar zurechenbaren fixen und variablen Gemeinkosten, soweit sie auf den Zeitraum der Herstellung entfallen. Sind die Gemeinkosten durch offenbare Unterbeschäftigung überhöht, dürfen nur die einer durchschnittlichen Beschäftigung entsprechenden Teile eingerechnet werden (keine Leerkosten).',
        },
        {
          typ: 'absatz',
          text: 'Eingerechnet werden dürfen (Wahlrecht): Aufwendungen für Sozialeinrichtungen des Betriebs, freiwillige Sozialleistungen, betriebliche Altersversorgung und Abfertigungen, außerdem Fremdkapitalzinsen für den Herstellungszeitraum (§ 203 Abs 4 UGB, mit Anhangangabe). Verboten sind Kosten der allgemeinen Verwaltung und des Vertriebs. Achtung, beliebter Fehler aus deutschen Lehrbüchern: Im UGB sind fertigungsnahe Gemeinkosten Pflicht und Verwaltungskosten verboten, es gibt hier kein Wahlrecht wie im HGB.',
        },
        {
          typ: 'beispiel',
          text: 'Wertuntergrenze sind die Pflichtbestandteile, Wertobergrenze die Pflichtbestandteile plus ausgeübte Wahlrechte. Dazwischen liegt der bilanzpolitische Spielraum, den die Stetigkeit aus Runde 2 begrenzt.',
        },
      ],
      merksatz:
        'Einzelkosten plus angemessene Gemeinkosten Pflicht, Sozialkosten und Bauzinsen Wahl, Verwaltung und Vertrieb verboten.',
    },
    {
      id: 'R4-K4',
      titel: 'Planmäßige Abschreibung (§ 204 UGB)',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Bei Anlagegütern mit zeitlich begrenzter Nutzung sind die Anschaffungs- oder Herstellungskosten durch einen Abschreibungsplan auf die Geschäftsjahre der voraussichtlichen Nutzung zu verteilen (§ 204 Abs 1 UGB). Drei Stellgrößen: die Nutzungsdauer (technisch, rechtlich oder wirtschaftlich begrenzt, es gilt die kürzeste, im Regelfall geschätzt), das Verfahren (linear, leistungsabhängig, degressiv, sofern den GoB entsprechend) und der Restwert, dessen Abzug aus Vorsichtsgründen unterbleibt.',
        },
        {
          typ: 'absatz',
          text: 'Abgeschrieben wird monatsgenau (pro rata temporis) ab Inbetriebnahme, auf volle Monate gerundet. Die lineare Abschreibung teilt die Anschaffungskosten gleichmäßig: Jahresabschreibung gleich Anschaffungskosten durch Nutzungsdauer. Geringwertige Vermögensgegenstände dürfen im Anschaffungsjahr voll abgeschrieben werden (§ 204 Abs 1a UGB), in der Praxis orientiert an der steuerlichen Grenze des § 13 EStG von 1.000 Euro netto.',
        },
        {
          typ: 'beispiel',
          text: 'Montagelinie: 120.000 Euro, Nutzungsdauer 10 Jahre, in Betrieb seit Mai. Jahresabschreibung 12.000 Euro, im ersten Jahr 8/12, also 8.000 Euro. Gebucht wird zum Abschlussstichtag, bei uns in Runde 5.',
        },
      ],
      merksatz: 'AHK durch Nutzungsdauer, monatsgenau ab Inbetriebnahme.',
    },
    {
      id: 'R4-K5',
      titel: 'Außerplanmäßig: der Blick voraus',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Fällt der Wert eines Anlageguts unter den Buchwert, greift die außerplanmäßige Abschreibung. Im Anlagevermögen gilt das gemilderte Niederstwertprinzip (§ 204 Abs 2 UGB): Bei voraussichtlich dauernder Wertminderung ist auf den beizulegenden Wert abzuschreiben, bei bloß vorübergehender Wertminderung darf nicht abgeschrieben werden, nur für Finanzanlagen besteht dann ein Wahlrecht.',
        },
        {
          typ: 'absatz',
          text: 'Im Umlaufvermögen gilt das strenge Niederstwertprinzip (§ 207 UGB): Abgeschrieben wird auf den niedrigeren Börsen- oder Marktpreis des Abschlussstichtags, auch wenn die Wertminderung nicht von Dauer ist. Fallen die Gründe später weg, verlangt § 208 UGB die Zuschreibung. Die Anwendung beider Prinzipien vertiefen wir in den Runden 5 und 6.',
        },
        {
          typ: 'beispiel',
          text: 'Ein Hagelschaden an der Halle wäre eine dauernde Wertminderung: außerplanmäßige Abschreibung Pflicht. Ein kurzfristiger Preisrutsch bei Akkuzellen im Lager trifft das Umlaufvermögen: strenges Niederstwertprinzip, sofort abwerten.',
        },
      ],
      merksatz: 'Anlagevermögen gemildert, Umlaufvermögen streng.',
    },
    {
      id: 'R4-K6',
      titel: 'Bewertung bei AlpenRad: der Sommer in Zahlen',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Der Hallenkauf zeigt die Anschaffungskosten in Aktion: Kaufpreis 400.000 plus Nebenkosten 28.000 (Grunderwerbsteuer 14.000, Eintragungsgebühr 4.400, Vertragserrichtung 9.600) ergibt 428.000. Die Nebenkosten werden im Verhältnis der Kaufpreisanteile aufgeteilt: Grund 120.000 plus 8.400 gleich 128.400, Gebäude 280.000 plus 19.600 gleich 299.600. Nur das Gebäude wird künftig planmäßig abgeschrieben, der Grund ist nicht abnutzbar.',
        },
        {
          typ: 'absatz',
          text: 'Die Lastenrad-Serie zeigt die Herstellungskosten: Material 48.000, Löhne 30.000, angemessene Gemeinkosten 18.000, zusammen 96.000 als fertige Erzeugnisse in den Vorräten. Die Aktivierung neutralisiert den Aufwand: Material, Löhne und Gemeinkosten haben das Ergebnis nicht gemindert, denn ihnen steht der Zugang bei den Vorräten gegenüber. Das ist die sachliche Abgrenzung aus Runde 2: Der Aufwand kommt erst, wenn die Räder verkauft werden. Deshalb bleibt unser Eigenkapital in dieser Runde unverändert, während die Bilanzsumme auf 740.000 springt. Und die Bank? Nur noch 30.000. Lena verordnet Kostendisziplin bis zum Jahresende.',
        },
      ],
      merksatz: 'Aktivieren heißt: heute kein Aufwand, die Bilanz wächst.',
    },
  ],
  quiz: [
    {
      id: 'R4-Q1',
      frage: 'Wie wirken Rabatt und Skonto auf die Anschaffungskosten?',
      antworten: [
        'Beide bleiben unberücksichtigt',
        'Rabatte mindern sofort, Skonti mindern bei tatsächlicher Inanspruchnahme',
        'Nur Rabatte mindern, Skonti nie',
        'Nur Skonti mindern, Rabatte nie',
        'Beide erhöhen die Anschaffungskosten',
      ],
      richtig: 1,
      erklaerung:
        'Anschaffungspreisminderungen sind abzusetzen (§ 203 Abs 2 UGB). Der Skonto zählt erst, wenn er tatsächlich gezogen wird.',
    },
    {
      id: 'R4-Q2',
      frage: 'Was gehört NICHT zu den Anschaffungskosten einer Maschine?',
      antworten: [
        'Transportkosten',
        'Montagekosten',
        'Anteilige Verwaltungsgemeinkosten des Einkaufs',
        'Zölle',
        'Kosten des Probelaufs',
      ],
      richtig: 2,
      erklaerung:
        'Anschaffungsnebenkosten müssen einzeln zurechenbar sein. Gemeinkosten des Einkaufs sind es nicht.',
    },
    {
      id: 'R4-Q3',
      frage:
        'AlpenRad ist vorsteuerabzugsberechtigt. Wie geht die Umsatzsteuer in die Anschaffungskosten ein?',
      antworten: ['Voll', 'Zur Hälfte', 'Gar nicht, es zählt der Nettobetrag', 'Nur bei Anlagevermögen', 'Wahlweise'],
      richtig: 2,
      erklaerung:
        'Die abziehbare Vorsteuer ist ein durchlaufender Posten und gehört nicht zu den Anschaffungskosten.',
    },
    {
      id: 'R4-Q4',
      frage: 'Der Marktwert der Halle steigt über die Anschaffungskosten. Was gilt für die Bilanz?',
      antworten: [
        'Zuschreibung auf den Marktwert',
        'Ansatz höchstens zu den (fortgeführten) Anschaffungskosten',
        'Ansatz zum Mittelwert',
        'Wahlrecht',
        'Ausweis der Differenz als Ertrag',
      ],
      richtig: 1,
      erklaerung:
        '§ 203 Abs 1 UGB: Die Anschaffungs- oder Herstellungskosten sind die Obergrenze, unrealisierte Gewinne bleiben außen vor.',
    },
    {
      id: 'R4-Q5',
      frage: 'Welche Bestandteile MÜSSEN in die Herstellungskosten?',
      antworten: [
        'Nur die Einzelkosten',
        'Einzelkosten plus angemessene Teile der fixen und variablen Gemeinkosten der Fertigung',
        'Sämtliche Kosten des Unternehmens',
        'Einzelkosten plus Vertriebskosten',
        'Nur die Materialkosten',
      ],
      richtig: 1,
      erklaerung:
        '§ 203 Abs 3 UGB: Einzelkosten und angemessene Teile der nur mittelbar zurechenbaren fixen und variablen Gemeinkosten sind Pflicht.',
    },
    {
      id: 'R4-Q6',
      frage: 'Dürfen Kosten der allgemeinen Verwaltung in die Herstellungskosten?',
      antworten: [
        'Ja, als Wahlrecht wie im deutschen HGB',
        'Ja, als Pflicht',
        'Nein, das UGB verbietet ihre Einbeziehung',
        'Nur bei Großaufträgen ohne Ausnahme',
        'Nur mit Zustimmung des Abschlussprüfers',
      ],
      richtig: 2,
      erklaerung:
        '§ 203 Abs 3 letzter Satz UGB: Kosten der allgemeinen Verwaltung und des Vertriebs dürfen nicht einbezogen werden. Das deutsche Verwaltungskosten-Wahlrecht gibt es im UGB nicht.',
    },
    {
      id: 'R4-Q7',
      frage: 'Was gilt für Fremdkapitalzinsen bei der Herstellung?',
      antworten: [
        'Immer Pflichtbestandteil der Herstellungskosten',
        'Wahlrecht für den Zeitraum der Herstellung, mit Anhangangabe',
        'Stets verboten',
        'Nur bei Krediten der Hausbank ansetzbar',
        'Nur im Umlaufvermögen ansetzbar',
      ],
      richtig: 1,
      erklaerung:
        '§ 203 Abs 4 UGB: Ansatzwahlrecht für herstellungsbezogene Fremdkapitalzinsen, die Ausübung ist im Anhang anzugeben.',
    },
    {
      id: 'R4-Q8',
      frage:
        'Die Fertigung war offenbar unterbeschäftigt, die Gemeinkosten je Stück sind dadurch überhöht. Was gilt?',
      antworten: [
        'Die vollen Ist-Gemeinkosten sind anzusetzen',
        'Nur die einer durchschnittlichen Beschäftigung entsprechenden Teile dürfen eingerechnet werden',
        'Gar keine Gemeinkosten mehr ansetzen',
        'Die Leerkosten sind zu aktivieren',
        'Die Produktion ist zu stoppen',
      ],
      richtig: 1,
      erklaerung:
        '§ 203 Abs 3 UGB: Bei offenbarer Unterbeschäftigung dürfen nur durchschnittliche Gemeinkostenanteile eingerechnet werden, Leerkosten gehören nicht in die Herstellungskosten.',
    },
    {
      id: 'R4-Q9',
      frage: 'Wann beginnt die planmäßige Abschreibung und wie wird das erste Jahr gerechnet?',
      antworten: [
        'Ab Bestellung, volles Jahr',
        'Ab Inbetriebnahme, monatsgenau (pro rata temporis)',
        'Ab Bezahlung, halbes Jahr',
        'Immer erst im Folgejahr',
        'Ab Lieferung, volles Jahr',
      ],
      richtig: 1,
      erklaerung:
        'Abgeschrieben wird ab Inbetriebnahme, im ersten Jahr zeitanteilig nach Monaten, auf volle Monate gerundet.',
    },
    {
      id: 'R4-Q10',
      frage: 'Welche Position wird NICHT planmäßig abgeschrieben?',
      antworten: [
        'Die Montagelinie',
        'Das Gebäude',
        'Das Grundstück',
        'Die CAD-Softwarelizenz',
        'Die Schweißanlage',
      ],
      richtig: 2,
      erklaerung:
        'Grundstücke nutzen sich nicht ab, sie kennen nur die außerplanmäßige Abschreibung. Alles andere hat eine begrenzte Nutzungsdauer.',
    },
  ],
  faelle: [
    {
      id: 'F4-1',
      titel: 'Die Halle',
      sachverhalt:
        'Der Kaufvertrag für die Halle in Graz-Puntigam liegt am Tisch. Kaufpreis 400.000 Euro, davon entfallen laut Gutachten 120.000 auf den Grund und 280.000 auf das Gebäude. Die Abrechnung nennt außerdem: Grunderwerbsteuer 14.000 Euro, Eintragungsgebühr 4.400 Euro, Vertragserrichtung durch den Notar 9.600 Euro. Die Nebenkosten sind im Verhältnis der Kaufpreisanteile auf Grund und Gebäude aufzuteilen. Finanziert wird mit dem neuen Investitionsdarlehen über 450.000 Euro.',
      teilaufgaben: [
        {
          id: 'F4-1a',
          typ: 'zahl',
          frage: 'Wie hoch sind die gesamten Anschaffungskosten der Liegenschaft (in Euro)?',
          punkte: 6,
          loesung: 428000,
          einheit: 'EUR',
        },
        {
          id: 'F4-1b',
          typ: 'choice',
          frage: 'Gehört die Grunderwerbsteuer zu den Anschaffungskosten?',
          optionen: [
            'Nein, Steuern sind nie Anschaffungskosten',
            'Ja, als einzeln zurechenbare Anschaffungsnebenkosten',
            'Nur zur Hälfte',
            'Nur, wenn die Bank zustimmt',
          ],
          richtig: 1,
          punkte: 4,
        },
        {
          id: 'F4-1c',
          typ: 'zahl',
          frage:
            'Wie hoch sind die Anschaffungskosten des Gebäudes nach Aufteilung der Nebenkosten (in Euro)?',
          punkte: 6,
          loesung: 299600,
          einheit: 'EUR',
        },
        {
          id: 'F4-1d',
          typ: 'choice',
          frage: 'Wird der Grundanteil künftig planmäßig abgeschrieben?',
          optionen: [
            'Ja, wie das Gebäude über 40 Jahre',
            'Ja, aber nur über 80 Jahre',
            'Nein, Grund und Boden ist nicht abnutzbar',
            'Nur bei sinkenden Bodenpreisen',
          ],
          richtig: 2,
          punkte: 4,
        },
      ],
      hilfe:
        'Anschaffungskosten sind Kaufpreis plus alle einzeln zurechenbaren Nebenkosten (Grunderwerbsteuer, Eintragung, Vertragserrichtung). Für die Aufteilung: Das Gebäude trägt 280.000 von 400.000, also 70 Prozent der Nebenkosten von 28.000.',
      loesung:
        'Anschaffungskosten gesamt: 400.000 plus 14.000 plus 4.400 plus 9.600 gleich 428.000 Euro (§ 203 Abs 2 UGB, alle drei Positionen sind einzeln zurechenbare Nebenkosten). Aufteilung der Nebenkosten von 28.000 im Verhältnis 30 zu 70: Grund 8.400, Gebäude 19.600. Damit Grund 128.400 und Gebäude 299.600 Euro. Nur das Gebäude wird planmäßig abgeschrieben (40 Jahre, monatsgenau ab Inbetriebnahme im Juli), der Grund ist nicht abnutzbar und kennt nur die außerplanmäßige Abschreibung.',
    },
    {
      id: 'F4-2',
      titel: 'Rabatt, Skonto, Montage',
      sachverhalt:
        'Die neue Schweißanlage: Listenpreis 40.000 Euro netto, Händlerrabatt 10 Prozent. Bei Zahlung binnen 14 Tagen werden 2 Prozent Skonto vom rabattierten Preis gewährt, AlpenRad zahlt fristgerecht. Dazu kommen Transport 1.200 Euro und Montage durch den Hersteller 2.520 Euro, jeweils netto. AlpenRad ist vorsteuerabzugsberechtigt, alle Beträge verstehen sich ohne Umsatzsteuer.',
      teilaufgaben: [
        {
          id: 'F4-2a',
          typ: 'zahl',
          frage:
            'Wie viel Euro zahlt AlpenRad für die Anlage selbst (nach Rabatt und Skonto, ohne Transport und Montage)?',
          punkte: 6,
          loesung: 35280,
          einheit: 'EUR',
        },
        {
          id: 'F4-2b',
          typ: 'zahl',
          frage: 'Wie hoch sind die Anschaffungskosten der Schweißanlage insgesamt (in Euro)?',
          punkte: 8,
          loesung: 39000,
          einheit: 'EUR',
        },
        {
          id: 'F4-2c',
          typ: 'choice',
          frage: 'Wie ist die Umsatzsteuer zu behandeln?',
          optionen: [
            'Sie erhöht die Anschaffungskosten',
            'Sie bleibt als abziehbare Vorsteuer außen vor, es zählt der Nettobetrag',
            'Sie wird zur Hälfte aktiviert',
            'Sie ist sofort Aufwand',
          ],
          richtig: 1,
          punkte: 6,
        },
      ],
      hilfe:
        'Rechne in Schritten: Listenpreis minus 10 Prozent, davon minus 2 Prozent. Dann Transport und Montage als Nebenkosten dazu. Die Umsatzsteuer ist bei Vorsteuerabzug ein durchlaufender Posten.',
      loesung:
        'Listenpreis 40.000 minus 10 Prozent Rabatt ergibt 36.000, minus 2 Prozent Skonto (720) ergibt 35.280 Euro. Beide Minderungen sind abzusetzen, der Skonto, weil er tatsächlich in Anspruch genommen wurde (§ 203 Abs 2 UGB). Plus Transport 1.200 und Montage 2.520 als einzeln zurechenbare Nebenkosten: Anschaffungskosten 39.000 Euro. Die Umsatzsteuer gehört bei Vorsteuerabzugsberechtigung nicht zu den Anschaffungskosten, gerechnet wird netto.',
    },
    {
      id: 'F4-3',
      titel: 'Was kostet ein Lastenrad von innen?',
      sachverhalt:
        'Zwölf Lastenräder sind fertig und liegen als erste Serie im Lager. Die Betriebsabrechnung zeigt: Fertigungsmaterial 48.000 Euro, Fertigungslöhne 30.000 Euro, angemessene Material- und Fertigungsgemeinkosten 18.000 Euro. Außerdem weist die Abrechnung aus: anteilige Kosten der allgemeinen Verwaltung 6.000 Euro, anteilige Vertriebskosten 4.000 Euro und freiwillige Sozialleistungen der Fertigung 1.500 Euro. Jakob will ‚möglichst viel in die Bilanz packen‘, Mag. Huber verlangt zuerst den Pflichtansatz.',
      teilaufgaben: [
        {
          id: 'F4-3a',
          typ: 'zahl',
          frage: 'Wie hoch ist der Pflichtumfang der Herstellungskosten der Serie (in Euro)?',
          punkte: 8,
          loesung: 96000,
          einheit: 'EUR',
        },
        {
          id: 'F4-3b',
          typ: 'choice',
          frage: 'Dürfen die Verwaltungs- und Vertriebsanteile (6.000 und 4.000) einbezogen werden?',
          optionen: [
            'Ja, beide als Wahlrecht',
            'Nur die Verwaltung',
            'Nein, beide sind von der Einbeziehung ausgeschlossen',
            'Nur bis 10 Prozent der Einzelkosten',
          ],
          richtig: 2,
          punkte: 6,
        },
        {
          id: 'F4-3c',
          typ: 'choice',
          frage: 'Und die freiwilligen Sozialleistungen von 1.500?',
          optionen: [
            'Pflichtbestandteil',
            'Wahlrecht, sie dürfen eingerechnet werden',
            'Verbot',
            'Nur steuerlich ansetzbar',
          ],
          richtig: 1,
          punkte: 6,
        },
      ],
      hilfe:
        'Pflicht sind Einzelkosten (Material, Löhne) plus angemessene fixe und variable Gemeinkosten der Fertigung. Verwaltung und Vertrieb sind im UGB tabu. Für Sozialleistungen gibt es ein eigenes Wahlrecht im Gesetzestext.',
      loesung:
        'Pflichtumfang: 48.000 Fertigungsmaterial plus 30.000 Fertigungslöhne plus 18.000 angemessene Gemeinkosten gleich 96.000 Euro (§ 203 Abs 3 UGB, die fertigungsnahen Gemeinkosten sind Pflicht). Kosten der allgemeinen Verwaltung und des Vertriebs dürfen nicht einbezogen werden (§ 203 Abs 3 letzter Satz UGB), sie sind Aufwand der Periode. Die freiwilligen Sozialleistungen dürfen eingerechnet werden (Wahlrecht nach § 203 Abs 3 UGB), AlpenRad verzichtet darauf und bleibt beim Pflichtansatz von 96.000 Euro, das entspricht 8.000 Euro je Rad.',
    },
    {
      id: 'F4-4',
      titel: 'Der Abschreibungsplan',
      sachverhalt:
        'Mag. Huber lässt Dich den Abschreibungsplan für die Montagelinie aufstellen: Anschaffungskosten 120.000 Euro, Nutzungsdauer 10 Jahre, lineares Verfahren, in Betrieb seit Anfang Mai. Gebucht wird die Abschreibung erst zum Abschlussstichtag.',
      teilaufgaben: [
        {
          id: 'F4-4a',
          typ: 'zahl',
          frage: 'Wie hoch ist die volle Jahresabschreibung (in Euro)?',
          punkte: 5,
          loesung: 12000,
          einheit: 'EUR',
        },
        {
          id: 'F4-4b',
          typ: 'zahl',
          frage:
            'Wie hoch ist die Abschreibung im ersten Jahr bei monatsgenauer Rechnung ab Mai (in Euro)?',
          punkte: 5,
          loesung: 8000,
          einheit: 'EUR',
        },
        {
          id: 'F4-4c',
          typ: 'choice',
          frage: 'Welches Verfahren liefert jedes Jahr gleich hohe Beträge?',
          optionen: ['Das degressive', 'Das lineare', 'Das leistungsabhängige', 'Das progressive'],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'F4-4d',
          typ: 'choice',
          frage: 'Wann wird die Abschreibung in unserem Spieljahr gebucht?',
          optionen: [
            'Sofort bei Inbetriebnahme im Mai',
            'Monatlich mit der Miete',
            'Zum Abschlussstichtag 31.12., bei uns in Runde 5',
            'Erst beim Verkauf der Maschine',
          ],
          richtig: 2,
          punkte: 5,
        },
      ],
      hilfe:
        'Jahresabschreibung: Anschaffungskosten durch Nutzungsdauer. Erstes Jahr: Mai bis Dezember sind 8 Monate, also 8/12 der Jahresabschreibung.',
      loesung:
        'Jahresabschreibung: 120.000 durch 10 gleich 12.000 Euro. Im ersten Jahr läuft die Nutzung von Mai bis Dezember, also 8 von 12 Monaten: 12.000 mal 8/12 gleich 8.000 Euro (pro rata temporis). Das lineare Verfahren verteilt gleichmäßig, degressiv fällt, leistungsabhängig schwankt mit der Leistung, progressiv ist nur in Ausnahmefällen GoB-konform. Gebucht wird zum Abschlussstichtag: In Runde 5 werden alle planmäßigen Abschreibungen des Jahres (laut Anlagenverzeichnis zusammen 15.695 Euro) in der Bilanz wirksam.',
    },
  ],
  bilanzDelta: {
    erlaeuterung:
      'Der große Sommer: Die Liegenschaft in Graz-Puntigam ist gekauft (Grund 128.400, Gebäude 299.600, finanziert über das neue Investitionsdarlehen von 450.000), die Schweißanlage 39.000 ist montiert, und zwölf Lastenräder liegen mit Herstellungskosten von 96.000 als fertige Erzeugnisse im Lager (Materialverbrauch 48.000, Löhne und Gemeinkosten 48.000 gegen Bank). Die Aktivierung neutralisiert den Aufwand, das Eigenkapital bleibt unverändert, die Bilanzsumme springt auf 740.000. Die Bank ist mit 30.000 knapp, Lena verordnet Kostendisziplin.',
    neuerStichtagLabel: 'Bilanz nach Runde 4 (Sommer)',
    neuePosten: [
      {
        seite: 'aktiva',
        gruppe: 'Anlagevermögen',
        postenEinfuegenVor: 'maschinen',
        posten: { id: 'grundstuecke', name: 'Grundstücke' },
      },
      {
        seite: 'aktiva',
        gruppe: 'Anlagevermögen',
        postenEinfuegenVor: 'maschinen',
        posten: { id: 'gebaeude', name: 'Gebäude' },
      },
    ],
    aenderungen: [
      { postenId: 'bank', delta: -65000 },
      { postenId: 'grundstuecke', delta: 128400 },
      { postenId: 'gebaeude', delta: 299600 },
      { postenId: 'maschinen', delta: 39000 },
      { postenId: 'vorraete', delta: 48000 },
      { postenId: 'bankdarlehen', delta: 450000 },
    ],
  },
};
