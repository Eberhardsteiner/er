import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FallAktionen } from './FallAktionen';

function renderAktionen() {
  const onHilfe = vi.fn();
  const onLoesung = vi.fn();
  render(
    <FallAktionen
      hilfeGenutzt={false}
      loesungGenutzt={false}
      abgegeben={false}
      onHilfe={onHilfe}
      onLoesung={onLoesung}
    />,
  );
  return { onHilfe, onLoesung };
}

describe('Warnmodale der Fall-Buttons', () => {
  it('setzt das Hilfe-Flag erst nach Bestaetigung', async () => {
    const nutzer = userEvent.setup();
    const { onHilfe } = renderAktionen();

    await nutzer.click(screen.getByRole('button', { name: /Hilfe zur Lösung/ }));
    expect(onHilfe).not.toHaveBeenCalled();
    expect(screen.getByText(/höchstens die halbe Punktzahl/)).toBeInTheDocument();

    await nutzer.click(screen.getByRole('button', { name: 'Fortfahren' }));
    expect(onHilfe).toHaveBeenCalledTimes(1);
  });

  it('setzt kein Hilfe-Flag nach Abbrechen', async () => {
    const nutzer = userEvent.setup();
    const { onHilfe } = renderAktionen();

    await nutzer.click(screen.getByRole('button', { name: /Hilfe zur Lösung/ }));
    await nutzer.click(screen.getByRole('button', { name: 'Abbrechen' }));
    expect(onHilfe).not.toHaveBeenCalled();
  });

  it('setzt das Loesung-Flag erst nach Bestaetigung', async () => {
    const nutzer = userEvent.setup();
    const { onLoesung } = renderAktionen();

    await nutzer.click(screen.getByRole('button', { name: /Lösung anzeigen/ }));
    expect(onLoesung).not.toHaveBeenCalled();
    expect(screen.getByText(/0 Punkte/)).toBeInTheDocument();

    await nutzer.click(screen.getByRole('button', { name: 'Fortfahren' }));
    expect(onLoesung).toHaveBeenCalledTimes(1);
  });

  it('setzt kein Loesung-Flag nach Abbrechen', async () => {
    const nutzer = userEvent.setup();
    const { onLoesung } = renderAktionen();

    await nutzer.click(screen.getByRole('button', { name: /Lösung anzeigen/ }));
    await nutzer.click(screen.getByRole('button', { name: 'Abbrechen' }));
    expect(onLoesung).not.toHaveBeenCalled();
  });
});
