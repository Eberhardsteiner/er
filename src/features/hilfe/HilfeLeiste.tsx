import { Seitenleiste } from '../../components/Seitenleiste';
import { useUi } from '../../store/uiStore';

const abschnitte: { titel: string; text: string }[] = [
  {
    titel: 'Spielablauf',
    text: 'Jede Runde hat fünf Stationen. Du liest das Intro, öffnest alle sechs Lernkacheln, beantwortest das Quiz, löst die Fälle und schaltest mit dem Kennwort die Auswertung frei. Danach öffnet sich die nächste Runde.',
  },
  {
    titel: 'Punkteregeln',
    text: 'Das Quiz bringt 20 Punkte, jede richtige Antwort zählt 2 Punkte. Die Fälle bringen zusammen 80 Punkte. So sind je Runde 100 Punkte möglich, über alle sieben Runden 700 Punkte. Der Probelauf zählt nicht zur Gesamtwertung.',
  },
  {
    titel: 'Hilfe- und Lösungsbuttons',
    text: 'Der Hilfe-Button halbiert die möglichen Punkte des jeweiligen Falls. Der Lösung-Button setzt sie auf null. Beide Buttons warnen Dich, bevor etwas passiert.',
  },
  {
    titel: 'Kennwörter',
    text: 'Das Kennwort für die Auswertung jeder Runde bekommst Du vom Trainer in der Lehrveranstaltung. Falsche Eingaben kosten nichts, Du kannst es beliebig oft versuchen. Mit dem zuletzt bekanntgegebenen Kennwort kannst Du am Startbildschirm direkt in die Folgerunde springen.',
  },
  {
    titel: 'Notizbuch',
    text: 'Das Notizbuch öffnest Du über die Kopfzeile. Notizen werden automatisch gespeichert und je Runde abgelegt. Sie erscheinen im PDF der jeweiligen Runde.',
  },
  {
    titel: 'PDFs',
    text: 'Nach der Auswertung jeder Runde lädst Du ein Runden-PDF mit Ergebnis, Lernstoff, Bilanz und Notizen. Am Spielende lädst Du das Gesamt-PDF und schickst es per E-Mail an Deinen Lehrveranstaltungsleiter.',
  },
  {
    titel: 'Neustart',
    text: 'Ein neues Spiel startest Du am Startbildschirm. Dein alter Spielstand wird dabei gelöscht, die App fragt vorher nach. Dein Spielstand bleibt sonst im Browser gespeichert, auch nach dem Neuladen der Seite.',
  },
];

// Bedienhilfe als rechte Seitenleiste mit kurzen Abschnitten.
export function HilfeLeiste() {
  const offen = useUi((s) => s.hilfeOffen);
  const schliesseLeisten = useUi((s) => s.schliesseLeisten);

  return (
    <Seitenleiste offen={offen} titel="Bedienhilfe" onSchliessen={schliesseLeisten}>
      <div className="flex flex-col gap-4">
        {abschnitte.map((a) => (
          <section key={a.titel}>
            <h3 className="mb-1 font-semibold text-petrol-900">{a.titel}</h3>
            <p className="text-sm text-gray-700">{a.text}</p>
          </section>
        ))}
      </div>
    </Seitenleiste>
  );
}
