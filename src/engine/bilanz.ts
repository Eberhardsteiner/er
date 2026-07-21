// Bilanz-Engine: Deltas anwenden, Invariante pruefen, Betraege formatieren.

import type { Bilanz, BilanzDelta, BilanzGruppe, BilanzPosten } from '../content/typen';

function kopiereBilanz(bilanz: Bilanz): Bilanz {
  return {
    stichtagLabel: bilanz.stichtagLabel,
    aktiva: bilanz.aktiva.map((g) => ({ name: g.name, posten: g.posten.map((p) => ({ ...p })) })),
    passiva: bilanz.passiva.map((g) => ({ name: g.name, posten: g.posten.map((p) => ({ ...p })) })),
  };
}

function findePosten(bilanz: Bilanz, postenId: string): BilanzPosten | undefined {
  for (const seite of [bilanz.aktiva, bilanz.passiva]) {
    for (const gruppe of seite) {
      const posten = gruppe.posten.find((p) => p.id === postenId);
      if (posten) return posten;
    }
  }
  return undefined;
}

// Wendet ein Delta auf eine Bilanz an und liefert eine neue Bilanz.
// Wirft bei unbekannter postenId einen Fehler.
// Neue Posten werden ueber delta.neuePosten angelegt (Betrag 0), bei Bedarf
// samt neuer Gruppe. gruppeEinfuegenVor steuert die Position der neuen Gruppe.
export function wendeDeltaAn(bilanz: Bilanz, delta: BilanzDelta): Bilanz {
  const neu = kopiereBilanz(bilanz);
  neu.stichtagLabel = delta.neuerStichtagLabel;

  for (const anlage of delta.neuePosten ?? []) {
    if (findePosten(neu, anlage.posten.id)) {
      throw new Error(`Posten "${anlage.posten.id}" existiert bereits und kann nicht neu angelegt werden.`);
    }
    const seite = anlage.seite === 'aktiva' ? neu.aktiva : neu.passiva;
    let gruppe: BilanzGruppe | undefined = seite.find((g) => g.name === anlage.gruppe);
    if (!gruppe) {
      gruppe = { name: anlage.gruppe, posten: [] };
      const vorIndex = anlage.gruppeEinfuegenVor
        ? seite.findIndex((g) => g.name === anlage.gruppeEinfuegenVor)
        : -1;
      if (vorIndex >= 0) {
        seite.splice(vorIndex, 0, gruppe);
      } else {
        seite.push(gruppe);
      }
    }
    gruppe.posten.push({ id: anlage.posten.id, name: anlage.posten.name, betrag: 0 });
  }

  for (const aenderung of delta.aenderungen) {
    const posten = findePosten(neu, aenderung.postenId);
    if (!posten) {
      throw new Error(`Unbekannter Bilanzposten "${aenderung.postenId}" im Delta "${delta.neuerStichtagLabel}".`);
    }
    const vorher = posten.betrag;
    posten.betrag += aenderung.delta;
    if (vorher !== 0 && posten.betrag === 0) {
      posten.warBefuellt = true;
    }
  }

  return neu;
}

export function summeSeite(gruppen: BilanzGruppe[]): number {
  return gruppen.reduce(
    (summe, g) => summe + g.posten.reduce((s, p) => s + p.betrag, 0),
    0,
  );
}

// Invariante: Summe Aktiva gleich Summe Passiva, sonst Fehler mit Differenzbetrag.
export function pruefeBilanz(bilanz: Bilanz): void {
  const aktiva = summeSeite(bilanz.aktiva);
  const passiva = summeSeite(bilanz.passiva);
  if (aktiva !== passiva) {
    throw new Error(
      `Bilanz "${bilanz.stichtagLabel}" ist nicht ausgeglichen. Aktiva ${aktiva}, Passiva ${passiva}, Differenz ${aktiva - passiva}.`,
    );
  }
}

// Anzeige-Regel: Posten mit Betrag 0 ausblenden, ausser sie waren vorher
// befuellt, dann mit 0 zeigen.
export function sichtbarePosten(gruppe: BilanzGruppe): BilanzPosten[] {
  return gruppe.posten.filter((p) => p.betrag !== 0 || p.warBefuellt === true);
}

const formatierer = new Intl.NumberFormat('de-AT', { maximumFractionDigits: 0 });

// Alle Betraege in ganzen Euro, Anzeige im Format de-AT.
export function formatBetrag(betrag: number): string {
  return formatierer.format(betrag);
}

// Menge der Posten, die ein Delta veraendert oder anlegt (fuer die Hervorhebung).
export function geaendertePostenIds(delta: BilanzDelta): Set<string> {
  const ids = new Set<string>();
  for (const a of delta.aenderungen) ids.add(a.postenId);
  for (const n of delta.neuePosten ?? []) ids.add(n.posten.id);
  return ids;
}
