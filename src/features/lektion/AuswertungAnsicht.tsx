import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Download, XCircle } from 'lucide-react';
import type { Fall, Lektion, RundenId, Teilaufgabe, Zusatzmodul } from '../../content/typen';
import { aktuelleVertiefungsbilanz, bilanzNachRunde } from '../../engine/ableitung';
import { geaendertePostenIds } from '../../engine/bilanz';
import { maxPunkteFall, punkteTeilaufgabe } from '../../engine/scoring';
import { holeStand, istModulId, rundenPunkte, useSpielstand } from '../../store/spielstand';
import type { FallStand } from '../../store/spielstand';
import { Badge } from '../../components/Badge';
import { BilanzAnsicht } from '../../components/BilanzAnsicht';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { GuVStaffel } from '../../components/GuVStaffel';
import { Punktezaehler } from '../../components/Punktezaehler';

function eingabeAlsText(teilaufgabe: Teilaufgabe, eingabe: string | number | null): string {
  if (eingabe === null || eingabe === undefined || eingabe === '') return 'Keine Eingabe';
  if (teilaufgabe.typ === 'choice') {
    return typeof eingabe === 'number' ? (teilaufgabe.optionen[eingabe] ?? 'Keine Eingabe') : 'Keine Eingabe';
  }
  return `${eingabe}${teilaufgabe.einheit ? ` ${teilaufgabe.einheit}` : ''}`;
}

function musterwertAlsText(teilaufgabe: Teilaufgabe): string {
  if (teilaufgabe.typ === 'choice') {
    return teilaufgabe.optionen[teilaufgabe.richtig] ?? '';
  }
  return `${teilaufgabe.loesung}${teilaufgabe.einheit ? ` ${teilaufgabe.einheit}` : ''}`;
}

