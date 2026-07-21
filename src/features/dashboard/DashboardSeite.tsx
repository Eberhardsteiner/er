import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Lock, PlayCircle } from 'lucide-react';
import { Badge } from '../../components/Badge';
import { BilanzAnsicht } from '../../components/BilanzAnsicht';
import { Card } from '../../components/Card';
import { alleRundenIds, findeLektion } from '../../content';
import type { RundenId } from '../../content/typen';
import { aktuelleBilanz, gesamtPunkte } from '../../engine/ableitung';
import { MAX_PUNKTE_GESAMT } from '../../engine/scoring';
import { rundenPunkte, useSpielstand } from '../../store/spielstand';
import type { RundenStand } from '../../store/spielstand';

function statusInfo(stand: RundenStand): { label: string; farbe: 'grau' | 'petrol' | 'amber' | 'erfolg' } {
  if (stand.status === 'gesperrt') return { label: 'Gesperrt', farbe: 'grau' };
  if (stand.status === 'offen' && stand.kachelnGelesen.length === 0)
    return { label: 'Offen', farbe: 'petrol' };
  if (stand.status === 'ausgewertet')
    return stand.uebersprungen
      ? { label: 'Übersprungen', farbe: 'grau' }
      : { label: 'Ausgewertet', farbe: 'erfolg' };
  return { label: 'In Arbeit', farbe: 'amber' };
}

function RundenKarte({ rundenId }: { rundenId: RundenId }) {
  const navigate = useNavigate();
  const stand = useSpielstand((s) => s.runden[rundenId]);
  const lektion = findeLektion(rundenId);

  if (!lektion) {
    return (
      <Card className="flex min-h-32 flex-col justify-between bg-gray-50 opacity-70">
        <p className="font-semibold text-gray-500">
          {rundenId === 'R0' ? 'Probelauf' : `Runde ${rundenId.slice(1)}`}
        </p>
        <p className="text-sm text-gray-400">Inhalt folgt</p>
      </Card>
    );
  }

  const info = statusInfo(stand);
  const gesperrt = stand.status === 'gesperrt';
  const punkte = rundenPunkte(stand);

  return (
    <Card
      className={`flex min-h-32 flex-col justify-between ${
        gesperrt ? 'bg-gray-50' : 'cursor-pointer transition-shadow hover:shadow-md'
      }`}
      onClick={() => {
        if (!gesperrt) navigate(`/runde/${rundenId}`);
      }}
      role={gesperrt ? undefined : 'button'}
      aria-label={
        gesperrt
          ? `${lektion.titel}, gesperrt`
          : `${lektion.titel} öffnen`
      }
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold text-petrol-900">
            {rundenId === 'R0' ? 'Probelauf' : `Runde ${rundenId.slice(1)}: ${lektion.titel}`}
          </p>
          {gesperrt ? (
            <Lock size={18} className="shrink-0 text-gray-400" aria-hidden="true" />
          ) : stand.status === 'ausgewertet' ? (
            <CheckCircle2 size={18} className="shrink-0 text-erfolg" aria-hidden="true" />
          ) : (
            <PlayCircle size={18} className="shrink-0 text-amber-600" aria-hidden="true" />
          )}
        </div>
        <p className="mt-1 text-sm text-gray-600">{lektion.untertitel}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <Badge farbe={info.farbe}>{info.label}</Badge>
        {stand.status === 'ausgewertet' && !stand.uebersprungen ? (
          <span className="text-sm font-semibold text-amber-600">{punkte} von 100 Punkten</span>
        ) : null}
      </div>
    </Card>
  );
}

export function DashboardSeite() {
  const name = useSpielstand((s) => s.name);
  const runden = useSpielstand((s) => s.runden);

  const punkte = gesamtPunkte(runden);
  const bilanz = aktuelleBilanz(runden);
  const probelauf = rundenPunkte(runden.R0);
  const probelaufAusgewertet = runden.R0.status === 'ausgewertet' && !runden.R0.uebersprungen;

  return (
    <div>
      <h1 className="text-2xl font-bold text-petrol-900">Servus {name}!</h1>
      <p className="mt-1 text-sm text-gray-700">
        Dein Punktestand: {punkte} von {MAX_PUNKTE_GESAMT} Punkten
        {probelaufAusgewertet ? `, dazu ${probelauf} Punkte aus dem Probelauf` : ''}
      </p>

      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        <div className="grid flex-1 grid-cols-1 gap-4 self-start md:grid-cols-2">
          {alleRundenIds.map((id) => (
            <RundenKarte key={id} rundenId={id} />
          ))}
        </div>

        <Card className="w-full self-start lg:w-105">
          <h2 className="mb-3 font-semibold text-petrol-900">Bilanz der AlpenRad GmbH</h2>
          <BilanzAnsicht bilanz={bilanz} />
          <p className="mt-4 rounded-lg bg-petrol-100 p-3 text-xs text-petrol-900">
            Die Bilanz folgt der Musterlösung und wächst ab Runde 3 mit.
          </p>
        </Card>
      </div>
    </div>
  );
}
