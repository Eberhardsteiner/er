// Lektion R1 "Grundlagen": Wer muss Rechnung legen und worueber eigentlich?
//
// Rechtsstand der Inhalte: 21.07.2026, geprueft gegen § 189, § 221, § 268 und
// § 277 UGB (aktuelle Fassungen) sowie die UGB-Schwellenwerte-Verordnung
// (Groessenklassen fuer Geschaeftsjahre ab 1.1.2024).
//
// Alle fachlichen Texte stammen woertlich aus dem Mega-Prompt der Phase
// "Runde 1 Grundlagen und Spielrahmen" und duerfen hier nicht veraendert werden.

import type { Lektion } from '../typen';

export const lektionR1: Lektion = {
  id: 'R1',
  titel: 'Grundlagen',
  untertitel: 'Wer muss Rechnung legen und worüber eigentlich?',
  intro: {
    story:
      '2. Jänner, Graz-Lend. Dein erster Arbeitstag bei der AlpenRad GmbH. Lena Berger und Jakob Fuchs haben die Gesellschaft zum Jahreswechsel gegründet: 100.000 Euro Stammkapital, dazu ein Bankdarlehen über 150.000 Euro von der Steirischen Landesbank. In der Halle stapeln sich die ersten Rahmen, und die Hausbank will ‚ordentliche Bücher‘ sehen. Mag. Huber lächelt: ‚Bevor wir buchen, klären wir zwei Dinge. Wer muss überhaupt Rechnung legen? Und wovon reden wir da genau?‘',
    inhalte: [
      'Internes und externes Rechnungswesen',
      'Ziele des Jahresabschlusses',
      'UGB und Rechnungslegungspflicht (§ 189 UGB)',
      'Grundbegriffe, Bestandteile des Jahresabschlusses und Größenklassen',
    ],
    lernziele: [
      'Du kannst beurteilen, wer nach dem UGB rechnungslegungspflichtig ist',
      'Du kennst die Ziele und die Bestandteile des Jahresabschlusses',
      'Du kannst Vermögensgegenstände, Verbindlichkeiten, Rückstellungen, Aufwand und Ertrag unterscheiden',
      'Du kannst die Größenklasse einer Kapitalgesellschaft bestimmen und ihre Folgen benennen',
    ],
  },
  kacheln: [
    {
      id: 'R1-K1',
      titel: 'Das Rechnungswesen im Überblick',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Das betriebliche Rechnungswesen bildet das Geschehen im Unternehmen in Zahlen ab. Es hat zwei große Bereiche. Das interne Rechnungswesen (Kosten- und Leistungsrechnung) dient der Selbstinformation des Managements für Planung, Steuerung und Kontrolle. Es unterliegt kaum gesetzlichen Vorschriften, rechnet mit Kosten und Leistungen und darf auch kalkulatorische Größen verwenden.',
        },
        {
          typ: 'absatz',
          text: 'Das externe Rechnungswesen richtet sich an Außenstehende: Kreditgeber, Gesellschafter, Fiskus und die Allgemeinheit. Es ist durch das UGB stark normiert, beruht auf tatsächlichen Zahlungen (pagatorisches Prinzip), rechnet mit Vermögen und Schulden sowie Aufwand und Ertrag und mündet im Jahresabschluss.',
        },
        {
          typ: 'beispiel',
          text: 'Kalkuliert AlpenRad den Verkaufspreis eines Lastenrads, ist das internes Rechnungswesen. Erstellt AlpenRad den Jahresabschluss für Bank und Firmenbuch, ist das externes Rechnungswesen.',
        },
      ],
      merksatz: 'Intern informiert das Management, extern die Außenwelt.',
    },
    {
      id: 'R1-K2',
      titel: 'Wozu ein Jahresabschluss? Die Ziele',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Das UGB zählt die Ziele des Jahresabschlusses nicht ausdrücklich auf, sie werden aus den Normen abgeleitet. Anerkannt sind drei Funktionen: Dokumentation der Geschäftsvorfälle (aus der Buchführungspflicht des § 190 UGB), Rechenschaft durch Information (bei Kapitalgesellschaften ein möglichst getreues Bild der Vermögens-, Finanz- und Ertragslage, § 222 Abs 2 UGB) und Kapitalerhaltung durch Zahlungsbemessung: Ausgeschüttet werden soll nur ein vorsichtig ermittelter, realisierter Gewinn, damit das Haftungskapital für die Gläubiger erhalten bleibt.',
        },
        {
          typ: 'absatz',
          text: 'Das Vorsichtsprinzip prägt dabei das gesamte UGB: Ein ordentlicher Kaufmann rechnet sich lieber ärmer als reicher. Drohende Verluste werden vorweggenommen, erhoffte Gewinne erst bei Realisierung (etwa beim Verkauf) erfasst.',
        },
        {
          typ: 'beispiel',
          text: 'Warum so streng? Der Energiehändler Enron zählte nach Börsenwert zu den größten Konzernen der USA und verschob Schulden in nicht konsolidierte Zweckgesellschaften. 2001 folgte der Zusammenbruch, Anleger und Mitarbeiter verloren Milliarden. Verlässliche Rechnungslegung ist die Grundlage des Vertrauens in Unternehmen.',
        },
      ],
      merksatz: 'Dokumentieren, Rechenschaft geben, Kapital erhalten.',
    },
    {
      id: 'R1-K3',
      titel: 'Das UGB und sein Drittes Buch',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Das Unternehmensgesetzbuch hat fünf Bücher. Für uns zentral ist das Dritte Buch ‚Rechnungslegung‘ mit den §§ 189 bis 283 UGB. Es ist zweistufig gebaut: allgemeine Vorschriften für alle Rechnungslegungspflichtigen und ergänzende, strengere Vorschriften für Kapitalgesellschaften. Der Grund: Geschäftsführung und Vorstand wirtschaften mit dem Eigentum anderer und schulden dafür besonders genaue Rechenschaft.',
        },
        {
          typ: 'absatz',
          text: 'Wer Unternehmer ist, regeln die §§ 1 bis 3 UGB: Unternehmer kraft Betrieb eines Unternehmens (§ 1, jede auf Dauer angelegte Organisation selbständiger wirtschaftlicher Tätigkeit, auch ohne Gewinnabsicht), Unternehmer kraft Rechtsform (§ 2, unter anderem AG und GmbH) und Unternehmer kraft Eintragung (§ 3).',
        },
        {
          typ: 'paragraf',
          text: '§ 189 UGB legt fest, wer das Dritte Buch anwenden muss.',
        },
      ],
      merksatz: 'Rechnungslegung heißt Drittes Buch: §§ 189 bis 283 UGB.',
    },
    {
      id: 'R1-K4',
      titel: 'Wer muss Rechnung legen? § 189 UGB',
      bloecke: [
        {
          typ: 'liste',
          punkte: [
            'Kapitalgesellschaften (GmbH, AG) sind immer rechnungslegungspflichtig, unabhängig von Größe und Tätigkeit (§ 189 Abs 1 Z 1 UGB)',
            'Kapitalistische Personengesellschaften, bei denen keine natürliche Person unbeschränkt haftet (typisch: GmbH & Co KG), sind ebenfalls immer rechnungslegungspflichtig (§ 189 Abs 1 Z 2 UGB)',
            'Alle anderen Unternehmer (etwa Einzelunternehmen, OG, KG) erst ab mehr als 700.000 Euro Umsatzerlösen je einheitlichem Betrieb im Geschäftsjahr (§ 189 Abs 1 Z 3 UGB)',
          ],
        },
        {
          typ: 'absatz',
          text: 'Für die Umsatzschwelle gilt (§ 189 Abs 2 UGB): Wird sie in zwei aufeinanderfolgenden Geschäftsjahren überschritten, beginnt die Pflicht ab dem zweitfolgenden Geschäftsjahr. Wird sie um mindestens 300.000 Euro überschritten (also Umsatzerlöse über 1.000.000 Euro), beginnt die Pflicht schon ab dem folgenden Geschäftsjahr (qualifiziertes Überschreiten).',
        },
        {
          typ: 'absatz',
          text: 'Nicht unter das Dritte Buch fallen Angehörige der freien Berufe, Land- und Forstwirte sowie Überschussrechner (§ 189 Abs 4 UGB), steuerliche Pflichten können trotzdem bestehen. Achtung: Diese Ausnahme rettet nur natürliche Personen und ihre Personengesellschaften. Eine Steuerberatungs-GmbH ist als Kapitalgesellschaft rechnungslegungspflichtig.',
        },
        {
          typ: 'beispiel',
          text: 'Die AlpenRad GmbH ist kraft Rechtsform rechnungslegungspflichtig. Auf ihren Umsatz kommt es dafür nicht an.',
        },
      ],
      merksatz: 'Rechtsform vor Umsatz: Kapitalgesellschaften immer, andere ab 700.000 Euro.',
    },
    {
      id: 'R1-K5',
      titel: 'Grundbegriffe der Bilanzierung',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Vermögensgegenstände sind Sachen, Rechte und wirtschaftliche Werte, die einen wirtschaftlichen Vorteil verkörpern und einzeln verwertbar sind (etwa durch Verkauf oder Vermietung). Das ‚Wirtschaftsgut‘ ist der etwas weitere Begriff des Steuerrechts.',
        },
        {
          typ: 'absatz',
          text: 'Schulden ist der Oberbegriff für Verbindlichkeiten und Rückstellungen. Verbindlichkeiten sind dem Grunde und der Höhe nach sicher (das Bankdarlehen). Rückstellungen sind Schulden, deren Bestehen oder Höhe ungewiss ist (ein drohender Garantiefall). Reinvermögen ist das Vermögen abzüglich der Schulden, das Eigenkapital ist die Residualgröße der Bilanz.',
        },
        {
          typ: 'absatz',
          text: 'Die Bilanz zeigt Bestandsgrößen zu einem Stichtag: Aktiva als Mittelverwendung, Passiva als Mittelherkunft, beide Seiten sind immer gleich groß. Die GuV zeigt Erfolgsgrößen eines Zeitraums: Aufwand und Ertrag sind periodisierte Ausgaben und Einnahmen. Ist der Ertrag größer als der Aufwand, entsteht Gewinn und das Eigenkapital wächst.',
        },
        {
          typ: 'beispiel',
          text: 'Werkstattausstattung: Vermögensgegenstand. Bankdarlehen: Verbindlichkeit. Möglicher Garantiefall: Rückstellung. Überwiesene Monatsmiete: Aufwand. Verkauf von E-Bikes: Ertrag.',
        },
      ],
      merksatz: 'Sichere Schuld heißt Verbindlichkeit, unsichere heißt Rückstellung.',
    },
    {
      id: 'R1-K6',
      titel: 'Bestandteile des Abschlusses und Größenklassen',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Alle Rechnungslegungspflichtigen erstellen Bilanz und GuV. Kapitalgesellschaften erstellen zusätzlich einen Anhang, der mit Bilanz und GuV eine Einheit bildet (§ 222 Abs 1 UGB) und erläutert, ergänzt, entlastet und nötigenfalls korrigiert. Mittelgroße und große Kapitalgesellschaften erstellen außerdem einen Lagebericht (§ 243 UGB), eine kleine GmbH wie die AlpenRad GmbH muss das nicht. Der Lagebericht ist kein Bestandteil des Jahresabschlusses, er tritt neben ihn.',
        },
        {
          typ: 'absatz',
          text: 'Die Größenklassen des § 221 UGB hängen an drei Merkmalen: Bilanzsumme, Umsatzerlöse und Arbeitnehmerzahl im Jahresdurchschnitt. Es gelten die Werte der UGB-Schwellenwerte-Verordnung für Geschäftsjahre ab 2024: Kleinstkapitalgesellschaft bis 450.000 / 900.000 Euro / 10 Arbeitnehmer, klein bis 6,25 Mio / 12,5 Mio / 50, mittelgroß bis 25 Mio / 50 Mio / 250, darüber groß. Entscheidend sind immer mindestens zwei der drei Merkmale. Die Rechtsfolgen wechseln erst, wenn die Merkmale an zwei aufeinanderfolgenden Abschlussstichtagen über- oder unterschritten werden. Bei Neugründung zählt bereits der erste Abschlussstichtag (§ 221 Abs 4 UGB).',
        },
        {
          typ: 'absatz',
          text: 'Folgen der Größenklasse: Der Jahresabschluss von Kapitalgesellschaften ist durch einen Abschlussprüfer zu prüfen, ausgenommen kleine GmbH ohne gesetzliche Aufsichtsratspflicht (§ 268 Abs 1 UGB). Offenzulegen ist beim Firmenbuchgericht, elektronisch, spätestens neun Monate nach dem Abschlussstichtag (§ 277 Abs 1 UGB), für kleine GmbH mit Erleichterungen (§ 278 UGB), für Kleinstkapitalgesellschaften gelten weitere Vereinfachungen.',
        },
      ],
      merksatz: 'Zwei von drei Merkmalen entscheiden die Klasse.',
    },
  ],
  quiz: [
    {
      id: 'R1-Q1',
      frage: 'Welche Aussage zum Rechnungswesen stimmt?',
      antworten: [
        'Das interne Rechnungswesen dient der Selbstinformation des Managements und ist kaum gesetzlich geregelt',
        'Das externe Rechnungswesen ist freiwillig',
        'Der Jahresabschluss gehört zum internen Rechnungswesen',
        'Das interne Rechnungswesen richtet sich vor allem an Gläubiger',
        'Kosten und Leistungen sind die Rechengrößen des externen Rechnungswesens',
      ],
      richtig: 0,
      erklaerung:
        'Intern heißt Kosten- und Leistungsrechnung für das Management, kaum normiert. Extern heißt UGB-normierter Jahresabschluss für Außenstehende mit Aufwand und Ertrag.',
    },
    {
      id: 'R1-Q2',
      frage: 'Was gehört NICHT zu den Zielen des Jahresabschlusses?',
      antworten: [
        'Dokumentation der Geschäftsvorfälle',
        'Rechenschaft und Information',
        'Ermittlung der Selbstkosten je Produkt',
        'Kapitalerhaltung durch Zahlungsbemessung',
        'Bemessung des ausschüttbaren Gewinns',
      ],
      richtig: 2,
      erklaerung:
        'Selbstkosten je Produkt ermittelt die Kosten- und Leistungsrechnung, also das interne Rechnungswesen.',
    },
    {
      id: 'R1-Q3',
      frage: 'Wo stehen die Rechnungslegungsvorschriften des UGB?',
      antworten: [
        'Im Ersten Buch, §§ 1 bis 58',
        'Im Dritten Buch, §§ 189 bis 283',
        'Im Fünften Buch',
        'Im EStG',
        'Im GmbH-Gesetz',
      ],
      richtig: 1,
      erklaerung: 'Das Dritte Buch des UGB regelt die Rechnungslegung in den §§ 189 bis 283.',
    },
    {
      id: 'R1-Q4',
      frage:
        '‚Ein ordentlicher Kaufmann rechnet sich lieber ärmer als reicher.‘ Welches Prinzip steckt dahinter?',
      antworten: [
        'Stichtagsprinzip',
        'Vorsichtsprinzip',
        'Saldierungsverbot',
        'Pagatorisches Prinzip',
        'Wesentlichkeit',
      ],
      richtig: 1,
      erklaerung:
        'Das Vorsichtsprinzip prägt das gesamte UGB. Seine Ausprägungen lernst Du in Runde 2 näher kennen.',
    },
    {
      id: 'R1-Q5',
      frage: 'Warum ist die AlpenRad GmbH rechnungslegungspflichtig?',
      antworten: [
        'Weil ihr Umsatz über 700.000 Euro liegt',
        'Weil sie im Firmenbuch eingetragen ist',
        'Kraft Rechtsform als Kapitalgesellschaft, unabhängig vom Umsatz',
        'Weil sie mehr als 10 Arbeitnehmer hat',
        'Sie ist erst ab dem zweiten Geschäftsjahr pflichtig',
      ],
      richtig: 2,
      erklaerung:
        'Kapitalgesellschaften fallen nach § 189 Abs 1 Z 1 UGB immer unter das Dritte Buch, ohne jede Schwelle.',
    },
    {
      id: 'R1-Q6',
      frage:
        'Die Tischlerei Moser e.U. erzielt 500.000 Euro Umsatzerlöse. Rechnungslegungspflicht nach UGB?',
      antworten: [
        'Ja, jeder Unternehmer ist pflichtig',
        'Ja, ab Eintragung im Firmenbuch',
        'Nein, die Schwelle von 700.000 Euro ist nicht überschritten',
        'Nein, Einzelunternehmer sind nie pflichtig',
        'Ja, weil es ein Gewerbebetrieb ist',
      ],
      richtig: 2,
      erklaerung:
        'Einzelunternehmer sind erst ab mehr als 700.000 Euro Umsatzerlösen rechnungslegungspflichtig (§ 189 Abs 1 Z 3 UGB).',
    },
    {
      id: 'R1-Q7',
      frage: 'Worin unterscheiden sich Verbindlichkeiten und Rückstellungen?',
      antworten: [
        'Rückstellungen sind Eigenkapital',
        'Verbindlichkeiten sind ungewiss, Rückstellungen sicher',
        'Rückstellungen sind Schulden, die dem Grunde oder der Höhe nach ungewiss sind',
        'Rückstellungen entstehen nur bei Verlusten',
        'Es gibt keinen Unterschied',
      ],
      richtig: 2,
      erklaerung:
        'Beide sind Schulden. Sicher nach Grund und Höhe heißt Verbindlichkeit, ungewiss heißt Rückstellung.',
    },
    {
      id: 'R1-Q8',
      frage: 'Woraus besteht der Jahresabschluss einer GmbH zwingend?',
      antworten: [
        'Nur aus der Bilanz',
        'Aus Bilanz und GuV',
        'Aus Bilanz, GuV und Anhang',
        'Aus Bilanz, GuV, Anhang und Lagebericht',
        'Aus Bilanz und Kapitalflussrechnung',
      ],
      richtig: 2,
      erklaerung:
        'Bei Kapitalgesellschaften bilden Bilanz, GuV und Anhang eine Einheit (§ 222 Abs 1 UGB). Der Lagebericht tritt bei mittelgroßen und großen Gesellschaften hinzu, ist aber kein Bestandteil des Jahresabschlusses.',
    },
    {
      id: 'R1-Q9',
      frage: 'An welchen drei Merkmalen hängen die Größenklassen des § 221 UGB?',
      antworten: [
        'Umsatz, Gewinn, Mitarbeiterzahl',
        'Bilanzsumme, Umsatzerlöse, Arbeitnehmerzahl im Jahresdurchschnitt',
        'Bilanzsumme, Eigenkapitalquote, Umsatz',
        'Gewinn, Bilanzsumme, Unternehmensalter',
        'Umsatz, Standorte, Mitarbeiterzahl',
      ],
      richtig: 1,
      erklaerung:
        'Bilanzsumme, Umsatzerlöse und Arbeitnehmerzahl. Für die Einordnung müssen mindestens zwei der drei Merkmale über oder unter den Grenzen liegen.',
    },
    {
      id: 'R1-Q10',
      frage:
        'Muss der Jahresabschluss einer kleinen GmbH ohne gesetzliche Aufsichtsratspflicht geprüft werden?',
      antworten: [
        'Ja, jeder Abschluss einer Kapitalgesellschaft wird geprüft',
        'Ja, sobald sie mehr als 10 Arbeitnehmer hat',
        'Nein, sie ist von der Prüfungspflicht ausgenommen',
        'Nein, GmbHs sind nie prüfungspflichtig',
        'Nur, wenn die Bank es verlangt',
      ],
      richtig: 2,
      erklaerung:
        '§ 268 Abs 1 UGB nimmt kleine GmbHs ohne gesetzliche Aufsichtsratspflicht von der Abschlussprüfung aus. Mittelgroße und große Kapitalgesellschaften sind prüfungspflichtig.',
    },
  ],
  faelle: [
    {
      id: 'F1-1',
      titel: 'Wer fällt unter das Dritte Buch?',
      sachverhalt:
        'Mittagspause im Lendhafen. Lena und Jakob wollen wissen, wer in ihrem Umfeld eigentlich ‚Bücher führen‘ muss. Mag. Huber legt vier Visitenkarten auf den Tisch: die AlpenRad GmbH (geplanter Umsatz im ersten Jahr 1,5 Mio Euro), den Zulieferbetrieb Radwerkstatt Moser e.U. (Umsatzerlöse zuletzt 600.000 Euro), die Steuerberaterin Mag. Kern, Einzelunternehmerin (Umsatzerlöse 900.000 Euro), und die Grazer Bike-Logistik GmbH & Co KG, deren einzige unbeschränkt haftende Gesellschafterin eine GmbH ist. Beurteile jede der vier.',
      teilaufgaben: [
        {
          id: 'F1-1a',
          typ: 'choice',
          frage: 'AlpenRad GmbH?',
          optionen: [
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 1 UGB (Kapitalgesellschaft)',
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 2 UGB (kapitalistische Personengesellschaft)',
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 3 UGB (Umsatzschwelle)',
            'Nein, nicht rechnungslegungspflichtig',
          ],
          richtig: 0,
          punkte: 5,
        },
        {
          id: 'F1-1b',
          typ: 'choice',
          frage: 'Radwerkstatt Moser e.U.?',
          optionen: [
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 1 UGB (Kapitalgesellschaft)',
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 2 UGB (kapitalistische Personengesellschaft)',
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 3 UGB (Umsatzschwelle)',
            'Nein, nicht rechnungslegungspflichtig',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'F1-1c',
          typ: 'choice',
          frage: 'Steuerberaterin Mag. Kern?',
          optionen: [
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 1 UGB (Kapitalgesellschaft)',
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 2 UGB (kapitalistische Personengesellschaft)',
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 3 UGB (Umsatzschwelle)',
            'Nein, nicht rechnungslegungspflichtig',
          ],
          richtig: 3,
          punkte: 5,
        },
        {
          id: 'F1-1d',
          typ: 'choice',
          frage: 'Grazer Bike-Logistik GmbH & Co KG?',
          optionen: [
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 1 UGB (Kapitalgesellschaft)',
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 2 UGB (kapitalistische Personengesellschaft)',
            'Ja, rechnungslegungspflichtig nach § 189 Abs 1 Z 3 UGB (Umsatzschwelle)',
            'Nein, nicht rechnungslegungspflichtig',
          ],
          richtig: 1,
          punkte: 5,
        },
      ],
      hilfe:
        'Prüfe der Reihe nach: Erstens, Kapitalgesellschaft (Z 1)? Zweitens, Personengesellschaft ohne natürliche Person als unbeschränkt haftende Gesellschafterin (Z 2)? Drittens, sonst: mehr als 700.000 Euro Umsatzerlöse (Z 3)? Und zum Schluss: Greift die Ausnahme des § 189 Abs 4 UGB für freie Berufe?',
      loesung:
        'AlpenRad GmbH: Kapitalgesellschaft, damit rechnungslegungspflichtig nach § 189 Abs 1 Z 1 UGB, auf den Umsatz kommt es nicht an. Radwerkstatt Moser e.U.: Einzelunternehmen, fällt unter § 189 Abs 1 Z 3 UGB, mit 600.000 Euro liegt der Umsatz unter der Schwelle von 700.000 Euro, daher keine Pflicht. Mag. Kern: Angehörige der freien Berufe sind vom Dritten Buch ausgenommen (§ 189 Abs 4 UGB), auch bei 900.000 Euro Umsatz, steuerliche Aufzeichnungspflichten bleiben davon unberührt. Grazer Bike-Logistik GmbH & Co KG: Keine natürliche Person haftet unbeschränkt, als unternehmerisch tätige kapitalistische Personengesellschaft ist sie nach § 189 Abs 1 Z 2 UGB rechnungslegungspflichtig, unabhängig von ihrer Größe.',
    },
    {
      id: 'F1-2',
      titel: 'Die Schwelle',
      sachverhalt:
        'Herr Moser will mit AlpenRad wachsen und künftig Rahmen in Serie zuliefern. Er rechnet Dir zwei Szenarien vor. Szenario A: Umsatzerlöse im Jahr 1: 780.000 Euro, im Jahr 2: 820.000 Euro. Szenario B: Ein Großauftrag bringt schon im Jahr 1 Umsatzerlöse von 1.050.000 Euro. Ab welchem Geschäftsjahr ist die Radwerkstatt Moser e.U. jeweils rechnungslegungspflichtig?',
      teilaufgaben: [
        {
          id: 'F1-2a',
          typ: 'choice',
          frage: 'Szenario A: Pflicht ab...?',
          optionen: ['Jahr 2', 'Jahr 3', 'Jahr 4', 'Gar nicht', 'Schon ab Jahr 1'],
          richtig: 2,
          punkte: 10,
        },
        {
          id: 'F1-2b',
          typ: 'choice',
          frage: 'Szenario B: Pflicht ab...?',
          optionen: ['Jahr 1', 'Jahr 2', 'Jahr 3', 'Jahr 4', 'Gar nicht'],
          richtig: 1,
          punkte: 10,
        },
      ],
      hilfe:
        'Normalfall: Die Schwelle von 700.000 Euro muss in zwei aufeinanderfolgenden Geschäftsjahren überschritten werden, die Pflicht beginnt dann ab dem zweitfolgenden Geschäftsjahr nach dem zweiten Überschreiten. Qualifiziert: Liegt der Umsatz über 1.000.000 Euro (Überschreiten um mindestens 300.000 Euro), beginnt die Pflicht schon ab dem folgenden Geschäftsjahr.',
      loesung:
        'Szenario A: Die Schwelle wird in den Jahren 1 und 2 überschritten (780.000 und 820.000 Euro, jeweils über 700.000 Euro, aber nicht über 1.000.000 Euro). Nach § 189 Abs 2 Z 1 UGB treten die Rechtsfolgen ab dem zweitfolgenden Geschäftsjahr ein, also ab Jahr 4. Szenario B: 1.050.000 Euro überschreiten die Schwelle um mehr als 300.000 Euro. Beim qualifizierten Überschreiten beginnt die Pflicht nach § 189 Abs 2 Z 2 UGB schon ab dem folgenden Geschäftsjahr, also ab Jahr 2.',
    },
    {
      id: 'F1-3',
      titel: 'Begriffe sortieren im Werkstattalltag',
      sachverhalt:
        'Ende Februar führt Dich Jakob durch die Werkstatt. Fünf Dinge fallen Dir auf. Ordne jeden Sachverhalt dem passenden Grundbegriff zu.',
      teilaufgaben: [
        {
          id: 'F1-3a',
          typ: 'choice',
          frage: 'Die neu gekaufte Lötstation im Eigentum der AlpenRad GmbH',
          optionen: ['Vermögensgegenstand', 'Verbindlichkeit', 'Rückstellung', 'Aufwand', 'Ertrag'],
          richtig: 0,
          punkte: 4,
        },
        {
          id: 'F1-3b',
          typ: 'choice',
          frage: 'Das Bankdarlehen über 150.000 Euro bei der Steirischen Landesbank',
          optionen: ['Vermögensgegenstand', 'Verbindlichkeit', 'Rückstellung', 'Aufwand', 'Ertrag'],
          richtig: 1,
          punkte: 4,
        },
        {
          id: 'F1-3c',
          typ: 'choice',
          frage:
            'Ein Händler meldet einen möglichen Garantiefall an einem ausgelieferten E-Bike, ob und in welcher Höhe Kosten entstehen, ist offen',
          optionen: ['Vermögensgegenstand', 'Verbindlichkeit', 'Rückstellung', 'Aufwand', 'Ertrag'],
          richtig: 2,
          punkte: 4,
        },
        {
          id: 'F1-3d',
          typ: 'choice',
          frage: 'Die bereits überwiesene Februar-Miete für die Werkstatthalle',
          optionen: ['Vermögensgegenstand', 'Verbindlichkeit', 'Rückstellung', 'Aufwand', 'Ertrag'],
          richtig: 3,
          punkte: 4,
        },
        {
          id: 'F1-3e',
          typ: 'choice',
          frage: 'Der Verkauf von drei E-Bikes an einen Grazer Fachhändler',
          optionen: ['Vermögensgegenstand', 'Verbindlichkeit', 'Rückstellung', 'Aufwand', 'Ertrag'],
          richtig: 4,
          punkte: 4,
        },
      ],
      hilfe:
        'Frag Dich bei jedem Sachverhalt: Ist es ein Gut oder Recht mit wirtschaftlichem Vorteil, das einzeln verwertbar ist (Vermögensgegenstand)? Eine sichere Schuld (Verbindlichkeit) oder eine dem Grunde oder der Höhe nach ungewisse Schuld (Rückstellung)? Ein Werteverzehr der Periode (Aufwand) oder ein Wertezuwachs der Periode (Ertrag)?',
      loesung:
        'Die Lötstation ist ein einzeln verwertbarer wirtschaftlicher Vorteil, also ein Vermögensgegenstand. Das Bankdarlehen ist nach Grund und Höhe sicher, also eine Verbindlichkeit. Der gemeldete Garantiefall ist eine dem Grunde und der Höhe nach ungewisse Schuld, also eine Rückstellung. Die überwiesene Miete ist periodisierter Werteverzehr, also Aufwand. Der Verkauf der E-Bikes ist realisierter Wertezuwachs, also Ertrag.',
    },
    {
      id: 'F1-4',
      titel: 'Wie groß ist AlpenRad?',
      sachverhalt:
        'Im März steht der Businessplan-Termin bei der Steirischen Landesbank an. Die Planzahlen zum ersten Abschlussstichtag am 31.12.: Bilanzsumme rund 800.000 Euro, Umsatzerlöse rund 1,5 Mio Euro, im Jahresdurchschnitt 14 Arbeitnehmer. Der Bankberater fragt, was das rechtlich bedeutet.',
      teilaufgaben: [
        {
          id: 'F1-4a',
          typ: 'choice',
          frage: 'In welche Größenklasse fällt die AlpenRad GmbH nach diesen Planzahlen?',
          optionen: [
            'Kleinstkapitalgesellschaft',
            'Kleine Kapitalgesellschaft',
            'Mittelgroße Kapitalgesellschaft',
            'Große Kapitalgesellschaft',
            'Keine Einordnung möglich',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'F1-4b',
          typ: 'choice',
          frage: 'Gilt die Einordnung schon für das erste Geschäftsjahr?',
          optionen: [
            'Nein, erst nach zwei aufeinanderfolgenden Stichtagen',
            'Ja, bei Neugründung zählt bereits der erste Abschlussstichtag',
            'Nein, erst ab dem dritten Geschäftsjahr',
            'Nur mit Bewilligung des Firmenbuchgerichts',
          ],
          richtig: 1,
          punkte: 5,
        },
        {
          id: 'F1-4c',
          typ: 'choice',
          frage: 'Muss der erste Jahresabschluss geprüft werden?',
          optionen: [
            'Ja, jede Kapitalgesellschaft ist prüfungspflichtig',
            'Ja, weil mehr als 10 Arbeitnehmer beschäftigt sind',
            'Nein, als kleine GmbH ohne gesetzliche Aufsichtsratspflicht',
            'Nein, im ersten Jahr ist niemand prüfungspflichtig',
          ],
          richtig: 2,
          punkte: 5,
        },
        {
          id: 'F1-4d',
          typ: 'choice',
          frage: 'Was gilt für die Offenlegung?',
          optionen: [
            'Keine Offenlegung, kleine GmbHs sind befreit',
            'Einreichung beim Firmenbuchgericht binnen neun Monaten, elektronisch, mit Erleichterungen für kleine GmbHs',
            'Veröffentlichung im Bundesanzeiger binnen zwölf Monaten',
            'Offenlegung nur auf Verlangen der Bank',
          ],
          richtig: 1,
          punkte: 5,
        },
      ],
      hilfe:
        'Vergleiche die drei Planzahlen zuerst mit den Kleinst-Grenzen (450.000 Euro Bilanzsumme, 900.000 Euro Umsatzerlöse, 10 Arbeitnehmer), dann mit den Klein-Grenzen (6,25 Mio, 12,5 Mio, 50). Mindestens zwei der drei Merkmale entscheiden. Für Neugründung, Prüfung und Offenlegung hilft Dir Kachel 6.',
      loesung:
        'Größenklasse: Alle drei Kleinst-Merkmale sind überschritten (800.000 über 450.000, 1,5 Mio über 900.000, 14 über 10), eine Kleinstkapitalgesellschaft scheidet aus. Von den Klein-Grenzen (6,25 Mio Bilanzsumme, 12,5 Mio Umsatzerlöse, 50 Arbeitnehmer) wird keine überschritten, die AlpenRad GmbH ist damit eine kleine Kapitalgesellschaft (§ 221 Abs 1 UGB in der Fassung der UGB-Schwellenwerte-Verordnung). Erstes Geschäftsjahr: Bei Neugründung treten die Rechtsfolgen bereits ein, wenn die Merkmale am ersten Abschlussstichtag vorliegen (§ 221 Abs 4 UGB). Prüfung: Kleine GmbHs ohne gesetzliche Aufsichtsratspflicht sind von der Abschlussprüfung ausgenommen (§ 268 Abs 1 UGB). Offenlegung: Der Jahresabschluss ist spätestens neun Monate nach dem Abschlussstichtag elektronisch beim Firmenbuchgericht einzureichen (§ 277 Abs 1 UGB), für kleine GmbHs gelten Erleichterungen (§ 278 UGB). Der Bundesanzeiger ist eine deutsche Einrichtung und hier falsch.',
    },
  ],
};
