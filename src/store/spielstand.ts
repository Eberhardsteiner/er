// Zentraler Spielstand mit zustand und persist.
// localStorage laeuft ausschliesslich ueber diese Persistenzschicht,
// Schluessel "alpenrad-v1". Jede Zustandsaenderung laeuft ueber Aktionen,
// Komponenten rufen niemals direkt set auf.
//
// Seit Phase Z0 gelten die Spielaktionen einheitlich fuer Kernrunden (R0 bis
// R7) und Zusatzmodule (Z1 bis Z4). Runden liegen in `runden`, Modulstaende
// in `module`, die Freischaltung in `freigeschalteteModule`.

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { alleRundenIds, findeEinheit, findeLektion, lektionen } from '../content';
import type { ModulId, RundenId, SpielId } from '../content/typen';
import { punkteFall, punkteQuiz } from '../engine/scoring';

export type RundenStatus =
  | 'gesperrt'
  | 'offen'
  | 'quizAbgegeben'
  | 'faelleAbgegeben'
  | 'ausgewertet';

export interface FallStand {
  eingaben: Record<string, string | number | null>;
  hilfeGenutzt: boolean;
  loesungGenutzt: boolean;
  abgegeben: boolean;
  punkte: number;
}

export interface RundenStand {
  status: RundenStatus;
  uebersprungen: boolean;
  kachelnGelesen: string[];
  quizAntworten: (number | null)[];
  fallStaende: Record<string, FallStand>;
  punkteQuiz: number;
  punkteFaelle: number;
  // Technische Erweiterung gegenueber der Vorgabe: Vermerk fuer den
  // Trainer-Direkteinstieg in die Faelle. Das Quiz zaehlt dann 0 Punkte
  // und wird in Auswertung und PDF als nicht absolviert ausgewiesen.
  quizUebersprungen: boolean;
}

// Modulstaende sind strukturgleich zu Rundenstaenden.
export type ModulStand = RundenStand;

export interface SpielStand {
  version: number;
  name: string | null;
  istTrainer: boolean;
  onboardingGesehen: boolean;
  runden: Record<RundenId, RundenStand>;
  module: Partial<Record<ModulId, ModulStand>>;
  freigeschalteteModule: ModulId[];
  notizen: Partial<Record<SpielId, string>>;
}

export interface SpielAktionen {
  neuesSpiel: (name: string) => void;
  setzeTrainer: (aktiv: boolean) => void;
  onboardingAbschliessen: () => void;
  markiereKachelGelesen: (einheit: SpielId, kachelId: string) => void;
  setzeQuizAntwort: (einheit: SpielId, frageIndex: number, antwort: number) => void;
  gebeQuizAb: (einheit: SpielId) => void;
  setzeFallEingabe: (
    einheit: SpielId,
    fallId: string,
    teilaufgabeId: string,
    wert: string | number | null,
  ) => void;
  nutzeHilfe: (einheit: SpielId, fallId: string) => void;
  nutzeLoesung: (einheit: SpielId, fallId: string) => void;
  gebeFallAb: (einheit: SpielId, fallId: string) => void;
  schalteAuswertungFrei: (einheit: SpielId) => void;
  springeZuRunde: (ziel: RundenId, name: string) => void;
  direktZuFaellen: (einheit: SpielId) => void;
  setzeNotiz: (einheit: SpielId, text: string) => void;
  schalteModulFrei: (modul: ModulId) => void;
  deaktiviereModul: (modul: ModulId) => void;
  spielZuruecksetzen: () => void;
}

export function istModulId(id: SpielId): id is ModulId {
  return id.startsWith('Z');
}

function leererRundenStand(status: RundenStatus): RundenStand {
  return {
    status,
    uebersprungen: false,
    kachelnGelesen: [],
    quizAntworten: [],
    fallStaende: {},
    punkteQuiz: 0,
    punkteFaelle: 0,
    quizUebersprungen: false,
  };
}

function frischeRunden(): Record<RundenId, RundenStand> {
  // Erste fuer Studierende sichtbare Runde startet offen. Nur-Trainer-Runden
  // (Demo-Runde R0) sind ebenfalls offen, fuer Studierende aber unsichtbar.
  const erste = lektionen.find((l) => !l.nurTrainer)?.id;
  const runden = {} as Record<RundenId, RundenStand>;
  for (const id of alleRundenIds) {
    const lektion = findeLektion(id);
    const offen = id === erste || lektion?.nurTrainer === true;
    runden[id] = leererRundenStand(offen ? 'offen' : 'gesperrt');
  }
  return runden;
}

function leererFallStand(): FallStand {
  return { eingaben: {}, hilfeGenutzt: false, loesungGenutzt: false, abgegeben: false, punkte: 0 };
}

function anfangsZustand(): SpielStand {
  return {
    version: 4,
    name: null,
    istTrainer: false,
    onboardingGesehen: false,
    runden: frischeRunden(),
    module: {},
    freigeschalteteModule: [],
    notizen: {},
  };
}

