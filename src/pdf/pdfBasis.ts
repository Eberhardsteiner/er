// Gemeinsame Basis fuer alle PDFs: A4 hoch, Kopf mit Spieltitel und Name,
// Seitenzahlen im Fuss, Abschnittsueberschriften in Petrol.
// Eurobetraege mit nachgestelltem "EUR" (kein Eurozeichen wegen
// Schriftkompatibilitaet der jsPDF-Standardschriften).

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { Bilanz, BilanzGruppe } from '../content/typen';
import { formatBetrag, summeSeite } from '../engine/bilanz';

export const PETROL: [number, number, number] = [15, 76, 92];
export const PETROL_DUNKEL: [number, number, number] = [9, 58, 71];
export const AMBER: [number, number, number] = [242, 165, 65];

export const SEITENRAND = 18;
export const SEITENBREITE = 210;
export const SEITENHOEHE = 297;
export const NUTZBREITE = SEITENBREITE - 2 * SEITENRAND;

export function formatEuroPdf(betrag: number): string {
  return `${formatBetrag(betrag)} EUR`;
}

export { nameSlug } from '../engine/text';

// Datum im Format de-AT mit oesterreichischen Monatsnamen (Jaenner).
export function datumHeute(): string {
  return new Intl.DateTimeFormat('de-AT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}

export function neuesDokument(): jsPDF {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  doc.setFont('helvetica', 'normal');
  return doc;
}

// Kopfbereich: Spieltitel, Name an erster Stelle, Datum. Liefert die naechste y-Position.
export function zeichneKopf(doc: jsPDF, name: string, untertitel: string): number {
  doc.setFillColor(...PETROL_DUNKEL);
  doc.rect(0, 0, SEITENBREITE, 26, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('AlpenRad, das Bilanz-Planspiel', SEITENRAND, 11);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(untertitel, SEITENRAND, 18);
  doc.setTextColor(0, 0, 0);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(`Name: ${name}`, SEITENRAND, 34);
  doc.setFont('helvetica', 'normal');
  doc.text(`Datum: ${datumHeute()}`, SEITENRAND, 40);
  return 48;
}

// Abschnittsueberschrift in Petrol. Liefert die naechste y-Position.
export function zeichneAbschnitt(doc: jsPDF, titel: string, y: number): number {
  const yNeu = pruefeSeitenumbruch(doc, y, 14);
  doc.setTextColor(...PETROL);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(titel, SEITENRAND, yNeu);
  doc.setDrawColor(...PETROL);
  doc.setLineWidth(0.4);
  doc.line(SEITENRAND, yNeu + 1.5, SEITENRAND + NUTZBREITE, yNeu + 1.5);
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');
  return yNeu + 8;
}

// Fliesstext mit Umbruch und automatischem Seitenwechsel. Liefert die naechste y-Position.
export function zeichneText(
  doc: jsPDF,
  text: string,
  y: number,
  optionen?: { fett?: boolean; kursiv?: boolean; einzug?: number; groesse?: number },
): number {
  const einzug = optionen?.einzug ?? 0;
  const groesse = optionen?.groesse ?? 10;
  doc.setFontSize(groesse);
  doc.setFont(
    'helvetica',
    optionen?.fett ? 'bold' : optionen?.kursiv ? 'italic' : 'normal',
  );
  const zeilen = doc.splitTextToSize(text, NUTZBREITE - einzug) as string[];
  let aktuellY = y;
  for (const zeile of zeilen) {
    aktuellY = pruefeSeitenumbruch(doc, aktuellY, 6);
    doc.text(zeile, SEITENRAND + einzug, aktuellY);
    aktuellY += 5;
  }
  doc.setFont('helvetica', 'normal');
  return aktuellY;
}

export function pruefeSeitenumbruch(doc: jsPDF, y: number, benoetigt: number): number {
  if (y + benoetigt > SEITENHOEHE - 20) {
    doc.addPage();
    return 20;
  }
  return y;
}

export function tabellenEndeY(doc: jsPDF): number {
  const meta = (doc as unknown as { lastAutoTable?: { finalY?: number } }).lastAutoTable;
  return (meta?.finalY ?? 40) + 8;
}

// Bilanz als Tabelle (eine Seite Aktiva, eine Seite Passiva, jeweils mit
// Gruppen, Zwischensummen und Bilanzsumme).
export function zeichneBilanzTabelle(doc: jsPDF, bilanz: Bilanz, y: number): number {
  let aktuellY = zeichneText(doc, `${bilanz.stichtagLabel}, Beträge in Euro`, y, { kursiv: true });

  function seitenZeilen(gruppen: BilanzGruppe[]): (string | { text: string; fett: boolean })[][] {
    const zeilen: { text: string; fett: boolean }[][] = [];
    for (const gruppe of gruppen) {
      const posten = gruppe.posten.filter((p) => p.betrag !== 0 || p.warBefuellt === true);
      if (posten.length === 0) continue;
      zeilen.push([{ text: gruppe.name, fett: true }, { text: '', fett: false }]);
      for (const p of posten) {
        zeilen.push([
          { text: `   ${p.name}`, fett: false },
          { text: formatEuroPdf(p.betrag), fett: false },
        ]);
      }
    }
    zeilen.push([
      { text: 'Bilanzsumme', fett: true },
      { text: formatEuroPdf(summeSeite(gruppen)), fett: true },
    ]);
    return zeilen;
  }

  for (const [titel, gruppen] of [
    ['Aktiva', bilanz.aktiva],
    ['Passiva', bilanz.passiva],
  ] as const) {
    autoTable(doc, {
      startY: aktuellY,
      margin: { left: SEITENRAND, right: SEITENRAND },
      head: [[titel, 'Betrag']],
      body: seitenZeilen(gruppen).map((zeile) =>
        zeile.map((z) => (typeof z === 'string' ? z : z.text)),
      ),
      styles: { font: 'helvetica', fontSize: 9, cellPadding: 1.5 },
      headStyles: { fillColor: PETROL, textColor: [255, 255, 255] },
      columnStyles: { 1: { halign: 'right', cellWidth: 45 } },
      didParseCell: (daten) => {
        if (daten.section !== 'body') return;
        const zeilen = seitenZeilen(gruppen);
        const zelle = zeilen[daten.row.index]?.[daten.column.index];
        if (typeof zelle === 'object' && zelle.fett) {
          daten.cell.styles.fontStyle = 'bold';
        }
      },
    });
    aktuellY = tabellenEndeY(doc);
  }
  return aktuellY;
}

// Seitenzahlen im Fuss auf allen Seiten. Als letzter Schritt aufrufen.
export function zeichneFusszeilen(doc: jsPDF): void {
  const seiten = doc.getNumberOfPages();
  for (let i = 1; i <= seiten; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(`Seite ${i} von ${seiten}`, SEITENBREITE / 2, SEITENHOEHE - 8, { align: 'center' });
    doc.setTextColor(0, 0, 0);
  }
}
