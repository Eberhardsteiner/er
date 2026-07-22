// Content-Validator: npm run validate
// Laedt alle Lektionen aus src/content und prueft die Contentregeln.
// Ausgabe als Liste je Lektion, Exit-Code ungleich null bei Befund.

import { lektionen, startBilanz } from '../src/content';
import type { Bilanz, Lektion, RundenId } from '../src/content/typen';
import { pruefeBilanz, summeSeite, wendeDeltaAn } from '../src/engine/bilanz';
import { kennwortFuerRunde } from '../src/engine/kennwort';

// Kontrollwerte der Musterbilanz je Runde (aus den Mega-Prompts der Phasen).
// Die Kette Gruendungsbilanz, R3, R4 muss in Folge exakt stimmen.
interface Kontrollwerte {
  bilanzsumme: number;
  posten: { postenId: string; betrag: number }[];
}

const KONTROLLWERTE: Partial<Record<RundenId, Kontrollwerte>> = {
  R3: {
    bilanzsumme: 290000,
    posten: [
      { postenId: 'immaterielle', betrag: 15000 },
      { postenId: 'maschinen', betrag: 120000 },
      { postenId: 'vorraete', betrag: 60000 },
      { postenId: 'bank', betrag: 95000 },
      { postenId: 'stammkapital', betrag: 100000 },
      { postenId: 'ergebnis', betrag: -20000 },
      { postenId: 'bankdarlehen', betrag: 150000 },
      { postenId: 'lieferverb', betrag: 60000 },
    ],
  },
  R4: {
    bilanzsumme: 740000,
    posten: [
      { postenId: 'immaterielle', betrag: 15000 },
      { postenId: 'grundstuecke', betrag: 128400 },
      { postenId: 'gebaeude', betrag: 299600 },
      { postenId: 'maschinen', betrag: 159000 },
      { postenId: 'vorraete', betrag: 108000 },
      { postenId: 'bank', betrag: 30000 },
      { postenId: 'stammkapital', betrag: 100000 },
      { postenId: 'ergebnis', betrag: -20000 },
      { postenId: 'bankdarlehen', betrag: 600000 },
      { postenId: 'lieferverb', betrag: 60000 },
    ],
  },
  R5: {
    bilanzsumme: 704305,
    posten: [
      { postenId: 'immaterielle', betrag: 13000 },
      { postenId: 'grundstuecke', betrag: 128400 },
      { postenId: 'gebaeude', betrag: 295855 },
      { postenId: 'maschinen', betrag: 129050 },
      { postenId: 'vorraete', betrag: 108000 },
      { postenId: 'bank', betrag: 30000 },
      { postenId: 'stammkapital', betrag: 100000 },
      { postenId: 'ergebnis', betrag: -55695 },
      { postenId: 'bankdarlehen', betrag: 600000 },
      { postenId: 'lieferverb', betrag: 60000 },
    ],
  },
  R6: {
    bilanzsumme: 719305,
    posten: [
      { postenId: 'immaterielle', betrag: 13000 },
      { postenId: 'grundstuecke', betrag: 128400 },
      { postenId: 'gebaeude', betrag: 295855 },
      { postenId: 'maschinen', betrag: 129050 },
      { postenId: 'vorraete', betrag: 9000 },
      { postenId: 'forderungen', betrag: 54000 },
      { postenId: 'bank', betrag: 90000 },
      { postenId: 'stammkapital', betrag: 100000 },
      { postenId: 'ergebnis', betrag: 19305 },
      { postenId: 'bankdarlehen', betrag: 600000 },
      { postenId: 'lieferverb', betrag: 0 },
    ],
  },
};

function pruefeKontrollwerte(runde: RundenId, bilanz: Bilanz): string[] {
  const kontrollwerte = KONTROLLWERTE[runde];
  if (!kontrollwerte) return [];
  const fehler: string[] = [];
  const allePosten = [...bilanz.aktiva, ...bilanz.passiva].flatMap((g) => g.posten);
  for (const kontrolle of kontrollwerte.posten) {
    const posten = allePosten.find((p) => p.id === kontrolle.postenId);
    if (!posten) {
      fehler.push(`Kontrollwert ${runde}: Posten "${kontrolle.postenId}" fehlt in der Bilanz.`);
    } else if (posten.betrag !== kontrolle.betrag) {
      fehler.push(
        `Kontrollwert ${runde}: Posten "${kontrolle.postenId}" hat ${posten.betrag}, erwartet ${kontrolle.betrag}.`,
      );
    }
  }
  for (const [seite, gruppen] of [
    ['Aktiva', bilanz.aktiva],
    ['Passiva', bilanz.passiva],
  ] as const) {
    const summe = summeSeite(gruppen);
    if (summe !== kontrollwerte.bilanzsumme) {
      fehler.push(
        `Kontrollwert ${runde}: ${seite}-Summe ist ${summe}, erwartet ${kontrollwerte.bilanzsumme}.`,
      );
    }
  }
  return fehler;
}

