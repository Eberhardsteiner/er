import type { ReactNode } from 'react';

interface TabelleProps {
  spalten: string[];
  zeilen: ReactNode[][];
  beschriftung: string;
}

export function Tabelle({ spalten, zeilen, beschriftung }: TabelleProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm" aria-label={beschriftung}>
        <thead>
          <tr className="border-b-2 border-petrol-700 text-left text-petrol-900">
            {spalten.map((s) => (
              <th key={s} className="px-3 py-2 font-semibold">
                {s}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {zeilen.map((zeile, i) => (
            <tr key={i} className="border-b border-gray-200">
              {zeile.map((zelle, j) => (
                <td key={j} className="px-3 py-2 align-top">
                  {zelle}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
