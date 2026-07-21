// Gesamt-PDF: Deckblock mit Name gross, Gesamtpunkten und Rang, Rundentabelle,
// Schlussbilanz und umrandetem Versandhinweis. Keine Notizen, keine Kachelinhalte.

import autoTable from 'jspdf-autotable';
import { lektionen } from '../content';
import type { Bilanz, RundenId } from '../content/typen';
import { ermittleRang, MAX_PUNKTE_GESAMT } from '../engine/scoring';
import type { RundenStand } from '../store/spielstand';
import {
  nameSlug,
  neuesDokument,
  NUTZBREITE,
  PETROL,
  pruefeSeitenumbruch,
  SEITENRAND,
  tabellenEndeY,
  zeichneAbschnitt,
  zeichneBilanzTabelle,
  zeichneFusszeilen,
  zeichneKopf,
  zeichneText,
} from './pdfBasis';

export function erzeugeGesamtPdf(
  name: string,
  runden: Record<RundenId, RundenStand>,
  gesamt: number,
  schlussbilanz: Bilanz,
): void {
  const doc = neuesDokument();

  let y = zeichneKopf(doc, name, 'Gesamtauswertung');

  // Deckblock: Name gross, Gesamtpunkte, Rang
  y = zeichneText(doc, name, y + 2, { fett: true, groesse: 18 });
  y = zeichneText(doc, `Gesamtpunkte: ${gesamt} von ${MAX_PUNKTE_GESAMT}`, y + 1, {
    fett: true,
    groesse: 12,
  });
  y = zeichneText(doc, `Rang: ${ermittleRang(gesamt)}`, y, { groesse: 12 });

  // Rundentabelle
  y = zeichneAbschnitt(doc, 'Ergebnis je Runde', y + 4);
  autoTable(doc, {
    startY: y,
    margin: { left: SEITENRAND, right: SEITENRAND },
    head: [['Runde', 'Quiz', 'Fälle', 'Gesamt', 'Vermerk']],
    body: lektionen.map((lektion) => {
      const stand = runden[lektion.id];
      const label =
        lektion.id === 'R0'
          ? `Probelauf: ${lektion.titel} (zählt nicht zur Gesamtwertung)`
          : `Runde ${lektion.id.slice(1)}: ${lektion.titel}`;
      return [
        label,
        String(stand.punkteQuiz),
        String(stand.punkteFaelle),
        String(stand.punkteQuiz + stand.punkteFaelle),
        stand.uebersprungen ? 'übersprungen' : '',
      ];
    }),
    styles: { font: 'helvetica', fontSize: 9, cellPadding: 1.5 },
    headStyles: { fillColor: PETROL, textColor: [255, 255, 255] },
    columnStyles: {
      1: { halign: 'right', cellWidth: 18 },
      2: { halign: 'right', cellWidth: 18 },
      3: { halign: 'right', cellWidth: 18 },
    },
  });
  y = tabellenEndeY(doc);

  // Schlussbilanz
  y = zeichneAbschnitt(doc, 'Schlussbilanz', y);
  y = zeichneBilanzTabelle(doc, schlussbilanz, y);

  // Versandhinweis in umrandeter Box
  y = pruefeSeitenumbruch(doc, y, 30);
  doc.setDrawColor(...PETROL);
  doc.setLineWidth(0.6);
  doc.rect(SEITENRAND, y, NUTZBREITE, 18);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(
    doc.splitTextToSize(
      'Bitte sende dieses PDF als Anhang per E-Mail an eberhard.steiner@uvm-institut.de.',
      NUTZBREITE - 8,
    ) as string[],
    SEITENRAND + 4,
    y + 8,
  );
  doc.setFont('helvetica', 'normal');

  zeichneFusszeilen(doc);
  doc.save(`AlpenRad_Gesamtauswertung_${nameSlug(name)}.pdf`);
}
