import { Navigate } from 'react-router-dom';
import { Download, Mail } from 'lucide-react';
import { lektionen } from '../../content';
import { gesamtPunkte, schlussBilanz } from '../../engine/ableitung';
import { ermittleRang, MAX_PUNKTE_GESAMT } from '../../engine/scoring';
import { rundenPunkte, useSpielstand } from '../../store/spielstand';
import { BilanzAnsicht } from '../../components/BilanzAnsicht';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Punktezaehler } from '../../components/Punktezaehler';
import { Tabelle } from '../../components/Tabelle';

const EMPFAENGER = 'eberhard.steiner@uvm-institut.de';

// Gesamtauswertung: erreichbar nach Auswertung von R7, in Phase 0 zu
// Testzwecken ueber den Trainer-Link.
export function GesamtSeite() {
  const name = useSpielstand((s) => s.name);
  const istTrainer = useSpielstand((s) => s.istTrainer);
  const runden = useSpielstand((s) => s.runden);

  if (!istTrainer && runden.R7.status !== 'ausgewertet') {
    return <Navigate to="/dashboard" replace />;
  }

  const gesamt = gesamtPunkte(runden);
  const bilanz = schlussBilanz();
  const rang = ermittleRang(gesamt);

  const mailto = `mailto:${EMPFAENGER}?subject=${encodeURIComponent(
    `Planspiel AlpenRad: Gesamtauswertung ${name ?? ''}`,
  )}&body=${encodeURIComponent(
    `Guten Tag,\n\nanbei sende ich mein Gesamt-PDF aus dem Planspiel AlpenRad.\nBitte nicht vergessen: Das PDF muss dieser E-Mail als Anhang beigefügt werden.\n\n${name ?? ''}`,
  )}`;

  return (
    <div>
      <h1 className="text-2xl font-bold text-petrol-900">Gesamtauswertung</h1>
      <p className="mt-1 text-sm text-gray-700">{name}</p>

      <Card className="mt-6 bg-petrol-900 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-4xl font-bold text-amber-500">
              <Punktezaehler ziel={gesamt} /> von {MAX_PUNKTE_GESAMT}
            </p>
            <p className="mt-1 text-sm text-petrol-100">Punkte aus den Runden 1 bis 7</p>
          </div>
          <div className="rounded-lg bg-amber-500 px-4 py-2 text-lg font-semibold text-petrol-900">
            {rang}
          </div>
        </div>
      </Card>

      <Card className="mt-6">
        <h2 className="mb-3 font-semibold text-petrol-900">Ergebnis je Runde</h2>
        <Tabelle
          beschriftung="Punkte je Runde"
          spalten={['Runde', 'Quiz', 'Fälle', 'Gesamt', 'Vermerk']}
          zeilen={lektionen
            .filter((lektion) => !lektion.nurTrainer)
            .map((lektion) => {
              const stand = runden[lektion.id];
              return [
                `Runde ${lektion.id.slice(1)}: ${lektion.titel}`,
                stand.punkteQuiz,
                stand.punkteFaelle,
                rundenPunkte(stand),
                stand.uebersprungen ? 'übersprungen' : '',
              ];
            })}
        />
      </Card>

      <Card className="mt-6">
        <h2 className="mb-3 font-semibold text-petrol-900">Schlussbilanz</h2>
        <BilanzAnsicht bilanz={bilanz} />
      </Card>

      <div className="mt-6 rounded-xl border-2 border-amber-500 bg-amber-500/10 p-4 text-sm text-gray-800">
        Bitte sende Dein Gesamt-PDF als Anhang per E-Mail an {EMPFAENGER}. Der Button erstellt den
        E-Mail-Entwurf, das PDF hängst Du selbst an.
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          onClick={() => {
            // PDF-Modul erst bei Bedarf laden, haelt den Start der App schlank.
            void import('../../pdf/gesamtPdf').then((m) =>
              m.erzeugeGesamtPdf(name ?? '', runden, gesamt, bilanz),
            );
          }}
        >
          <Download size={16} aria-hidden="true" />
          Gesamt-PDF laden
        </Button>
        <Button variante="sekundaer" onClick={() => (window.location.href = mailto)}>
          <Mail size={16} aria-hidden="true" />
          E-Mail-Entwurf öffnen
        </Button>
      </div>
    </div>
  );
}
