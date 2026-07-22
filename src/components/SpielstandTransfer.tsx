import { useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { Download, Upload } from 'lucide-react';
import type { SpielStand } from '../store/spielstand';
import { useSpielstand } from '../store/spielstand';
import {
  parseSpielstandDatei,
  serialisiereSpielstand,
  spielstandDateiname,
} from '../engine/spielstandDatei';
import { Button } from './Button';
import { Modal } from './Modal';

// Spielstand sichern und laden (Phase 9). Erscheint im Dashboard und im
// Trainer-Cockpit. Der Import ersetzt den Stand erst nach Bestaetigung,
// ungueltige Dateien lassen den aktuellen Stand unangetastet.
export function SpielstandTransfer() {
  const ladeSpielstand = useSpielstand((s) => s.ladeSpielstand);
  const dateiEingabe = useRef<HTMLInputElement>(null);
  const [wartenderStand, setWartenderStand] = useState<SpielStand | null>(null);
  const [fehler, setFehler] = useState('');

  function sichern() {
    const stand = useSpielstand.getState();
    const inhalt = serialisiereSpielstand(stand, new Date().toISOString());
    const blob = new Blob([inhalt], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = spielstandDateiname(stand.name, new Date());
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  async function dateiGewaehlt(e: ChangeEvent<HTMLInputElement>) {
    const datei = e.target.files?.[0];
    e.target.value = '';
    if (!datei) return;
    try {
      const text = await datei.text();
      setWartenderStand(parseSpielstandDatei(text));
      setFehler('');
    } catch (grund) {
      setWartenderStand(null);
      setFehler(
        grund instanceof Error ? grund.message : 'Die Datei konnte nicht gelesen werden.',
      );
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <Button variante="sekundaer" onClick={sichern}>
          <Download size={16} aria-hidden="true" />
          Spielstand sichern
        </Button>
        <Button variante="sekundaer" onClick={() => dateiEingabe.current?.click()}>
          <Upload size={16} aria-hidden="true" />
          Spielstand laden
        </Button>
        <input
          ref={dateiEingabe}
          type="file"
          accept="application/json,.json"
          className="hidden"
          aria-label="Spielstand-Datei auswählen"
          onChange={dateiGewaehlt}
        />
      </div>
      <p className="mt-2 text-xs text-gray-600">
        Damit nimmst Du Deinen Spielstand auf ein anderes Gerät oder in einen anderen Browser mit.
      </p>
      {fehler ? (
        <p role="alert" className="mt-2 text-sm text-fehler">
          {fehler}
        </p>
      ) : null}

      <Modal
        offen={wartenderStand !== null}
        titel="Spielstand laden"
        onSchliessen={() => setWartenderStand(null)}
        fussbereich={
          <>
            <Button variante="sekundaer" onClick={() => setWartenderStand(null)}>
              Abbrechen
            </Button>
            <Button
              onClick={() => {
                if (wartenderStand) ladeSpielstand(wartenderStand);
                setWartenderStand(null);
              }}
            >
              Fortfahren
            </Button>
          </>
        }
      >
        <p>Der geladene Stand ersetzt Deinen aktuellen Spielstand. Fortfahren?</p>
        {wartenderStand?.name ? (
          <p className="mt-2 text-gray-600">Stand von {wartenderStand.name}</p>
        ) : null}
      </Modal>
    </div>
  );
}
