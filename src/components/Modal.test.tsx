// Regressionstest Hotfix v1.0.1: Die Fokusfalle des Modals darf nur beim
// Oeffnen und Schliessen laufen. Vorher stahl jeder Eltern-Render (etwa ein
// Tastendruck im kontrollierten Kennwortfeld) den Fokus, weil onSchliessen
// als Inline-Funktion im Dependency-Array des Effekts stand.

import { useState } from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Modal } from './Modal';

afterEach(cleanup);

// Nachbau der Kennwort-Dialoge: kontrolliertes Feld, onSchliessen inline
// (neue Identitaet bei jedem Render, wie in allen echten Aufrufern).
function KennwortDialog({ onSchliessen }: { onSchliessen?: () => void }) {
  const [wert, setWert] = useState('');
  return (
    <Modal offen titel="Modul freischalten" onSchliessen={() => onSchliessen?.()}>
      <input
        aria-label="Kennworteingabe"
        value={wert}
        onChange={(e) => setWert(e.target.value)}
      />
    </Modal>
  );
}

describe('Modal-Fokusfalle (Hotfix v1.0.1)', () => {
  it('haelt den Fokus beim Tippen im kontrollierten Feld', async () => {
    const nutzer = userEvent.setup();
    render(<KennwortDialog />);
    const feld = screen.getByLabelText('Kennworteingabe');
    feld.focus();

    for (const zeichen of ['G', 'o', 'l']) {
      await nutzer.keyboard(zeichen);
      expect(document.activeElement).toBe(feld);
    }
    expect((feld as HTMLInputElement).value).toBe('Gol');
  });

  it('laesst den Fokus bei einem Rerender mit neuer onSchliessen-Identitaet stehen', async () => {
    function Eltern() {
      const [zaehler, setZaehler] = useState(0);
      return (
        <div>
          <button type="button" onClick={() => setZaehler((z) => z + 1)}>
            Rerender {zaehler}
          </button>
          <Modal offen titel="Test" onSchliessen={() => void zaehler}>
            <input aria-label="Feld" />
          </Modal>
        </div>
      );
    }
    render(<Eltern />);
    const feld = screen.getByLabelText('Feld');
    feld.focus();

    // fireEvent.click verschiebt anders als ein echter Klick keinen Fokus,
    // loest aber den Eltern-Rerender mit neuer onSchliessen-Identitaet aus.
    fireEvent.click(screen.getByText(/Rerender/));
    expect(document.activeElement).toBe(feld);
  });

  it('schliesst mit Esc ueber den AKTUELLEN Callback, nicht eine veraltete Ref', async () => {
    const alt = vi.fn();
    const neu = vi.fn();
    const nutzer = userEvent.setup();
    const { rerender } = render(
      <Modal offen titel="Test" onSchliessen={alt}>
        <input aria-label="Feld" />
      </Modal>,
    );
    rerender(
      <Modal offen titel="Test" onSchliessen={neu}>
        <input aria-label="Feld" />
      </Modal>,
    );
    await nutzer.keyboard('{Escape}');
    expect(alt).not.toHaveBeenCalled();
    expect(neu).toHaveBeenCalledTimes(1);
  });

  it('behaelt die Falle: Fokus springt hinein und kehrt beim Schliessen zurueck', () => {
    function Ausloeser() {
      const [offen, setOffen] = useState(false);
      return (
        <div>
          <button type="button" onClick={() => setOffen(true)}>
            Öffnen
          </button>
          <Modal offen={offen} titel="Test" onSchliessen={() => setOffen(false)}>
            <input aria-label="Feld" />
          </Modal>
        </div>
      );
    }
    render(<Ausloeser />);
    const knopf = screen.getByText('Öffnen');
    knopf.focus();
    fireEvent.click(knopf);
    // Fokus liegt im Dialog (erstes fokussierbares Element).
    const dialog = screen.getByRole('dialog');
    expect(dialog.contains(document.activeElement)).toBe(true);
    // Schliessen ueber den Schliessen-Button: Fokus kehrt zum Ausloeser zurueck.
    fireEvent.click(screen.getByLabelText('Dialog schließen'));
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.activeElement).toBe(knopf);
  });
});