// Naechste Runde in Spielreihenfolge, die Inhalte hat, sonst undefined.
function naechsteVorhandeneRunde(nach: RundenId): RundenId | undefined {
  const start = alleRundenIds.indexOf(nach) + 1;
  for (let i = start; i < alleRundenIds.length; i++) {
    if (findeLektion(alleRundenIds[i])) return alleRundenIds[i];
  }
  return undefined;
}

// Einheitlicher Zugriff auf Runden- und Modulstaende.
export function holeStand(s: SpielStand, id: SpielId): RundenStand | undefined {
  return istModulId(id) ? s.module[id] : s.runden[id];
}

function schreibeStand(s: SpielStand, id: SpielId, stand: RundenStand): Partial<SpielStand> {
  return istModulId(id)
    ? { module: { ...s.module, [id]: stand } }
    : { runden: { ...s.runden, [id]: stand } };
}

// Migration alter Spielstaende, exportiert fuer Tests.
// Version 1 (Phase 0): Das Spiel begann mit der Demo-Runde R0. Seit Version 2
// startet R1 offen, R0 ist nur noch fuer den Trainer sichtbar.
// Version 3: Antwortreihenfolgen wurden gleichverteilt umsortiert, Punkte
// abgegebener Runden blieben bewusst unveraendert.
// Version 4 (Phase Z0): Zusatzmodule. Bestehende Staende erhalten leere
// Modulfelder, alles andere bleibt erhalten.
export function migriereSpielstand(persistedState: unknown, version: number): SpielStand {
  const stand = persistedState as SpielStand;
  if (version < 2 && stand.runden) {
    if (stand.runden.R1 && stand.runden.R1.status === 'gesperrt') {
      stand.runden.R1 = { ...stand.runden.R1, status: 'offen' };
    }
  }
  if (version < 4) {
    if (!stand.module) stand.module = {};
    if (!stand.freigeschalteteModule) stand.freigeschalteteModule = [];
    if (!stand.notizen) stand.notizen = {};
  }
  return stand;
}

