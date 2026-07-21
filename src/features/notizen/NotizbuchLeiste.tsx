import { useLocation } from 'react-router-dom';
import { Seitenleiste } from '../../components/Seitenleiste';
import { useSpielstand } from '../../store/spielstand';
import { useUi } from '../../store/uiStore';
import { lektionen } from '../../content';
import type { RundenId } from '../../content/typen';
import { useState, useEffect } from 'react';

function rundeAusPfad(pfad: string): RundenId | null {
  const treffer = pfad.match(/\/runde\/(R[0-7])/);
  return treffer ? (treffer[1] as RundenId) : null;
}

// Notizbuch: Textbereich je Runde, automatische Speicherung, Zeichenzaehler.
export function NotizbuchLeiste() {
  const offen = useUi((s) => s.notizbuchOffen);
  const schliesseLeisten = useUi((s) => s.schliesseLeisten);
  const notizen = useSpielstand((s) => s.notizen);
  const setzeNotiz = useSpielstand((s) => s.setzeNotiz);
  const location = useLocation();

  const aktuelleRunde = rundeAusPfad(location.pathname) ?? lektionen[0]?.id ?? 'R0';
  const [gewaehlteRunde, setGewaehlteRunde] = useState<RundenId>(aktuelleRunde);

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
        onChange={(e) => setGewaehlteRunde(e.target.value as RundenId)}
      >
        {lektionen.map((l) => (
          <option key={l.id} value={l.id}>
            {l.id === 'R0' ? 'Probelauf' : `Runde ${l.id.slice(1)}: ${l.titel}`}
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
