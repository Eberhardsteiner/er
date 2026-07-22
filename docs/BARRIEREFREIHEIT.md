# Barrierefreiheit im Planspiel AlpenRad

Pragmatischer Pass in Phase 9, kein Vollaudit. Stand v1.0.0, Juli 2026.

## Tastaturbedienung

- Alle interaktiven Elemente sind per Tab erreichbar und mit Enter oder Leertaste auslösbar. Das gilt auch für die als Karten gestalteten Elemente: Lernkacheln, Rundenkarten und Modul-Karten auf dem Dashboard tragen `role="button"`, `tabIndex={0}` und einen Tastatur-Handler.
- Antwortoptionen in Quiz und Fällen sind native Radio-Buttons mit verbundenem Label, Zahleneingaben native Textfelder.
- Der Fokusring ist global sichtbar: `:focus-visible` mit 2 px Petrol und 2 px Offset (src/index.css).

## Modals und Seitenleisten

- Alle Dialoge (Kennwort-Gates, Warnhinweise zu Hilfe und Lösung, Freischaltdialog, Import-Bestätigung) laufen über die gemeinsame Modal-Komponente: Fokus springt beim Öffnen hinein, Tab läuft in einer Fokusfalle, Esc schließt, danach kehrt der Fokus zum auslösenden Element zurück (src/components/Modal.tsx).
- Notizbuch und Bedienhilfe sind `aside`-Elemente mit eigener Beschriftung. Die öffnenden Icon-Buttons in der Kopfzeile tragen `aria-expanded`.

## Namen und Rollen

- Alle Icon-Buttons tragen `aria-label` (Notizbuch, Bedienhilfe, Dialog schließen, Kartenaktionen).
- Kennwort-Fehlermeldungen und Validierungsfehler bei Zahleneingaben erscheinen mit `role="alert"` (src/components/Eingabefeld.tsx), ebenso die Systembanner zu Speicher und Migration.
- Formular-Inputs sind über `label htmlFor` mit ihrer Beschriftung verbunden.

## Überschriftenhierarchie

- Jede Seite hat genau ein `h1` (Start, Onboarding, Dashboard, Runde, Gesamtauswertung, Trainer), darunter folgen `h2` und `h3` ohne Sprünge. In Phase 9 wurden dafür die Abschnittsüberschriften der Lektions- und Auswertungsansicht von `h3`/`h4` auf `h2`/`h3` gehoben und das Onboarding um ein `h1` ergänzt.

## Kontrast

- Amber (#F2A541) erreicht auf Weiß nur 2,05:1 und #D98B1F nur 2,74:1. Für Text auf hellem Grund gibt es deshalb seit Phase 9 die dunklere Variante `--color-amber-700: #B45309` mit 5,02:1. Umgestellt wurden die Punkteanzeigen der Runden- und Modulkarten, der Beispiel-Vermerk in den Kacheln und der Amber-Badge.
- Amber auf dunklem Petrol (Auswertungskarte, Gesamtauswertung) bleibt unverändert, dort liegt der Kontrast bei 5,99:1.
- Weiß auf Petrol-700 (#0F4C5C) und Petrol-900 (#093A47) liegt deutlich über 4,5:1.

## Bewegung

- `prefers-reduced-motion: reduce` schaltet die Einblend- und Toast-Animationen sowie Übergänge ab (src/index.css). Der animierte Punktezähler zeigt dann sofort den Endwert (src/components/Punktezaehler.tsx).

## Bewusste Grenzen

- Kein vollständiges WCAG-Audit, keine Screenreader-Testreihe über alle Seiten.
- Die dekorativen Icons sind mit `aria-hidden` ausgeblendet, tragen aber keine eigenen Beschreibungen.
- Desktop first: Das Spiel ist ab Tabletbreite ausgelegt, kleinere Displays sind nicht Zielplattform.
