import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { FortschrittsBalken } from '../../components/FortschrittsBalken';
import { useSpielstand } from '../../store/spielstand';

// Onboarding-Tour mit Mentorin Mag. Sophie Huber, sechs Schritte, ueberspringbar.
export function OnboardingSeite() {
  const navigate = useNavigate();
  const name = useSpielstand((s) => s.name);
  const onboardingAbschliessen = useSpielstand((s) => s.onboardingAbschliessen);
  const [schritt, setSchritt] = useState(0);

  const schritte = [
    `Servus ${name ?? ''}! Ich bin Sophie Huber und begleite Dich durch das Planspiel. Sieben Runden führen Dich zum fertigen Jahresabschluss.`,
    'In jeder Runde liest Du zuerst sechs Lernkacheln. Sie enthalten den Stoff, den Du für Quiz und Fälle brauchst.',
    'Danach kommt ein Quiz mit zehn Fragen. Jede richtige Antwort bringt 2 Punkte.',
    'Dann folgen die Fälle, zusammen 80 Punkte je Runde. Der Hilfe-Button halbiert die möglichen Punkte eines Falls, der Lösung-Button setzt sie auf null. Beide warnen Dich vorher.',
    'Rechts oben findest Du Dein Notizbuch und die Bedienhilfe. Notizen landen im PDF Deiner Runde.',
    'Für die Auswertung jeder Runde bekommst Du vom Trainer ein Kennwort. Nach der Auswertung kannst Du Ergebnis und Lernstoff als PDF laden. Viel Erfolg!',
  ];

  function beenden() {
    onboardingAbschliessen();
    navigate('/dashboard');
  }

  return (
    <div className="mx-auto max-w-xl">
      <Card>
        <div className="flex items-start gap-4">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-petrol-700 text-lg font-bold text-white"
            aria-hidden="true"
          >
            SH
          </div>
          <div>
            <p className="font-semibold text-petrol-900">Mag. Sophie Huber</p>
            <p className="text-xs text-gray-500">Bilanzbuchhalterin</p>
            <p className="einblenden mt-4 text-sm text-gray-800" key={schritt}>
              {schritte[schritt]}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <FortschrittsBalken
            prozent={((schritt + 1) / schritte.length) * 100}
            label="Fortschritt der Tour"
          />
          <p className="mt-1 text-xs text-gray-500">
            Schritt {schritt + 1} von {schritte.length}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Button variante="dezent" onClick={beenden}>
            Tour überspringen
          </Button>
          <div className="flex gap-3">
            <Button
              variante="sekundaer"
              disabled={schritt === 0}
              onClick={() => setSchritt((s) => Math.max(0, s - 1))}
            >
              Zurück
            </Button>
            {schritt < schritte.length - 1 ? (
              <Button onClick={() => setSchritt((s) => s + 1)}>Weiter</Button>
            ) : (
              <Button onClick={beenden}>Zum Dashboard</Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
