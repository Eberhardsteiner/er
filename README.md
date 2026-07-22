# AlpenRad, das Bilanz-Planspiel

Browserbasiertes Planspiel für die Vorlesung Externes Rechnungswesen (Österreich, UGB) von Prof. Dr. Eberhard Steiner, UVM-Institut. Die Studierenden begleiten die fiktive AlpenRad GmbH, eine E-Bike-Manufaktur in Graz, durch ihr erstes Geschäftsjahr: sieben Runden von den Grundlagen der Rechnungslegung bis zur Schlussbilanz, dazu vier freischaltbare Zusatzmodule (Eigenkapital, Verbindlichkeiten, Rechnungsabgrenzung, GuV). Eine Musterbilanz entwickelt sich ab Runde 3 nachvollziehbar von der Gründungsbilanz bis zum Jahresabschluss. Die App läuft komplett im Browser, ohne Backend und ohne Datenübertragung.

Version 1.0.0, Contentumfang abgeschlossen (Phasenprozess laut [docs/PRODUKTIONSPLAN.md](docs/PRODUKTIONSPLAN.md)).

## Live

- Produktion: https://uvm-akademie.de/er/
- Staging (GitHub Pages, automatisch bei jedem Push): https://eberhardsteiner.github.io/er/

## Technik

React 19, TypeScript (strict), Vite 7, Tailwind CSS 4, react-router (HashRouter), zustand mit persist, jsPDF mit jspdf-autotable, Vitest. Alle fachlichen Inhalte liegen strikt getrennt vom Code als typisierte Datenmodule in `src/content`. Ein eigener Content-Validator prüft Struktur, Antwortverteilung, Punktesummen, Bilanzkette und GuV-Verprobung.

## Voraussetzungen

Node 20 oder neuer und npm.

## Befehle

| Befehl | Zweck |
|---|---|
| `npm install` | Abhängigkeiten installieren |
| `npm run dev` | Entwicklungsserver starten |
| `npm test` | Tests (Vitest) ausführen, inklusive Goldener-Pfad-Regression |
| `npm run validate` | Content-Validator ausführen |
| `npm run build` | Produktionsbuild nach `dist/` erzeugen |
| `npm run preview` | Produktionsbuild lokal prüfen |

## Deployment

Staging läuft automatisch über [.github/workflows/deploy.yml](.github/workflows/deploy.yml) (Tests, Validator, Build, GitHub Pages). Das Produktions-Deployment nach uvm-akademie.de/er ist ein einfacher Upload des `dist/`-Inhalts, ausführlich beschrieben in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Dokumentation

- [docs/TRAINERHANDBUCH.md](docs/TRAINERHANDBUCH.md): Spielablauf, Trainer-Cockpit, Punktesystem, Kennwörter (deshalb nicht an Studierende weitergeben)
- [docs/KONSISTENZ.md](docs/KONSISTENZ.md): verbindliches Register der Zahlenwelt (Bilanzkette, Fälle, Module)
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md): Upload-Anleitung für die Produktion
- [docs/BARRIEREFREIHEIT.md](docs/BARRIEREFREIHEIT.md): umgesetzte Barrierefreiheits-Punkte
- [docs/ENDABNAHME.md](docs/ENDABNAHME.md): Protokoll der Endabnahme v1.0.0
- [docs/PRODUKTIONSPLAN.md](docs/PRODUKTIONSPLAN.md): Projektplan und Phasenprozess

## Hinweise

Der Spielstand liegt im localStorage des Browsers (Schlüssel `alpenrad-v1`) und lässt sich als JSON-Datei sichern und auf ein anderes Gerät mitnehmen. Die Rundenkennwörter sind im Client nur leicht verschleiert abgelegt, das ist eine bewusste Entscheidung für ein Planspiel ohne Prüfungscharakter.
