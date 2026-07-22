// Lektion R7 "Rueckstellungen": Vorsorgen, was ungewiss ist.
//
// Rechtsstand 21.07.2026, § 198 Abs 8 UGB im Volltext geprueft (Vorphase),
// § 201 Abs 2 Z 4 und § 211 gegen Skript Teil H abgeglichen. Alle
// Rueckstellungen des Spieljahres sind kurzfristig, die Abzinsung nach § 211
// kommt daher nicht zur Anwendung.
//
// Alle fachlichen Texte und Bilanzwerte stammen woertlich beziehungsweise
// zahlengenau aus dem Mega-Prompt 8 (Runde 7) und duerfen nicht veraendert
// werden. Die Antwortreihenfolgen sind bereits gleichverteilt vorgegeben.

import type { Lektion } from '../typen';

export const lektionR7: Lektion = {
  id: 'R7',
  titel: 'Rückstellungen',
  untertitel: 'Vorsorgen, was ungewiss ist',
  intro: {
    story:
      'Silvester rückt näher, der Abschluss ist fast fertig. Fast. Mag. Huber legt drei Akten auf den Tisch: die Gewährleistungsstatistik der verkauften Räder, eine Klage wegen eines Lackschadens und die Urlaubsliste mit offenen Resttagen. ‚Das ist die Königsdisziplin der Vorsicht‘, sagt sie. ‚Verpflichtungen, die schon entstanden sind, deren Höhe oder Zeitpunkt aber keiner kennt. Wer hier schlampt, hat nächstes Jahr die Rechnung ohne Deckung.‘ Jakob seufzt: ‚Und ich dachte, wir feiern heute die schwarze Null.‘ Huber lächelt: ‚Mal sehen, was nach den Rückstellungen davon übrig ist.‘',
    inhalte: [
      'Begriff und Wesen der Rückstellungen (§ 198 Abs 8 UGB)',
      'Pflicht, Wahlrecht und Verbot: der Katalog des § 198 Abs 8',
      'Bewertung mit dem bestmöglich geschätzten Erfüllungsbetrag (§ 211 UGB)',
      'Lebenszyklus: Bildung, Verbrauch, Auflösung, dazu Schlussbilanz und Gesamtauswertung',
    ],
    lernziele: [
      'Du grenzt Rückstellungen von Verbindlichkeiten und Eventualschulden ab',
      'Du wendest Pflichtkatalog, Wahlrecht und Verbot des § 198 Abs 8 UGB sicher an',
      'Du bewertest Rückstellungen vorsichtig, auch bei gleichwahrscheinlichen Werten',
      'Du stellst die Schlussbilanz der AlpenRad GmbH fertig',
    ],
  },
  kacheln: [
    {
      id: 'R7-K1',
      titel: 'Was ist eine Rückstellung?',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Rückstellungen sind Schulden, deren Existenz oder Höhe unsicher ist. Der Aufwand ist am Bilanzstichtag noch nicht exakt bestimmbar, wurde aber in der abgelaufenen Periode begründet und wird in der Zukunft genau bekannt. Damit stehen sie zwischen den sicheren Verbindlichkeiten und den bloßen Eventualschulden: Sprechen mehr Gründe für als gegen die Verpflichtung, wird zurückgestellt. Sprechen mehr dagegen, bleibt es beim Haftungsverhältnis unter der Bilanz (§ 199 UGB, Runde 3).',
        },
        {
          typ: 'absatz',
          text: 'Die Wurzeln kennst Du aus Runde 2: Das Vollständigkeitsgebot verlangt den Ansatz aller Schulden, und das Imparitätsprinzip (§ 201 Abs 2 Z 4 lit b UGB) verlangt, erkennbare Risiken und drohende Verluste sofort zu erfassen, auch wenn die Zahlung erst später fällig wird. Gebucht wird die Bildung als Aufwand gegen den Passivposten Rückstellungen.',
        },
        {
          typ: 'beispiel',
          text: 'Die Klage wegen des Lackschadens: Ob und wie viel AlpenRad zahlen muss, entscheidet das Gericht erst nächstes Jahr. Die Ursache liegt aber im alten Jahr, also wird heuer vorgesorgt.',
        },
      ],
      merksatz:
        'Sicher heißt Verbindlichkeit, wahrscheinlich heißt Rückstellung, unwahrscheinlich heißt unter die Bilanz.',
    },
    {
      id: 'R7-K2',
      titel: 'Die Pflichtfälle des § 198 Abs 8 Z 1 und Z 4',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Rückstellungen SIND zu bilden für ungewisse Verbindlichkeiten und für drohende Verluste aus schwebenden Geschäften, die am Abschlussstichtag wahrscheinlich oder sicher, aber in Höhe oder Zeitpunkt unbestimmt sind (§ 198 Abs 8 Z 1 UGB). Typische ungewisse Verbindlichkeiten: Gewährleistungen und Produkthaftung, Prozess- und Beratungskosten, Steuernachzahlungen, ausstehende Rechnungen für die Abschlusserstellung.',
        },
        {
          typ: 'absatz',
          text: 'Der Insbesondere-Katalog der Z 4 nennt ausdrücklich: Anwartschaften auf Abfertigungen, laufende Pensionen und Pensionsanwartschaften, Kulanzen, nicht konsumierten Urlaub, Jubiläumsgelder, Heimfallasten und Produkthaftungsrisiken sowie gesetzliche Rücknahme- und Verwertungspflichten. Kulanzen sind der Sonderfall der wirtschaftlichen Verpflichtung: keine Rechtspflicht, aber wer nicht leistet, schadet sich selbst, deshalb ausdrücklich rückstellungspflichtig.',
        },
        {
          typ: 'beispiel',
          text: 'Die offenen Resturlaubstage des Teams sind eine bereits verdiente, der Höhe nach schwankende Verpflichtung: Rückstellung nach § 198 Abs 8 Z 4 lit c UGB.',
        },
      ],
      merksatz: 'Z 1 ist die Regel, Z 4 die ausdrückliche Liste, Kulanz zählt trotz fehlender Rechtspflicht.',
    },
    {
      id: 'R7-K3',
      titel: 'Wahlrecht und Verbot',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Aufwandsrückstellungen DÜRFEN gebildet werden: für ihrer Eigenart nach genau umschriebene, dem Geschäftsjahr oder einem früheren zuzuordnende Aufwendungen, die wahrscheinlich oder sicher, aber in Höhe oder Zeitpunkt unbestimmt sind. Zu bilden sind sie, soweit das den Grundsätzen ordnungsmäßiger Buchführung entspricht (§ 198 Abs 8 Z 2 UGB). Das ist die Innenverpflichtung, eine Verpflichtung gegen sich selbst, Hauptbeispiel: die ins Folgejahr verschobene Instandhaltung.',
        },
        {
          typ: 'absatz',
          text: 'Andere als die gesetzlich vorgesehenen Rückstellungen dürfen NICHT gebildet werden, und für unwesentliche Beträge besteht keine Pflicht (§ 198 Abs 8 Z 3 UGB). Ein allgemeiner ‚Polster für schlechte Zeiten‘ wäre Willkür und ist verboten, das kennst Du sinngemäß schon aus Runde 3. Und wie jedes Wahlrecht bindet auch die Aufwandsrückstellung über die Stetigkeit.',
        },
        {
          typ: 'beispiel',
          text: 'Die auf Jänner verschobene Wartung der Montagelinie (2.500 Euro) wäre eine klassische Aufwandsrückstellung. AlpenRad verzichtet auf das Wahlrecht, der Bank soll ein möglichst gutes Ergebnis gezeigt werden, und diese Entscheidung gilt künftig stetig.',
        },
      ],
      merksatz: 'Innenverpflichtung ist Wahlrecht, Fantasierückstellung ist verboten.',
    },
    {
      id: 'R7-K4',
      titel: 'Bewertung nach § 211 UGB',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Rückstellungen sind mit dem Erfüllungsbetrag anzusetzen, der bestmöglich zu schätzen ist, künftige Kosten- und Gehaltssteigerungen eingerechnet. Der angesetzte Wert darf nicht unter dem Erwartungswert liegen, und von mehreren gleichwahrscheinlichen Werten ist der höhere zu wählen, sofern das der vernünftigen kaufmännischen Beurteilung entspricht. Schätzgrundlage sind Erfahrungswerte (§ 201 Abs 2 Z 7 UGB), bei Gewährleistungen etwa die Schadensstatistik der Branche.',
        },
        {
          typ: 'absatz',
          text: 'Für langfristige Verpflichtungen gilt: Rückstellungen mit einer Restlaufzeit über einem Jahr sind mit einem marktüblichen Zinssatz abzuzinsen, Abfertigungs-, Pensions- und Jubiläumsgeldrückstellungen werden versicherungsmathematisch bewertet. Bei AlpenRad sind heuer alle Rückstellungen kurzfristig, die Abzinsung bleibt also Theorie für später.',
        },
        {
          typ: 'beispiel',
          text: 'Lackschaden-Klage: Die Anwältin nennt 6.000 oder 8.000 Euro Gesamtkosten, beides gleich wahrscheinlich. Angesetzt werden 8.000, das verlangt die Vorsicht.',
        },
      ],
      merksatz: 'Bestmöglich schätzen, im Zweifel der höhere Wert, langfristig abzinsen.',
    },
    {
      id: 'R7-K5',
      titel: 'Bildung, Verbrauch, Auflösung',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Der Lebenszyklus hat drei Stationen. Bildung: Aufwand an Rückstellungen, das Ergebnis sinkt heute, obwohl noch kein Euro fließt. Verbrauch: Tritt die Verpflichtung ein, wird die Rückstellung gegen Bank ausgebucht, das Ergebnis bleibt dann unberührt, soweit die Vorsorge gereicht hat. War sie zu niedrig, entsteht zusätzlicher Aufwand, war sie zu hoch, wird der Rest als Ertrag aufgelöst.',
        },
        {
          typ: 'absatz',
          text: 'Auflösung: Rückstellungen dürfen nur aufgelöst werden, wenn der Grund für ihre Bildung entfallen ist, etwa wenn der Prozess gewonnen wird. Dann wird der volle Betrag ertragswirksam ausgebucht. Ein Umwidmen für andere Zwecke gibt es nicht, jede Rückstellung hängt an ihrem Grund.',
        },
        {
          typ: 'beispiel',
          text: 'Gewinnt AlpenRad die Lackschaden-Klage im Frühjahr, werden die 8.000 als Ertrag aufgelöst. Zahlt AlpenRad 7.000, werden 7.000 verbraucht und 1.000 aufgelöst.',
        },
      ],
      merksatz: 'Gebildet aus Aufwand, verbraucht bei Eintritt, aufgelöst nur mit Grund.',
    },
    {
      id: 'R7-K6',
      titel: 'Silvester: die Schlussbilanz steht',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Drei Rückstellungen gehen in die Bücher, zusammen 16.600: Gewährleistung 5.400 (3 Prozent vom Jahresumsatz 180.000), Prozessrisiko 8.000, nicht konsumierter Urlaub 3.200. Zwei Kandidaten fallen nach Prüfung durch: Der Februar-Liefervertrag bringt 66.000 Erlös bei 63.000 Kosten, ohne Verpflichtungsüberschuss keine Drohverlustrückstellung. Und die verschobene Wartung bleibt unberücksichtigt, das Aufwandsrückstellungs-Wahlrecht wird nicht ausgeübt.',
        },
        {
          typ: 'absatz',
          text: 'Das Ergebnis sinkt von plus 19.305 auf plus 2.705: eine knappe, ehrliche schwarze Null im Gründungsjahr. Die Bilanzreise der AlpenRad GmbH: 250.000 zur Gründung, 290.000 nach den ersten Investitionen, 740.000 nach dem Hallenkauf, 704.305 nach den Abschreibungen, 719.305 nach dem Dezembergeschäft, und jetzt die Schlussbilanz mit vollständiger Passivseite: Eigenkapital, Rückstellungen, Verbindlichkeiten. Lena hebt das Glas: ‚Auf das erste Jahr. Und auf Dich, Du hast jede Zahl davon im Griff.‘ Nach der Auswertung wartet Deine Gesamtauswertung.',
        },
      ],
      merksatz: 'Erst die Vorsorge, dann die schwarze Null.',
    },
  ],
  quiz: [
    {
      id: 'R7-Q1',
      frage: 'Was kennzeichnet eine Rückstellung?',
      antworten: [
        'Eine Schuld, die dem Grunde oder der Höhe nach ungewiss ist, deren Ursache aber in der abgelaufenen Periode liegt',
        'Eine nach Grund und Höhe sichere Schuld',
        'Ein Posten des Eigenkapitals',
        'Eine freiwillige Sparreserve',
        'Ein Vermögensgegenstand',
      ],
      richtig: 0,
      erklaerung:
        'Rückstellungen sind ungewisse Schulden mit Vergangenheitsbezug. Sichere Schulden sind Verbindlichkeiten, Eigenkapital ist Residualgröße.',
    },
    {
      id: 'R7-Q2',
      frage: 'Es sprechen mehr Gründe GEGEN eine Inanspruchnahme als dafür. Was gilt?',
      antworten: [
        'Rückstellung in halber Höhe',
        'Rückstellung in voller Höhe',
        'Passivierung als Verbindlichkeit',
        'Keine Rückstellung, sondern Ausweis als Haftungsverhältnis unter der Bilanz',
        'Ansatz als Forderung',
      ],
      richtig: 3,
      erklaerung:
        'Unwahrscheinliche Verpflichtungen sind Eventualschulden: kein Bilanzansatz, sondern Haftungsverhältnis nach § 199 UGB.',
    },
    {
      id: 'R7-Q3',
      frage: 'Wofür MÜSSEN nach § 198 Abs 8 Z 1 UGB Rückstellungen gebildet werden?',
      antworten: [
        'Für künftige Investitionen',
        'Für ungewisse Verbindlichkeiten und drohende Verluste aus schwebenden Geschäften',
        'Für erwartete Umsatzrückgänge',
        'Für geplante Werbekampagnen',
        'Für Dividendenwünsche der Gesellschafter',
      ],
      richtig: 1,
      erklaerung:
        'Z 1 nennt die beiden Pflichtfälle: ungewisse Verbindlichkeiten und Drohverluste, jeweils wahrscheinlich oder sicher, aber in Höhe oder Zeitpunkt unbestimmt.',
    },
    {
      id: 'R7-Q4',
      frage: 'Welcher Posten steht AUSDRÜCKLICH im Katalog des § 198 Abs 8 Z 4 UGB?',
      antworten: [
        'Reparaturen des Folgejahres',
        'Allgemeine Konjunkturrisiken',
        'Künftige Mieten',
        'Werbebudgets',
        'Nicht konsumierter Urlaub',
      ],
      richtig: 4,
      erklaerung:
        'Der Katalog nennt unter anderem Abfertigungen, Pensionen, Kulanzen, nicht konsumierten Urlaub, Jubiläumsgelder und Produkthaftungsrisiken.',
    },
    {
      id: 'R7-Q5',
      frage: 'Welchen Charakter haben Aufwandsrückstellungen nach § 198 Abs 8 Z 2 UGB?',
      antworten: [
        'Striktes Verbot',
        'Uneingeschränkte Pflicht',
        'Wahlrecht für genau umschriebene Innenverpflichtungen, zu bilden soweit GoB-konform',
        'Nur für Kapitalgesellschaften erlaubt',
        'Nur mit Zustimmung des Abschlussprüfers',
      ],
      richtig: 2,
      erklaerung:
        'Aufwandsrückstellungen sind Verpflichtungen gegen sich selbst: grundsätzlich Wahlrecht, Bildungspflicht nur, soweit die GoB es verlangen.',
    },
    {
      id: 'R7-Q6',
      frage: 'Darf AlpenRad eine Rückstellung ‚für allgemeine Geschäftsrisiken‘ bilden?',
      antworten: [
        'Nein, andere als die gesetzlich vorgesehenen Rückstellungen dürfen nicht gebildet werden',
        'Ja, Vorsicht erlaubt alles',
        'Ja, bis 5 Prozent der Bilanzsumme',
        'Ja, mit Gesellschafterbeschluss',
        'Nur im Gründungsjahr',
      ],
      richtig: 0,
      erklaerung:
        '§ 198 Abs 8 Z 3 UGB: Fantasierückstellungen sind verboten, das wäre willkürliche Ergebnissteuerung.',
    },
    {
      id: 'R7-Q7',
      frage: 'Mit welchem Wert werden Rückstellungen angesetzt?',
      antworten: [
        'Mit dem niedrigsten denkbaren Betrag',
        'Mit dem Nennwert der letzten Rechnung',
        'Immer mit dem Mittelwert aller Szenarien',
        'Mit dem bestmöglich geschätzten Erfüllungsbetrag, künftige Kosten- und Gehaltssteigerungen eingerechnet',
        'Mit dem Börsenkurs',
      ],
      richtig: 3,
      erklaerung:
        '§ 211 UGB: bestmögliche Schätzung des Erfüllungsbetrags, nicht unter dem Erwartungswert.',
    },
    {
      id: 'R7-Q8',
      frage: 'Zwei Beträge sind gleich wahrscheinlich. Welcher wird angesetzt?',
      antworten: [
        'Der niedrigere',
        'Der höhere, sofern das der vernünftigen kaufmännischen Beurteilung entspricht',
        'Der Mittelwert',
        'Gar keiner',
        'Der zuerst genannte',
      ],
      richtig: 1,
      erklaerung: 'Von mehreren gleichwahrscheinlichen Werten verlangt die Vorsicht den höheren.',
    },
    {
      id: 'R7-Q9',
      frage: 'Was gilt für Rückstellungen mit einer Restlaufzeit über einem Jahr?',
      antworten: [
        'Sie dürfen nicht gebildet werden',
        'Sie werden verdoppelt',
        'Sie werden in Verbindlichkeiten umgegliedert',
        'Sie bleiben unverzinst stehen',
        'Sie sind mit einem marktüblichen Zinssatz abzuzinsen',
      ],
      richtig: 4,
      erklaerung:
        '§ 211 UGB: Langfristige Rückstellungen werden abgezinst, Sozialkapital (Abfertigungen, Pensionen, Jubiläumsgelder) wird versicherungsmathematisch bewertet.',
    },
    {
      id: 'R7-Q10',
      frage: 'Wann darf eine Rückstellung aufgelöst werden?',
      antworten: [
        'Jederzeit nach Ermessen',
        'Immer zum Quartalsende',
        'Nur, wenn der Grund für ihre Bildung entfallen ist',
        'Sobald das Ergebnis zu niedrig ausfällt',
        'Nie',
      ],
      richtig: 2,
      erklaerung:
        'Auflösung setzt den Wegfall des Grundes voraus, etwa den gewonnenen Prozess. Ergebniskosmetik ist kein Auflösungsgrund.',
    },
  ],
  faelle: [
    {
      id: 'F7-1',
      titel: 'Die Gewährleistungsstatistik',
      sachverhalt:
        'Die verkauften Räder laufen, aber erfahrungsgemäß verursachen Garantiefälle Kosten von rund 3 Prozent des Umsatzes, so kennst Du es seit Runde 2. Der gebuchte Jahresumsatz beträgt 180.000 Euro. Wann die einzelnen Garantiefälle kommen und was genau sie kosten, weiß niemand.',
      teilaufgaben: [
        {
          id: 'F7-1a',
          typ: 'zahl',
          frage: 'Wie hoch ist die Gewährleistungsrückstellung (in Euro)?',
          punkte: 6,
          loesung: 5400,
          einheit: 'EUR',
        },
        {
          id: 'F7-1b',
          typ: 'choice',
          frage: 'Auf welcher Grundlage ist sie zu bilden?',
          optionen: [
            'Freiwillig, als Wahlrecht',
            'Gar nicht, Garantie ist Zukunftssache',
            'Nur bei bereits gemeldeten Schäden',
            'Als Pflicht für ungewisse Verbindlichkeiten nach § 198 Abs 8 Z 1 UGB',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'F7-1c',
          typ: 'choice',
          frage:
            'Ein Kunde außerhalb der Garantiefrist wird aus Kulanz repariert werden. Was gilt für solche Kulanzleistungen?',
          optionen: [
            'Ausdrücklich rückstellungspflichtig nach dem Katalog des § 198 Abs 8 Z 4 lit c UGB',
            'Rückstellung verboten, da keine Rechtspflicht',
            'Nur als Haftungsverhältnis auszuweisen',
            'Direkt vom Eigenkapital abzuziehen',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'F7-1d',
          typ: 'choice',
          frage: 'Wie wirkt die Bildung auf Ergebnis und Bank?',
          optionen: [
            'Ergebnis und Bank sinken sofort',
            'Nur die Bank sinkt',
            'Das Ergebnis sinkt heute, Geld fließt erst bei Inanspruchnahme',
            'Keine Wirkung bis zum Garantiefall',
          ],
          richtig: 2,
          punkte: 4,
        },
      ],
      hilfe:
        '3 Prozent von 180.000. Für die Rechtsgrundlage: Ist die Verpflichtung dem Grunde nach wahrscheinlich und nur in Höhe und Zeitpunkt offen? Für Kulanz: Denk an den Insbesondere-Katalog.',
      loesung:
        'Rückstellung: 3 Prozent von 180.000 gleich 5.400 Euro, gestützt auf die Erfahrungswerte der Branche (§ 201 Abs 2 Z 7 UGB). Gewährleistungen sind ungewisse Verbindlichkeiten, die Bildung ist Pflicht (§ 198 Abs 8 Z 1 UGB). Kulanzen stehen trotz fehlender Rechtspflicht ausdrücklich im Katalog (§ 198 Abs 8 Z 4 lit c UGB), die wirtschaftliche Verpflichtung genügt. Gebucht wird Aufwand an Rückstellungen: Das Ergebnis sinkt heuer um 5.400, die Bank bleibt unberührt, bis echte Garantiefälle bezahlt werden.',
    },
    {
      id: 'F7-2',
      titel: 'Die Lackschaden-Klage',
      sachverhalt:
        'Ein Kunde klagt wegen eines großflächigen Lackschadens an seinem Lastenrad. Die Anwältin schätzt die Niederlage als wahrscheinlich ein und beziffert die Gesamtkosten (Schadenersatz, Gericht, Vertretung) mit 6.000 oder 8.000 Euro, beide Ausgänge gleich wahrscheinlich. Das Urteil fällt erst im Frühjahr.',
      teilaufgaben: [
        {
          id: 'F7-2a',
          typ: 'choice',
          frage: 'Ist zum 31.12. eine Rückstellung zu bilden?',
          optionen: [
            'Nein, erst mit dem Urteil',
            'Ja, die Inanspruchnahme ist wahrscheinlich und die Ursache liegt im alten Jahr',
            'Nein, Prozesse sind nie rückstellungsfähig',
            'Nur, wenn der Kunde gewinnt',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'F7-2b',
          typ: 'zahl',
          frage: 'In welcher Höhe (in Euro)?',
          punkte: 6,
          loesung: 8000,
          einheit: 'EUR',
        },
        {
          id: 'F7-2c',
          typ: 'choice',
          frage: 'Warum dieser Betrag?',
          optionen: [
            'Es gilt immer der Maximalschaden',
            'Der Mittelwert 7.000 wäre zu ungenau',
            'Der Kunde hat 8.000 gefordert',
            'Von gleichwahrscheinlichen Werten ist nach § 211 UGB der höhere anzusetzen',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'F7-2d',
          typ: 'choice',
          frage: 'AlpenRad gewinnt den Prozess im Frühjahr. Was passiert mit der Rückstellung?',
          optionen: [
            'Sie wird ertragswirksam aufgelöst, der Grund ist entfallen',
            'Sie bleibt für künftige Prozesse stehen',
            'Sie wird in eine Verbindlichkeit umgebucht',
            'Sie wird dem Stammkapital zugeschlagen',
          ],
          richtig: 0,
          punkte: 4,
        },
      ],
      hilfe:
        'Prüfe: Ursache im alten Jahr, Inanspruchnahme wahrscheinlich, Höhe unbestimmt. Bei zwei gleichwahrscheinlichen Beträgen entscheidet die Vorsicht. Und eine Rückstellung hängt an ihrem Grund.',
      loesung:
        'Die Verurteilung ist wahrscheinlich, die Ursache (Lieferung des mangelhaften Rads) liegt im abgelaufenen Jahr: Rückstellungspflicht nach § 198 Abs 8 Z 1 UGB, unabhängig vom Urteilstermin (§ 201 Abs 2 Z 4 lit b UGB). Höhe: Von den gleichwahrscheinlichen 6.000 und 8.000 ist der höhere Wert anzusetzen (§ 211 UGB, bestmögliche Schätzung unter Vorsicht), also 8.000 Euro. Wird der Prozess gewonnen, ist der Grund entfallen und die Rückstellung wird in voller Höhe ertragswirksam aufgelöst. Ergebniskosmetik ist kein Auflösungsgrund.',
    },
    {
      id: 'F7-3',
      titel: 'Urlaub, Wartung und die Versuchung',
      sachverhalt:
        'Drei Themen aus der Abschlussbesprechung. Erstens: Laut Urlaubsliste sind Resturlaube offen, bewertet mit 3.200 Euro Personalaufwand. Zweitens: Die Jahreswartung der Montagelinie (2.500 Euro) wurde wegen des Dezembergeschäfts auf Jänner verschoben. Drittens: Jakob schlägt vor, ‚gleich noch 10.000 als Polster für schlechte Zeiten‘ zurückzustellen.',
      teilaufgaben: [
        {
          id: 'F7-3a',
          typ: 'zahl',
          frage: 'In welcher Höhe ist für den Resturlaub zurückzustellen (in Euro)?',
          punkte: 5,
          loesung: 3200,
          einheit: 'EUR',
        },
        {
          id: 'F7-3b',
          typ: 'choice',
          frage: 'Auf welcher Grundlage?',
          optionen: [
            'Wahlrecht nach § 198 Abs 8 Z 2 UGB',
            'Kein Ansatz, Urlaub ist Privatsache',
            'Pflicht, nicht konsumierter Urlaub steht im Katalog des § 198 Abs 8 Z 4 lit c UGB',
            'Nur im Anhang zu erwähnen',
          ],
          richtig: 2,
          punkte: 5,
        },
        {
          id: 'F7-3c',
          typ: 'choice',
          frage: 'Und die verschobene Wartung (2.500)?',
          optionen: [
            'Pflichtrückstellung wie die Gewährleistung',
            'Aufwandsrückstellung als Wahlrecht (§ 198 Abs 8 Z 2 UGB), AlpenRad verzichtet wegen des angestrebten hohen Gewinnausweises, künftig stetig',
            'Verbotene Rückstellung',
            'Als Verbindlichkeit zu passivieren',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'F7-3d',
          typ: 'choice',
          frage: 'Und Jakobs Polster von 10.000?',
          optionen: [
            'Zulässig als Vorsichtsmaßnahme',
            'Zulässig bis 5 Prozent der Bilanzsumme',
            'Zulässig mit Beschluss der Generalversammlung',
            'Verboten: andere als die gesetzlich vorgesehenen Rückstellungen dürfen nicht gebildet werden (§ 198 Abs 8 Z 3 UGB)',
          ],
          richtig: 3,
          punkte: 5,
        },
      ],
      hilfe:
        'Urlaub steht wörtlich im Gesetz. Die Wartung ist eine Verpflichtung gegen sich selbst. Und für den Polster: Runde 3, Frage 9, dasselbe Verbot.',
      loesung:
        'Resturlaub: bereits verdiente Ansprüche, ausdrücklich im Katalog (§ 198 Abs 8 Z 4 lit c UGB), Rückstellung 3.200 Euro Pflicht. Verschobene Wartung: eine genau umschriebene Innenverpflichtung, also Aufwandsrückstellung mit Wahlrechtscharakter (§ 198 Abs 8 Z 2 UGB). AlpenRad übt das Wahlrecht nicht aus, konsistent mit der Linie des hohen Gewinnausweises aus Runde 4, und bleibt über die Stetigkeit daran gebunden. Jakobs Polster: verboten nach § 198 Abs 8 Z 3 UGB, Rückstellungen brauchen einen konkreten Grund, sonst wären Ergebnisse beliebig steuerbar.',
    },
    {
      id: 'F7-4',
      titel: 'Schlussstrich: die Bilanz zum 31.12.',
      sachverhalt:
        'Letzte Prüfung vor der Schlussbilanz: Für Februar besteht ein fixer Liefervertrag über fünf Lastenräder zum vereinbarten Preis von 66.000 Euro, die kalkulierten Herstellungskosten betragen 63.000 Euro. Danach werden die Rückstellungen gebucht (Gewährleistung 5.400, Prozess 8.000, Urlaub 3.200) und die Bilanz geschlossen. Vor den Rückstellungen steht das Ergebnis bei plus 19.305, die Bilanzsumme bei 719.305.',
      teilaufgaben: [
        {
          id: 'F7-4a',
          typ: 'choice',
          frage: 'Ist für den Februar-Vertrag eine Drohverlustrückstellung zu bilden?',
          optionen: [
            'Ja, jeder schwebende Vertrag ist rückzustellen',
            'Ja, in Höhe der Herstellungskosten 63.000',
            'Nein, der Erlös übersteigt die Kosten, es droht kein Verlust',
            'Ja, in Höhe des Gewinns 3.000',
          ],
          richtig: 2,
          punkte: 5,
        },
        {
          id: 'F7-4b',
          typ: 'zahl',
          frage: 'Wie hoch ist die Summe der gebuchten Rückstellungen (in Euro)?',
          punkte: 5,
          loesung: 16600,
          einheit: 'EUR',
        },
        {
          id: 'F7-4c',
          typ: 'zahl',
          frage: 'Mit welchem Jahresergebnis schließt die AlpenRad GmbH (in Euro)?',
          punkte: 5,
          loesung: 2705,
          einheit: 'EUR',
        },
        {
          id: 'F7-4d',
          typ: 'zahl',
          frage: 'Wie hoch ist die Bilanzsumme der Schlussbilanz (in Euro)?',
          punkte: 5,
          loesung: 719305,
          einheit: 'EUR',
        },
      ],
      hilfe:
        'Drohverlust braucht einen Verpflichtungsüberschuss: Kosten über Erlös. Für die Zahlen: 5.400 plus 8.000 plus 3.200, dann 19.305 minus diese Summe. Die Rückstellungsbildung verschiebt Passiva nur um: Die Bilanzsumme bleibt gleich.',
      loesung:
        'Februar-Vertrag: Der vereinbarte Erlös von 66.000 übersteigt die kalkulierten Kosten von 63.000, das schwebende Geschäft ist ausgeglichen, es droht kein Verlust, also keine Rückstellung (§ 198 Abs 8 Z 1 UGB verlangt einen DROHENDEN Verlust, ein entgehender Traumgewinn genügt nicht). Rückstellungen gesamt: 5.400 plus 8.000 plus 3.200 gleich 16.600 Euro. Ergebnis: 19.305 minus 16.600 gleich plus 2.705 Euro, die knappe schwarze Null des Gründungsjahres. Bilanzsumme: unverändert 719.305 Euro, denn die Bildung tauscht innerhalb der Passiva (Ergebnis sinkt, Rückstellungen entstehen), die Aktivseite bleibt unberührt.',
    },
  ],
  bilanzDelta: {
    erlaeuterung:
      'Die Abschlussbuchungen: Gewährleistungsrückstellung 5.400, Prozessrückstellung 8.000, Urlaubsrückstellung 3.200, zusammen 16.600 Aufwand. Der Februar-Liefervertrag bleibt ohne Rückstellung (kein drohender Verlust), das Wartungs-Wahlrecht wird nicht ausgeübt. Das Ergebnis sinkt auf plus 2.705: die schwarze Null steht, die Schlussbilanz der AlpenRad GmbH ist fertig. Mag. Huber nickt: ‚Vorsichtig, vollständig, nachvollziehbar. Genau so schließt man ein Jahr.‘',
    neuerStichtagLabel: 'Schlussbilanz zum 31.12.',
    neuePosten: [
      {
        seite: 'passiva',
        gruppe: 'Rückstellungen',
        gruppeEinfuegenVor: 'Verbindlichkeiten',
        posten: { id: 'rueckstellungen', name: 'Rückstellungen' },
      },
    ],
    aenderungen: [
      { postenId: 'ergebnis', delta: -16600 },
      { postenId: 'rueckstellungen', delta: 16600 },
    ],
  },
};