export const useSpielstand = create<SpielStand & SpielAktionen>()(
  persist(
    (set, get) => ({
      ...anfangsZustand(),

      neuesSpiel: (name) =>
        set({ ...anfangsZustand(), name: name.trim(), istTrainer: get().istTrainer }),

      setzeTrainer: (aktiv) => set({ istTrainer: aktiv }),

      onboardingAbschliessen: () => set({ onboardingGesehen: true }),

      markiereKachelGelesen: (einheit, kachelId) =>
        set((s) => {
          const stand = holeStand(s, einheit);
          if (!stand || stand.kachelnGelesen.includes(kachelId)) return s;
          return schreibeStand(s, einheit, {
            ...stand,
            kachelnGelesen: [...stand.kachelnGelesen, kachelId],
          });
        }),

      setzeQuizAntwort: (einheit, frageIndex, antwort) =>
        set((s) => {
          const stand = holeStand(s, einheit);
          const inhalt = findeEinheit(einheit);
          if (!stand || !inhalt || stand.status !== 'offen') return s;
          const antworten = [...stand.quizAntworten];
          while (antworten.length < inhalt.quiz.length) antworten.push(null);
          antworten[frageIndex] = antwort;
          return schreibeStand(s, einheit, { ...stand, quizAntworten: antworten });
        }),

      gebeQuizAb: (einheit) =>
        set((s) => {
          const stand = holeStand(s, einheit);
          const inhalt = findeEinheit(einheit);
          if (!stand || !inhalt || stand.status !== 'offen') return s;
          const antworten = [...stand.quizAntworten];
          while (antworten.length < inhalt.quiz.length) antworten.push(null);
          return schreibeStand(s, einheit, {
            ...stand,
            quizAntworten: antworten,
            status: 'quizAbgegeben',
            punkteQuiz: punkteQuiz(inhalt.quiz, antworten),
          });
        }),

      setzeFallEingabe: (einheit, fallId, teilaufgabeId, wert) =>
        set((s) => {
          const stand = holeStand(s, einheit);
          if (!stand) return s;
          const fall = stand.fallStaende[fallId] ?? leererFallStand();
          if (fall.abgegeben) return s;
          return schreibeStand(s, einheit, {
            ...stand,
            fallStaende: {
              ...stand.fallStaende,
              [fallId]: { ...fall, eingaben: { ...fall.eingaben, [teilaufgabeId]: wert } },
            },
          });
        }),

      nutzeHilfe: (einheit, fallId) =>
        set((s) => {
          const stand = holeStand(s, einheit);
          if (!stand) return s;
          const fall = stand.fallStaende[fallId] ?? leererFallStand();
          return schreibeStand(s, einheit, {
            ...stand,
            fallStaende: { ...stand.fallStaende, [fallId]: { ...fall, hilfeGenutzt: true } },
          });
        }),

      nutzeLoesung: (einheit, fallId) =>
        set((s) => {
          const stand = holeStand(s, einheit);
          if (!stand) return s;
          const fall = stand.fallStaende[fallId] ?? leererFallStand();
          return schreibeStand(s, einheit, {
            ...stand,
            fallStaende: { ...stand.fallStaende, [fallId]: { ...fall, loesungGenutzt: true } },
          });
        }),

      gebeFallAb: (einheit, fallId) =>
        set((s) => {
          const stand = holeStand(s, einheit);
          const inhalt = findeEinheit(einheit);
          const fallDaten = inhalt?.faelle.find((f) => f.id === fallId);
          if (!stand || !inhalt || !fallDaten) return s;
          const fall = stand.fallStaende[fallId] ?? leererFallStand();
          if (fall.abgegeben) return s;
          const punkte = punkteFall(fallDaten, fall.eingaben, fall.hilfeGenutzt, fall.loesungGenutzt);
          const fallStaende = {
            ...stand.fallStaende,
            [fallId]: { ...fall, abgegeben: true, punkte },
          };
          const alleAbgegeben = inhalt.faelle.every((f) => fallStaende[f.id]?.abgegeben === true);
          return schreibeStand(s, einheit, {
            ...stand,
            fallStaende,
            status: alleAbgegeben ? 'faelleAbgegeben' : stand.status,
            punkteFaelle: inhalt.faelle.reduce(
              (summe, f) => summe + (fallStaende[f.id]?.punkte ?? 0),
              0,
            ),
          });
        }),

      schalteAuswertungFrei: (einheit) =>
        set((s) => {
          const stand = holeStand(s, einheit);
          if (!stand || stand.status !== 'faelleAbgegeben') return s;
          const neu = schreibeStand(s, einheit, {
            ...stand,
            status: 'ausgewertet' as RundenStatus,
          });
          // Nur Kernrunden schalten eine Folgerunde frei.
          if (!istModulId(einheit)) {
            const runden = (neu.runden ?? s.runden) as Record<RundenId, RundenStand>;
            const folge = naechsteVorhandeneRunde(einheit);
            if (folge && runden[folge].status === 'gesperrt') {
              neu.runden = { ...runden, [folge]: { ...runden[folge], status: 'offen' } };
            }
          }
          return neu;
        }),

      springeZuRunde: (ziel, name) =>
        set((s) => {
          const runden = frischeRunden();
          const zielIndex = alleRundenIds.indexOf(ziel);
          for (let i = 0; i < alleRundenIds.length; i++) {
            const id = alleRundenIds[i];
            if (i < zielIndex) {
              runden[id] = { ...leererRundenStand('ausgewertet'), uebersprungen: true };
            } else if (i === zielIndex) {
              runden[id] = leererRundenStand('offen');
            }
          }
          return {
            ...anfangsZustand(),
            name: name.trim(),
            istTrainer: s.istTrainer,
            onboardingGesehen: s.onboardingGesehen,
            runden,
          };
        }),

      direktZuFaellen: (einheit) =>
        set((s) => {
          if (!s.istTrainer) return s;
          const stand = holeStand(s, einheit);
          const inhalt = findeEinheit(einheit);
          if (!stand || !inhalt) return s;
          if (stand.status !== 'gesperrt' && stand.status !== 'offen') return s;
          return schreibeStand(s, einheit, {
            ...stand,
            status: 'quizAbgegeben',
            quizAntworten: inhalt.quiz.map(() => null),
            punkteQuiz: 0,
            quizUebersprungen: true,
          });
        }),

      setzeNotiz: (einheit, text) =>
        set((s) => ({ notizen: { ...s.notizen, [einheit]: text } })),

      schalteModulFrei: (modul) =>
        set((s) => ({
          freigeschalteteModule: s.freigeschalteteModule.includes(modul)
            ? s.freigeschalteteModule
            : [...s.freigeschalteteModule, modul],
          module: s.module[modul] ? s.module : { ...s.module, [modul]: leererRundenStand('offen') },
        })),

      deaktiviereModul: (modul) =>
        set((s) => {
          if (!s.istTrainer) return s;
          // Der Modulstand bleibt erhalten, nur die Freischaltung faellt weg.
          return {
            freigeschalteteModule: s.freigeschalteteModule.filter((m) => m !== modul),
          };
        }),

      spielZuruecksetzen: () => set({ ...anfangsZustand() }),
    }),
    {
      name: 'alpenrad-v1',
      version: 4,
      migrate: (persistedState, version) =>
        migriereSpielstand(persistedState, version) as SpielStand & SpielAktionen,
    },
  ),
);

// Punkte einer Runde oder eines Moduls (Quiz plus Faelle).
export function rundenPunkte(stand: RundenStand): number {
  return stand.punkteQuiz + stand.punkteFaelle;
}
