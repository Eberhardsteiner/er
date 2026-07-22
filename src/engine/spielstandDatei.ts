// Export und Import des Spielstands als JSON-Datei (Phase 9).
// Reine Funktionen ohne DOM-Zugriff, vollstaendig getestet. Das Herunterladen
// und die Dateiauswahl uebernimmt die Komponente SpielstandTransfer.

import { alleRundenIds } from '../content';
import type { SpielStand } from '../store/spielstand';
import { migriereSpielstand, SPIELSTAND_VERSION } from '../store/spielstand';
import { nameSlug } from './text';

// Der Dateiinhalt ist der komplette versionierte Spielstand plus Exportzeitpunkt.
export interface SpielstandDatei extends SpielStand {
  exportiertAm: string;
}

// Nur die Datenfelder des Spielstands, ohne Aktionen und Fremdschluessel.
export function nurSpielstandDaten(stand: SpielStand): SpielStand {
  return {
    version: stand.version,
    name: stand.name,
    istTrainer: stand.istTrainer,
    onboardingGesehen: stand.onboardingGesehen,
    runden: stand.runden,
    module: stand.module,
    freigeschalteteModule: stand.freigeschalteteModule,
    notizen: stand.notizen,
  };
}

// Dateiname alpenrad-spielstand-{NameSlug}-{JJJJ-MM-TT}.json.
export function spielstandDateiname(name: string | null, datum: Date): string {
  const slug = nameSlug(name ?? '') || 'Spielstand';
  const jahr = datum.getFullYear();
  const monat = String(datum.getMonth() + 1).padStart(2, '0');
  const tag = String(datum.getDate()).padStart(2, '0');
  return `alpenrad-spielstand-${slug}-${jahr}-${monat}-${tag}.json`;
}

export function serialisiereSpielstand(stand: SpielStand, exportiertAm: string): string {
  const datei: SpielstandDatei = { ...nurSpielstandDaten(stand), exportiertAm };
  return JSON.stringify(datei, null, 2);
}

// Prueft und migriert eine Spielstand-Datei. Wirft bei ungueltigem Inhalt
// einen Fehler mit verstaendlicher Meldung, der aktuelle Stand bleibt dann
// unangetastet (der Aufrufer laedt nur bei Erfolg).
export function parseSpielstandDatei(text: string): SpielStand {
  let roh: unknown;
  try {
    roh = JSON.parse(text);
  } catch {
    throw new Error('Die Datei ist kein gültiges JSON und kann nicht geladen werden.');
  }
  if (typeof roh !== 'object' || roh === null || Array.isArray(roh)) {
    throw new Error('Die Datei enthält keinen Spielstand.');
  }
  const kandidat = roh as Partial<SpielstandDatei>;
  if (typeof kandidat.version !== 'number') {
    throw new Error('Der Datei fehlt das Versionsfeld eines Spielstands.');
  }
  if (kandidat.version > SPIELSTAND_VERSION) {
    throw new Error('Die Datei stammt aus einer neueren Version des Planspiels.');
  }
  if (kandidat.name !== null && typeof kandidat.name !== 'string') {
    throw new Error('Der Datei fehlt der Spielername.');
  }
  if (typeof kandidat.runden !== 'object' || kandidat.runden === null) {
    throw new Error('Der Datei fehlen die Rundenstände.');
  }

  // Aeltere Versionen laufen durch die bestehende Migrationskette.
  const migriert = migriereSpielstand(structuredClone(kandidat), kandidat.version);

  for (const id of alleRundenIds) {
    if (typeof migriert.runden[id]?.status !== 'string') {
      throw new Error(`Der Datei fehlt der Stand der Runde ${id}.`);
    }
  }
  if (typeof migriert.module !== 'object' || migriert.module === null) {
    throw new Error('Der Datei fehlen die Modulstände.');
  }

  return {
    ...nurSpielstandDaten(migriert),
    istTrainer: migriert.istTrainer === true,
    onboardingGesehen: migriert.onboardingGesehen === true,
    freigeschalteteModule: Array.isArray(migriert.freigeschalteteModule)
      ? migriert.freigeschalteteModule
      : [],
    notizen: typeof migriert.notizen === 'object' && migriert.notizen !== null ? migriert.notizen : {},
    version: SPIELSTAND_VERSION,
  };
}
