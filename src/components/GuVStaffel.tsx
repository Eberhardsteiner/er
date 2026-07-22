import type { GuVZeile } from '../content/typen';
import { formatBetrag } from '../engine/bilanz';

// GuV in Staffelform: Bezeichnung links, Betrag rechts (de-AT-Format),
// Zwischensummen abgesetzt, Aufwendungen mit negativem Vorzeichen.
export function GuVStaffel({ zeilen }: { zeilen: GuVZeile[] }) {
  return (
    <ul>
      {zeilen.map((zeile) => (
        <li
          key={zeile.id}
          className={`flex items-baseline justify-between gap-3 py-0.5 text-sm ${
            zeile.istZwischensumme
              ? 'mt-1 border-t-2 border-petrol-700 pt-1 font-semibold text-petrol-900'
              : ''
          }`}
        >
          <span>{zeile.bezeichnung}</span>
          <span className="text-right tabular-nums">{formatBetrag(zeile.betrag)}</span>
        </li>
      ))}
    </ul>
  );
}
