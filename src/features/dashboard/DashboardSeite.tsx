import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, CheckCircle2, Lock, PlayCircle } from 'lucide-react';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import { BilanzAnsicht } from '../../components/BilanzAnsicht';
import { Card } from '../../components/Card';
import { Modal } from '../../components/Modal';
import { TextFeld } from '../../components/Eingabefeld';
import { alleRundenIds, findeLektion, platzhalterTitel, zusatzmodule } from '../../content';
import type { RundenId, Zusatzmodul } from '../../content/typen';
import {
  aktuelleBilanz,
  aktuelleVertiefungsbilanz,
  ausgewerteteModule,
  gesamtPunkte,
  maxZusatzPunkte,
  zusatzbereichSichtbar,
  zusatzPunkte,
} from '../../engine/ableitung';
import { pruefeModulKennwort } from '../../engine/kennwort';
import { MAX_PUNKTE_GESAMT } from '../../engine/scoring';
import { rundenPunkte, useSpielstand } from '../../store/spielstand';
import type { RundenStand } from '../../store/spielstand';
import { SpielstandTransfer } from '../../components/SpielstandTransfer';

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
    const titel = platzhalterTitel[rundenId];
    return (
      <Card className="flex min-h-32 flex-col justify-between bg-gray-50 opacity-70">
        <p className="font-semibold text-gray-500">
          Runde {rundenId.slice(1)}
          {titel ? `: ${titel}` : ''}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-gray-400">Inhalt folgt</p>
          <Lock size={18} className="shrink-0 text-gray-400" aria-hidden="true" />
        </div>
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
      onKeyDown={(e) => {
        if (!gesperrt && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          navigate(`/runde/${rundenId}`);
        }
      }}
      role={gesperrt ? undefined : 'button'}
      tabIndex={gesperrt ? undefined : 0}
      aria-label={
        gesperrt
          ? `${lektion.titel}, gesperrt`
          : `${lektion.titel} öffnen`
      }
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold text-petrol-900">
            {lektion.nurTrainer
              ? `${rundenId} ${lektion.titel} (nur Trainer)`
              : `Runde ${rundenId.slice(1)}: ${lektion.titel}`}
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
          <span className="text-sm font-semibold text-amber-700">{punkte} von 100 Punkten</span>
        ) : null}
      </div>
    </Card>
  );
}

// Karte eines Zusatzmoduls: gesperrt mit Kennwortdialog, Shell-Hinweis oder spielbar.
function ModulKarte({ modul }: { modul: Zusatzmodul }) {
  const navigate = useNavigate();
  const istTrainer = useSpielstand((s) => s.istTrainer);
  const frei = useSpielstand((s) => s.freigeschalteteModule.includes(modul.id));
  const stand = useSpielstand((s) => s.module[modul.id]);
  const schalteModulFrei = useSpielstand((s) => s.schalteModulFrei);
  const deaktiviereModul = useSpielstand((s) => s.deaktiviereModul);
  const [dialogOffen, setDialogOffen] = useState(false);
  const [kennwort, setKennwort] = useState('');
  const [fehler, setFehler] = useState('');

  const spielbar = frei && !modul.shell;
  const ausgewertet = stand?.status === 'ausgewertet';

  function freischalten() {
    if (pruefeModulKennwort(modul.id, kennwort)) {
      schalteModulFrei(modul.id);
      setDialogOffen(false);
      setKennwort('');
      setFehler('');
    } else {
      setFehler('Das Kennwort stimmt nicht. Frag im Zweifel beim Trainer nach.');
    }
  }

  return (
    <Card
      className={`flex min-h-32 flex-col justify-between ${
        spielbar ? 'cursor-pointer transition-shadow hover:shadow-md' : 'bg-gray-50'
      }`}
      onClick={() => {
        if (spielbar) navigate(`/modul/${modul.id}`);
      }}
      onKeyDown={(e) => {
        if (spielbar && (e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
          e.preventDefault();
          navigate(`/modul/${modul.id}`);
        }
      }}
      role={spielbar ? 'button' : undefined}
      tabIndex={spielbar ? 0 : undefined}
      aria-label={spielbar ? `Modul ${modul.titel} öffnen` : `Modul ${modul.titel}`}
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold text-petrol-900">
            Modul {modul.id}: {modul.titel}
          </p>
          {!frei ? (
            <Lock size={18} className="shrink-0 text-gray-400" aria-hidden="true" />
          ) : ausgewertet ? (
            <CheckCircle2 size={18} className="shrink-0 text-erfolg" aria-hidden="true" />
          ) : (
            <PlayCircle size={18} className="shrink-0 text-amber-600" aria-hidden="true" />
          )}
        </div>
        <p className="mt-1 text-sm text-gray-600">{modul.untertitel}</p>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        {!frei ? (
          <Button
            variante="sekundaer"
            onClick={(e) => {
              e.stopPropagation();
              setDialogOffen(true);
            }}
          >
            Mit Kennwort freischalten
          </Button>
        ) : modul.shell ? (
          <Badge farbe="grau">Inhalt folgt in Kürze</Badge>
        ) : ausgewertet ? (
          <span className="text-sm font-semibold text-amber-700">
            {stand ? rundenPunkte(stand) : 0} von 100 Zusatzpunkten
          </span>
        ) : (
          <Badge farbe="petrol">Freigeschaltet</Badge>
        )}
        {istTrainer ? (
          <Button
            variante="dezent"
            onClick={(e) => {
              e.stopPropagation();
              if (frei) {
                deaktiviereModul(modul.id);
              } else {
                schalteModulFrei(modul.id);
              }
            }}
          >
            {frei ? 'Deaktivieren' : 'Aktivieren'}
          </Button>
        ) : null}
      </div>

      <Modal
        offen={dialogOffen}
        titel={`Modul ${modul.id} freischalten`}
        onSchliessen={() => {
          setDialogOffen(false);
          setFehler('');
          setKennwort('');
        }}
        fussbereich={
          <>
            <Button variante="sekundaer" onClick={() => setDialogOffen(false)}>
              Abbrechen
            </Button>
            <Button onClick={freischalten}>Freischalten</Button>
          </>
        }
      >
        <p className="mb-4">
          Gib das vom Trainer bekanntgegebene Kennwort für dieses Modul ein.
        </p>
        <TextFeld
          label="Kennwort"
          wert={kennwort}
          onWert={(w) => {
            setKennwort(w);
            setFehler('');
          }}
          fehler={fehler}
          onKeyDown={(e) => {
            if (e.key === 'Enter') freischalten();
          }}
        />
      </Modal>
    </Card>
  );
}

// Regulaerer Weg zur Gesamtauswertung, sichtbar nach der R7-Auswertung.
function GesamtButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate('/gesamt')}>
      <Award size={16} aria-hidden="true" />
      Zur Gesamtauswertung
    </Button>
  );
}

