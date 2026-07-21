import { beforeEach, describe, expect, it } from 'vitest';
import { lektionR0 } from '../content/lektionen/R0-demo';
import { useSpielstand } from '../store/spielstand';
import type { RundenStand } from '../store/spielstand';
import {
  alleFaelleAbgegeben,
  darfAuswertungSehen,
  darfFaelleBearbeiten,
  darfQuizStarten,
  kennwortGateAktiv,
} from './gates';

function stand(teil?: Partial<RundenStand>): RundenStand {
  return {
    status: 'offen',
    uebersprungen: false,
    kachelnGelesen: [],
    quizAntworten: [],
    fallStaende: {},
    punkteQuiz: 0,
    punkteFaelle: 0,
    quizUebersprungen: false,
    ...teil,
  };
}

const alleKachelIds = lektionR0.kacheln.map((k) => k.id);

describe('Gates', () => {
  it('gibt das Quiz erst nach 6 gelesenen Kacheln frei', () => {
    expect(darfQuizStarten(lektionR0, stand(), false)).toBe(false);
    expect(
      darfQuizStarten(lektionR0, stand({ kachelnGelesen: alleKachelIds.slice(0, 5) }), false),
    ).toBe(false);
    expect(darfQuizStarten(lektionR0, stand({ kachelnGelesen: alleKachelIds }), false)).toBe(true);
  });

  it('laesst den Trainer sofort zum Quiz', () => {
    expect(darfQuizStarten(lektionR0, stand(), true)).toBe(true);
  });

  it('gibt die Faelle erst nach der Quizabgabe frei', () => {
    expect(darfFaelleBearbeiten(stand())).toBe(false);
    expect(darfFaelleBearbeiten(stand({ status: 'quizAbgegeben' }))).toBe(true);
    expect(darfFaelleBearbeiten(stand({ status: 'faelleAbgegeben' }))).toBe(true);
  });

  it('zeigt das Kennwort-Gate erst nach Abgabe aller Faelle', () => {
    expect(kennwortGateAktiv(stand({ status: 'quizAbgegeben' }))).toBe(false);
    expect(kennwortGateAktiv(stand({ status: 'faelleAbgegeben' }))).toBe(true);
  });

  it('gibt die Auswertung erst nach dem Kennwort frei', () => {
    expect(darfAuswertungSehen(stand({ status: 'faelleAbgegeben' }))).toBe(false);
    expect(darfAuswertungSehen(stand({ status: 'ausgewertet' }))).toBe(true);
  });

  it('erkennt, wenn alle Faelle abgegeben sind', () => {
    const fallStaende = Object.fromEntries(
      lektionR0.faelle.map((f) => [
        f.id,
        { eingaben: {}, hilfeGenutzt: false, loesungGenutzt: false, abgegeben: true, punkte: 0 },
      ]),
    );
    expect(alleFaelleAbgegeben(lektionR0, stand({ fallStaende }))).toBe(true);
    expect(alleFaelleAbgegeben(lektionR0, stand())).toBe(false);
  });
});

describe('Store-Ablauf einer Runde', () => {
  beforeEach(() => {
    useSpielstand.getState().spielZuruecksetzen();
    useSpielstand.getState().neuesSpiel('Testperson Eins');
  });

  it('oeffnet die Folgerunde erst nach der Auswertung', () => {
    const s = useSpielstand.getState;
    // Quiz abgeben
    s().gebeQuizAb('R0');
    expect(s().runden.R0.status).toBe('quizAbgegeben');
    // Faelle abgeben
    for (const fall of lektionR0.faelle) {
      s().gebeFallAb('R0', fall.id);
    }
    expect(s().runden.R0.status).toBe('faelleAbgegeben');
    // Auswertung freischalten
    s().schalteAuswertungFrei('R0');
    expect(s().runden.R0.status).toBe('ausgewertet');
  });

  it('ignoriert die Freischaltung vor Abgabe aller Faelle', () => {
    const s = useSpielstand.getState;
    s().schalteAuswertungFrei('R0');
    expect(s().runden.R0.status).toBe('offen');
  });

  it('markiert beim Sprung alle Vorrunden als uebersprungen mit 0 Punkten', () => {
    const s = useSpielstand.getState;
    s().springeZuRunde('R1', 'Testperson Eins');
    expect(s().runden.R0.status).toBe('ausgewertet');
    expect(s().runden.R0.uebersprungen).toBe(true);
    expect(s().runden.R0.punkteQuiz).toBe(0);
    expect(s().runden.R0.punkteFaelle).toBe(0);
    expect(s().runden.R1.status).toBe('offen');
    expect(s().runden.R2.status).toBe('gesperrt');
  });

  it('vermerkt den Trainer-Direkteinstieg als nicht absolviertes Quiz', () => {
    const s = useSpielstand.getState;
    s().setzeTrainer(true);
    s().direktZuFaellen('R0');
    expect(s().runden.R0.status).toBe('quizAbgegeben');
    expect(s().runden.R0.quizUebersprungen).toBe(true);
    expect(s().runden.R0.punkteQuiz).toBe(0);
  });
});
