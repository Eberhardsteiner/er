// Gemeinsame Texthelfer ohne Abhaengigkeiten (Phase 9).
// Dateinamen-Slug ohne Sonderzeichen, Umlaute werden transkribiert.

export function nameSlug(name: string): string {
  return name
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/Ä/g, 'Ae')
    .replace(/Ö/g, 'Oe')
    .replace(/Ü/g, 'Ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}
