// Robuste Persistenz (Phase 9): Wenn localStorage nicht verfuegbar ist
// (privater Modus, volle Quota, blockierte Cookies), laeuft das Spiel im
// Speicher weiter. Ein Banner weist dann auf die fehlende Dauerhaftigkeit hin.
// Ausserdem faengt dieses Modul fehlgeschlagene Migrationen ab, damit statt
// einer weissen Seite ein frischer Stand mit Sicherungsangebot erscheint.

import type { StateStorage } from 'zustand/middleware';

function pruefeLocalStorage(): boolean {
  try {
    const testSchluessel = '__alpenrad_speichertest__';
    window.localStorage.setItem(testSchluessel, '1');
    window.localStorage.removeItem(testSchluessel);
    return true;
  } catch {
    return false;
  }
}

export const speicherVerfuegbar = typeof window !== 'undefined' && pruefeLocalStorage();

// Fluechtiger Ersatzspeicher: haelt den Stand fuer die laufende Sitzung.
const fluechtigerSpeicher = new Map<string, string>();

export const robusterSpeicher: StateStorage = {
  getItem: (name) => {
    if (speicherVerfuegbar) {
      try {
        return window.localStorage.getItem(name);
      } catch {
        return fluechtigerSpeicher.get(name) ?? null;
      }
    }
    return fluechtigerSpeicher.get(name) ?? null;
  },
  setItem: (name, wert) => {
    fluechtigerSpeicher.set(name, wert);
    if (speicherVerfuegbar) {
      try {
        window.localStorage.setItem(name, wert);
      } catch {
        // Quota voll: Der fluechtige Speicher traegt die Sitzung weiter.
      }
    }
  },
  removeItem: (name) => {
    fluechtigerSpeicher.delete(name);
    if (speicherVerfuegbar) {
      try {
        window.localStorage.removeItem(name);
      } catch {
        // bereits aus dem fluechtigen Speicher entfernt
      }
    }
  },
};

// Rohstand einer fehlgeschlagenen Migration, fuer das Sicherungsangebot im Banner.
let migrationsRohstand: string | null = null;

export function merkeMigrationsfehler(rohstand: unknown): void {
  try {
    migrationsRohstand = JSON.stringify(rohstand, null, 2);
  } catch {
    migrationsRohstand = String(rohstand);
  }
}

export function holeMigrationsRohstand(): string | null {
  return migrationsRohstand;
}
