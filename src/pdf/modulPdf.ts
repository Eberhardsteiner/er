// Modul-PDF (Phase Z0): identischer Aufbau wie das Runden-PDF, mit
// Vertiefungsbilanz und gegebenenfalls GuV-Staffel.
// Dateiname AlpenRad_Modul{Z-Nr}_{NameSlug}.pdf.

import autoTable from 'jspdf-autotable';
import type { Bilanz, Teilaufgabe, Zusatzmodul } from '../content/typen';
import { formatZahl } from '../engine/bilanz';
import { maxPunkteFall, punkteTeilaufgabe } from '../engine/scoring';
import type { ModulStand } from '../store/spielstand';
import {
  formatEuroPdf,
  nameSlug,
  neuesDokument,
  PETROL,
  SEITENRAND,
  tabellenEndeY,
  zeichneAbschnitt,
  zeichneBilanzTabelle,
  zeichneFusszeilen,
  zeichneKopf,
  zeichneText,
} from './pdfBasis';

function eingabeAlsText(teilaufgabe: Teilaufgabe, eingabe: string | number | null): string {
  if (eingabe === null || eingabe === undefined || eingabe === '') return 'Keine Eingabe';
  if (teilaufgabe.typ === 'choice') {
    return typeof eingabe === 'number'
      ? (teilaufgabe.optionen[eingabe] ?? 'Keine Eingabe')
      : 'Keine Eingabe';
  }
  return `${eingabe}${teilaufgabe.einheit ? ` ${teilaufgabe.einheit}` : ''}`;
}

function musterwertAlsText(teilaufgabe: Teilaufgabe): string {
  if (teilaufgabe.typ === 'choice') return teilaufgabe.optionen[teilaufgabe.richtig] ?? '';
  return `${formatZahl(teilaufgabe.loesung)}${teilaufgabe.einheit ? ` ${teilaufgabe.einheit}` : ''}`;
}

