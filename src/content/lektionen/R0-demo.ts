// PLATZHALTER: Demo-Runde R0 (Probelauf) aus Phase 0.
// Diese Runde ist fachneutral und dient nur dem Kennenlernen der Oberflaeche.
// Sie wird in Phase 1 ausgeblendet, sobald die echten Runden R1 bis R7 kommen.

import type { Lektion } from '../typen';

export const lektionR0: Lektion = {
  id: 'R0',
  titel: 'Probelauf',
  untertitel: 'Lerne die Oberfläche kennen',
  intro: {
    story:
      'Bevor es zur AlpenRad GmbH geht, zeigt Dir Mag. Huber die Werkzeuge. Diese Proberunde zählt nicht zur Gesamtwertung.',
    inhalte: [
      'Bedienung der Lernkacheln',
      'Ablauf von Quiz und Fällen',
      'Punkteregeln und Kennwörter',
      'Notizbuch und PDFs',
    ],
    lernziele: [
      'Du kennst den Rundenablauf',
      'Du weißt, was Hilfe- und Lösungsbutton kosten',
      'Du kannst Notizbuch und PDF nutzen',
      'Du weißt, woher die Kennwörter kommen',
    ],
  },
  kacheln: [
    {
      id: 'R0-K1',
      titel: 'So läuft eine Runde',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Jede Runde hat fünf Stationen. Du liest das Intro, arbeitest sechs Lernkacheln durch, beantwortest das Quiz, löst die Fälle und öffnest mit dem Kennwort Deine Auswertung.',
        },
      ],
      merksatz: 'Intro, Kacheln, Quiz, Fälle, Auswertung.',
    },
    {
      id: 'R0-K2',
      titel: 'Lernkacheln',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Die Kacheln enthalten den Stoff der Runde. Erst wenn Du alle sechs geöffnet hast, startet das Quiz. Du kannst jederzeit zurückkehren und nachlesen.',
        },
      ],
      merksatz: 'Erst lesen, dann antworten.',
    },
    {
      id: 'R0-K3',
      titel: 'Das Quiz',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Zehn Fragen mit je fünf Antwortmöglichkeiten, genau eine ist richtig. Jede richtige Antwort bringt 2 Punkte. Nach der Abgabe siehst Du Dein Ergebnis erst in der Auswertung.',
        },
      ],
      merksatz: '10 Fragen, 20 Punkte.',
    },
    {
      id: 'R0-K4',
      titel: 'Die Fälle',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Die Fälle bringen zusammen 80 Punkte je Runde. Der Hilfe-Button halbiert die möglichen Punkte des Falls. Der Lösung-Button setzt sie auf null. Beide Buttons warnen Dich, bevor etwas passiert.',
        },
      ],
      merksatz: 'Hilfe kostet die Hälfte, Lösung kostet alles.',
    },
    {
      id: 'R0-K5',
      titel: 'Notizbuch und Bedienhilfe',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Über die Kopfzeile öffnest Du Dein Notizbuch und die Bedienhilfe. Notizen werden automatisch gespeichert und erscheinen im PDF der jeweiligen Runde.',
        },
      ],
      merksatz: 'Notizen landen nur im Runden-PDF.',
    },
    {
      id: 'R0-K6',
      titel: 'Kennwort, Auswertung, PDF',
      bloecke: [
        {
          typ: 'absatz',
          text: 'Das Kennwort für die Auswertung bekommst Du vom Trainer. Nach der Auswertung lädst Du das Runden-PDF mit Ergebnis, Lernstoff, Bilanz und Notizen. Am Ende des Spiels schickst Du das Gesamt-PDF per E-Mail an Deinen Lehrveranstaltungsleiter.',
        },
      ],
      merksatz: 'Ohne Kennwort keine Auswertung.',
    },
  ],
  quiz: [
    {
      id: 'R0-Q1',
      frage: 'Wie viele Punkte kannst Du in einer Runde höchstens erreichen?',
      antworten: ['20', '50', '80', '100', '700'],
      richtig: 3,
      erklaerung: '20 Punkte aus dem Quiz und 80 aus den Fällen ergeben 100 Punkte je Runde.',
    },
    {
      id: 'R0-Q2',
      frage: 'Wie viele Punkte bringt das Quiz einer Runde höchstens?',
      antworten: ['10', '20', '40', '80', '100'],
      richtig: 1,
      erklaerung: 'Zehn Fragen zu je 2 Punkten.',
    },
    {
      id: 'R0-Q3',
      frage: 'Was bewirkt der Hilfe-Button bei einem Fall?',
      antworten: [
        'Nichts, er zeigt nur Tipps',
        'Der Fall bringt höchstens die halbe Punktzahl',
        'Der Fall bringt 0 Punkte',
        'Die Runde wird beendet',
        '5 Punkte Abzug auf das Quiz',
      ],
      richtig: 1,
      erklaerung: 'Die Hilfe halbiert die erreichbaren Punkte des betroffenen Falls.',
    },
    {
      id: 'R0-Q4',
      frage: 'Was bewirkt der Lösung-Button bei einem Fall?',
      antworten: [
        'Halbe Punktzahl auf den Fall',
        'Kein Effekt',
        '0 Punkte auf die ganze Runde',
        '0 Punkte auf diesen Fall',
        'Das Quiz wird gesperrt',
      ],
      richtig: 3,
      erklaerung: 'Wer die Lösung öffnet, bekommt auf diesen Fall keine Punkte mehr.',
    },
    {
      id: 'R0-Q5',
      frage: 'Woher bekommst Du das Kennwort für die Auswertung?',
      antworten: [
        'Vom Trainer in der Lehrveranstaltung',
        'Es steht in der Bedienhilfe',
        'Es kommt automatisch per E-Mail',
        'Aus dem Notizbuch',
        'Es gibt keines',
      ],
      richtig: 0,
      erklaerung: 'Die Kennwörter gibt der Trainer bekannt, damit alle gemeinsam auswerten.',
    },
    {
      id: 'R0-Q6',
      frage: 'Wo erscheinen Deine Notizen?',
      antworten: [
        'Im Gesamt-PDF',
        'In beiden PDFs',
        'Auf dem Dashboard',
        'Nirgends',
        'Nur im PDF der jeweiligen Runde',
      ],
      richtig: 4,
      erklaerung: 'Notizen sind Teil des Runden-PDFs, das Gesamt-PDF bleibt ohne Notizen.',
    },
    {
      id: 'R0-Q7',
      frage: 'Welche Gleichung muss in jeder Bilanz gelten?',
      antworten: [
        'Aktiva größer Passiva',
        'Passiva größer Aktiva',
        'Summe Aktiva gleich Summe Passiva',
        'Aktiva gleich Eigenkapital',
        'Die Gleichung gilt nur zum Jahresende',
      ],
      richtig: 2,
      erklaerung: 'Die Bilanzsumme ist auf beiden Seiten immer gleich.',
    },
    {
      id: 'R0-Q8',
      frage: 'Wie viele Runden hat das Planspiel (ohne Probelauf)?',
      antworten: ['5', '6', '7', '8', '10'],
      richtig: 2,
      erklaerung: 'Sieben Runden führen von den Grundlagen bis zu den Rückstellungen.',
    },
    {
      id: 'R0-Q9',
      frage: 'Was machst Du am Spielende mit dem Gesamt-PDF?',
      antworten: [
        'Nichts, es wird automatisch versendet',
        'Ausdrucken und abheften',
        'An die Mitstudierenden verteilen',
        'Im Notizbuch speichern',
        'Herunterladen und per E-Mail an den Lehrveranstaltungsleiter senden',
      ],
      richtig: 4,
      erklaerung: 'Das PDF lädst Du herunter und schickst es als Anhang per E-Mail.',
    },
    {
      id: 'R0-Q10',
      frage: 'In welcher Reihenfolge durchläufst Du eine Runde?',
      antworten: [
        'Kacheln, Quiz, Fälle, Auswertung',
        'Quiz, Kacheln, Fälle, Auswertung',
        'Fälle, Quiz, Kacheln, Auswertung',
        'Auswertung, Quiz, Fälle, Kacheln',
        'Die Reihenfolge ist frei',
      ],
      richtig: 0,
      erklaerung: 'Erst der Stoff, dann das Quiz, dann die Fälle, zum Schluss die Auswertung.',
    },
  ],
  faelle: [
    {
      id: 'F0-1',
      titel: 'Eingabetraining',
      sachverhalt:
        'Mag. Huber testet mit Dir das Eingabesystem. Ein Lieferant bietet einen Werkzeugkoffer zum Listenpreis von 1.000 Euro an. Er gewährt 10 Prozent Rabatt. Bei Zahlung innerhalb von 10 Tagen zieht die AlpenRad GmbH weitere 2 Prozent Skonto vom rabattierten Betrag ab.',
      teilaufgaben: [
        {
          id: 'F0-1a',
          typ: 'zahl',
          frage: 'Wie viel Euro beträgt der Preis nach Abzug des Rabatts?',
          punkte: 20,
          loesung: 900,
          einheit: 'EUR',
        },
        {
          id: 'F0-1b',
          typ: 'zahl',
          frage: 'Wie viel Euro überweist die AlpenRad GmbH bei Zahlung innerhalb von 10 Tagen?',
          punkte: 20,
          loesung: 882,
          einheit: 'EUR',
        },
      ],
      hilfe:
        'Rechne zuerst 10 Prozent vom Listenpreis herunter. Vom Ergebnis ziehst Du dann 2 Prozent Skonto ab.',
      loesung:
        '1.000 Euro minus 10 Prozent Rabatt ergibt 900 Euro. 900 Euro minus 2 Prozent Skonto (18 Euro) ergibt 882 Euro Überweisungsbetrag.',
    },
    {
      id: 'F0-2',
      titel: 'Spielregel-Check',
      sachverhalt:
        'Zum Abschluss des Probelaufs prüft Mag. Huber, ob Du die Spielregeln sicher beherrschst.',
      teilaufgaben: [
        {
          id: 'F0-2a',
          typ: 'choice',
          frage: 'Du hast das Kennwort falsch eingegeben. Was passiert?',
          optionen: [
            'Die Runde wird auf null gesetzt',
            'Nichts, Du kannst es erneut versuchen',
            'Du verlierst 10 Punkte',
            'Das Spiel ist beendet',
          ],
          punkte: 20,
          richtig: 1,
        },
        {
          id: 'F0-2b',
          typ: 'choice',
          frage: 'Verändern Deine Antworten die Bilanz der AlpenRad GmbH?',
          optionen: [
            'Ja, jede Antwort verändert die Bilanz',
            'Nur bei falschen Antworten',
            'Nur im Probelauf',
            'Nein, die Bilanz folgt immer der Musterlösung',
          ],
          punkte: 20,
          richtig: 3,
        },
      ],
      hilfe:
        'Denk an das Bilanzpanel am Dashboard und an den Hinweis, wessen Lösung die Bilanz fortschreibt.',
      loesung:
        'Kennwörter kannst Du beliebig oft eingeben, Punkte kosten sie nie. Die Bilanz folgt stets der Musterlösung, damit sie in jeder Runde stimmt. Deine Abweichungen siehst Du in der Auswertung.',
    },
  ],
  bilanzDelta: {
    erlaeuterung:
      'Probebuchung: Die AlpenRad GmbH kauft den Werkzeugkoffer um 882 Euro gegen Banküberweisung.',
    neuerStichtagLabel: 'Probelauf, nach Einkauf',
    neuePosten: [
      {
        seite: 'aktiva',
        gruppe: 'Anlagevermögen',
        gruppeEinfuegenVor: 'Umlaufvermögen',
        posten: { id: 'bga', name: 'Betriebs- und Geschäftsausstattung' },
      },
    ],
    aenderungen: [
      { postenId: 'bank', delta: -882 },
      { postenId: 'bga', delta: 882 },
    ],
  },
};
