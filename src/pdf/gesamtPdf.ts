// Gesamt-PDF: Deckblock mit Name gross, Gesamtpunkten und Rang, Rundentabelle,
// Schlussbilanz und umrandetem Versandhinweis. Keine Notizen, keine Kachelinhalte.

import autoTable from 'jspdf-autotable';
import { lektionen, zusatzmodule } from '../content';
import type { Bilanz, ModulId, RundenId } from '../content/typen';
import { anzahlGespielteModule, maxZusatzPunkte, zusatzPunkte } from '../engine/ableitung';
import { ermittleRang, MAX_PUNKTE_GESAMT } from '../engine/scoring';
import type { ModulStand, RundenStand } from '../store/spielstand';
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
  moduleStand: Partial<Record<ModulId, ModulStand>> = {},
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
    body: lektionen
      .filter((lektion) => !lektion.nurTrainer)
      .map((lektion) => {
        const stand = runden[lektion.id];
        return [
          `Runde ${lektion.id.slice(1)}: ${lektion.titel}`,
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

  // Zusatzmodule: eigener Block nur, wenn mindestens ein Modul ausgewertet ist.
  // Der Rang berechnet sich unveraendert nur aus den 700 Kernpunkten.
  const gespielteModule = anzahlGespielteModule(moduleStand);
  if (gespielteModule > 0) {
    y = zeichneAbschnitt(doc, 'Zusatzmodule', y);
    autoTable(doc, {
      startY: y,
      margin: { left: SEITENRAND, right: SEITENRAND },
      head: [['Modul', 'Quiz', 'Fälle', 'Gesamt']],
      body: zusatzmodule
        .filter((m) => moduleStand[m.id]?.status === 'ausgewertet')
        .map((m) => {
          const stand = moduleStand[m.id];
          return [
            `Modul ${m.id}: ${m.titel}`,
            String(stand?.punkteQuiz ?? 0),
            String(stand?.punkteFaelle ?? 0),
            String((stand?.punkteQuiz ?? 0) + (stand?.punkteFaelle ?? 0)),
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
    y = zeichneText(
      doc,
      `Zusatzpunkte: ${zusatzPunkte(moduleStand)} von ${maxZusatzPunkte()}, ${gespielteModule} von 4 Modulen gespielt. Ohne Einfluss auf den Rang.`,
      y,
    );
  }

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
