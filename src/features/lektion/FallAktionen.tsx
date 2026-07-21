import { useState } from 'react';
import { CircleHelp, Eye } from 'lucide-react';
import { Button } from '../../components/Button';
import { WarnModal } from '../../components/WarnModal';

interface FallAktionenProps {
  hilfeGenutzt: boolean;
  loesungGenutzt: boolean;
  abgegeben: boolean;
  onHilfe: () => void;
  onLoesung: () => void;
}

// Hilfe- und Loesungsbutton mit Warnmodalen. Die Flags werden erst nach
// ausdruecklicher Bestaetigung gesetzt.
export function FallAktionen({
  hilfeGenutzt,
  loesungGenutzt,
  abgegeben,
  onHilfe,
  onLoesung,
}: FallAktionenProps) {
  const [hilfeWarnung, setHilfeWarnung] = useState(false);
  const [loesungWarnung, setLoesungWarnung] = useState(false);

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variante="sekundaer"
        disabled={hilfeGenutzt || loesungGenutzt || abgegeben}
        onClick={() => setHilfeWarnung(true)}
      >
        <CircleHelp size={16} aria-hidden="true" />
        Hilfe zur Lösung
      </Button>
      <Button
        variante="gefaehrlich"
        disabled={loesungGenutzt || abgegeben}
        onClick={() => setLoesungWarnung(true)}
      >
        <Eye size={16} aria-hidden="true" />
        Lösung anzeigen
      </Button>

      <WarnModal
        offen={hilfeWarnung}
        titel="Hilfe öffnen"
        text="Wenn Du die Hilfe öffnest, bekommst Du auf diesen Fall höchstens die halbe Punktzahl. Fortfahren?"
        onBestaetigen={() => {
          setHilfeWarnung(false);
          onHilfe();
        }}
        onAbbrechen={() => setHilfeWarnung(false)}
      />
      <WarnModal
        offen={loesungWarnung}
        titel="Lösung öffnen"
        text="Wenn Du die Lösung öffnest, bekommst Du auf diesen Fall 0 Punkte. Fortfahren?"
        onBestaetigen={() => {
          setLoesungWarnung(false);
          onLoesung();
        }}
        onAbbrechen={() => setLoesungWarnung(false)}
      />
    </div>
  );
}
