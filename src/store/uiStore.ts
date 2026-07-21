// UI-Zustand ohne Persistenz: Seitenleisten und Punkte-Toasts.

import { create } from 'zustand';

export interface ToastEintrag {
  id: number;
  text: string;
}

interface UiZustand {
  notizbuchOffen: boolean;
  hilfeOffen: boolean;
  toasts: ToastEintrag[];
  oeffneNotizbuch: () => void;
  oeffneHilfe: () => void;
  schliesseLeisten: () => void;
  zeigeToast: (text: string) => void;
  entferneToast: (id: number) => void;
}

let naechsteToastId = 1;

export const useUi = create<UiZustand>((set) => ({
  notizbuchOffen: false,
  hilfeOffen: false,
  toasts: [],
  oeffneNotizbuch: () =>
    set((s) => ({ notizbuchOffen: !s.notizbuchOffen, hilfeOffen: false })),
  oeffneHilfe: () =>
    set((s) => ({ hilfeOffen: !s.hilfeOffen, notizbuchOffen: false })),
  schliesseLeisten: () => set({ notizbuchOffen: false, hilfeOffen: false }),
  zeigeToast: (text) =>
    set((s) => ({ toasts: [...s.toasts, { id: naechsteToastId++, text }] })),
  entferneToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));
