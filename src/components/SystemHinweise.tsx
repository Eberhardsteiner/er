import { TriangleAlert } from 'lucide-react';
import { holeMigrationsRohstand, speicherVerfuegbar } from '../store/speicher';
import { Button } from './Button';

// Systembanner (Phase 9): fehlender dauerhafter Speicher und fehlgeschlagene
// Migration. Erscheinen oberhalb des Seiteninhalts auf allen Seiten.
export function SystemHinweise() {
  const rohstand = holeMigrationsRohstand();

  function rohstandSichern() {
    if (!rohstand) return;
    const blob = new Blob([rohstand], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'alpenrad-rohstand.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  if (speicherVerfuegbar && !rohstand) return null;

  return (
    <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-4 pt-4">
      {!speicherVerfuegbar ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border-l-4 border-amber-600 bg-amber-500/15 p-3 text-sm text-petrol-900"
        >
          <TriangleAlert size={18} className="mt-0.5 shrink-0 text-amber-600" aria-hidden="true" />
          <p>
            Dein Spielstand kann auf diesem Gerät nicht dauerhaft gespeichert werden. Sichere ihn
            über Spielstand sichern, bevor Du das Fenster schließt.
          </p>
        </div>
      ) : null}

      {rohstand ? (
        <div
          role="alert"
          className="flex flex-col gap-3 rounded-lg border-l-4 border-amber-600 bg-amber-500/15 p-3 text-sm text-petrol-900"
        >
          <div className="flex items-start gap-3">
            <TriangleAlert
              size={18}
              className="mt-0.5 shrink-0 text-amber-600"
              aria-hidden="true"
            />
            <p>
              Dein gespeicherter Spielstand konnte nicht übernommen werden, das Spiel startet mit
              einem frischen Stand. Du kannst den alten Stand als Datei sichern und aufheben.
            </p>
          </div>
          <div>
            <Button variante="sekundaer" onClick={rohstandSichern}>
              Alten Stand als Datei sichern
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
