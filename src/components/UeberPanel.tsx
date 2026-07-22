import { useState } from 'react';
import { Info } from 'lucide-react';
import { Button } from './Button';
import { Modal } from './Modal';

export const APP_VERSION = '1.0.0';

// Info-Panel "Ueber dieses Planspiel" (Phase 9): Version, Urheberrecht,
// Rechtsstand und Kontakt. Der Ausloeser sitzt im Fuss der Layout-Shell
// und auf der Startseite.
export function UeberPanel() {
  const [offen, setOffen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center gap-1 text-xs text-gray-400 underline hover:text-petrol-500"
        onClick={() => setOffen(true)}
      >
        <Info size={13} aria-hidden="true" />
        Über dieses Planspiel
      </button>

      <Modal
        offen={offen}
        titel="Über dieses Planspiel"
        onSchliessen={() => setOffen(false)}
        fussbereich={
          <Button variante="sekundaer" onClick={() => setOffen(false)}>
            Schließen
          </Button>
        }
      >
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-petrol-900">
            AlpenRad, das Bilanz-Planspiel, Version {APP_VERSION}
          </p>
          <p>© 2026 Prof. Dr. Eberhard Steiner, UVM-Institut. Alle Rechte vorbehalten.</p>
          <p>
            Rechtsstand: Juli 2026 (UGB). Dieses Planspiel dient der Lehre und ersetzt keine
            Rechts- oder Steuerberatung.
          </p>
          <p>
            Kontakt:{' '}
            <a
              className="text-petrol-700 underline"
              href="mailto:eberhard.steiner@uvm-institut.de"
            >
              eberhard.steiner@uvm-institut.de
            </a>
          </p>
        </div>
      </Modal>
    </>
  );
}
