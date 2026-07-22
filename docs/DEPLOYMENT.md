# Deployment-Anleitung AlpenRad

Stand v1.0.0, Juli 2026. Die App ist eine reine Browser-Anwendung ohne Backend. Deployment heißt: statische Dateien auf einen Webspace legen.

## 1. Überblick

| Umgebung | Ort | Weg |
|---|---|---|
| Staging | https://eberhardsteiner.github.io/er/ | automatisch bei jedem Push auf main |
| Produktion | https://uvm-akademie.de/er/ | manueller Upload des dist-Inhalts |

Dank `base: "./"` in der Vite-Konfiguration und dem HashRouter sind alle Pfade relativ. Die App läuft dadurch unverändert unter jedem Unterverzeichnis, es ist keine Serverkonfiguration nötig (keine Rewrites, keine .htaccess-Einträge).

## 2. Produktions-Release beziehen

Der einfachste Weg ist das GitHub-Release:

1. Öffne https://github.com/Eberhardsteiner/er/releases und wähle das aktuelle Release (v1.0.0).
2. Lade das Asset alpenrad-er-v1.0.0.zip herunter.
3. Entpacke das ZIP. Es enthält direkt den Inhalt des Build-Ordners (index.html und den Ordner assets), keinen umschließenden Unterordner.

Alternativ baust Du selbst:

```
npm install
npm run build
```

Danach liegt der fertige Stand in `dist/`.

## 3. Upload nach uvm-akademie.de/er

1. Verbinde Dich per FTP oder über das Hosting-Panel mit dem Webspace von uvm-akademie.de.
2. Öffne das Verzeichnis `er/` im Webroot (einmalig anlegen, falls es noch nicht existiert).
3. Lade den gesamten entpackten Inhalt hinein: die Datei index.html und den kompletten Ordner assets.
4. Rufe https://uvm-akademie.de/er/ auf und prüfe, dass die Startseite erscheint.

## 4. Updates einspielen

Bei jedem Update einfach alle Dateien im Verzeichnis `er/` durch den neuen Stand ersetzen. Die Asset-Dateinamen tragen Inhalts-Hashes, Browser laden geänderte Dateien deshalb automatisch neu und Cache-Probleme sind praktisch ausgeschlossen. Sollte ein Browser dennoch einen alten Stand zeigen, genügt einmal hartes Neuladen (Strg+F5).

Alte assets-Dateien früherer Versionen dürfen gelöscht werden, sie werden nicht mehr referenziert.

## 5. Staging auf GitHub Pages

Der Workflow `.github/workflows/deploy.yml` läuft bei jedem Push auf main: Er führt Tests und Content-Validator aus, baut die App und veröffentlicht `dist/` auf GitHub Pages. Staging und Produktion sind damit immer aus demselben geprüften Stand gebaut. Voraussetzung (bereits eingerichtet): In den Repository-Einstellungen ist unter Settings, Pages die Quelle GitHub Actions gewählt.

## 6. Prüfliste nach dem Upload

1. Startseite lädt, Namenseingabe funktioniert.
2. Eine Kachel öffnen, eine Quizfrage beantworten (prüft, dass die assets geladen wurden).
3. Ein PDF laden (prüft die Nachlade-Chunks für jsPDF).
4. Browserkonsole ohne Fehler.

## 7. Datenschutz

Name und Spielstand bleiben im localStorage des Browsers der Studierenden. Es gibt keine Serverkomponente, keine Cookies und keine Übertragung von Spieldaten.