export function erzeugeModulPdf(
  modul: Zusatzmodul,
  stand: ModulStand,
  name: string,
  bilanz: Bilanz,
  notizen: string,
): void {
  const doc = neuesDokument();
  const modulLabel = `Modul ${modul.id}`;

  let y = zeichneKopf(doc, name, `${modulLabel}: ${modul.titel}`);

  // Deckblock
  y = zeichneText(doc, `${modulLabel}: ${modul.titel}`, y, { fett: true, groesse: 13 });
  y = zeichneText(doc, modul.untertitel, y);
  y = zeichneText(
    doc,
    `Zusatzpunkte: Quiz ${stand.punkteQuiz} von 20, Fälle ${stand.punkteFaelle} von 80, gesamt ${
      stand.punkteQuiz + stand.punkteFaelle
    } von 100`,
    y + 2,
    { fett: true },
  );

  // Quiz-Ergebnistabelle
  y = zeichneAbschnitt(doc, 'Quiz-Ergebnis', y + 4);
  if (stand.quizUebersprungen) {
    y = zeichneText(doc, 'Das Quiz wurde nicht absolviert und zählt 0 Punkte.', y);
  } else {
    autoTable(doc, {
      startY: y,
      margin: { left: SEITENRAND, right: SEITENRAND },
      head: [['Frage', 'Deine Antwort', 'Richtige Antwort', 'Punkte']],
      body: modul.quiz.map((frage, i) => {
        const antwort = stand.quizAntworten[i] ?? null;
        return [
          `${i + 1}. ${frage.frage}`,
          antwort !== null ? frage.antworten[antwort] : 'Keine Antwort',
          frage.antworten[frage.richtig],
          antwort === frage.richtig ? '2' : '0',
        ];
      }),
      styles: { font: 'helvetica', fontSize: 8, cellPadding: 1.5 },
      headStyles: { fillColor: PETROL, textColor: [255, 255, 255] },
      columnStyles: { 3: { halign: 'right', cellWidth: 15 } },
    });
    y = tabellenEndeY(doc);
  }

  // Fall-Ergebnisse
  y = zeichneAbschnitt(doc, 'Fall-Ergebnisse', y);
  for (const fall of modul.faelle) {
    const fallStand = stand.fallStaende[fall.id];
    y = zeichneText(
      doc,
      `${fall.titel} (${fallStand?.punkte ?? 0} von ${maxPunkteFall(fall)} Punkten)`,
      y + 2,
      { fett: true, groesse: 11 },
    );
    if (fallStand?.hilfeGenutzt) {
      y = zeichneText(doc, 'Vermerk: Hilfe genutzt, Punkte auf die Hälfte begrenzt.', y);
    }
    if (fallStand?.loesungGenutzt) {
      y = zeichneText(doc, 'Vermerk: Lösung genutzt, der Fall zählt 0 Punkte.', y);
    }
    autoTable(doc, {
      startY: y,
      margin: { left: SEITENRAND, right: SEITENRAND },
      head: [['Teilaufgabe', 'Deine Eingabe', 'Musterwert', 'Punkte']],
      body: fall.teilaufgaben.map((t) => {
        const eingabe = fallStand?.eingaben[t.id] ?? null;
        return [
          t.frage,
          eingabeAlsText(t, eingabe),
          musterwertAlsText(t),
          String(punkteTeilaufgabe(t, eingabe)),
        ];
      }),
      styles: { font: 'helvetica', fontSize: 8, cellPadding: 1.5 },
      headStyles: { fillColor: PETROL, textColor: [255, 255, 255] },
      columnStyles: { 3: { halign: 'right', cellWidth: 15 } },
    });
    y = tabellenEndeY(doc);
    y = zeichneText(doc, `Lösung: ${fall.loesung}`, y);
  }

  // Vertiefungsbilanz nach diesem Modul
  y = zeichneAbschnitt(doc, 'Vertiefungsbilanz', y);
  if (modul.bilanzDelta) {
    y = zeichneText(doc, modul.bilanzDelta.erlaeuterung, y);
  }
  y = zeichneBilanzTabelle(doc, bilanz, y);

  // GuV-Staffel, wenn das Modul GuV-Daten hat (Z4)
  if (modul.guv && modul.guv.length > 0) {
    y = zeichneAbschnitt(doc, 'Gewinn- und Verlustrechnung', y);
    autoTable(doc, {
      startY: y,
      margin: { left: SEITENRAND, right: SEITENRAND },
      head: [['Position', 'Betrag']],
      body: modul.guv.map((zeile) => [zeile.bezeichnung, formatEuroPdf(zeile.betrag)]),
      styles: { font: 'helvetica', fontSize: 9, cellPadding: 1.5 },
      headStyles: { fillColor: PETROL, textColor: [255, 255, 255] },
      columnStyles: { 1: { halign: 'right', cellWidth: 45 } },
      didParseCell: (daten) => {
        if (daten.section !== 'body' || !modul.guv) return;
        if (modul.guv[daten.row.index]?.istZwischensumme) {
          daten.cell.styles.fontStyle = 'bold';
        }
      },
    });
    y = tabellenEndeY(doc);
  }

  // Lernkacheln als Lernunterlage
  y = zeichneAbschnitt(doc, 'Lernunterlage: Die Kacheln dieses Moduls', y);
  for (const kachel of modul.kacheln) {
    y = zeichneText(doc, kachel.titel, y + 2, { fett: true, groesse: 11 });
    for (const block of kachel.bloecke) {
      switch (block.typ) {
        case 'absatz':
          y = zeichneText(doc, block.text, y);
          break;
        case 'liste':
          for (const punkt of block.punkte) {
            y = zeichneText(doc, `- ${punkt}`, y, { einzug: 3 });
          }
          break;
        case 'beispiel':
          y = zeichneText(doc, `Beispiel: ${block.text}`, y, { kursiv: true, einzug: 3 });
          break;
        case 'paragraf':
          y = zeichneText(doc, `Gesetz: ${block.text}`, y, { kursiv: true, einzug: 3 });
          break;
      }
    }
    if (kachel.merksatz) {
      y = zeichneText(doc, `Merksatz: ${kachel.merksatz}`, y, { fett: true });
    }
    y += 2;
  }

  // Notizen (entfaellt bei leeren Notizen)
  if (notizen.trim() !== '') {
    y = zeichneAbschnitt(doc, 'Deine Notizen', y);
    y = zeichneText(doc, notizen, y);
  }

  zeichneFusszeilen(doc);
  doc.save(`AlpenRad_Modul${modul.id}_${nameSlug(name)}.pdf`);
}
