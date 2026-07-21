import { useState } from 'react';
import { BookOpenCheck, BookOpen } from 'lucide-react';
import type { Kachel, KachelBlock, Lektion } from '../../content/typen';
import { alleKachelnGelesen, darfQuizStarten } from '../../engine/gates';
import { useSpielstand } from '../../store/spielstand';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Modal } from '../../components/Modal';
import { Badge } from '../../components/Badge';

function BlockAnsicht({ block }: { block: KachelBlock }) {
  switch (block.typ) {
    case 'absatz':
      return <p className="mb-3 text-sm text-gray-800">{block.text}</p>;
    case 'liste':
      return (
        <ul className="mb-3 list-disc pl-5 text-sm text-gray-800">
          {block.punkte.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      );
    case 'beispiel':
      return (
        <div className="mb-3 rounded-lg border-l-4 border-amber-500 bg-amber-500/10 p-3 text-sm text-gray-800">
          <p className="mb-1 text-xs font-semibold text-amber-600 uppercase">Beispiel</p>
          {block.text}
        </div>
      );
    case 'paragraf':
      return (
        <div className="mb-3 rounded-lg border-l-4 border-petrol-500 bg-petrol-100 p-3 text-sm text-petrol-900">
          <p className="mb-1 text-xs font-semibold uppercase">Gesetz</p>
          {block.text}
        </div>
      );
  }
}

// Raster mit 6 Lernkacheln. Eine Kachel oeffnet die Vollansicht als Modal.
// Gelesene Kacheln werden markiert. Quiz-Zugang erst nach allen 6 Kacheln,
// der Trainer darf sofort weiter.
export function KachelGalerie({
  lektion,
  onZumQuiz,
}: {
  lektion: Lektion;
  onZumQuiz: () => void;
}) {
  const stand = useSpielstand((s) => s.runden[lektion.id]);
  const istTrainer = useSpielstand((s) => s.istTrainer);
  const markiereKachelGelesen = useSpielstand((s) => s.markiereKachelGelesen);
  const [offeneKachel, setOffeneKachel] = useState<Kachel | null>(null);

  const alleGelesen = alleKachelnGelesen(lektion, stand);
  const quizErlaubt = darfQuizStarten(lektion, stand, istTrainer) || stand.status !== 'offen';

  function oeffneKachel(kachel: Kachel) {
    setOffeneKachel(kachel);
    markiereKachelGelesen(lektion.id, kachel.id);
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lektion.kacheln.map((kachel) => {
          const gelesen = stand.kachelnGelesen.includes(kachel.id);
          return (
            <Card
              key={kachel.id}
              role="button"
              tabIndex={0}
              aria-label={`Kachel ${kachel.titel} öffnen`}
              className="cursor-pointer transition-shadow hover:shadow-md"
              onClick={() => oeffneKachel(kachel)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  oeffneKachel(kachel);
                }
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-petrol-900">{kachel.titel}</p>
                {gelesen ? (
                  <BookOpenCheck size={18} className="shrink-0 text-erfolg" aria-hidden="true" />
                ) : (
                  <BookOpen size={18} className="shrink-0 text-gray-400" aria-hidden="true" />
                )}
              </div>
              <div className="mt-2">
                <Badge farbe={gelesen ? 'erfolg' : 'grau'}>
                  {gelesen ? 'Gelesen' : 'Noch nicht gelesen'}
                </Badge>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <Button disabled={!quizErlaubt} onClick={onZumQuiz}>
          Zum Quiz
        </Button>
        {!alleGelesen && !istTrainer ? (
          <p className="text-sm text-gray-600">
            Öffne zuerst alle sechs Kacheln, dann startet das Quiz.
          </p>
        ) : null}
      </div>

      <Modal
        offen={offeneKachel !== null}
        titel={offeneKachel?.titel ?? ''}
        onSchliessen={() => setOffeneKachel(null)}
        breit
        fussbereich={
          <Button variante="sekundaer" onClick={() => setOffeneKachel(null)}>
            Schließen
          </Button>
        }
      >
        {offeneKachel ? (
          <div>
            {offeneKachel.bloecke.map((block, i) => (
              <BlockAnsicht key={i} block={block} />
            ))}
            {offeneKachel.merksatz ? (
              <div className="mt-4 rounded-lg bg-petrol-700 p-3 text-sm font-medium text-white">
                Merksatz: {offeneKachel.merksatz}
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
