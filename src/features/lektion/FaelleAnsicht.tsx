import { useState } from 'react';
import type { Fall, Lektion, SpielId, Teilaufgabe, Zusatzmodul } from '../../content/typen';
import { kennwortGateAktiv } from '../../engine/gates';
import { pruefeEinheitKennwort } from '../../engine/kennwort';
import { holeStand, useSpielstand, rundenPunkte } from '../../store/spielstand';
import { useUi } from '../../store/uiStore';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { TextFeld, ZahlFeld } from '../../components/Eingabefeld';
import { WarnModal } from '../../components/WarnModal';
import { FallAktionen } from './FallAktionen';

function TeilaufgabeFeld({
  lektionId,
  fall,
  teilaufgabe,
  gesperrt,
}: {
  lektionId: SpielId;
  fall: Fall;
  teilaufgabe: Teilaufgabe;
  gesperrt: boolean;
}) {
  const eingabe = useSpielstand(
    (s) => holeStand(s, lektionId)?.fallStaende[fall.id]?.eingaben[teilaufgabe.id] ?? null,
  );
  const setzeFallEingabe = useSpielstand((s) => s.setzeFallEingabe);

  if (teilaufgabe.typ === 'zahl') {
    return (
      <ZahlFeld
        label={teilaufgabe.frage}
        wert={typeof eingabe === 'string' ? eingabe : eingabe === null ? '' : String(eingabe)}
        einheit={teilaufgabe.einheit}
        disabled={gesperrt}
        onWert={(w) => setzeFallEingabe(lektionId, fall.id, teilaufgabe.id, w)}
      />
    );
  }

  return (
    <fieldset disabled={gesperrt}>
      <legend className="text-sm font-medium text-petrol-900">{teilaufgabe.frage}</legend>
    <div className="mt-2 flex flex-col gap-2">
        {teilaufgabe.optionen.map((option, i) => (
          <label
            key={i}
            className={`flex items-center gap-3 rounded-lg border p-3 text-sm ${
              gesperrt ? '' : 'cursor-pointer hover:border-petrol-500'
            } ${eingabe === i ? 'border-petrol-500 bg-petrol-100' : 'border-gray-200 bg-white'}`}
          >
            <input
              type="radio"
              name={`${fall.id}-${teilaufgabe.id}`}
              checked={eingabe === i}
              onChange={() => setzeFallEingabe(lektionId, fall.id, teilaufgabe.id, i)}
              className="accent-petrol-700"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function FallKarte({ lektion, fall }: { lektion: Lektion | Zusatzmodul; fall: Fall }) {
  const fallStand = useSpielstand((s) => holeStand(s, lektion.id)?.fallStaende[fall.id]);
  const nutzeHilfe = useSpielstand((s) => s.nutzeHilfe);
  const nutzeLoesung = useSpielstand((s) => s.nutzeLoesung);
  const gebeFallAb = useSpielstand((s) => s.gebeFallAb);
  const [abgabeWarnung, setAbgabeWarnung] = useState(false);

  const hilfeGenutzt = fallStand?.hilfeGenutzt ?? false;
  const loesungGenutzt = fallStand?.loesungGenutzt ?? false;
  const abgegeben = fallStand?.abgegeben ?? false;

  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-semibold text-petrol-900">{fall.titel}</h2>
        <div className="flex gap-2">
          {hilfeGenutzt ? <Badge farbe="warnung">Hilfe genutzt</Badge> : null}
          {loesungGenutzt ? <Badge farbe="fehler">Lösung genutzt</Badge> : null}
          {abgegeben ? <Badge farbe="erfolg">Abgegeben</Badge> : null}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-800">{fall.sachverhalt}</p>

      <div className="mt-4 flex flex-col gap-4">
        {fall.teilaufgaben.map((t) => (
          <TeilaufgabeFeld
            key={t.id}
            lektionId={lektion.id}
            fall={fall}
            teilaufgabe={t}
            gesperrt={abgegeben}
          />
        ))}
      </div>

      {hilfeGenutzt ? (
        <div className="mt-4 rounded-lg border-l-4 border-warnung bg-warnung/10 p-3 text-sm text-gray-800">
          <p className="mb-1 text-xs font-semibold text-warnung uppercase">Hilfe</p>
          {fall.hilfe}
        </div>
      ) : null}
      {loesungGenutzt ? (
        <div className="mt-4 rounded-lg border-l-4 border-fehler bg-fehler/10 p-3 text-sm text-gray-800">
          <p className="mb-1 text-xs font-semibold text-fehler uppercase">Lösung</p>
          {fall.loesung}
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <FallAktionen
          hilfeGenutzt={hilfeGenutzt}
          loesungGenutzt={loesungGenutzt}
          abgegeben={abgegeben}
          onHilfe={() => nutzeHilfe(lektion.id, fall.id)}
          onLoesung={() => nutzeLoesung(lektion.id, fall.id)}
        />
        <Button disabled={abgegeben} onClick={() => setAbgabeWarnung(true)}>
          Fall abgeben
        </Button>
      </div>

      <WarnModal
        offen={abgabeWarnung}
        titel="Fall abgeben"
        text="Du kannst danach nichts mehr ändern. Fall jetzt abgeben?"
        bestaetigenLabel="Abgeben"
        onBestaetigen={() => {
          setAbgabeWarnung(false);
          gebeFallAb(lektion.id, fall.id);
        }}
        onAbbrechen={() => setAbgabeWarnung(false)}
      />
    </Card>
  );
}

function KennwortGate({
  lektion,
  onZurAuswertung,
}: {
  lektion: Lektion | Zusatzmodul;
  onZurAuswertung: () => void;
}) {
  const schalteAuswertungFrei = useSpielstand((s) => s.schalteAuswertungFrei);
  const stand = useSpielstand((s) => holeStand(s, lektion.id));
  const zeigeToast = useUi((s) => s.zeigeToast);
  const [kennwort, setKennwort] = useState('');
  const [fehler, setFehler] = useState('');

  if (!stand) return null;

  function pruefen() {
    if (!stand) return;
    if (pruefeEinheitKennwort(lektion.id, kennwort)) {
      schalteAuswertungFrei(lektion.id);
      zeigeToast(`Runde ausgewertet! Du hast ${rundenPunkte(stand)} von 100 Punkten erreicht.`);
      onZurAuswertung();
    } else {
      setFehler('Das Kennwort stimmt nicht. Frag im Zweifel beim Trainer nach.');
    }
  }

  return (
    <Card className="border-amber-500 bg-amber-500/5">
      <h2 className="font-semibold text-petrol-900">
        Geschafft! Hol Dir jetzt das Kennwort vom Trainer, um Deine Auswertung zu öffnen.
      </h2>
      <div className="mt-4 flex items-end gap-3">
        <div className="max-w-xs flex-1">
          <TextFeld
            label="Kennwort"
            wert={kennwort}
            onWert={(w) => {
              setKennwort(w);
              setFehler('');
            }}
            fehler={fehler}
            onKeyDown={(e) => {
              if (e.key === 'Enter') pruefen();
            }}
          />
        </div>
        <Button onClick={pruefen}>Auswertung öffnen</Button>
      </div>
      <p className="mt-3 text-xs text-gray-600">
        Notizbuch und Kacheln bleiben für Dich zugänglich.
      </p>
    </Card>
  );
}

// Liste der Faelle mit Teilaufgaben, Warnmodalen und Kennwort-Gate.
export function FaelleAnsicht({
  lektion,
  onZurAuswertung,
}: {
  lektion: Lektion | Zusatzmodul;
  onZurAuswertung: () => void;
}) {
  const stand = useSpielstand((s) => holeStand(s, lektion.id));

  if (!stand) return null;

  return (
    <div className="flex flex-col gap-6">
      {lektion.faelle.map((fall) => (
        <FallKarte key={fall.id} lektion={lektion} fall={fall} />
      ))}
      {kennwortGateAktiv(stand) ? (
        <KennwortGate lektion={lektion} onZurAuswertung={onZurAuswertung} />
      ) : null}
    </div>
  );
}
