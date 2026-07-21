// Lektion R2 "Grundsaetze ordnungsmaessiger Buchfuehrung": Die Spielregeln der Bilanz.
//
// Rechtsstand 21.07.2026, § 201 UGB im Volltext geprueft, § 196, § 196a,
// § 198 Abs 8 und § 223 gegen Skript Teil B abgeglichen.
//
// Alle fachlichen Texte stammen woertlich aus dem Mega-Prompt 3 (Runde 2 GoB)
// und duerfen hier nicht veraendert werden.

import type { Lektion } from '../typen';

export const lektionR2: Lektion = {
  id: 'R2',
  titel: 'Grundsätze ordnungsmäßiger Buchführung',
  untertitel: 'Die Spielregeln der Bilanz',
  intro: {
    story:
      'Anfang März. Die ersten E-Bikes verlassen die Werkstatt, die ersten Rechnungen gehen hinaus. Bevor die Buchhaltung richtig losrollt, legt Mag. Huber ein dünnes Heft auf Deinen Tisch: ‚Das sind die Spielregeln. Man nennt sie Grundsätze ordnungsmäßiger Buchführung, kurz GoB. Wer sie beherrscht, erkennt bei jedem Geschäftsfall sofort, was erlaubt ist und was nicht. Und genau das erwarte ich ab jetzt von Dir.‘',
    inhalte: [
      'Wesen und Quellen der GoB',
      'Rahmengrundsätze: Richtigkeit, Klarheit, Vollständigkeit, Verrechnungsverbot',
      'Realisations- und Imparitätsprinzip als Ausprägungen der Vorsicht',
      'Stetigkeit, Fortführung, Stichtagsprinzip und wirtschaftliche Betrachtungsweise',
    ],
    lernziele: [
      'Du kannst erklären, was die GoB sind und welche Aufgaben sie erfüllen',
      'Du kannst Geschäftsfälle dem Realisations- und dem Imparitätsprinzip richtig zuordnen',
      'Du kannst werterhellende von wertbegründenden Ereignissen unterscheiden',
      'Du erkennst Verstöße gegen Stetigkeit, Fortführungsprinzip und Verrechnungsverbot',
    ],
  },
  kacheln: [
    {
      id: 'R2-K1',
      titel: 'Was sind die GoB?',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Das Gesetz verlangt Bücher nach den Grundsätzen ordnungsmäßiger Buchführung, definiert sie aber nicht. Die GoB sind ein unbestimmter Rechtsbegriff: teils im UGB normiert, teils ungeschriebene Regeln aus kaufmännischer Praxis, Rechtsprechung und Gutachten der Berufsorganisationen. Für die Bewertung ordnet § 201 Abs 1 UGB ausdrücklich an: Sie hat den GoB zu entsprechen.',
        },
        {
          typ: 'absatz',
          text: 'Die GoB erfüllen drei Aufgaben: Sie sichern eine zweckdienliche Rechnungslegung, sie füllen Regelungslücken und sie helfen bei der Auslegung unklarer Vorschriften. Zur Ordnung der einzelnen Grundsätze folgt die Vorlesung der Systematik von Leffson: Rahmengrundsätze (Richtigkeit und Willkürfreiheit, Klarheit, Vollständigkeit), Abgrenzungsgrundsätze (Realisations- und Imparitätsprinzip) und ergänzende Grundsätze (Vorsicht, Stetigkeit).',
        },
        {
          typ: 'paragraf',
          text: 'Zentrale Fundstellen: § 190, § 195, § 196, § 196a und § 201 UGB.',
        },
      ],
      merksatz: 'GoB sind die Spielregeln, das UGB nennt sie, ohne sie abschließend aufzuzählen.',
    },
    {
      id: 'R2-K2',
      titel: 'Richtig, klar, vollständig',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Richtigkeit und Willkürfreiheit (Bilanzwahrheit): Der Abschluss muss die tatsächlichen Verhältnisse regelkonform und frei von Willkür abbilden. Eine Bilanz gilt als wahr, wenn Ansatz- und Bewertungsregeln eingehalten sind und ein sachverständiger Dritter das Zahlenwerk nachprüfen kann. Klarheit und Verständlichkeit: Der Jahresabschluss ist klar und übersichtlich aufzustellen (§ 195 UGB), die Posten sind eindeutig zu bezeichnen und zu ordnen.',
        },
        {
          typ: 'absatz',
          text: 'Aus der Klarheit folgen zwei harte Regeln: Vermögensgegenstände und Schulden sind zum Abschlussstichtag einzeln zu bewerten (§ 201 Abs 2 Z 3 UGB), und es gilt das Verrechnungsverbot (§ 196 Abs 2 UGB): Aktivposten dürfen nicht mit Passivposten, Aufwendungen nicht mit Erträgen verrechnet werden. Die Vollständigkeit (§ 196 Abs 1 UGB) verlangt sämtliche Vermögensgegenstände, Rückstellungen, Verbindlichkeiten, Rechnungsabgrenzungsposten, Aufwendungen und Erträge, soweit das Gesetz nichts anderes bestimmt, etwa durch Ansatzverbote und Wahlrechte. Unwesentliches darf vereinfacht behandelt werden (Wesentlichkeit, § 189a Z 10 UGB).',
        },
        {
          typ: 'beispiel',
          text: 'Fahrzeuge 150.000 Euro auf der Aktivseite und der Autokredit 75.000 Euro auf der Passivseite sind brutto auszuweisen. Ein saldierter Ausweis (Fahrzeuge 75.000, Kredit null) würde Informationen verstecken und ist verboten.',
        },
      ],
      merksatz: 'Brutto statt saldiert, einzeln statt pauschal, alles statt Auswahl.',
    },
    {
      id: 'R2-K3',
      titel: 'Das Realisationsprinzip',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Nur die am Abschlussstichtag verwirklichten Gewinne dürfen ausgewiesen werden (§ 201 Abs 2 Z 4 lit a UGB). Realisiert ist der Ertrag mit dem Umsatzakt: wenn die Gefahr des zufälligen Untergangs auf den Kunden übergeht, im Regelfall also mit der Lieferung oder der Vollendung der Dienstleistung. Bestellung, Vertragsschluss oder bloße Kurssteigerungen reichen nicht.',
        },
        {
          typ: 'absatz',
          text: 'Mit der Rechnungsstellung wird der Erfolg gebucht (Forderung an Umsatzerlöse), Geld fließt erst mit der Zahlung. Aus dem Realisationsprinzip folgt das Anschaffungswertprinzip: Vermögensgegenstände dürfen höchstens mit ihren Anschaffungs- oder Herstellungskosten angesetzt werden, ein höherer Marktwert bleibt außen vor. Und es gilt die sachliche Abgrenzung: Aufwendungen werden dem Ertrag zugeordnet, zu dem sie gehören.',
        },
        {
          typ: 'beispiel',
          text: 'Ein Händler bestellt im Dezember zehn E-Bikes, AlpenRad liefert im Jänner, das Geld kommt im Februar. Der Ertrag gehört in den Jänner, denn mit der Lieferung geht die Gefahr über.',
        },
      ],
      merksatz: 'Kein Gewinn vor dem Umsatzakt.',
    },
    {
      id: 'R2-K4',
      titel: 'Das Imparitätsprinzip',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Erkennbare Risiken und drohende Verluste, die im Geschäftsjahr oder früher entstanden sind, müssen berücksichtigt werden, selbst wenn sie erst zwischen Abschlussstichtag und Aufstellung bekannt werden (§ 201 Abs 2 Z 4 lit b UGB). Wertminderungen sind unabhängig davon zu erfassen, ob das Jahr mit Gewinn oder Verlust endet (lit c). Chancen und Risiken werden also ungleich behandelt: Lockende Gewinne warten auf die Realisierung, drohende Verluste werden sofort vorweggenommen.',
        },
        {
          typ: 'absatz',
          text: 'Aus dem Imparitätsprinzip folgen die Rückstellungen für drohende Verluste aus schwebenden Geschäften (§ 198 Abs 8 UGB), das Niederstwertprinzip für Vermögensgegenstände und das nicht ausdrücklich kodifizierte Höchstwertprinzip für Schulden. Die Details zum Niederstwertprinzip kommen in den Runden zum Anlage- und Umlaufvermögen.',
        },
        {
          typ: 'beispiel',
          text: 'AlpenRad verkauft E-Bikes mit zwei Jahren Gewährleistung. Erfahrungsgemäß kosten Garantiefälle rund 3 Prozent des Umsatzes. Dieser Aufwand wird schon im Verkaufsjahr über eine Rückstellung erfasst, nicht erst, wenn die Reparaturen anfallen.',
        },
      ],
      merksatz: 'Lockende Gewinne warten, drohende Verluste sofort.',
    },
    {
      id: 'R2-K5',
      titel: 'Vorsicht, Stetigkeit, Fortführung',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Das Vorsichtsprinzip (§ 201 Abs 2 Z 4 UGB) ist das Dach über Realisation und Imparität: Ein ordentlicher Kaufmann rechnet sich eher ärmer, jedenfalls nie reicher als er ist. Bei Schätzungen heißt das: Schulden eher höher, Vermögen eher niedriger, Nutzungsdauern eher kürzer ansetzen. Schätzungen müssen auf einer umsichtigen Beurteilung beruhen, vorhandene statistische Erfahrungswerte sind zu berücksichtigen (§ 201 Abs 2 Z 7 UGB).',
        },
        {
          typ: 'absatz',
          text: 'Stetigkeit: Die auf den vorhergehenden Jahresabschluss angewendeten Bilanzierungs- und Bewertungsmethoden sind beizubehalten (§ 201 Abs 2 Z 1 UGB), die Gliederung ebenso (§ 223 Abs 1 UGB). Abweichen darf man nur bei besonderen Umständen, Kapitalgesellschaften müssen die Abweichung im Anhang angeben, begründen und ihren Einfluss auf die Vermögens-, Finanz- und Ertragslage darlegen (§ 201 Abs 3 UGB). Fortführungsprinzip: Bewertet wird unter der Annahme der Unternehmensfortführung, solange nicht tatsächliche oder rechtliche Gründe entgegenstehen (§ 201 Abs 2 Z 2 UGB). Erst wenn Fortführungsabsicht oder Fortführungsmöglichkeit fehlen, wird auf Veräußerungswerte umgestellt.',
        },
        {
          typ: 'beispiel',
          text: 'Eine Spezialmaschine hat einen Fortführungswert von 100.000 Euro, ihr Schrottwert beträgt 1.000 Euro. Solange die Fortführung nicht gefährdet ist, wird mit 100.000 Euro bilanziert. Der Schrottwert käme nur bei Zerschlagung zum Zug (§ 201 Abs 2 Z 2 UGB).',
        },
      ],
      merksatz: 'Methoden halten, Fortführung unterstellen, im Zweifel vorsichtig.',
    },
    {
      id: 'R2-K6',
      titel: 'Stichtag, Werterhellung, wirtschaftlicher Gehalt',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Bewertet wird auf den Abschlussstichtag (§ 201 Abs 2 Z 3 UGB). Zwischen Stichtag und Aufstellung tauchen aber laufend neue Informationen auf. Werterhellend sind Tatsachen, deren Ursache schon am Stichtag bestand und die nur später bekannt werden: Sie fließen in den Abschluss ein (§ 201 Abs 2 Z 4 lit b UGB). Wertbegründend sind Ereignisse, die erst nach dem Stichtag entstehen: Sie gehören ins neue Jahr und werden höchstens außerhalb des Zahlenwerks erwähnt.',
        },
        {
          typ: 'absatz',
          text: 'Die Eröffnungsbilanz muss mit der Schlussbilanz des Vorjahres übereinstimmen (Bilanzidentität, § 201 Abs 2 Z 6 UGB). Und über allem steht die wirtschaftliche Betrachtungsweise: Bei der Beurteilung zählt der wirtschaftliche Gehalt eines Geschäftsfalls, nicht seine äußere rechtliche Form (§ 196a UGB).',
        },
        {
          typ: 'beispiel',
          text: 'Kauf unter Eigentumsvorbehalt: Bis zur vollständigen Zahlung bleibt der Verkäufer rechtlicher Eigentümer. Wirtschaftlich nutzt aber der Käufer die Sache und trägt ihr Risiko. Deshalb bilanziert der Käufer.',
        },
      ],
      merksatz: 'Ursache vor dem Stichtag zählt noch, Substanz schlägt Form.',
    },
  ],
  quiz: [
    {
      id: 'R2-Q1',
      frage: 'Was sind die Grundsätze ordnungsmäßiger Buchführung?',
      antworten: [
        'Ein abschließender Katalog im UGB',
        'Teils gesetzlich normierte, teils ungeschriebene Regeln, die Lücken füllen und bei der Auslegung helfen',
        'Unverbindliche Empfehlungen der Wirtschaftskammer',
        'Interne Richtlinien, die jedes Unternehmen selbst festlegt',
        'Vorschriften, die nur für Kapitalgesellschaften gelten',
      ],
      richtig: 1,
      erklaerung:
        'Die GoB sind ein unbestimmter Rechtsbegriff. § 201 Abs 1 UGB ordnet an, dass die Bewertung ihnen zu entsprechen hat.',
    },
    {
      id: 'R2-Q2',
      frage:
        'Ein Händler bestellt im Dezember, AlpenRad liefert im Jänner, bezahlt wird im Februar. Wann ist der Ertrag realisiert?',
      antworten: [
        'Bei der Bestellung im Dezember',
        'Bei der Lieferung im Jänner',
        'Beim Zahlungseingang im Februar',
        'Am Bilanzstichtag',
        'Wahlweise in einem der drei Monate',
      ],
      richtig: 1,
      erklaerung:
        'Realisiert wird mit dem Umsatzakt, also wenn die Gefahr des zufälligen Untergangs übergeht, im Regelfall bei Lieferung (§ 201 Abs 2 Z 4 lit a UGB).',
    },
    {
      id: 'R2-Q3',
      frage:
        'Die als Reserve gehaltenen Aktien notieren zum Stichtag über den Anschaffungskosten. Darf der Kursgewinn ausgewiesen werden?',
      antworten: [
        'Ja, in voller Höhe',
        'Ja, aber nur zur Hälfte',
        'Nein, nur verwirklichte Gewinne dürfen ausgewiesen werden',
        'Ja, wenn die Hausbank zustimmt',
        'Nein, Aktien dürfen überhaupt nicht bilanziert werden',
      ],
      richtig: 2,
      erklaerung:
        'Realisations- und Anschaffungswertprinzip: Nicht realisierte Kursgewinne bleiben außen vor, Obergrenze sind die Anschaffungskosten.',
    },
    {
      id: 'R2-Q4',
      frage: 'Aus einem schwebenden Liefervertrag droht ein Verlust. Was verlangt das UGB?',
      antworten: [
        'Abwarten, bis geliefert wird',
        'Den Verlust sofort berücksichtigen, etwa über eine Drohverlustrückstellung',
        'Den Verlust nur im Anhang erwähnen',
        'Den Verlust mit erwarteten Gewinnen aus anderen Verträgen verrechnen',
        'Den Verlust erst bei Zahlung erfassen',
      ],
      richtig: 1,
      erklaerung:
        'Imparitätsprinzip (§ 201 Abs 2 Z 4 lit b UGB): Drohende Verluste werden vorweggenommen, § 198 Abs 8 UGB regelt die Rückstellung dafür.',
    },
    {
      id: 'R2-Q5',
      frage:
        'Ein Kunde war am 31.12. bereits zahlungsunfähig, Du erfährst es Mitte Jänner vor der Aufstellung. Was gilt für die Forderung?',
      antworten: [
        'Wertbegründend, erst im neuen Jahr abschreiben',
        'Werterhellend, im Abschluss zum 31.12. berücksichtigen',
        'Es besteht ein Wahlrecht',
        'Nur ein Hinweis im Anhang',
        'Die Forderung bleibt unverändert, bis ein Gericht entscheidet',
      ],
      richtig: 1,
      erklaerung:
        'Die Ursache (Zahlungsunfähigkeit) bestand am Stichtag, bekannt wurde sie vor der Aufstellung: werterhellend nach § 201 Abs 2 Z 4 lit b UGB.',
    },
    {
      id: 'R2-Q6',
      frage: 'Am 10. Jänner brennt ein Teil des Lagers ab. Auswirkung auf den Abschluss zum 31.12.?',
      antworten: [
        'Werterhellend, im alten Abschluss berücksichtigen',
        'Wertbegründend, keine Berücksichtigung im alten Abschluss',
        'Zur Hälfte im alten, zur Hälfte im neuen Jahr',
        'Der Abschluss ist zu verschieben',
        'Im alten Jahr ist eine Rückstellung zu bilden',
      ],
      richtig: 1,
      erklaerung:
        'Der Brand ist erst nach dem Stichtag entstanden, das Ereignis gehört ins neue Geschäftsjahr.',
    },
    {
      id: 'R2-Q7',
      frage:
        'AlpenRad hat eine Forderung gegen einen Wiener Händler (20.000 Euro) und eine Verbindlichkeit gegenüber der Radwerkstatt Moser (30.000 Euro). Darf für die Bilanz saldiert werden?',
      antworten: [
        'Ja, Ausweis einer Verbindlichkeit von 10.000 Euro',
        'Nein, es gilt das Verrechnungsverbot, beide Posten sind brutto auszuweisen',
        'Ja, wenn beide Beträge fällig sind',
        'Nur die größere Position ist auszuweisen',
        'Es besteht ein Wahlrecht',
      ],
      richtig: 1,
      erklaerung:
        '§ 196 Abs 2 UGB verbietet die Verrechnung von Aktiv- und Passivposten. Hier stehen sich noch dazu verschiedene Vertragspartner gegenüber.',
    },
    {
      id: 'R2-Q8',
      frage:
        'Jakob möchte die Abschreibungsmethode künftig ‚je nach Gewinnlage‘ jährlich wechseln. Zulässig?',
      antworten: [
        'Ja, die Methodenwahl ist jedes Jahr frei',
        'Nein, Methoden sind beizubehalten, Abweichungen nur bei besonderen Umständen samt Anhangangabe',
        'Ja, mit Beschluss der Gesellschafter',
        'Nur in Verlustjahren zulässig',
        'Nur alle fünf Jahre zulässig',
      ],
      richtig: 1,
      erklaerung:
        'Stetigkeit nach § 201 Abs 2 Z 1 UGB. Abweichungen erlaubt § 201 Abs 3 UGB nur bei besonderen Umständen, mit Angabe, Begründung und Darstellung des Einflusses im Anhang.',
    },
    {
      id: 'R2-Q9',
      frage: 'Wann wird von Fortführungswerten auf Veräußerungswerte umgestellt?',
      antworten: [
        'Bei jedem Jahresverlust',
        'Wenn tatsächliche oder rechtliche Gründe der Fortführung entgegenstehen',
        'Automatisch alle fünf Jahre',
        'Sobald die Hausbank es verlangt',
        'Nie, die Fortführung gilt immer',
      ],
      richtig: 1,
      erklaerung:
        '§ 201 Abs 2 Z 2 UGB: Die Fortführungsannahme gilt, solange ihr nichts Tatsächliches oder Rechtliches entgegensteht, etwa Zahlungsunfähigkeit mit geplanter Betriebseinstellung.',
    },
    {
      id: 'R2-Q10',
      frage:
        'AlpenRad nutzt eine unter Eigentumsvorbehalt gelieferte Maschine, trägt Nutzen und Risiko, hat aber noch nicht fertig bezahlt. Wer bilanziert die Maschine?',
      antworten: [
        'Der Verkäufer als rechtlicher Eigentümer',
        'AlpenRad als wirtschaftlicher Eigentümer',
        'Beide je zur Hälfte',
        'Niemand, bis vollständig bezahlt ist',
        'Das Firmenbuchgericht entscheidet im Zweifel',
      ],
      richtig: 1,
      erklaerung:
        'Wirtschaftliche Betrachtungsweise (§ 196a UGB): Es zählt der wirtschaftliche Gehalt, nicht die rechtliche Form.',
    },
  ],
  faelle: [
    {
      id: 'F2-1',
      titel: 'Lockende Gewinne, drohende Verluste',
      sachverhalt:
        'Mag. Huber legt Dir ihr Lieblings-Rechenbeispiel vor, ein reines Übungsszenario ohne Buchung in unseren Büchern: Ein Unternehmen kauft am 1. Juli 200 Aktien der Steira Components AG zu 30 Euro je Stück (Anschaffungskosten 6.000 Euro) als kurzfristige Reserve. Betrachte zwei Varianten für den Kurs am Abschlussstichtag 31.12.',
      teilaufgaben: [
        {
          id: 'F2-1a',
          typ: 'zahl',
          frage:
            'Variante 1: Der Kurs fällt auf 25 Euro. Mit welchem Betrag (in Euro) stehen die Aktien in der Bilanz zum 31.12.?',
          punkte: 6,
          loesung: 5000,
          einheit: 'EUR',
        },
        {
          id: 'F2-1b',
          typ: 'choice',
          frage: 'Welcher Grundsatz erzwingt in Variante 1 die Abwertung?',
          optionen: [
            'Realisationsprinzip',
            'Imparitätsprinzip mit dem daraus folgenden Niederstwertprinzip',
            'Stetigkeitsprinzip',
            'Bilanzidentität',
            'Wirtschaftliche Betrachtungsweise',
          ],
          richtig: 1,
          punkte: 4,
        },
        {
          id: 'F2-1c',
          typ: 'zahl',
          frage:
            'Variante 2: Der Kurs steigt auf 40 Euro. Mit welchem Betrag (in Euro) stehen die Aktien in der Bilanz zum 31.12.?',
          punkte: 6,
          loesung: 6000,
          einheit: 'EUR',
        },
        {
          id: 'F2-1d',
          typ: 'choice',
          frage: 'Warum bleibt der Kursgewinn in Variante 2 unberücksichtigt?',
          optionen: [
            'Weil Aktien nie zugeschrieben werden dürfen',
            'Weil nur verwirklichte Gewinne ausgewiesen werden dürfen und die Anschaffungskosten die Obergrenze bilden',
            'Weil der Kurs am Stichtag geschätzt ist',
            'Weil die Bank zustimmen müsste',
          ],
          richtig: 1,
          punkte: 4,
        },
      ],
      hilfe:
        'Variante 1: Multipliziere die Stückzahl mit dem niedrigeren Stichtagskurs. Variante 2: Denk an die Obergrenze der Bewertung. Gewinne brauchen einen Umsatzakt, Verluste nicht.',
      loesung:
        'Variante 1: Der Wert ist auf 200 mal 25, also 5.000 Euro zu mindern. Grund ist das Imparitätsprinzip (§ 201 Abs 2 Z 4 lit b und c UGB): Die eingetretene Wertminderung von 1.000 Euro wird sofort erfasst, obwohl die Aktien noch nicht verkauft sind. Variante 2: Die Aktien bleiben mit den Anschaffungskosten von 6.000 Euro angesetzt. Der Kursgewinn von 2.000 Euro ist nicht realisiert, nach dem Realisationsprinzip (§ 201 Abs 2 Z 4 lit a UGB) dürfen nur verwirklichte Gewinne ausgewiesen werden, die Anschaffungskosten sind die Obergrenze. Die ungleiche Behandlung beider Varianten ist die Imparität.',
    },
    {
      id: 'F2-2',
      titel: 'Wem gehört was?',
      sachverhalt:
        'April. Vier Verträge landen auf Deinem Tisch. Entscheide nach dem wirtschaftlichen Gehalt (§ 196a UGB), wer jeweils bilanziert. Erstens: Der Schweißroboter (Buchwert 80.000 Euro) wird der Steirischen Landesbank zur Kreditsicherung übereignet, bleibt aber bei AlpenRad in Nutzung, die Tilgung läuft vereinbarungsgemäß. Zweitens: Eine Rahmenpresse wird für vier Jahre unkündbar gemietet, ihre Nutzungsdauer beträgt acht Jahre, danach geht sie an den Vermieter zurück. Drittens: Eine Lackieranlage wurde exakt auf die AlpenRad-Fertigung zugeschnitten und ist für Dritte praktisch unbrauchbar, AlpenRad least sie über fünf von zehn Jahren Nutzungsdauer. Viertens: Moser liefert Rahmen unter Eigentumsvorbehalt, bezahlt ist noch nichts.',
      teilaufgaben: [
        {
          id: 'F2-2a',
          typ: 'choice',
          frage: 'Sicherungsübereigneter Schweißroboter?',
          optionen: [
            'AlpenRad GmbH',
            'Der Vertragspartner (Bank, Vermieter, Leasinggeber oder Lieferant)',
            'Beide je zur Hälfte',
            'Niemand, bis die Rechtslage geklärt ist',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'F2-2b',
          typ: 'choice',
          frage: 'Gemietete Rahmenpresse?',
          optionen: [
            'AlpenRad GmbH',
            'Der Vertragspartner (Bank, Vermieter, Leasinggeber oder Lieferant)',
            'Beide je zur Hälfte',
            'Niemand, bis die Rechtslage geklärt ist',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'F2-2c',
          typ: 'choice',
          frage: 'Maßgeschneiderte Lackieranlage?',
          optionen: [
            'AlpenRad GmbH',
            'Der Vertragspartner (Bank, Vermieter, Leasinggeber oder Lieferant)',
            'Beide je zur Hälfte',
            'Niemand, bis die Rechtslage geklärt ist',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'F2-2d',
          typ: 'choice',
          frage: 'Unter Eigentumsvorbehalt gelieferte Rahmen?',
          optionen: [
            'AlpenRad GmbH',
            'Der Vertragspartner (Bank, Vermieter, Leasinggeber oder Lieferant)',
            'Beide je zur Hälfte',
            'Niemand, bis die Rechtslage geklärt ist',
          ],
          richtig: 0,
          punkte: 5,
        },
      ],
      hilfe:
        'Frag bei jedem Vertrag: Wer nutzt die Sache dauerhaft und wer trägt ihr wirtschaftliches Risiko? Rechtliches Eigentum allein entscheidet nicht (§ 196a UGB).',
      loesung:
        'Schweißroboter: Die Bank wird nur rechtliche Eigentümerin zur Sicherung, Nutzung und Risiko bleiben bei AlpenRad, also bilanziert AlpenRad als wirtschaftliche Eigentümerin. Rahmenpresse: Nach vier von acht Jahren geht die Presse zurück, Restwertchance und Restwertrisiko liegen beim Vermieter, er bleibt wirtschaftlicher Eigentümer und bilanziert. Lackieranlage: Sie ist auf AlpenRad zugeschnitten und für Dritte unbrauchbar, Nutzen und Risiko liegen wirtschaftlich zur Gänze bei AlpenRad, also bilanziert AlpenRad. Rahmen unter Eigentumsvorbehalt: Der Vorbehalt sichert nur den Kaufpreis, wirtschaftlich verfügt AlpenRad über die Rahmen und trägt ihr Risiko, also bilanziert AlpenRad. Maßstab ist in allen vier Fällen der wirtschaftliche Gehalt nach § 196a UGB.',
    },
    {
      id: 'F2-3',
      titel: 'Rund um den Stichtag',
      sachverhalt:
        'Mag. Huber macht mit Dir ein Trockentraining für den kommenden Jahresabschluss, fünf fiktive Szenarien ohne Wirkung auf unsere Bücher. Stell Dir vor, es ist Mitte Jänner 02 und der Abschluss zum 31.12.01 wird gerade aufgestellt. Beurteile jedes Ereignis.',
      teilaufgaben: [
        {
          id: 'F2-3a',
          typ: 'choice',
          frage:
            'Über das Vermögen eines Händlers mit offener Forderung von 12.000 Euro wurde am 20.12.01 das Insolvenzverfahren eröffnet, Du erfährst es am 15.01.02.',
          optionen: [
            'Werterhellend, im Abschluss zum 31.12.01 berücksichtigen',
            'Wertbegründend, erst im Jahr 02 erfassen',
            'Werterhellend, aber wegen des Anschaffungswertprinzips keine Erfassung über den Anschaffungskosten',
          ],
          richtig: 0,
          punkte: 4,
        },
        {
          id: 'F2-3b',
          typ: 'choice',
          frage: 'Am 10.01.02 beschädigt ein Hagelsturm den unversicherten Firmentransporter.',
          optionen: [
            'Werterhellend, im Abschluss zum 31.12.01 berücksichtigen',
            'Wertbegründend, erst im Jahr 02 erfassen',
            'Werterhellend, aber wegen des Anschaffungswertprinzips keine Erfassung über den Anschaffungskosten',
          ],
          richtig: 1,
          punkte: 4,
        },
        {
          id: 'F2-3c',
          typ: 'choice',
          frage:
            'Das im Herbst 01 gekaufte kleine Betriebsgrundstück wurde laut Gemeinderatsbeschluss vom 17.12.01 in Bauland umgewidmet (Wertsteigerung rund 100.000 Euro), bekannt wird das am 12.01.02.',
          optionen: [
            'Werterhellend, im Abschluss zum 31.12.01 berücksichtigen',
            'Wertbegründend, erst im Jahr 02 erfassen',
            'Werterhellend, aber wegen des Anschaffungswertprinzips keine Erfassung über den Anschaffungskosten',
          ],
          richtig: 2,
          punkte: 4,
        },
        {
          id: 'F2-3d',
          typ: 'choice',
          frage: 'Am 08.01.02 geht die Großbestellung eines Wiener Händlers für das Frühjahr ein.',
          optionen: [
            'Werterhellend, im Abschluss zum 31.12.01 berücksichtigen',
            'Wertbegründend, erst im Jahr 02 erfassen',
            'Werterhellend, aber wegen des Anschaffungswertprinzips keine Erfassung über den Anschaffungskosten',
          ],
          richtig: 1,
          punkte: 4,
        },
        {
          id: 'F2-3e',
          typ: 'choice',
          frage:
            'Ein im November 01 fix abgeschlossener Liefervertrag (Verkaufspreis 30.000 Euro) wird wegen der im Dezember 01 gestiegenen Materialpreise voraussichtlich 40.000 Euro Herstellungskosten verursachen, die Kalkulation liegt seit 03.01.02 vor.',
          optionen: [
            'Werterhellend, im Abschluss zum 31.12.01 berücksichtigen',
            'Wertbegründend, erst im Jahr 02 erfassen',
            'Werterhellend, aber wegen des Anschaffungswertprinzips keine Erfassung über den Anschaffungskosten',
          ],
          richtig: 0,
          punkte: 4,
        },
      ],
      hilfe:
        'Prüfe zweistufig: Erstens, lag die Ursache schon am 31.12.01 vor (dann werterhellend) oder ist das Ereignis erst danach entstanden (dann wertbegründend)? Zweitens, bei guten Nachrichten: Erlaubt das Anschaffungswertprinzip überhaupt eine Erfassung?',
      loesung:
        'Insolvenz des Händlers: Die Ursache bestand am Stichtag (Verfahrenseröffnung am 20.12.01), das Bekanntwerden im Jänner ist werterhellend, die Forderung ist im Abschluss 01 abzuschreiben (§ 201 Abs 2 Z 4 lit b UGB). Hagelschaden: erst am 10.01.02 entstanden, wertbegründend, gehört ins Jahr 02. Umwidmung: Der Beschluss fiel zwar am 17.12.01, eine Zuschreibung über die Anschaffungskosten hinaus verbietet aber das Anschaffungswertprinzip, der Buchwert bleibt. Großbestellung: erst im Jänner entstanden, wertbegründend, außerdem wäre ein Ertrag vor Lieferung ohnehin nicht realisiert. Liefervertrag: Die Materialpreise stiegen im Dezember 01, der drohende Verlust von 10.000 Euro ist werterhellend und im Abschluss 01 als Drohverlustrückstellung zu erfassen (§ 198 Abs 8, § 201 Abs 2 Z 4 lit b UGB).',
    },
    {
      id: 'F2-4',
      titel: 'Bilanzpolitik am Limit',
      sachverhalt:
        'Oktober. Das Geschäft läuft besser als geplant, und vor den anstehenden Gehaltsverhandlungen möchte Jakob das Ergebnis ‚ein bisschen drücken‘. Drei Ideen legt er Dir vor, dazu stellt die Bank eine Grundsatzfrage. Erstens: Die Gewährleistungsrückstellung, bisher mit den statistischen Erfahrungswerten der Branche bemessen, soll ohne neue Erkenntnisse einfach verdoppelt werden. Zweitens: Die Abschreibungsmethode der Maschinen soll ‚nur für heuer‘ gewechselt werden. Drittens: Er fragt, unter welchen Voraussetzungen ein Methodenwechsel überhaupt ginge. Viertens: Der Bankberater will wissen, ob die Anlaufverluste des ersten Jahres dazu zwingen, zu Zerschlagungswerten zu bewerten.',
      teilaufgaben: [
        {
          id: 'F2-4a',
          typ: 'choice',
          frage: 'Verdoppelung der Gewährleistungsrückstellung ohne neue Erkenntnisse?',
          optionen: [
            'Zulässig, Vorsicht ist immer erlaubt',
            'Unzulässig, Schätzungen brauchen eine umsichtige Beurteilung samt Erfahrungswerten, Willkür verstößt gegen die Stetigkeit',
            'Zulässig mit Gesellschafterbeschluss',
            'Zulässig, wenn der Steuerberater zustimmt',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'F2-4b',
          typ: 'choice',
          frage: 'Wechsel der Abschreibungsmethode ‚nur für heuer‘?',
          optionen: [
            'Zulässig, die Methode ist jährlich frei wählbar',
            'Unzulässig, gezielte Ergebnissteuerung ist kein besonderer Umstand',
            'Zulässig, wenn es im Anhang steht',
            'Zulässig, weil das Vorsichtsprinzip Vorrang hat',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'F2-4c',
          typ: 'choice',
          frage: 'Unter welchen Voraussetzungen wäre ein Methodenwechsel zulässig?',
          optionen: [
            'Nie, Methoden sind für immer fixiert',
            'Bei besonderen Umständen, mit Angabe, Begründung und Darstellung des Einflusses im Anhang',
            'Immer zum Jahreswechsel',
            'Nur mit Bewilligung des Firmenbuchgerichts',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'F2-4d',
          typ: 'choice',
          frage: 'Zwingen die Anlaufverluste zur Bewertung mit Zerschlagungswerten?',
          optionen: [
            'Ja, Verluste beenden die Fortführungsannahme',
            'Nein, es wird fortgeführt, solange nicht tatsächliche oder rechtliche Gründe entgegenstehen',
            'Ja, auf Verlangen der Bank',
            'Nein, Zerschlagungswerte gibt es im UGB nicht',
          ],
          richtig: 1,
          punkte: 5,
        },
      ],
      hilfe:
        'Für a und b: Stetigkeit (§ 201 Abs 2 Z 1) und umsichtige Schätzung (§ 201 Abs 2 Z 7). Für c: § 201 Abs 3. Für d: § 201 Abs 2 Z 2 und die Frage, ob Fortführungsabsicht und Fortführungsmöglichkeit fehlen.',
      loesung:
        'Rückstellung: Die Bewertungsstetigkeit gilt auch für Schätzverfahren. Ohne neue Erkenntnisse fehlt jede sachliche Grundlage, § 201 Abs 2 Z 7 UGB verlangt eine umsichtige Beurteilung unter Berücksichtigung statistischer Erfahrungswerte, die willkürliche Verdoppelung ist unzulässig. Methodenwechsel ‚nur für heuer‘: verstößt gegen § 201 Abs 2 Z 1 UGB, der Wunsch nach einem niedrigeren Ergebnis ist kein besonderer Umstand. Voraussetzungen eines zulässigen Wechsels: besondere Umstände im Sinn des § 201 Abs 3 UGB, dazu bei Kapitalgesellschaften Angabe, Begründung und Darstellung des Einflusses auf die Vermögens-, Finanz- und Ertragslage im Anhang. Fortführung: Nach § 201 Abs 2 Z 2 UGB wird von der Fortführung ausgegangen, solange nicht tatsächliche oder rechtliche Gründe entgegenstehen. Planmäßige Anlaufverluste allein sind kein solcher Grund, erst fehlende Fortführungsabsicht oder Fortführungsmöglichkeit (etwa Zahlungsunfähigkeit mit Betriebseinstellung) erzwingen Veräußerungswerte.',
    },
  ],
};