function FallErgebnis({ fall, fallStand }: { fall: Fall; fallStand: FallStand | undefined }) {
  const eingaben = fallStand?.eingaben ?? {};
  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-semibold text-petrol-900">{fall.titel}</h4>
        <div className="flex gap-2">
          {fallStand?.hilfeGenutzt ? <Badge farbe="warnung">Hilfe genutzt</Badge> : null}
          {fallStand?.loesungGenutzt ? <Badge farbe="fehler">Lösung genutzt</Badge> : null}
          <Badge farbe="amber">
            {fallStand?.punkte ?? 0} von {maxPunkteFall(fall)} Punkten
          </Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {fall.teilaufgaben.map((t) => {
          const eingabe = eingaben[t.id] ?? null;
          const punkte = punkteTeilaufgabe(t, eingabe);
          const richtig = punkte > 0;
          return (
            <div key={t.id} className="rounded-lg border border-gray-200 p-3 text-sm">
              <div className="flex items-start gap-2">
                {richtig ? (
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-erfolg" aria-hidden="true" />
                ) : (
                  <XCircle size={18} className="mt-0.5 shrink-0 text-fehler" aria-hidden="true" />
                )}
                <div className="flex-1">
                  <p className="font-medium text-petrol-900">{t.frage}</p>
                  <p className="mt-1 text-gray-700">Deine Eingabe: {eingabeAlsText(t, eingabe)}</p>
                  <p className="text-gray-700">Musterwert: {musterwertAlsText(t)}</p>
                </div>
                <span className="shrink-0 text-gray-600">
                  {punkte} von {t.punkte}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg border-l-4 border-petrol-500 bg-petrol-100 p-3 text-sm text-petrol-900">
        <p className="mb-1 text-xs font-semibold uppercase">Lösung</p>
        {fall.loesung}
      </div>
      {fallStand?.hilfeGenutzt ? (
        <p className="mt-2 text-xs text-warnung">
          Hilfe genutzt: Die Punkte dieses Falls sind auf die Hälfte begrenzt.
        </p>
      ) : null}
      {fallStand?.loesungGenutzt ? (
        <p className="mt-2 text-xs text-fehler">Lösung genutzt: Dieser Fall zählt 0 Punkte.</p>
      ) : null}
    </Card>
  );
}

// Auswertung: Punkteuebersicht, Quizteil, Fallteil, Bilanzteil, PDF und Weiter.
// Gilt seit Phase Z0 fuer Kernrunden und Zusatzmodule.
export function AuswertungAnsicht({ lektion }: { lektion: Lektion | Zusatzmodul }) {
  const navigate = useNavigate();
  const istModul = istModulId(lektion.id);
  const stand = useSpielstand((s) => holeStand(s, lektion.id));
  const name = useSpielstand((s) => s.name);
  const notiz = useSpielstand((s) => s.notizen[lektion.id]);
  const module = useSpielstand((s) => s.module);
  const freigeschaltet = useSpielstand((s) => s.freigeschalteteModule);

  if (!stand) return null;

  const bilanz = istModul
    ? aktuelleVertiefungsbilanz(module, freigeschaltet)
    : bilanzNachRunde(lektion.id as RundenId);
  const hervorgehoben = lektion.bilanzDelta ? geaendertePostenIds(lektion.bilanzDelta) : undefined;
  const guv = istModul ? (lektion as Zusatzmodul).guv : undefined;
  // Module ohne Bilanzdelta, aber mit GuV-Daten (Z4) zeigen anstelle der
  // Bilanzveraenderung die GuV-Staffel mit Verprobungshinweis.
  const guvStattBilanz = istModul && !!guv && guv.length > 0 && !lektion.bilanzDelta;

  return (
    <div className="flex flex-col gap-6">
      <Card className="bg-petrol-900 text-white">
        <h3 className="text-lg font-semibold">Deine Auswertung</h3>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-amber-500">
              <Punktezaehler ziel={stand.punkteQuiz} />
            </p>
            <p className="text-sm text-petrol-100">Quiz (von 20)</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-500">
              <Punktezaehler ziel={stand.punkteFaelle} />
            </p>
            <p className="text-sm text-petrol-100">Fälle (von 80)</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-500">
              <Punktezaehler ziel={rundenPunkte(stand)} />
            </p>
            <p className="text-sm text-petrol-100">Gesamt (von 100)</p>
          </div>
        </div>
      </Card>

      <section aria-label="Quizergebnis">
        <h3 className="mb-3 text-lg font-semibold text-petrol-900">Quiz</h3>
        {stand.quizUebersprungen ? (
          <Card>
            <p className="text-sm text-gray-700">
              Das Quiz wurde nicht absolviert und zählt 0 Punkte.
            </p>
          </Card>
        ) : (
          <div className="flex flex-col gap-3">
            {lektion.quiz.map((frage, i) => {
              const antwort = stand.quizAntworten[i] ?? null;
              const richtig = antwort === frage.richtig;
              return (
                <Card key={frage.id}>
                  <div className="flex items-start gap-2">
                    {richtig ? (
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-erfolg"
                        aria-hidden="true"
                      />
                    ) : (
                      <XCircle size={18} className="mt-0.5 shrink-0 text-fehler" aria-hidden="true" />
                    )}
                    <div className="flex-1 text-sm">
                      <p className="font-medium text-petrol-900">
                        {i + 1}. {frage.frage}
                      </p>
                      <p className="mt-1 text-gray-700">
                        Deine Antwort: {antwort !== null ? frage.antworten[antwort] : 'Keine Antwort'}
                      </p>
                      <p className="text-gray-700">Richtig: {frage.antworten[frage.richtig]}</p>
                      <p className="mt-1 text-gray-600 italic">{frage.erklaerung}</p>
                    </div>
                    <span className="shrink-0 text-sm text-gray-600">{richtig ? 2 : 0} von 2</span>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      <section aria-label="Fallergebnisse">
        <h3 className="mb-3 text-lg font-semibold text-petrol-900">Fälle</h3>
        <div className="flex flex-col gap-3">
          {lektion.faelle.map((fall) => (
            <FallErgebnis key={fall.id} fall={fall} fallStand={stand.fallStaende[fall.id]} />
          ))}
        </div>
      </section>

      {!guvStattBilanz ? (
        <section
          aria-label={istModul ? 'Vertiefungsbilanz nach diesem Modul' : 'Bilanz nach der Runde'}
        >
          <h3 className="mb-3 text-lg font-semibold text-petrol-900">
            {istModul ? 'Vertiefungsbilanz nach diesem Modul' : 'Bilanz nach der Runde'}
          </h3>
          <Card>
            {lektion.bilanzDelta ? (
              <p className="mb-4 rounded-lg bg-petrol-100 p-3 text-sm text-petrol-900">
                {lektion.bilanzDelta.erlaeuterung}
              </p>
            ) : istModul ? (
              <p className="mb-4 rounded-lg bg-petrol-100 p-3 text-sm text-petrol-900">
                Dieses Modul verändert die Vertiefungsbilanz nicht.
              </p>
            ) : (
              <p className="mb-4 rounded-lg bg-petrol-100 p-3 text-sm text-petrol-900">
                In dieser Runde bleibt die Bilanz unverändert. Ab Runde 3 arbeiten Deine Fälle
                direkt in der Bilanz.
              </p>
            )}
            <BilanzAnsicht bilanz={bilanz} hervorgehoben={hervorgehoben} />
          </Card>
        </section>
      ) : null}

      {guv && guv.length > 0 ? (
        <section aria-label="Gewinn- und Verlustrechnung">
          <h3 className="mb-3 text-lg font-semibold text-petrol-900">
            Gewinn- und Verlustrechnung
          </h3>
          <Card>
            {guvStattBilanz ? (
              <p className="mb-4 rounded-lg bg-petrol-100 p-3 text-sm text-petrol-900">
                Dieses Modul bucht nichts. Es erklärt, woher das Ergebnis kommt, und verprobt die
                GuV gegen den Bilanzgewinn der Schlussbilanz.
              </p>
            ) : null}
            <GuVStaffel zeilen={guv} />
          </Card>
        </section>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => {
            // PDF-Module erst bei Bedarf laden, haelt den Start der App schlank.
            if (istModul) {
              void import('../../pdf/modulPdf').then((m) =>
                m.erzeugeModulPdf(lektion as Zusatzmodul, stand, name ?? '', bilanz, notiz ?? ''),
              );
            } else {
              void import('../../pdf/rundenPdf').then((m) =>
                m.erzeugeRundenPdf(lektion as Lektion, stand, name ?? '', bilanz, notiz ?? ''),
              );
            }
          }}
        >
          <Download size={16} aria-hidden="true" />
          {istModul ? 'PDF dieses Moduls laden' : 'PDF dieser Runde laden'}
        </Button>
        {lektion.id === 'R7' ? (
          <Button variante="sekundaer" onClick={() => navigate('/gesamt')}>
            Zur Gesamtauswertung
          </Button>
        ) : null}
        <Button variante="sekundaer" onClick={() => navigate('/dashboard')}>
          Weiter
        </Button>
      </div>
    </div>
  );
}
