import { useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { findeLektion } from '../../content';
import type { Lektion, RundenId } from '../../content/typen';
import { darfFaelleBearbeiten, darfQuizStarten } from '../../engine/gates';
import { useSpielstand } from '../../store/spielstand';
import type { RundenStand } from '../../store/spielstand';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { KachelGalerie } from './KachelGalerie';
import { QuizRunner } from './QuizRunner';
import { FaelleAnsicht } from './FaelleAnsicht';
import { AuswertungAnsicht } from './AuswertungAnsicht';

export type Stufe = 'intro' | 'kacheln' | 'quiz' | 'faelle' | 'auswertung';

const stufenReihenfolge: { id: Stufe; label: string }[] = [
  { id: 'intro', label: 'Intro' },
  { id: 'kacheln', label: 'Kacheln' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'faelle', label: 'Fälle' },
  { id: 'auswertung', label: 'Auswertung' },
];

function anfangsStufe(stand: RundenStand): Stufe {
  if (stand.status === 'ausgewertet') return 'auswertung';
  if (stand.status === 'quizAbgegeben' || stand.status === 'faelleAbgegeben') return 'faelle';
  if (stand.kachelnGelesen.length > 0) return 'kacheln';
  return 'intro';
}

function stufeErlaubt(
  stufe: Stufe,
  lektion: Lektion,
  stand: RundenStand,
  istTrainer: boolean,
): boolean {
  switch (stufe) {
    case 'intro':
    case 'kacheln':
      return true;
    case 'quiz':
      return darfQuizStarten(lektion, stand, istTrainer) || stand.status !== 'offen';
    case 'faelle':
      return darfFaelleBearbeiten(stand) || stand.status === 'ausgewertet';
    case 'auswertung':
      return stand.status === 'ausgewertet';
  }
}

function Fortschrittsleiste({
  aktiv,
  lektion,
  stand,
  istTrainer,
  onWechsel,
}: {
  aktiv: Stufe;
  lektion: Lektion;
  stand: RundenStand;
  istTrainer: boolean;
  onWechsel: (stufe: Stufe) => void;
}) {
  return (
    <nav aria-label="Stationen der Runde" className="mb-6">
      <ol className="flex flex-wrap gap-2">
        {stufenReihenfolge.map((s, i) => {
          const erlaubt = stufeErlaubt(s.id, lektion, stand, istTrainer);
          const istAktiv = s.id === aktiv;
          return (
            <li key={s.id} className="flex items-center gap-2">
              {i > 0 ? <span className="text-gray-300">/</span> : null}
              <button
                type="button"
                disabled={!erlaubt}
                aria-current={istAktiv ? 'step' : undefined}
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  istAktiv
                    ? 'bg-petrol-700 text-white'
                    : erlaubt
                      ? 'bg-petrol-100 text-petrol-900 hover:bg-petrol-500 hover:text-white'
                      : 'cursor-not-allowed bg-gray-100 text-gray-400'
                }`}
                onClick={() => onWechsel(s.id)}
              >
                {s.label}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function IntroAnsicht({ lektion, onWeiter }: { lektion: Lektion; onWeiter: () => void }) {
  return (
    <Card>
      <p className="text-sm text-gray-800">{lektion.intro.story}</p>
      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 font-semibold text-petrol-900">Inhalte</h3>
          <ul className="list-disc pl-5 text-sm text-gray-800">
            {lektion.intro.inhalte.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-petrol-900">Lernziele</h3>
          <ul className="list-disc pl-5 text-sm text-gray-800">
            {lektion.intro.lernziele.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <Button onClick={onWeiter}>Los geht's</Button>
      </div>
    </Card>
  );
}

export function LektionSeite() {
  const { rundenId } = useParams<{ rundenId: string }>();
  const lektion = findeLektion((rundenId ?? '') as RundenId);
  const stand = useSpielstand((s) => s.runden[(rundenId ?? 'R0') as RundenId]);
  const istTrainer = useSpielstand((s) => s.istTrainer);

  const initialeStufe = useMemo(
    () => (stand ? anfangsStufe(stand) : 'intro'),
    // Nur beim ersten Rendern der Runde bestimmen.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rundenId],
  );
  const [stufe, setStufe] = useState<Stufe>(initialeStufe);

  if (!lektion || !stand || stand.status === 'gesperrt') {
    return <Navigate to="/dashboard" replace />;
  }

  function wechsleStufe(ziel: Stufe) {
    if (lektion && stand && stufeErlaubt(ziel, lektion, stand, istTrainer)) {
      setStufe(ziel);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-petrol-900">
        {lektion.id === 'R0' ? 'Probelauf' : `Runde ${lektion.id.slice(1)}: ${lektion.titel}`}
      </h1>
      <p className="mb-6 text-sm text-gray-600">{lektion.untertitel}</p>

      <Fortschrittsleiste
        aktiv={stufe}
        lektion={lektion}
        stand={stand}
        istTrainer={istTrainer}
        onWechsel={wechsleStufe}
      />

      {stufe === 'intro' ? (
        <IntroAnsicht lektion={lektion} onWeiter={() => setStufe('kacheln')} />
      ) : null}
      {stufe === 'kacheln' ? (
        <KachelGalerie lektion={lektion} onZumQuiz={() => wechsleStufe('quiz')} />
      ) : null}
      {stufe === 'quiz' ? (
        <QuizRunner lektion={lektion} onZuDenFaellen={() => setStufe('faelle')} />
      ) : null}
      {stufe === 'faelle' ? (
        <FaelleAnsicht lektion={lektion} onZurAuswertung={() => setStufe('auswertung')} />
      ) : null}
      {stufe === 'auswertung' ? <AuswertungAnsicht lektion={lektion} /> : null}
    </div>
  );
}
