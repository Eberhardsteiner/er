# AlpenRad, das Bilanz-Planspiel

Browserbasiertes Planspiel für die Vorlesung Externes Rechnungswesen (Österreich, UGB) von Dr. Eberhard Steiner. Die Studierenden begleiten die fiktive AlpenRad GmbH durch ihr erstes Geschäftsjahr und erarbeiten in sieben Runden den Jahresabschluss. Die App läuft komplett im Browser, ohne Backend und ohne Datenübertragung.

Der Aufbau folgt dem Phasenprozess in [docs/PRODUKTIONSPLAN.md](docs/PRODUKTIONSPLAN.md). Aktueller Stand ist Phase 0: kompletter technischer Grundaufbau mit der fachneutralen Demo-Runde R0 (Probelauf). Die fachlichen Inhalte der sieben echten Runden folgen in späteren Phasen als reine Datenmodule unter `src/content/lektionen`.

## Voraussetzungen

Node 20 oder neuer und npm.

## Befehle

| Befehl | Zweck |
|---|---|
| `npm install` | Abhängigkeiten installieren |
| `npm run dev` | Entwicklungsserver starten |
| `npm test` | Tests (Vitest) ausführen |
| `npm run validate` | Content-Validator ausführen |
| `npm run build` | Produktionsbuild nach `dist/` erzeugen |
| `npm run preview` | Produktionsbuild lokal prüfen |

## Deployment

Test-Deployment auf GitHub Pages: Der Workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) läuft bei jedem Push auf `main`. Er führt Tests und Validator aus, baut die App und veröffentlicht `dist/` auf GitHub Pages. Dafür muss einmalig in den Repository-Einstellungen unter Settings, Pages als Quelle „GitHub Actions" aktiviert werden. Die Test-URL lautet dann https://eberhardsteiner.github.io/er/

Produktions-Deployment: Den Inhalt des Ordners `dist/` nach einem `npm run build` in das Verzeichnis `/er` auf uvm-akademie.de hochladen (etwa per FTP). Durch `base: "./"` in der Vite-Konfiguration und den HashRouter läuft die App dort ohne Anpassung unter https://uvm-akademie.de/er

## Hinweise

Der Spielstand liegt im localStorage des Browsers (Schlüssel `alpenrad-v1`). Die Rundenkennwörter sind im Client nur leicht verschleiert abgelegt, das ist eine bewusste Entscheidung für ein Planspiel ohne Prüfungscharakter.
