import type { InputHTMLAttributes } from 'react';
import { parseZahlDeAT } from '../engine/scoring';

interface TextFeldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  label: string;
  wert: string;
  onWert: (wert: string) => void;
  fehler?: string;
}

export function TextFeld({ label, wert, onWert, fehler, id, ...rest }: TextFeldProps) {
  const feldId = id ?? `feld-${label.replace(/\W/g, '')}`;
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={feldId} className="text-sm font-medium text-petrol-900">
        {label}
      </label>
      <input
        id={feldId}
        type="text"
        value={wert}
        onChange={(e) => onWert(e.target.value)}
        className={`rounded-lg border px-3 py-2 text-sm ${
          fehler ? 'border-fehler' : 'border-gray-300'
        } bg-white focus:border-petrol-500`}
        {...rest}
      />
      {fehler ? (
        <p className="text-xs text-fehler" role="alert">
          {fehler}
        </p>
      ) : null}
    </div>
  );
}

interface ZahlFeldProps {
  label: string;
  wert: string;
  onWert: (wert: string) => void;
  einheit?: string;
  disabled?: boolean;
  id?: string;
}

// Zahleneingabe mit de-AT-Parsing. Der Rohtext bleibt erhalten,
// die Auswertung parst spaeter ueber parseZahlDeAT.
export function ZahlFeld({ label, wert, onWert, einheit, disabled, id }: ZahlFeldProps) {
  const feldId = id ?? `zahl-${label.replace(/\W/g, '').slice(0, 24)}`;
  const ungueltig = wert.trim() !== '' && parseZahlDeAT(wert) === null;
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={feldId} className="text-sm font-medium text-petrol-900">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          id={feldId}
          type="text"
          inputMode="decimal"
          value={wert}
          disabled={disabled}
          onChange={(e) => onWert(e.target.value)}
          className={`w-44 rounded-lg border px-3 py-2 text-right text-sm ${
            ungueltig ? 'border-fehler' : 'border-gray-300'
          } bg-white focus:border-petrol-500 disabled:bg-gray-100 disabled:text-gray-500`}
        />
        {einheit ? <span className="text-sm text-gray-600">{einheit}</span> : null}
      </div>
      {ungueltig ? (
        <p className="text-xs text-fehler" role="alert">
          Bitte gib eine Zahl ein, zum Beispiel 882 oder 882,50.
        </p>
      ) : null}
    </div>
  );
}
