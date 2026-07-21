import { Outlet, useNavigate } from 'react-router-dom';
import { CircleHelp, NotebookPen } from 'lucide-react';
import { useSpielstand } from '../store/spielstand';
import { useUi } from '../store/uiStore';
import { gesamtPunkte } from '../engine/ableitung';
import { MAX_PUNKTE_GESAMT } from '../engine/scoring';
import { ToastContainer } from '../components/Toast';
import { NotizbuchLeiste } from '../features/notizen/NotizbuchLeiste';
import { HilfeLeiste } from '../features/hilfe/HilfeLeiste';
import { Button } from '../components/Button';

// Layout-Shell: Kopfzeile mit Spieltitel, Name, Punktestand gesamt und zwei
// Icon-Buttons (Notizbuch, Bedienhilfe). Inhalt mittig, maximale Breite 1100 px.
export function LayoutShell() {
  const name = useSpielstand((s) => s.name);
  const istTrainer = useSpielstand((s) => s.istTrainer);
  const setzeTrainer = useSpielstand((s) => s.setzeTrainer);
  const runden = useSpielstand((s) => s.runden);
  const oeffneNotizbuch = useUi((s) => s.oeffneNotizbuch);
  const oeffneHilfe = useUi((s) => s.oeffneHilfe);
  const navigate = useNavigate();

  const punkte = gesamtPunkte(runden);

  return (
    <div className="min-h-screen bg-seite">
      <header className="bg-petrol-900 text-white">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-3">
          <button
            type="button"
            className="text-left"
            onClick={() => navigate('/dashboard')}
            aria-label="Zum Dashboard"
          >
            <span className="block text-lg leading-tight font-bold">AlpenRad</span>
            <span className="block text-xs text-petrol-100">das Bilanz-Planspiel</span>
          </button>
          <div className="flex items-center gap-4">
            {name ? <span className="hidden text-sm sm:block">{name}</span> : null}
            <span className="rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-petrol-900">
              {punkte} von {MAX_PUNKTE_GESAMT} Punkten
            </span>
            <button
              type="button"
              aria-label="Notizbuch öffnen"
              className="rounded p-2 hover:bg-petrol-700"
              onClick={oeffneNotizbuch}
            >
              <NotebookPen size={20} />
            </button>
            <button
              type="button"
              aria-label="Bedienhilfe öffnen"
              className="rounded p-2 hover:bg-petrol-700"
              onClick={oeffneHilfe}
            >
              <CircleHelp size={20} />
            </button>
          </div>
        </div>
      </header>

      {istTrainer ? (
        <div className="bg-amber-500 text-petrol-900">
          <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-1.5 text-sm font-medium">
            <span>Traineransicht</span>
            <div className="flex items-center gap-3">
              <Button variante="dezent" onClick={() => navigate('/trainer')}>
                Trainerbereich
              </Button>
              <Button
                variante="dezent"
                onClick={() => {
                  setzeTrainer(false);
                  navigate('/start');
                }}
              >
                Abmelden
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      <main className="mx-auto max-w-[1100px] px-4 py-8">
        <Outlet />
      </main>

      <NotizbuchLeiste />
      <HilfeLeiste />
      <ToastContainer />
    </div>
  );
}
