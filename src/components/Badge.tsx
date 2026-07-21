import type { ReactNode } from 'react';

type Farbe = 'petrol' | 'amber' | 'erfolg' | 'fehler' | 'grau' | 'warnung';

const stile: Record<Farbe, string> = {
  petrol: 'bg-petrol-100 text-petrol-900',
  amber: 'bg-amber-500/20 text-amber-600',
  erfolg: 'bg-erfolg/15 text-erfolg',
  fehler: 'bg-fehler/15 text-fehler',
  warnung: 'bg-warnung/15 text-warnung',
  grau: 'bg-gray-200 text-gray-600',
};

export function Badge({ farbe = 'petrol', children }: { farbe?: Farbe; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${stile[farbe]}`}
    >
      {children}
    </span>
  );
}
