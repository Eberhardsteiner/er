// Zentraler Spielstand mit zustand und persist.
// localStorage laeuft ausschliesslich ueber diese Persistenzschicht,
// Schluessel "alpenrad-v1". Jede Zustandsaenderung laeuft ueber Aktionen,
// Komponenten rufen niemals direkt set auf.

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { alleRundenIds, findeLektion, lektionen } from '../content';
import type { RundenId } from '../content/typen';
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

export interface SpielStand {
  version: number;
  name: string | null;
  istTrainer: boolean;
  onboardingGesehen: boolean;
  runden: Record<RundenId, RundenStand>;
  notizen: Partial<Record<RundenId, string>>;
}

export interface SpielAktionen {
  neuesSpiel: (name: string) => void;
  setzeTrainer: (aktiv: boolean) => void;
  onboardingAbschliessen: () => void;
  markiereKachelGelesen: (runde: RundenId, kachelId: string) => void;
  setzeQuizAntwort: (runde: RundenId, frageIndex: number, antwort: number) => void;
  gebeQuizAb: (runde: RundenId) => void;
  setzeFallEingabe: (
    runde: RundenId,
    fallId: string,
    teilaufgabeId: string,
    wert: string | number | null,
  ) => void;
  nutzeHilfe: (runde: RundenId, fallId: string) => void;
  nutzeLoesung: (runde: RundenId, fallId: string) => void;
  gebeFallAb: (runde: RundenId, fallId: string) => void;
  schalteAuswertungFrei: (runde: RundenId) => void;
  springeZuRunde: (ziel: RundenId, name: string) => void;
  direktZuFaellen: (runde: RundenId) => void;
  setzeNotiz: (runde: RundenId, text: string) => void;
  spielZuruecksetzen: () => void;
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
    version: 2,
    name: null,
    istTrainer: false,
    onboardingGesehen: false,
    runden: frischeRunden(),
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

export const useSpielstand = create<SpielStand & SpielAktionen>()(
  persist(
    (set, get) => ({
      ...anfangsZustand(),

      neuesSpiel: (name) =>
        set({ ...anfangsZustand(), name: name.trim(), istTrainer: get().istTrainer }),

      setzeTrainer: (aktiv) => set({ istTrainer: aktiv }),

      onboardingAbschliessen: () => set({ onboardingGesehen: true }),

      markiereKachelGelesen: (runde, kachelId) =>
        set((s) => {
          const stand = s.runden[runde];
          if (stand.kachelnGelesen.includes(kachelId)) return s;
          return {
            runden: {
              ...s.runden,
              [runde]: { ...stand, kachelnGelesen: [...stand.kachelnGelesen, kachelId] },
            },
          };
        }),

      setzeQuizAntwort: (runde, frageIndex, antwort) =>
        set((s) => {
          const stand = s.runden[runde];
          if (stand.status !== 'offen') return s;
          const lektion = findeLektion(runde);
          if (!lektion) return s;
          const antworten = [...stand.quizAntworten];
          while (antworten.length < lektion.quiz.length) antworten.push(null);
          antworten[frageIndex] = antwort;
          return {
            runden: { ...s.runden, [runde]: { ...stand, quizAntworten: antworten } },
          };
        }),

      gebeQuizAb: (runde) =>
        set((s) => {
          const stand = s.runden[runde];
          const lektion = findeLektion(runde);
          if (!lektion || stand.status !== 'offen') return s;
          const antworten = [...stand.quizAntworten];
          while (antworten.length < lektion.quiz.length) antworten.push(null);
          return {
            runden: {
              ...s.runden,
              [runde]: {
                ...stand,
                quizAntworten: antworten,
                status: 'quizAbgegeben',
                punkteQuiz: punkteQuiz(lektion.quiz, antworten),
              },
            },
          };
        }),

      setzeFallEingabe: (runde, fallId, teilaufgabeId, wert) =>
        set((s) => {
          const stand = s.runden[runde];
          const fall = stand.fallStaende[fallId] ?? leererFallStand();
          if (fall.abgegeben) return s;
          return {
            runden: {
              ...s.runden,
              [runde]: {
                ...stand,
                fallStaende: {
                  ...stand.fallStaende,
                  [fallId]: { ...fall, eingaben: { ...fall.eingaben, [teilaufgabeId]: wert } },
                },
              },
            },
          };
        }),

      nutzeHilfe: (runde, fallId) =>
        set((s) => {
          const stand = s.runden[runde];
          const fall = stand.fallStaende[fallId] ?? leererFallStand();
          return {
            runden: {
              ...s.runden,
              [runde]: {
                ...stand,
                fallStaende: { ...stand.fallStaende, [fallId]: { ...fall, hilfeGenutzt: true } },
              },
            },
          };
        }),

      nutzeLoesung: (runde, fallId) =>
        set((s) => {
          const stand = s.runden[runde];
          const fall = stand.fallStaende[fallId] ?? leererFallStand();
          return {
            runden: {
              ...s.runden,
              [runde]: {
                ...stand,
                fallStaende: { ...stand.fallStaende, [fallId]: { ...fall, loesungGenutzt: true } },
              },
            },
          };
        }),

      gebeFallAb: (runde, fallId) =>
        set((s) => {
          const stand = s.runden[runde];
          const lektion = findeLektion(runde);
          const fallDaten = lektion?.faelle.find((f) => f.id === fallId);
          if (!lektion || !fallDaten) return s;
          const fall = stand.fallStaende[fallId] ?? leererFallStand();
          if (fall.abgegeben) return s;
          const punkte = punkteFall(fallDaten, fall.eingaben, fall.hilfeGenutzt, fall.loesungGenutzt);
          const fallStaende = {
            ...stand.fallStaende,
            [fallId]: { ...fall, abgegeben: true, punkte },
          };
          const alleAbgegeben = lektion.faelle.every((f) => fallStaende[f.id]?.abgegeben === true);
          return {
            runden: {
              ...s.runden,
              [runde]: {
                ...stand,
                fallStaende,
                status: alleAbgegeben ? 'faelleAbgegeben' : stand.status,
                punkteFaelle: lektion.faelle.reduce(
                  (summe, f) => summe + (fallStaende[f.id]?.punkte ?? 0),
                  0,
                ),
              },
            },
          };
        }),

      schalteAuswertungFrei: (runde) =>
        set((s) => {
          const stand = s.runden[runde];
          if (stand.status !== 'faelleAbgegeben') return s;
          const runden = {
            ...s.runden,
            [runde]: { ...stand, status: 'ausgewertet' as RundenStatus },
          };
          const folge = naechsteVorhandeneRunde(runde);
          if (folge && runden[folge].status === 'gesperrt') {
            runden[folge] = { ...runden[folge], status: 'offen' };
          }
          return { runden };
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

      direktZuFaellen: (runde) =>
        set((s) => {
          if (!s.istTrainer) return s;
          const stand = s.runden[runde];
          const lektion = findeLektion(runde);
          if (!lektion) return s;
          if (stand.status !== 'gesperrt' && stand.status !== 'offen') return s;
          return {
            runden: {
              ...s.runden,
              [runde]: {
                ...stand,
                status: 'quizAbgegeben',
                quizAntworten: lektion.quiz.map(() => null),
                punkteQuiz: 0,
                quizUebersprungen: true,
              },
            },
          };
        }),

      setzeNotiz: (runde, text) =>
        set((s) => ({ notizen: { ...s.notizen, [runde]: text } })),

      spielZuruecksetzen: () => set({ ...anfangsZustand() }),
    }),
    {
      name: 'alpenrad-v1',
      version: 2,
      // Migration alter Spielstaende. Version 1 (Phase 0): Das Spiel begann
      // mit der Demo-Runde R0. Seit Version 2 startet R1 offen, R0 ist nur
      // noch fuer den Trainer sichtbar. Bestehende R0-Daten bleiben erhalten.
      migrate: (persistedState, version) => {
        const stand = persistedState as SpielStand;
        if (version < 2 && stand.runden) {
          if (stand.runden.R1 && stand.runden.R1.status === 'gesperrt') {
            stand.runden.R1 = { ...stand.runden.R1, status: 'offen' };
          }
        }
        return stand as SpielStand & SpielAktionen;
      },
    },
  ),
);

// Punkte einer Runde (Quiz plus Faelle).
export function rundenPunkte(stand: RundenStand): number {
  return stand.punkteQuiz + stand.punkteFaelle;
}
