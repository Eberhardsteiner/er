import type { Bilanz, BilanzGruppe } from '../content/typen';
import { formatBetrag, sichtbarePosten, summeSeite } from '../engine/bilanz';

interface BilanzAnsichtProps {
  bilanz: Bilanz;
  hervorgehoben?: Set<string>;
}

function GruppenBlock({
  gruppe,
  hervorgehoben,
}: {
  gruppe: BilanzGruppe;
  hervorgehoben?: Set<string>;
}) {
  const posten = sichtbarePosten(gruppe);
  if (posten.length === 0) return null;
  const zwischensumme = gruppe.posten.reduce((s, p) => s + p.betrag, 0);
  return (
    <div className="mb-3">
      <p className="text-xs font-semibold tracking-wide text-petrol-500 uppercase">{gruppe.name}</p>
      <ul>
        {posten.map((p) => (
          <li
            key={p.id}
            className={`flex items-baseline justify-between gap-3 py-0.5 text-sm ${
              hervorgehoben?.has(p.id) ? 'rounded bg-amber-500/20 px-1 font-medium' : ''
            }`}
          >
            <span>{p.name}</span>
            <span className="text-right tabular-nums">{formatBetrag(p.betrag)}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-baseline justify-between gap-3 border-t border-gray-200 py-0.5 text-sm text-gray-600">
        <span>Summe {gruppe.name}</span>
        <span className="text-right tabular-nums">{formatBetrag(zwischensumme)}</span>
      </div>
    </div>
  );
}

function Seite({
  titel,
  gruppen,
  hervorgehoben,
}: {
  titel: string;
  gruppen: BilanzGruppe[];
  hervorgehoben?: Set<string>;
}) {
  return (
    <div className="flex-1">
      <h3 className="mb-2 border-b-2 border-petrol-700 pb-1 text-sm font-semibold text-petrol-900">
        {titel}
      </h3>
      {gruppen.map((g) => (
        <GruppenBlock key={g.name} gruppe={g} hervorgehoben={hervorgehoben} />
      ))}
      <div className="mt-2 flex items-baseline justify-between gap-3 border-t-2 border-petrol-700 pt-1 text-sm font-semibold text-petrol-900">
        <span>Bilanzsumme</span>
        <span className="text-right tabular-nums">{formatBetrag(summeSeite(gruppen))}</span>
      </div>
    </div>
  );
}

// Bilanzdarstellung mit Gruppen, Zwischensummen und beidseitiger Bilanzsumme.
// Betraege rechtsbuendig im Format de-AT, alle Werte in Euro.
export function BilanzAnsicht({ bilanz, hervorgehoben }: BilanzAnsichtProps) {
  return (
    <div>
      <p className="mb-3 text-sm text-gray-600">
        {bilanz.stichtagLabel}, Beträge in Euro
      </p>
      <div className="flex flex-col gap-6 sm:flex-row">
        <Seite titel="Aktiva" gruppen={bilanz.aktiva} hervorgehoben={hervorgehoben} />
        <Seite titel="Passiva" gruppen={bilanz.passiva} hervorgehoben={hervorgehoben} />
      </div>
    </div>
  );
}
