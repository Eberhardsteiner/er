// Zusatzmodul Z1 "Eigenkapital": Wem gehoert die AlpenRad GmbH?
//
// Rechtsstand 21.07.2026, § 229 UGB im Volltext geprueft. Hinweis: Gebundene
// Ruecklagen (§ 229 Abs 4 bis 7) betreffen nur Aktiengesellschaften und
// grosse GmbH, die AlpenRad GmbH ist klein. Aussagen zur Beschlussfassung der
// Gesellschafter sind bewusst allgemein gehalten.
//
// Alle fachlichen Texte und Bilanzwerte stammen woertlich beziehungsweise
// zahlengenau aus dem Mega-Prompt Z1 und duerfen nicht veraendert werden.
// Das Delta wirkt nur auf die Vertiefungsbilanz zum 1. Jaenner.

import type { Zusatzmodul } from '../typen';

export const modulZ1: Zusatzmodul = {
  id: 'Z1',
  titel: 'Eigenkapital',
  untertitel: 'Wem gehört die AlpenRad GmbH?',
  intro: {
    story:
      'Mitte Jänner, das neue Geschäftsjahr ist wenige Tage alt. Die Eröffnungsbilanz gleicht der Schlussbilanz, das kennst Du als Bilanzidentität. Da platzt Lena mit Neuigkeiten herein: DI Petra Waldner, Business-Angel aus Graz, will einsteigen. 50.000 Euro neue Stammeinlage, aber sie zahlt 60.000, denn AlpenRad ist heute mehr wert als bei der Gründung. Jakob runzelt die Stirn: ‚Wohin mit den 10.000, die zu viel sind?‘ Mag. Huber lacht: ‚Die sind nicht zu viel. Die sind Eigenkapital, und zwar ein ganz bestimmtes. Zeit, dass Du die Passivseite ganz oben verstehst.‘',
    inhalte: [
      'Wesen und Funktionen des Eigenkapitals',
      'Die Gliederung: Nennkapital, Kapitalrücklagen, Gewinnrücklagen, Bilanzgewinn (§ 224 Abs 3 A, § 229 UGB)',
      'Kapitalerhöhung mit Aufgeld',
      'Ergebnisverwendung und negatives Eigenkapital',
    ],
    lernziele: [
      'Du erklärst das Eigenkapital als Residualgröße und Haftungsfonds',
      'Du ordnest Vorgänge den richtigen Eigenkapitalposten zu',
      'Du buchst eine Kapitalerhöhung mit Aufgeld',
      'Du beurteilst, was ausgeschüttet werden darf und was ein negatives Eigenkapital bedeutet',
    ],
  },
  kacheln: [
    {
      id: 'Z1-K1',
      titel: 'Was ist Eigenkapital?',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Eigenkapital ist die Residualgröße der Bilanz: Vermögen minus Schulden, das kennst Du seit Runde 1. Es gehört den Gesellschaftern, steht aber der Gesellschaft dauerhaft zur Verfügung und haftet den Gläubigern als Puffer: Verluste treffen zuerst das Eigenkapital, bevor Fremdkapitalgeber Ausfälle erleiden. Deshalb wacht das Recht so streng über seine Erhaltung (Kapitalerhaltung, Runde 1).',
        },
        {
          typ: 'absatz',
          text: 'Bei der AlpenRad GmbH besteht das Eigenkapital zum 1. Jänner aus dem Stammkapital von 100.000 und dem Bilanzgewinn von 2.705, zusammen 102.705. Jeder Gewinn erhöht es, jeder Verlust und jede Ausschüttung mindert es.',
        },
        {
          typ: 'beispiel',
          text: 'Von der Bilanzsumme 719.305 sind 616.600 fremdfinanziert (Rückstellungen und Verbindlichkeiten). Der Rest, 102.705, ist die Eigenkapitalquote von rund 14 Prozent, für ein Gründungsjahr mit Hallenkauf kein schlechter Wert, findet die Bank.',
        },
      ],
      merksatz: 'Eigenkapital ist, was übrig bleibt, und haftet zuerst.',
    },
    {
      id: 'Z1-K2',
      titel: 'Die Gliederung des Eigenkapitals',
      bloecke: [
        {
          typ: 'absatz',
          text: '§ 224 Abs 3 A UGB gliedert das Eigenkapital in vier Ebenen: das Nennkapital (bei der GmbH Stammkapital), die Kapitalrücklagen, die Gewinnrücklagen und den Bilanzgewinn oder Bilanzverlust, in dem auch der Gewinn- oder Verlustvortrag aus Vorjahren steckt. Beim eingeforderten Nennkapital sind der Betrag der übernommenen Einlagen und das einbezahlte Nennkapital anzugeben (§ 229 Abs 1 UGB).',
        },
        {
          typ: 'absatz',
          text: 'Die Herkunft unterscheidet die Ebenen: Nennkapital und Kapitalrücklagen kommen von AUSSEN, von den Gesellschaftern (Außenfinanzierung). Gewinnrücklagen dürfen nur aus dem Jahresüberschuss gebildet werden (§ 229 Abs 3 UGB), sie kommen also von INNEN, aus einbehaltenen Gewinnen. Der Bilanzgewinn ist der noch unverteilte Rest.',
        },
        {
          typ: 'beispiel',
          text: 'Nach Waldners Einstieg zeigt AlpenRad alle Ebenen außer den Gewinnrücklagen: Stammkapital 150.000, Kapitalrücklagen 10.000, Bilanzgewinn 2.705.',
        },
      ],
      merksatz: 'Von außen: Kapital und Kapitalrücklage. Von innen: Gewinnrücklage und Bilanzgewinn.',
    },
    {
      id: 'Z1-K3',
      titel: 'Kapitalerhöhung mit Aufgeld',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Übernimmt ein Gesellschafter neue Anteile über dem Nennbetrag, heißt der Mehrbetrag Aufgeld (Agio). Nur der Nennbetrag erhöht das Stammkapital, das Aufgeld ist als Kapitalrücklage auszuweisen (§ 229 Abs 2 Z 1 UGB). Wirtschaftlich bezahlt der neue Gesellschafter damit die stillen Werte, die die bisherigen Gesellschafter aufgebaut haben, etwa Marke, Kundenstamm und Know-how, die als originäre Werte nicht in der Bilanz stehen (Runde 3).',
        },
        {
          typ: 'absatz',
          text: 'Die Buchung ist eine Bilanzverlängerung: Bank steigt um den vollen Zahlungsbetrag, auf der Passivseite wachsen Stammkapital um den Nennbetrag und Kapitalrücklage um das Aufgeld. Das Ergebnis bleibt unberührt, Einlagen der Gesellschafter sind niemals Ertrag.',
        },
        {
          typ: 'beispiel',
          text: 'Waldner zahlt 60.000 für 50.000 nominal: Bank plus 60.000, Stammkapital plus 50.000, Kapitalrücklage plus 10.000.',
        },
      ],
      merksatz: 'Nennbetrag ins Kapital, Aufgeld in die Rücklage, nie in den Gewinn.',
    },
    {
      id: 'Z1-K4',
      titel: 'Gebundene Rücklagen: der Blick zu den Großen',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Aktiengesellschaften und große GmbH müssen gebundene Rücklagen ausweisen (§ 229 Abs 4 UGB): die gebundene Kapitalrücklage (unter anderem das Aufgeld, § 229 Abs 5) und die gesetzliche Rücklage, die jährlich mit mindestens einem Zwanzigstel des um einen Verlustvortrag geminderten Jahresüberschusses zu dotieren ist, bis die gebundenen Rücklagen ein Zehntel des Nennkapitals erreichen (§ 229 Abs 6 UGB).',
        },
        {
          typ: 'absatz',
          text: 'Gebundene Rücklagen dürfen nur zum Ausgleich eines ansonsten auszuweisenden Bilanzverlustes aufgelöst werden (§ 229 Abs 7 UGB), ausschütten lassen sie sich nie. Für die kleine AlpenRad GmbH gilt diese Bindung nicht, ihr Aufgeld liegt in einer nicht gebundenen Kapitalrücklage. Wächst AlpenRad aber über die Größenklassen-Schwellen aus Runde 1, ändert sich das.',
        },
        {
          typ: 'beispiel',
          text: 'Eine große GmbH mit 200.000 Nennkapital und 60.000 Jahresüberschuss ohne Verlustvortrag müsste mindestens 3.000 in die gesetzliche Rücklage einstellen, bis gebundene Rücklagen von 20.000 erreicht sind.',
        },
      ],
      merksatz: 'Bei AG und großer GmbH ist das Polster gesetzlich verriegelt.',
    },
    {
      id: 'Z1-K5',
      titel: 'Ergebnisverwendung: Wem gehört der Gewinn?',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Über die Verwendung des Bilanzgewinns entscheiden die Gesellschafter durch Beschluss: ausschütten, auf neue Rechnung vortragen oder in Gewinnrücklagen einstellen. Ausgeschüttet werden darf nur der Bilanzgewinn, niemals das Stammkapital und niemals gebundene Rücklagen, das ist die Kapitalerhaltung aus Runde 1 in Aktion.',
        },
        {
          typ: 'absatz',
          text: 'Der wichtigste Denkfehler zum Schluss: Rücklagen sind KEIN Geld. Sie sind Passivposten, die zeigen, welcher Teil des Vermögens den Gesellschaftern zuzurechnen ist und im Unternehmen bleibt. Ob dafür Liquidität vorhanden ist, zeigt allein die Aktivseite. Eine Gesellschaft kann hohe Rücklagen und ein leeres Bankkonto haben, und umgekehrt.',
        },
        {
          typ: 'beispiel',
          text: 'AlpenRads Bilanzgewinn von 2.705 könnte theoretisch ausgeschüttet werden. Lena winkt ab: ‚Der bleibt drin. Wir tragen ihn vor.‘ Der Gewinnvortrag erscheint im nächsten Abschluss innerhalb des Bilanzgewinns.',
        },
      ],
      merksatz: 'Ausschütten nur aus dem Bilanzgewinn, und Rücklagen sind kein Bankguthaben.',
    },
    {
      id: 'Z1-K6',
      titel: 'Wenn das Polster reißt: negatives Eigenkapital',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Übersteigen die Verluste das Eigenkapital, kippt die Residualgröße ins Minus: Die Schulden sind größer als das Vermögen. Ein solcher Negativbetrag ist als eigener Posten ‚negatives Eigenkapital‘ auszuweisen (§ 225 Abs 1 UGB). Das ist das stärkste Alarmsignal der Bilanz, denn der Haftungsfonds der Gläubiger ist aufgezehrt.',
        },
        {
          typ: 'absatz',
          text: 'Rechnerisch negatives Eigenkapital bedeutet aber nicht automatisch das Ende: Ob insolvenzrechtliche Überschuldung vorliegt, ist gesondert zu beurteilen, dabei spielen stille Reserven und die Fortbestehensprognose eine Rolle. Für den Jahresabschluss gilt: ehrlich ausweisen und erläutern, nicht verstecken.',
        },
        {
          typ: 'beispiel',
          text: 'Eine GmbH mit 35.000 Stammkapital und 52.000 kumuliertem Bilanzverlust weist 17.000 negatives Eigenkapital aus. Die AlpenRad GmbH ist mit 102.705 davon erfreulich weit entfernt.',
        },
      ],
      merksatz: 'Unter null wird das Eigenkapital zum Alarmposten mit Erklärungspflicht.',
    },
  ],
  quiz: [
    {
      id: 'Z1-Q1',
      frage: 'Wie ermittelt sich das Eigenkapital?',
      antworten: [
        'Bankguthaben plus Kassa',
        'Vermögen minus Schulden, als Residualgröße',
        'Stammkapital mal zwei',
        'Umsatz minus Aufwand',
        'Bilanzsumme minus Anlagevermögen',
      ],
      richtig: 1,
      erklaerung:
        'Eigenkapital ist der Rest des Vermögens nach Abzug aller Schulden und haftet den Gläubigern als Puffer.',
    },
    {
      id: 'Z1-Q2',
      frage: 'Welche vier Ebenen gliedern das Eigenkapital nach § 224 Abs 3 A UGB?',
      antworten: [
        'Bank, Kassa, Forderungen, Vorräte',
        'Anlage- und Umlaufvermögen, Rückstellungen, Verbindlichkeiten',
        'Umsatz, Aufwand, Gewinn, Verlust',
        'Grundkapital, Agio, Dividende, Tantieme',
        'Nennkapital, Kapitalrücklagen, Gewinnrücklagen, Bilanzgewinn oder Bilanzverlust',
      ],
      richtig: 4,
      erklaerung:
        'So gliedert die Bilanz das Eigenkapital, im Bilanzgewinn steckt auch der Gewinn- oder Verlustvortrag.',
    },
    {
      id: 'Z1-Q3',
      frage:
        'Petra Waldner zahlt 60.000 für eine Stammeinlage von 50.000 nominal. Wohin gehören die 10.000 Aufgeld?',
      antworten: [
        'In die Kapitalrücklage (§ 229 Abs 2 Z 1 UGB)',
        'In den Bilanzgewinn',
        'In die Umsatzerlöse',
        'In eine Rückstellung',
        'Auf ein Verrechnungskonto der Gesellschafterin',
      ],
      richtig: 0,
      erklaerung:
        'Der über den Nennbetrag hinaus erzielte Betrag ist als Kapitalrücklage auszuweisen, niemals als Ertrag.',
    },
    {
      id: 'Z1-Q4',
      frage: 'Eine GmbH weist hohe Gewinnrücklagen aus. Was bedeutet das für ihre Liquidität?',
      antworten: [
        'Sie hat mindestens diesen Betrag auf der Bank',
        'Sie kann jederzeit in dieser Höhe ausschütten',
        'Zunächst nichts, Rücklagen sind Passivposten und kein Geld, die Liquidität zeigt die Aktivseite',
        'Sie ist überschuldet',
        'Sie muss Steuern nachzahlen',
      ],
      richtig: 2,
      erklaerung:
        'Rücklagen dokumentieren einbehaltene Mittel der Eigentümer. Ob Geld da ist, entscheidet allein die Aktivseite.',
    },
    {
      id: 'Z1-Q5',
      frage: 'Woraus dürfen Gewinnrücklagen gebildet werden?',
      antworten: [
        'Aus Einzahlungen der Gesellschafter',
        'Aus Krediten',
        'Aus dem Aufgeld',
        'Nur aus dem Jahresüberschuss dieses oder eines früheren Geschäftsjahres (§ 229 Abs 3 UGB)',
        'Aus Zuschreibungen beliebiger Art',
      ],
      richtig: 3,
      erklaerung:
        'Gewinnrücklagen sind Innenfinanzierung: einbehaltene Gewinne. Von außen kommendes Kapital gehört in Nennkapital und Kapitalrücklagen.',
    },
    {
      id: 'Z1-Q6',
      frage: 'Wie wirkt die Kapitalerhöhung auf die Bilanz?',
      antworten: [
        'Als Ertrag in der GuV',
        'Als Bilanzverlängerung: Bank steigt, Stammkapital und Kapitalrücklage steigen, das Ergebnis bleibt unberührt',
        'Als Aktivtausch',
        'Als Bilanzverkürzung',
        'Gar nicht, bis das Firmenbuch einträgt',
      ],
      richtig: 1,
      erklaerung:
        'Einlagen der Gesellschafter sind niemals Ertrag, beide Bilanzseiten wachsen um den Einzahlungsbetrag.',
    },
    {
      id: 'Z1-Q7',
      frage: 'Wer muss gebundene Rücklagen ausweisen?',
      antworten: [
        'Jede GmbH',
        'Nur Einzelunternehmen',
        'Nur Genossenschaften',
        'Niemand, sie sind freiwillig',
        'Aktiengesellschaften und große GmbH (§ 229 Abs 4 UGB)',
      ],
      richtig: 4,
      erklaerung:
        'Die Bindung aus § 229 Abs 4 bis 7 UGB trifft AG und große GmbH. Die kleine AlpenRad GmbH ist (noch) nicht erfasst.',
    },
    {
      id: 'Z1-Q8',
      frage: 'Wofür dürfen gebundene Rücklagen verwendet werden?',
      antworten: [
        'Nur zum Ausgleich eines ansonsten auszuweisenden Bilanzverlustes (§ 229 Abs 7 UGB)',
        'Für Ausschüttungen in guten Jahren',
        'Für Investitionen jeder Art',
        'Für Prämien der Geschäftsführung',
        'Für den Rückkauf von Maschinen',
      ],
      richtig: 0,
      erklaerung: 'Gebundene Rücklagen sind verriegelt, sie fangen nur Bilanzverluste ab.',
    },
    {
      id: 'Z1-Q9',
      frage: 'Wer entscheidet bei der GmbH über die Verwendung des Bilanzgewinns?',
      antworten: [
        'Die Hausbank',
        'Das Firmenbuchgericht',
        'Die Gesellschafter durch Beschluss',
        'Der Steuerberater',
        'Die Mitarbeiter',
      ],
      richtig: 2,
      erklaerung:
        'Ausschüttung, Vortrag oder Rücklagendotierung sind Sache der Gesellschafter. Grenze bleibt der Bilanzgewinn.',
    },
    {
      id: 'Z1-Q10',
      frage: 'Die Verluste übersteigen das Eigenkapital. Wie wird ausgewiesen?',
      antworten: [
        'Das Eigenkapital wird auf null gesetzt',
        'Die Schulden werden gekürzt',
        'Die Bilanz wird nicht mehr aufgestellt',
        'Als Posten ‚negatives Eigenkapital‘ (§ 225 Abs 1 UGB)',
        'Als Forderung gegen die Gesellschafter',
      ],
      richtig: 3,
      erklaerung:
        'Der Negativbetrag wird offen gezeigt. Ob insolvenzrechtliche Überschuldung vorliegt, ist eine gesonderte Frage.',
    },
  ],
  faelle: [
    {
      id: 'FZ1-1',
      titel: 'Der Einstieg von Petra Waldner',
      sachverhalt:
        'Am 15. Jänner ist es fix: DI Petra Waldner übernimmt eine neue Stammeinlage von 50.000 Euro nominal und zahlt dafür 60.000 Euro, sofort und zur Gänze per Banküberweisung. Der Mehrbetrag ist das Aufgeld für die aufgebauten Werte der AlpenRad GmbH.',
      teilaufgaben: [
        {
          id: 'FZ1-1a',
          typ: 'zahl',
          frage: 'Um wie viel Euro steigt das Bankguthaben?',
          punkte: 5,
          loesung: 60000,
          einheit: 'EUR',
        },
        {
          id: 'FZ1-1b',
          typ: 'zahl',
          frage: 'Wie hoch ist das Aufgeld (in Euro)?',
          punkte: 5,
          loesung: 10000,
          einheit: 'EUR',
        },
        {
          id: 'FZ1-1c',
          typ: 'choice',
          frage: 'Wie ist das Aufgeld auszuweisen?',
          optionen: [
            'Als Kapitalrücklage nach § 229 Abs 2 Z 1 UGB',
            'Als Umsatzerlös',
            'Als Bilanzgewinn',
            'Als Verbindlichkeit gegenüber der Gesellschafterin',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'FZ1-1d',
          typ: 'choice',
          frage: 'Wie hoch ist das Eigenkapital nach dem Einstieg?',
          optionen: [
            '102.705, es ändert sich nichts',
            '152.705',
            '162.705 (Stammkapital 150.000, Kapitalrücklage 10.000, Bilanzgewinn 2.705)',
            '60.000',
          ],
          richtig: 2,
          punkte: 5,
        },
      ],
      hilfe:
        'Die volle Zahlung fließt auf die Bank. Nur der Nennbetrag erhöht das Stammkapital, der Rest ist Aufgeld. Für d: altes Eigenkapital 102.705 plus die gesamte Einzahlung.',
      loesung:
        'Bank steigt um die volle Einzahlung von 60.000 Euro. Das Aufgeld beträgt 60.000 minus 50.000 gleich 10.000 Euro und ist als Kapitalrücklage auszuweisen (§ 229 Abs 2 Z 1 UGB), niemals als Ertrag. Das Eigenkapital wächst um die vollen 60.000 auf 162.705 Euro: Stammkapital 150.000, Kapitalrücklagen 10.000, Bilanzgewinn 2.705. Die Bilanz verlängert sich auf 779.305 Euro, das siehst Du gleich in der Vertiefungsbilanz.',
    },
    {
      id: 'FZ1-2',
      titel: 'Sortieren auf der obersten Etage',
      sachverhalt:
        'Mag. Huber legt Dir fünf Sachverhalte vor. Ordne jeden dem richtigen Eigenkapitalposten zu.',
      teilaufgaben: [
        {
          id: 'FZ1-2a',
          typ: 'choice',
          frage: 'Der Nennbetrag von Waldners neuer Stammeinlage (50.000)',
          optionen: [
            'Stammkapital (Nennkapital)',
            'Kapitalrücklagen',
            'Gewinnrücklagen',
            'Bilanzgewinn oder Bilanzverlust (samt Vortrag)',
          ],
          richtig: 0,
          punkte: 4,
        },
        {
          id: 'FZ1-2b',
          typ: 'choice',
          frage: 'Waldners Aufgeld (10.000)',
          optionen: [
            'Stammkapital (Nennkapital)',
            'Kapitalrücklagen',
            'Gewinnrücklagen',
            'Bilanzgewinn oder Bilanzverlust (samt Vortrag)',
          ],
          richtig: 1,
          punkte: 4,
        },
        {
          id: 'FZ1-2c',
          typ: 'choice',
          frage:
            'Ein Betrag, den die Gesellschafter aus dem Jahresüberschuss für künftige Vorhaben einbehalten und gesondert ausweisen',
          optionen: [
            'Stammkapital (Nennkapital)',
            'Kapitalrücklagen',
            'Gewinnrücklagen',
            'Bilanzgewinn oder Bilanzverlust (samt Vortrag)',
          ],
          richtig: 2,
          punkte: 4,
        },
        {
          id: 'FZ1-2d',
          typ: 'choice',
          frage: 'Die 2.705 aus dem ersten Geschäftsjahr vor der Verwendungsentscheidung',
          optionen: [
            'Stammkapital (Nennkapital)',
            'Kapitalrücklagen',
            'Gewinnrücklagen',
            'Bilanzgewinn oder Bilanzverlust (samt Vortrag)',
          ],
          richtig: 3,
          punkte: 4,
        },
        {
          id: 'FZ1-2e',
          typ: 'choice',
          frage: 'Ein Verlustvortrag aus einem schlechten Vorjahr',
          optionen: [
            'Stammkapital (Nennkapital)',
            'Kapitalrücklagen',
            'Gewinnrücklagen',
            'Bilanzgewinn oder Bilanzverlust (samt Vortrag)',
          ],
          richtig: 3,
          punkte: 4,
        },
      ],
      hilfe:
        'Von außen einbezahlt: Nennbetrag ins Stammkapital, Mehrbetrag in die Kapitalrücklage. Von innen verdient: einbehalten in die Gewinnrücklage, unverteilt im Bilanzgewinn, dort steckt auch jeder Vortrag.',
      loesung:
        'Der Nennbetrag erhöht das Stammkapital, das Aufgeld die Kapitalrücklagen (§ 229 Abs 2 Z 1 UGB), von außen kommt beides. Aus dem Jahresüberschuss einbehaltene Beträge sind Gewinnrücklagen (§ 229 Abs 3 UGB). Der unverteilte Gewinn steht im Bilanzgewinn, und auch Gewinn- oder Verlustvorträge sind Bestandteil dieses Postens (§ 224 Abs 3 A UGB).',
    },
    {
      id: 'FZ1-3',
      titel: 'Was tun mit 2.705?',
      sachverhalt:
        'Die Gesellschafter beraten über den Bilanzgewinn von 2.705 Euro aus dem ersten Jahr. Auf dem Bankkonto liegen nach Waldners Einstieg 150.000 Euro. Jakob träumt kurz von einer ‚Dividende von 150.000‘, Lena will alles im Unternehmen lassen.',
      teilaufgaben: [
        {
          id: 'FZ1-3a',
          typ: 'choice',
          frage: 'Wer entscheidet über die Verwendung?',
          optionen: [
            'Die Steirische Landesbank',
            'Mag. Huber als Bilanzbuchhalterin',
            'Die Gesellschafter durch Beschluss',
            'Das Firmenbuchgericht',
          ],
          richtig: 2,
          punkte: 5,
        },
        {
          id: 'FZ1-3b',
          typ: 'choice',
          frage: 'Was ist die Obergrenze einer Ausschüttung?',
          optionen: [
            'Der Bilanzgewinn von 2.705, nicht das Bankguthaben',
            'Das Bankguthaben von 150.000',
            'Das Stammkapital von 150.000',
            'Die Bilanzsumme',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'FZ1-3c',
          typ: 'zahl',
          frage:
            'Die Gesellschafter beschließen den vollständigen Vortrag auf neue Rechnung. Mit welchem Betrag (in Euro) erscheint der Gewinnvortrag im nächsten Bilanzgewinn?',
          punkte: 5,
          loesung: 2705,
          einheit: 'EUR',
        },
        {
          id: 'FZ1-3d',
          typ: 'choice',
          frage: 'Warum darf das Stammkapital nicht ausgeschüttet werden?',
          optionen: [
            'Weil es der Bank verpfändet ist',
            'Weil es der gebundene Haftungsfonds der Gläubiger ist (Kapitalerhaltung)',
            'Weil es steuerlich ungünstig wäre',
            'Weil es dafür kein Konto gibt',
          ],
          richtig: 1,
          punkte: 5,
        },
      ],
      hilfe:
        'Beschlusssache der Eigentümer. Ausschüttungsobjekt ist der Bilanzgewinn, nicht die Liquidität. Und denk an Runde 1: Kapitalerhaltung schützt die Gläubiger.',
      loesung:
        'Die Gesellschafter beschließen über Ausschüttung, Vortrag oder Rücklagendotierung. Obergrenze jeder Ausschüttung ist der Bilanzgewinn von 2.705 Euro, Jakobs 150.000 sind Bankguthaben und größtenteils gebundenes Vermögen der Gesellschaft. Beim vollständigen Vortrag erscheinen die 2.705 im Folgejahr als Gewinnvortrag innerhalb des Bilanzgewinns. Das Stammkapital ist der Haftungsfonds der Gläubiger und bleibt unantastbar, das ist die Kapitalerhaltung aus Runde 1.',
    },
    {
      id: 'FZ1-4',
      titel: 'Wenn das Polster reißt (Übungsszenario)',
      sachverhalt:
        'Ein Übungsszenario von Mag. Huber ohne Bezug zu unseren Büchern: Die Schnee-Sport GmbH hat 35.000 Euro Stammkapital, keine Rücklagen und nach mehreren harten Wintern einen kumulierten Bilanzverlust von 52.000 Euro.',
      teilaufgaben: [
        {
          id: 'FZ1-4a',
          typ: 'zahl',
          frage: 'Wie hoch ist das negative Eigenkapital (in Euro, als positive Zahl)?',
          punkte: 5,
          loesung: 17000,
          einheit: 'EUR',
        },
        {
          id: 'FZ1-4b',
          typ: 'choice',
          frage: 'Wie ist es auszuweisen?',
          optionen: [
            'Gar nicht, das Eigenkapital endet bei null',
            'Als Posten ‚negatives Eigenkapital‘ (§ 225 Abs 1 UGB)',
            'Als Forderung gegen die Gesellschafter',
            'Versteckt in den Rückstellungen',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'FZ1-4c',
          typ: 'choice',
          frage: 'Bedeutet negatives Eigenkapital automatisch insolvenzrechtliche Überschuldung?',
          optionen: [
            'Ja, immer und sofort',
            'Ja, aber erst nach drei Jahren',
            'Das hat nichts miteinander zu tun',
            'Nein, das ist gesondert zu beurteilen, unter anderem mit stillen Reserven und Fortbestehensprognose',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'FZ1-4d',
          typ: 'choice',
          frage: 'Was sagt das negative Eigenkapital den Gläubigern?',
          optionen: [
            'Ihr Haftungspuffer ist aufgezehrt, Verluste träfen nun das Fremdkapital',
            'Nichts, es ist eine Formalie',
            'Die Gesellschaft hat zu viel Liquidität',
            'Die Rücklagen sind zu hoch',
          ],
          richtig: 0,
          punkte: 5,
        },
      ],
      hilfe:
        'Rechne 35.000 minus 52.000. Der Fehlbetrag wird offen als eigener Posten gezeigt. Und trenne sauber: bilanzielles Minus und insolvenzrechtliche Überschuldung sind zwei verschiedene Prüfungen.',
      loesung:
        '35.000 minus 52.000 ergibt minus 17.000: Die Schulden übersteigen das Vermögen um 17.000 Euro, auszuweisen als negatives Eigenkapital (§ 225 Abs 1 UGB). Das ist ein Alarmsignal, denn der Haftungsfonds der Gläubiger ist verbraucht. Ob insolvenzrechtliche Überschuldung vorliegt, ist aber gesondert zu beurteilen, dabei zählen unter anderem stille Reserven und die Fortbestehensprognose. Für den Abschluss gilt: offen ausweisen, nicht beschönigen.',
    },
  ],
  bilanzDelta: {
    erlaeuterung:
      'Petra Waldner ist an Bord: 60.000 Euro fließen auf die Bank, das Stammkapital steigt um den Nennbetrag 50.000 auf 150.000, das Aufgeld von 10.000 wird Kapitalrücklage (§ 229 Abs 2 Z 1 UGB). Eine Bilanzverlängerung ohne Ergebniswirkung: Die Vertiefungsbilanz wächst auf 779.305, die Eigenkapitalquote springt auf rund 21 Prozent. Lena grinst: ‚Jetzt haben wir Luft für Jahr zwei.‘',
    neuerStichtagLabel: 'Vertiefungsbilanz zum 1. Jänner (nach Kapitalerhöhung)',
    neuePosten: [
      {
        seite: 'passiva',
        gruppe: 'Eigenkapital',
        postenEinfuegenVor: 'ergebnis',
        posten: { id: 'kapitalruecklage', name: 'Kapitalrücklagen' },
      },
    ],
    aenderungen: [
      { postenId: 'bank', delta: 60000 },
      { postenId: 'stammkapital', delta: 50000 },
      { postenId: 'kapitalruecklage', delta: 10000 },
    ],
  },
};
