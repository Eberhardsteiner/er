import { TriangleAlert } from 'lucide-react';
import { Button } from './Button';
import { Modal } from './Modal';

interface WarnModalProps {
  offen: boolean;
  titel: string;
  text: string;
  bestaetigenLabel?: string;
  onBestaetigen: () => void;
  onAbbrechen: () => void;
}

// Warnmodal fuer Hilfe- und Loesungsbutton sowie Abgaben.
// Die Aktion laeuft erst nach ausdruecklicher Bestaetigung.
export function WarnModal({
  offen,
  titel,
  text,
  bestaetigenLabel = 'Fortfahren',
  onBestaetigen,
  onAbbrechen,
}: WarnModalProps) {
  return (
    <Modal
      offen={offen}
      titel={titel}
      onSchliessen={onAbbrechen}
      fussbereich={
        <>
          <Button variante="sekundaer" onClick={onAbbrechen}>
            Abbrechen
          </Button>
          <Button variante="primaer" onClick={onBestaetigen}>
            {bestaetigenLabel}
          </Button>
        </>
      }
    >
      <div className="flex items-start gap-3">
        <TriangleAlert className="mt-0.5 shrink-0 text-warnung" size={22} aria-hidden="true" />
        <p>{text}</p>
      </div>
    </Modal>
  );
}
