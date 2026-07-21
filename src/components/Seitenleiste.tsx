import type { ReactNode } from 'react';
import { X } from 'lucide-react';

interface SeitenleisteProps {
  offen: boolean;
  titel: string;
  onSchliessen: () => void;
  children: ReactNode;
}

// Rechte, einklappbare Seitenleiste fuer Notizbuch und Bedienhilfe.
export function Seitenleiste({ offen, titel, onSchliessen, children }: SeitenleisteProps) {
  if (!offen) return null;
  return (
    <aside
      className="einblenden fixed top-0 right-0 z-40 flex h-full w-96 max-w-full flex-col border-l border-gray-200 bg-white shadow-xl"
      aria-label={titel}
    >
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <h2 className="font-semibold text-petrol-900">{titel}</h2>
        <button
          type="button"
          aria-label={`${titel} schließen`}
          className="rounded p-1 text-gray-500 hover:bg-petrol-100 hover:text-petrol-900"
          onClick={onSchliessen}
        >
          <X size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 text-sm text-gray-800">{children}</div>
    </aside>
  );
}
