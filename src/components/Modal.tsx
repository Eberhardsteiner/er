import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  offen: boolean;
  titel: string;
  onSchliessen: () => void;
  children: ReactNode;
  fussbereich?: ReactNode;
  breit?: boolean;
}

const FOKUSSIERBAR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

// Modal mit Fokusfalle und Escape.
export function Modal({ offen, titel, onSchliessen, children, fussbereich, breit }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const vorherFokussiert = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!offen) return;
    vorherFokussiert.current = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const erstes = dialog?.querySelector<HTMLElement>(FOKUSSIERBAR);
    erstes?.focus();

    function beiTaste(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onSchliessen();
        return;
      }
      if (e.key !== 'Tab' || !dialog) return;
      const elemente = Array.from(dialog.querySelectorAll<HTMLElement>(FOKUSSIERBAR));
      if (elemente.length === 0) return;
      const erster = elemente[0];
      const letzter = elemente[elemente.length - 1];
      if (e.shiftKey && document.activeElement === erster) {
        e.preventDefault();
        letzter.focus();
      } else if (!e.shiftKey && document.activeElement === letzter) {
        e.preventDefault();
        erster.focus();
      }
    }

    document.addEventListener('keydown', beiTaste);
    return () => {
      document.removeEventListener('keydown', beiTaste);
      vorherFokussiert.current?.focus();
    };
  }, [offen, onSchliessen]);

  if (!offen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-petrol-900/50 p-4"
      onClick={onSchliessen}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={titel}
        className={`einblenden max-h-[85vh] w-full ${breit ? 'max-w-3xl' : 'max-w-lg'} overflow-y-auto rounded-xl bg-white p-6 shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold text-petrol-900">{titel}</h2>
          <button
            type="button"
            aria-label="Dialog schließen"
            className="rounded p-1 text-gray-500 hover:bg-petrol-100 hover:text-petrol-900"
            onClick={onSchliessen}
          >
            <X size={20} />
          </button>
        </div>
        <div className="text-sm text-gray-800">{children}</div>
        {fussbereich ? <div className="mt-6 flex justify-end gap-3">{fussbereich}</div> : null}
      </div>
    </div>
  );
}
