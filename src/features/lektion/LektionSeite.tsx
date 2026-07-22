import { useEffect, useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { findeEinheit } from '../../content';
import type { Kachel, Lektion, SpielId, Zusatzmodul } from '../../content/typen';
import { darfFaelleBearbeiten, darfQuizStarten } from '../../engine/gates';
import { holeStand, istModulId, useSpielstand } from '../../store/spielstand';
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
  einheit: { kacheln: Kachel[] },
  stand: RundenStand,
  istTrainer: boolean,
): boolean {
  switch (stufe) {
    case 'intro':
    case 'kacheln':
      return true;
    case 'quiz':
      return darfQuizStarten(einheit, stand, istTrainer) || stand.status !== 'offen';
    case 'faelle':
      return darfFaelleBearbeiten(stand) || stand.status === 'ausgewertet';
    case 'auswertung':
      return stand.status === 'ausgewertet';
  }
}

function Fortschrittsleiste({
  aktiv,
  einheit,
  stand,
  istTrainer,
  onWechsel,
}: {
  aktiv: Stufe;
  einheit: { kacheln: Kachel[] };
  stand: RundenStand;
  istTrainer: boolean;
  onWechsel: (stufe: Stufe) => void;
}) {
  return (
    <nav aria-label="Stationen" className="mb-6">
      <ol className="flex flex-wrap gap-2">
        {stufenReihenfolge.map((s, i) => {
          const erlaubt = stufeErlaubt(s.id, einheit, stand, istTrainer);
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

function IntroAnsicht({
  einheit,
  onWeiter,
}: {
  einheit: Lektion | Zusatzmodul;
  onWeiter: () => void;
}) {
  return (
    <Card>
      <p className="text-sm text-gray-800">{einheit.intro.story}</p>
      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="mb-2 font-semibold text-petrol-900">Inhalte</h2>
          <ul className="list-disc pl-5 text-sm text-gray-800">
            {einheit.intro.inhalte.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-2 font-semibold text-petrol-900">Lernziele</h2>
          <ul className="list-disc pl-5 text-sm text-gray-800">
            {einheit.intro.lernziele.map((z) => (
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

function einheitTitel(einheit: Lektion | Zusatzmodul): string {
  if (istModulId(einheit.id)) return `Modul ${einheit.id}: ${einheit.titel}`;
  const lektion = einheit as Lektion;
  return lektion.nurTrainer
    ? `${lektion.id} ${lektion.titel} (nur Trainer)`
    : `Runde ${lektion.id.slice(1)}: ${lektion.titel}`;
}

// Spielseite fuer Kernrunden (#/runde/:id) und Zusatzmodule (#/modul/:id).
export function LektionSeite() {
  const { rundenId } = useParams<{ rundenId: string }>();
  const id = (rundenId ?? '') as SpielId;
  const einheit = findeEinheit(id);
  const stand = useSpielstand((s) => holeStand(s, id));
  const istTrainer = useSpielstand((s) => s.istTrainer);
  const freigeschaltet = useSpielstand((s) => s.freigeschalteteModule);

  const initialeStufe = useMemo(
    () => (stand ? anfangsStufe(stand) : 'intro'),
    // Nur beim ersten Rendern der Einheit bestimmen.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rundenId],
  );
  const [stufe, setStufe] = useState<Stufe>(initialeStufe);

  // Beim Wechsel zwischen Einheiten ohne Unmount (etwa Trainer-Navigation
  // oder Browser-Zurueck) darf die Stufe der alten Einheit nicht haengen
  // bleiben (Robustheits-Befund der Endabnahme, Phase 9).
  useEffect(() => {
    setStufe(initialeStufe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rundenId]);

  if (!einheit) {
    return <Navigate to="/dashboard" replace />;
  }

  if (istModulId(einheit.id)) {
    const modul = einheit as Zusatzmodul;
    const istFrei = istTrainer || freigeschaltet.includes(modul.id);
    if (!istFrei) {
      return <Navigate to="/dashboard" replace />;
    }
    if (modul.shell) {
      return (
        <div>
          <h1 className="text-2xl font-bold text-petrol-900">{einheitTitel(modul)}</h1>
          <p className="mb-6 text-sm text-gray-600">{modul.untertitel}</p>
          <Card>
            <p className="text-sm text-gray-700">Inhalt folgt in Kürze.</p>
          </Card>
        </div>
      );
    }
  }

  if (!stand || stand.status === 'gesperrt') {
    return <Navigate to="/dashboard" replace />;
  }

  const lektion = einheit as Lektion;
  if (!istModulId(einheit.id) && lektion.nurTrainer && !istTrainer) {
    return <Navigate to="/dashboard" replace />;
  }

  function wechsleStufe(ziel: Stufe) {
    if (einheit && stand && stufeErlaubt(ziel, einheit, stand, istTrainer)) {
      setStufe(ziel);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-petrol-900">{einheitTitel(einheit)}</h1>
      <p className="mb-6 text-sm text-gray-600">{einheit.untertitel}</p>

      <Fortschrittsleiste
        aktiv={stufe}
        einheit={einheit}
        stand={stand}
        istTrainer={istTrainer}
        onWechsel={wechsleStufe}
      />

      {stufe === 'intro' ? (
        <IntroAnsicht einheit={einheit} onWeiter={() => setStufe('kacheln')} />
      ) : null}
      {stufe === 'kacheln' ? (
        <KachelGalerie lektion={einheit} onZumQuiz={() => wechsleStufe('quiz')} />
      ) : null}
      {stufe === 'quiz' ? (
        <QuizRunner lektion={einheit} onZuDenFaellen={() => setStufe('faelle')} />
      ) : null}
      {stufe === 'faelle' ? (
        <FaelleAnsicht lektion={einheit} onZurAuswertung={() => setStufe('auswertung')} />
      ) : null}
      {stufe === 'auswertung' ? <AuswertungAnsicht lektion={einheit} /> : null}
    </div>
  );
}
