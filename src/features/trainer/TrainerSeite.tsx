import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { alleRundenIds, findeLektion } from '../../content';
import { kennwortFuerRunde, trainerKennwort } from '../../engine/kennwort';
import { useSpielstand } from '../../store/spielstand';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Tabelle } from '../../components/Tabelle';
import { WarnModal } from '../../components/WarnModal';

// Traineransicht: Kennwortuebersicht, freie Navigation, Direkteinstieg in die
// Faelle, Spielstand zuruecksetzen (doppelte Bestaetigung), Link zur Gesamtauswertung.
export function TrainerSeite() {
  const navigate = useNavigate();
  const istTrainer = useSpielstand((s) => s.istTrainer);
  const runden = useSpielstand((s) => s.runden);
  const direktZuFaellen = useSpielstand((s) => s.direktZuFaellen);
  const spielZuruecksetzen = useSpielstand((s) => s.spielZuruecksetzen);
  const name = useSpielstand((s) => s.name);
  const [resetSchritt, setResetSchritt] = useState<0 | 1 | 2>(0);

  if (!istTrainer) {
    return <Navigate to="/start" replace />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-petrol-900">Traineransicht</h1>
      <p className="mt-1 text-sm text-gray-700">
        Hier findest Du alle Kennwörter und Werkzeuge für die Lehrveranstaltung.
      </p>

      <Card className="mt-6">
        <h2 className="mb-3 font-semibold text-petrol-900">Kennwörter</h2>
        <Tabelle
          beschriftung="Kennwörter je Runde"
          spalten={['Runde', 'Kennwort']}
          zeilen={[
            ...alleRundenIds.map((id) => [
              id === 'R0' ? 'R0 Probelauf (nur Trainer)' : `Runde ${id.slice(1)}`,
              <code key={id} className="rounded bg-petrol-100 px-2 py-0.5">
                {kennwortFuerRunde(id)}
              </code>,
            ]),
            [
              'Trainerzugang',
              <code key="trainer" className="rounded bg-petrol-100 px-2 py-0.5">
                {trainerKennwort()}
              </code>,
            ],
          ]}
        />
      </Card>

      <Card className="mt-6">
        <h2 className="mb-3 font-semibold text-petrol-900">Runden</h2>
        <div className="flex flex-col gap-3">
          {alleRundenIds.map((id) => {
            const lektion = findeLektion(id);
            if (!lektion) {
              return (
                <div
                  key={id}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-400"
                >
                  <span>
                    {id === 'R0' ? 'R0 Probelauf (nur Trainer)' : `Runde ${id.slice(1)}`}: Inhalt
                    folgt
                  </span>
                </div>
              );
            }
            const stand = runden[id];
            return (
              <div
                key={id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-gray-200 px-4 py-2 text-sm"
              >
                <span className="font-medium text-petrol-900">
                  {lektion.nurTrainer
                    ? `${id} ${lektion.titel} (nur Trainer)`
                    : `Runde ${id.slice(1)}: ${lektion.titel}`}
                  <span className="ml-2 text-xs font-normal text-gray-500">
                    Status: {stand.status}
                  </span>
                </span>
                <div className="flex gap-2">
                  <Button variante="sekundaer" onClick={() => navigate(`/runde/${id}`)}>
                    Runde öffnen
                  </Button>
                  <Button
                    variante="sekundaer"
                    disabled={stand.status !== 'gesperrt' && stand.status !== 'offen'}
                    onClick={() => {
                      direktZuFaellen(id);
                      navigate(`/runde/${id}`);
                    }}
                  >
                    Direkt zu den Fällen
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Der Direkteinstieg überspringt Kacheln- und Quizpflicht. Das Quiz zählt dann 0 Punkte und
          wird als nicht absolviert vermerkt.
        </p>
      </Card>

      <Card className="mt-6">
        <h2 className="mb-3 font-semibold text-petrol-900">Werkzeuge</h2>
        <div className="flex flex-wrap gap-3">
          <Button variante="sekundaer" onClick={() => navigate('/gesamt')}>
            Zur Gesamtauswertung
          </Button>
          <Button variante="gefaehrlich" onClick={() => setResetSchritt(1)}>
            Spielstand zurücksetzen
          </Button>
        </div>
        {name ? (
          <p className="mt-3 text-xs text-gray-500">Aktueller Spielstand: {name}</p>
        ) : (
          <p className="mt-3 text-xs text-gray-500">Kein Spielstand vorhanden.</p>
        )}
      </Card>

      <WarnModal
        offen={resetSchritt === 1}
        titel="Spielstand zurücksetzen"
        text="Der komplette Spielstand wird gelöscht, auch Name, Punkte und Notizen. Fortfahren?"
        onBestaetigen={() => setResetSchritt(2)}
        onAbbrechen={() => setResetSchritt(0)}
      />
      <WarnModal
        offen={resetSchritt === 2}
        titel="Wirklich sicher?"
        text="Das Löschen kann nicht rückgängig gemacht werden. Spielstand jetzt endgültig zurücksetzen?"
        bestaetigenLabel="Endgültig zurücksetzen"
        onBestaetigen={() => {
          setResetSchritt(0);
          spielZuruecksetzen();
          navigate('/start');
        }}
        onAbbrechen={() => setResetSchritt(0)}
      />
    </div>
  );
}