export function DashboardSeite() {
  const name = useSpielstand((s) => s.name);
  const runden = useSpielstand((s) => s.runden);
  const istTrainer = useSpielstand((s) => s.istTrainer);
  const module = useSpielstand((s) => s.module);
  const freigeschaltet = useSpielstand((s) => s.freigeschalteteModule);

  const moduleSichtbar = zusatzbereichSichtbar(runden, istTrainer);
  const zusatz = zusatzPunkte(module);
  const zusatzMax = maxZusatzPunkte();
  const vertiefungAktiv =
    ausgewerteteModule(module, freigeschaltet).filter((m) => m.bilanzDelta).length > 0;

  const punkte = gesamtPunkte(runden);
  const bilanz = aktuelleBilanz(runden);
  const probelauf = rundenPunkte(runden.R0);
  const probelaufAusgewertet =
    istTrainer && runden.R0.status === 'ausgewertet' && !runden.R0.uebersprungen;

  // Nur-Trainer-Runden (Demo-Runde R0) sind fuer Studierende unsichtbar.
  const sichtbareRundenIds = alleRundenIds.filter(
    (id) => istTrainer || findeLektion(id)?.nurTrainer !== true,
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-petrol-900">Servus {name}!</h1>
      <p className="mt-1 text-sm text-gray-700">
        Dein Punktestand: {punkte} von {MAX_PUNKTE_GESAMT} Punkten
        {probelaufAusgewertet ? `, dazu ${probelauf} Punkte aus dem Probelauf` : ''}
      </p>
      {runden.R7.status === 'ausgewertet' ? (
        <div className="mt-4">
          <GesamtButton />
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        <div className="grid flex-1 grid-cols-1 gap-4 self-start md:grid-cols-2">
          {sichtbareRundenIds.map((id) => (
            <RundenKarte key={id} rundenId={id} />
          ))}
        </div>

        <Card className="w-full self-start lg:w-105">
          <h2 className="mb-3 font-semibold text-petrol-900">Bilanz der AlpenRad GmbH</h2>
          <BilanzAnsicht bilanz={bilanz} />
          <p className="mt-4 rounded-lg bg-petrol-100 p-3 text-xs text-petrol-900">
            Die Bilanz folgt der Musterlösung des Spiels. Ab Runde 3 verändern die Fälle die Bilanz
            Runde für Runde.
          </p>
        </Card>
      </div>

      {moduleSichtbar ? (
        <section aria-label="Zusatzmodule" className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-petrol-900">Zusatzmodule</h2>
            <span className="rounded-full bg-petrol-100 px-3 py-1 text-sm font-medium text-petrol-900">
              {zusatz} von {zusatzMax} Zusatzpunkten
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-700">
            Vier Vertiefungen zum 1. Jänner des Folgejahres. Dein Trainer nennt Dir das Kennwort
            für jedes freigegebene Modul.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {zusatzmodule.map((modul) => (
              <ModulKarte key={modul.id} modul={modul} />
            ))}
          </div>

          {vertiefungAktiv ? (
            <Card className="mt-6">
              <h3 className="mb-3 font-semibold text-petrol-900">
                Vertiefungsbilanz zum 1. Jänner
              </h3>
              <BilanzAnsicht bilanz={aktuelleVertiefungsbilanz(module, freigeschaltet)} />
              <p className="mt-4 rounded-lg bg-petrol-100 p-3 text-xs text-petrol-900">
                Eröffnungsbilanz gleich Schlussbilanz (§ 201 Abs 2 Z 6 UGB), erweitert um Deine
                Zusatzmodule.
              </p>
            </Card>
          ) : null}
        </section>
      ) : null}

      <section aria-label="Spielstand sichern und laden" className="mt-10">
        <h2 className="text-xl font-bold text-petrol-900">Spielstand</h2>
        <div className="mt-3">
          <SpielstandTransfer />
        </div>
      </section>
    </div>
  );
}
