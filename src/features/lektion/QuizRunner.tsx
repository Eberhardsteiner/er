import { useState } from 'react';
import type { Lektion, Zusatzmodul } from '../../content/typen';
import { holeStand, useSpielstand } from '../../store/spielstand';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { WarnModal } from '../../components/WarnModal';

// Quiz: eine Frage pro Ansicht, fuenf Antwortoptionen, Navigation vor und
// zurueck, Uebersichtsleiste mit Beantwortet-Status, Abgabe mit Bestaetigung.
// Nach der Abgabe keine Anzeige der richtigen Loesungen.
export function QuizRunner({
  lektion,
  onZuDenFaellen,
}: {
  lektion: Lektion | Zusatzmodul;
  onZuDenFaellen: () => void;
}) {
  const stand = useSpielstand((s) => holeStand(s, lektion.id));
  const setzeQuizAntwort = useSpielstand((s) => s.setzeQuizAntwort);
  const gebeQuizAb = useSpielstand((s) => s.gebeQuizAb);
  const [index, setIndex] = useState(0);
  const [abgabeWarnung, setAbgabeWarnung] = useState(false);

  if (!stand) return null;

  const abgegeben = stand.status !== 'offen';

  if (abgegeben) {
    return (
      <Card>
        <p className="font-medium text-petrol-900">Abgegeben, Ergebnis in der Auswertung.</p>
        <p className="mt-2 text-sm text-gray-700">
          Weiter geht es mit den Fällen dieser Runde.
        </p>
        <div className="mt-4">
          <Button onClick={onZuDenFaellen}>Zu den Fällen</Button>
        </div>
      </Card>
    );
  }

  const frage = lektion.quiz[index];
  const antwort = stand.quizAntworten[index] ?? null;
  const beantwortet = lektion.quiz.filter(
    (_, i) => stand.quizAntworten[i] !== null && stand.quizAntworten[i] !== undefined,
  ).length;

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2" aria-label="Übersicht der Fragen">
        {lektion.quiz.map((q, i) => {
          const beantwortetI =
            stand.quizAntworten[i] !== null && stand.quizAntworten[i] !== undefined;
          return (
            <button
              key={q.id}
              type="button"
              aria-label={`Frage ${i + 1}${beantwortetI ? ', beantwortet' : ', noch offen'}`}
              aria-current={i === index ? 'true' : undefined}
              className={`h-8 w-8 rounded-full text-sm font-medium transition-colors ${
                i === index
                  ? 'bg-petrol-700 text-white'
                  : beantwortetI
                    ? 'bg-amber-500 text-petrol-900'
                    : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setIndex(i)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <Card>
        <p className="text-xs font-semibold text-petrol-500 uppercase">
          Frage {index + 1} von {lektion.quiz.length}
        </p>
        <p className="mt-2 font-medium text-petrol-900">{frage.frage}</p>
        <fieldset className="mt-4">
          <legend className="sr-only">Antwortoptionen</legend>
          <div className="flex flex-col gap-2">
            {frage.antworten.map((option, i) => (
              <label
                key={i}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm transition-colors ${
                  antwort === i
                    ? 'border-petrol-500 bg-petrol-100'
                    : 'border-gray-200 bg-white hover:border-petrol-500'
                }`}
              >
                <input
                  type="radio"
                  name={frage.id}
                  checked={antwort === i}
                  onChange={() => setzeQuizAntwort(lektion.id, index, i)}
                  className="accent-petrol-700"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </Card>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-3">
          <Button
            variante="sekundaer"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
          >
            Zurück
          </Button>
          <Button
            variante="sekundaer"
            disabled={index === lektion.quiz.length - 1}
            onClick={() => setIndex((i) => Math.min(lektion.quiz.length - 1, i + 1))}
          >
            Weiter
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {beantwortet} von {lektion.quiz.length} beantwortet
          </span>
          <Button onClick={() => setAbgabeWarnung(true)}>Quiz abgeben</Button>
        </div>
      </div>

      <WarnModal
        offen={abgabeWarnung}
        titel="Quiz abgeben"
        text="Du kannst danach nichts mehr ändern. Unbeantwortete Fragen zählen als falsch. Quiz jetzt abgeben?"
        bestaetigenLabel="Abgeben"
        onBestaetigen={() => {
          setAbgabeWarnung(false);
          gebeQuizAb(lektion.id);
        }}
        onAbbrechen={() => setAbgabeWarnung(false)}
      />
    </div>
  );
}
