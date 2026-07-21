import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Modal } from '../../components/Modal';
import { TextFeld } from '../../components/Eingabefeld';
import { WarnModal } from '../../components/WarnModal';
import { useSpielstand, rundenPunkte } from '../../store/spielstand';
import { pruefeTrainerKennwort, sprungziel } from '../../engine/kennwort';
import { lektionen } from '../../content';

export function StartSeite() {
  const navigate = useNavigate();
  const gespeicherterName = useSpielstand((s) => s.name);
  const runden = useSpielstand((s) => s.runden);
  const neuesSpiel = useSpielstand((s) => s.neuesSpiel);
  const springeZuRunde = useSpielstand((s) => s.springeZuRunde);
  const setzeTrainer = useSpielstand((s) => s.setzeTrainer);

  const [name, setName] = useState('');
  const [nameFehler, setNameFehler] = useState('');
  const [sprungOffen, setSprungOffen] = useState(false);
  const [sprungKennwort, setSprungKennwort] = useState('');
  const [sprungFehler, setSprungFehler] = useState('');
  const [trainerOffen, setTrainerOffen] = useState(false);
  const [trainerKennwort, setTrainerKennwortWert] = useState('');
  const [trainerFehler, setTrainerFehler] = useState('');
  const [neustartWarnung, setNeustartWarnung] = useState(false);

  const ausgewertet = lektionen.filter((l) => runden[l.id].status === 'ausgewertet').length;
  const punkteBisher = lektionen.reduce((s, l) => s + rundenPunkte(runden[l.id]), 0);

  function nameGueltig(): boolean {
    if (name.trim().length < 3) {
      setNameFehler('Bitte gib Deinen Vor- und Nachnamen ein, mindestens 3 Zeichen.');
      return false;
    }
    setNameFehler('');
    return true;
  }

  function starteNeuesSpiel() {
    neuesSpiel(name);
    navigate('/onboarding');
  }

  function beiNeuesSpiel() {
    if (!nameGueltig()) return;
    if (gespeicherterName) {
      setNeustartWarnung(true);
    } else {
      starteNeuesSpiel();
    }
  }

  function beiSprung() {
    const ziel = sprungziel(sprungKennwort);
    if (!ziel) {
      setSprungFehler('Das Kennwort stimmt nicht. Frag im Zweifel beim Trainer nach.');
      return;
    }
    if (name.trim().length < 3 && !gespeicherterName) {
      setSprungFehler('Gib zuerst oben Deinen Namen ein.');
      return;
    }
    springeZuRunde(ziel, name.trim().length >= 3 ? name : (gespeicherterName ?? ''));
    navigate('/dashboard');
  }

  function beiTrainerLogin() {
    if (pruefeTrainerKennwort(trainerKennwort)) {
      setzeTrainer(true);
      navigate('/trainer');
    } else {
      setTrainerFehler('Das Kennwort stimmt nicht. Frag im Zweifel beim Trainer nach.');
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-seite px-4 py-10">
      <div className="w-full max-w-xl">
        <h1 className="text-center text-4xl font-bold text-petrol-900">AlpenRad</h1>
        <p className="mt-1 text-center text-lg text-petrol-500">
          Ein Planspiel zum Jahresabschluss nach UGB
        </p>
        <p className="mt-4 text-center text-sm text-gray-700">
          Willkommen beim Planspiel AlpenRad. Hier erarbeitest Du Schritt für Schritt den
          Jahresabschluss nach UGB.
        </p>

        <Card className="mt-8">
          <TextFeld
            label="Wie heißt Du?"
            wert={name}
            onWert={setName}
            fehler={nameFehler}
            placeholder="Vor- und Nachname"
            autoComplete="name"
          />
          <div className="mt-5 flex flex-col gap-3">
            <Button onClick={beiNeuesSpiel}>Neues Spiel starten</Button>
            {gespeicherterName ? (
              <Button variante="sekundaer" onClick={() => navigate('/dashboard')}>
                Fortsetzen als {gespeicherterName} ({ausgewertet} von {lektionen.length} Runden
                ausgewertet, {punkteBisher} Punkte)
              </Button>
            ) : null}
            <Button variante="sekundaer" onClick={() => setSprungOffen(true)}>
              Zu einer Runde springen
            </Button>
          </div>
        </Card>

        <footer className="mt-10 text-center">
          <button
            type="button"
            className="text-xs text-gray-400 underline hover:text-petrol-500"
            onClick={() => setTrainerOffen(true)}
          >
            Trainerzugang
          </button>
        </footer>
      </div>

      <Modal
        offen={sprungOffen}
        titel="Zu einer Runde springen"
        onSchliessen={() => {
          setSprungOffen(false);
          setSprungFehler('');
          setSprungKennwort('');
        }}
        fussbereich={
          <>
            <Button variante="sekundaer" onClick={() => setSprungOffen(false)}>
              Abbrechen
            </Button>
            <Button onClick={beiSprung}>Springen</Button>
          </>
        }
      >
        <p className="mb-4">
          Gib das zuletzt vom Trainer bekanntgegebene Kennwort ein. Du startest dann direkt in der
          Folgerunde. Übersprungene Runden zählen 0 Punkte. Der Sprung in Runde 1 braucht kein
          Kennwort, starte dafür einfach ein neues Spiel.
        </p>
        <TextFeld
          label="Kennwort"
          wert={sprungKennwort}
          onWert={(w) => {
            setSprungKennwort(w);
            setSprungFehler('');
          }}
          fehler={sprungFehler}
        />
      </Modal>

      <Modal
        offen={trainerOffen}
        titel="Trainerzugang"
        onSchliessen={() => {
          setTrainerOffen(false);
          setTrainerFehler('');
          setTrainerKennwortWert('');
        }}
        fussbereich={
          <>
            <Button variante="sekundaer" onClick={() => setTrainerOffen(false)}>
              Abbrechen
            </Button>
            <Button onClick={beiTrainerLogin}>Anmelden</Button>
          </>
        }
      >
        <TextFeld
          label="Trainer-Kennwort"
          wert={trainerKennwort}
          onWert={(w) => {
            setTrainerKennwortWert(w);
            setTrainerFehler('');
          }}
          fehler={trainerFehler}
        />
      </Modal>

      <WarnModal
        offen={neustartWarnung}
        titel="Neues Spiel starten"
        text={`Es gibt bereits einen Spielstand von ${gespeicherterName ?? ''}. Ein neues Spiel löscht diesen Spielstand. Fortfahren?`}
        onBestaetigen={() => {
          setNeustartWarnung(false);
          starteNeuesSpiel();
        }}
        onAbbrechen={() => setNeustartWarnung(false)}
      />
    </div>
  );
}