function pruefeLektion(lektion: Lektion): string[] {
  const fehler: string[] = [];

  // Genau 6 Kacheln
  if (lektion.kacheln.length !== 6) {
    fehler.push(`Es sind genau 6 Kacheln gefordert, gefunden: ${lektion.kacheln.length}.`);
  }

  // Genau 10 Quizfragen mit je 5 Antworten, richtig zwischen 0 und 4, Erklaerung nicht leer
  if (lektion.quiz.length !== 10) {
    fehler.push(`Es sind genau 10 Quizfragen gefordert, gefunden: ${lektion.quiz.length}.`);
  }
  for (const frage of lektion.quiz) {
    if (frage.antworten.length !== 5) {
      fehler.push(`Frage ${frage.id}: 5 Antworten gefordert, gefunden: ${frage.antworten.length}.`);
    }
    if (frage.richtig < 0 || frage.richtig > 4) {
      fehler.push(`Frage ${frage.id}: richtig muss zwischen 0 und 4 liegen, ist ${frage.richtig}.`);
    }
    if (frage.erklaerung.trim() === '') {
      fehler.push(`Frage ${frage.id}: Die Erklärung darf nicht leer sein.`);
    }
  }

  // Gleichverteilung: Jede Antwortposition (0 bis 4) muss bei genau zwei der
  // zehn Quizfragen richtig sein. Gilt fuer alle Lektionen dauerhaft.
  if (lektion.quiz.length === 10) {
    const verteilung = [0, 0, 0, 0, 0];
    for (const frage of lektion.quiz) verteilung[frage.richtig]++;
    if (verteilung.some((anzahl) => anzahl !== 2)) {
      fehler.push(
        `Die richtigen Antworten sind ungleich verteilt. Ist-Verteilung je Position 1 bis 5: ${verteilung.join('/')}, gefordert 2/2/2/2/2.`,
      );
    }
  }

  // 2 bis 5 Faelle
  if (lektion.faelle.length < 2 || lektion.faelle.length > 5) {
    fehler.push(`2 bis 5 Fälle gefordert, gefunden: ${lektion.faelle.length}.`);
  }

  // Punktsumme der Teilaufgaben aller Faelle genau 80
  const punktsumme = lektion.faelle.reduce(
    (summe, fall) => summe + fall.teilaufgaben.reduce((s, t) => s + t.punkte, 0),
    0,
  );
  if (punktsumme !== 80) {
    fehler.push(`Die Punktsumme aller Teilaufgaben muss genau 80 sein, ist ${punktsumme}.`);
  }

  // Hilfe- und Loesungstext je Fall nicht leer
  for (const fall of lektion.faelle) {
    if (fall.hilfe.trim() === '') {
      fehler.push(`Fall ${fall.id}: Der Hilfetext darf nicht leer sein.`);
    }
    if (fall.loesung.trim() === '') {
      fehler.push(`Fall ${fall.id}: Der Lösungstext darf nicht leer sein.`);
    }
    for (const t of fall.teilaufgaben) {
      if (t.typ === 'choice' && (t.richtig < 0 || t.richtig >= t.optionen.length)) {
        fehler.push(`Teilaufgabe ${t.id}: richtig zeigt auf keine vorhandene Option.`);
      }
    }
  }

  // Eindeutige IDs innerhalb der Lektion
  const ids = [
    ...lektion.kacheln.map((k) => k.id),
    ...lektion.quiz.map((q) => q.id),
    ...lektion.faelle.map((f) => f.id),
    ...lektion.faelle.flatMap((f) => f.teilaufgaben.map((t) => t.id)),
  ];
  const gesehen = new Set<string>();
  for (const id of ids) {
    if (gesehen.has(id)) {
      fehler.push(`Die ID "${id}" ist mehrfach vergeben.`);
    }
    gesehen.add(id);
  }

  // Kennwort definiert
  try {
    const kennwort = kennwortFuerRunde(lektion.id);
    if (kennwort.trim() === '') {
      fehler.push('Für die Runde ist kein Kennwort definiert.');
    }
  } catch {
    fehler.push('Für die Runde ist kein Kennwort definiert.');
  }

  return fehler;
}

let befunde = 0;

console.log('Content-Validator AlpenRad');
console.log(`Geprüfte Lektionen: ${lektionen.map((l) => l.id).join(', ')}\n`);

// Bilanzpruefung: Startbilanz und alle Deltas in Spielreihenfolge
try {
  pruefeBilanz(startBilanz);
  console.log('Startbilanz: ausgeglichen');
} catch (fehlerObjekt) {
  befunde++;
  console.error(`Startbilanz: FEHLER ${(fehlerObjekt as Error).message}`);
}

// Die Musterbilanz-Kette folgt den echten Runden. Nur-Trainer-Runden (R0)
// werden separat gegen die Startbilanz geprueft, ihr Testdelta geht nicht in
// die Kette ein (wie in der Bilanz-Ableitung der App).
let laufendeBilanz = startBilanz;
for (const lektion of lektionen) {
  const fehler = pruefeLektion(lektion);

  if (lektion.bilanzDelta) {
    try {
      if (lektion.nurTrainer) {
        pruefeBilanz(wendeDeltaAn(startBilanz, lektion.bilanzDelta));
      } else {
        laufendeBilanz = wendeDeltaAn(laufendeBilanz, lektion.bilanzDelta);
        pruefeBilanz(laufendeBilanz);
      }
    } catch (fehlerObjekt) {
      fehler.push(`BilanzDelta: ${(fehlerObjekt as Error).message}`);
    }
  }

  if (!lektion.nurTrainer) {
    fehler.push(...pruefeKontrollwerte(lektion.id, laufendeBilanz));
  }

  if (fehler.length === 0) {
    const verteilung = [0, 0, 0, 0, 0];
    for (const frage of lektion.quiz) verteilung[frage.richtig]++;
    console.log(
      `${lektion.id} (${lektion.titel}): in Ordnung, Antwortverteilung ${verteilung.join('/')}`,
    );
  } else {
    befunde += fehler.length;
    console.error(`${lektion.id} (${lektion.titel}): ${fehler.length} Befund(e)`);
    for (const f of fehler) {
      console.error(`  - ${f}`);
    }
  }
}

if (befunde > 0) {
  console.error(`\nErgebnis: ${befunde} Befund(e). Bitte beheben.`);
  process.exit(1);
} else {
  console.log('\nErgebnis: keine Befunde.');
}
