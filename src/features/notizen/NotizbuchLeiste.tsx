import { useLocation } from 'react-router-dom';
import { Seitenleiste } from '../../components/Seitenleiste';
import { useSpielstand } from '../../store/spielstand';
import { useUi } from '../../store/uiStore';
import { sichtbareLektionen, zusatzmodule } from '../../content';
import type { SpielId } from '../../content/typen';
import { useState, useEffect } from 'react';

function rundeAusPfad(pfad: string): SpielId | null {
  const treffer = pfad.match(/\/(?:runde|modul)\/(R[0-7]|Z[1-4])/);
  return treffer ? (treffer[1] as SpielId) : null;
}

// Notizbuch: Textbereich je Runde, automatische Speicherung, Zeichenzaehler.
export function NotizbuchLeiste() {
  const offen = useUi((s) => s.notizbuchOffen);
  const schliesseLeisten = useUi((s) => s.schliesseLeisten);
  const notizen = useSpielstand((s) => s.notizen);
  const setzeNotiz = useSpielstand((s) => s.setzeNotiz);
  const istTrainer = useSpielstand((s) => s.istTrainer);
  const freigeschaltet = useSpielstand((s) => s.freigeschalteteModule);
  const location = useLocation();

  const lektionen = sichtbareLektionen(istTrainer);
  // Notiz-Abschnitte fuer Module: freigeschaltet (oder Trainer) und mit Content.
  const notizModule = zusatzmodule.filter(
    (m) => !m.shell && (istTrainer || freigeschaltet.includes(m.id)),
  );
  const aktuelleRunde = rundeAusPfad(location.pathname) ?? lektionen[0]?.id ?? 'R1';
  const [gewaehlteRunde, setGewaehlteRunde] = useState<SpielId>(aktuelleRunde);

  useEffect(() => {
    const runde = rundeAusPfad(location.pathname);
    if (runde) setGewaehlteRunde(runde);
  }, [location.pathname]);

  const text = notizen[gewaehlteRunde] ?? '';

  return (
    <Seitenleiste offen={offen} titel="Notizbuch" onSchliessen={schliesseLeisten}>
      <label htmlFor="notiz-runde" className="mb-1 block text-sm font-medium text-petrol-900">
        Runde
      </label>
      <select
        id="notiz-runde"
        className="mb-3 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
        value={gewaehlteRunde}
        onChange={(e) => setGewaehlteRunde(e.target.value as SpielId)}
      >
        {lektionen.map((l) => (
          <option key={l.id} value={l.id}>
            {l.nurTrainer ? `${l.id} ${l.titel} (nur Trainer)` : `Runde ${l.id.slice(1)}: ${l.titel}`}
          </option>
        ))}
        {notizModule.map((m) => (
          <option key={m.id} value={m.id}>
            Modul {m.id}: {m.titel}
          </option>
        ))}
      </select>

      <textarea
        className="h-64 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm"
        value={text}
        onChange={(e) => setzeNotiz(gewaehlteRunde, e.target.value)}
        aria-label={`Notizen zur Runde ${gewaehlteRunde}`}
        placeholder="Deine Notizen zu dieser Runde"
      />
      <p className="mt-1 text-xs text-gray-500">{text.length} Zeichen, automatisch gespeichert</p>

      <p className="mt-4 rounded-lg bg-petrol-100 p-3 text-xs text-petrol-900">
        Deine Notizen erscheinen im PDF der jeweiligen Runde, im Gesamt-PDF erscheinen sie nicht.
      </p>
    </Seitenleiste>
  );
}
