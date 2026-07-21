# Produktionsplan: Planspiel „AlpenRad", Externes Rechnungswesen nach UGB

Stand 21.07.2026. Arbeitsdokument für Dr. Eberhard Steiner, UVM-Institut.
Repository https://github.com/Eberhardsteiner/er (derzeit leer, öffentlich). Ziel-URL https://uvm-akademie.de/er.

Dieses Dokument wird in das Repository gelegt (Pfad docs/PRODUKTIONSPLAN.md), damit Claude Code es in jeder Phase als Referenz lesen kann.

## 1. Projektziel

Browserbasiertes, gamifiziertes Planspiel für die Vorlesung Externes Rechnungswesen in Österreich. Rechtsgrundlage ist ausschließlich das UGB. Die Studierenden begleiten die fiktive AlpenRad GmbH, eine E-Bike-Manufaktur in Graz, durch ihr erstes Geschäftsjahr und erarbeiten in sieben Runden den Weg zum Jahresabschluss. Jede Runde vermittelt Stoff über Lernkacheln und prüft ihn über ein Quiz. Danach vertiefen Fälle den Stoff, sie basieren auf dem Übungsbuch und werden auf UGB umgestellt. Eine Musterbilanz entwickelt sich ab Runde 3 nachvollziehbar weiter. Die Anrede der Studierenden ist Du, alle Fachtexte bleiben formell korrekt.

Nicht Teil des Spiels sind die Themen Eigenkapital, Rechnungsabgrenzungsposten, GuV und Verbindlichkeiten. Diese Posten erscheinen in der Musterbilanz als Positionen, werden aber nicht gelehrt. Ergebniswirkungen laufen ohne GuV-Darstellung über den Eigenkapitalposten Bilanzgewinn oder Bilanzverlust.

## 2. Quellenlage und Rechtsgrundlage

Analyse der hochgeladenen Unterlagen (Recherchestand 21.07.2026):

| Quelle | Befund | Verwendung |
|---|---|---|
| Textskripten Teil A (2019), B, C, D, E, H (2024) | Durchgängig UGB-basiert (§§ 189 bis 283 UGB). Zwei Relikte deutscher Herkunft: Teil B zitiert einmal § 252 I Nr. 2 ohne Gesetzeskürzel, Teil D zitiert § 253 und § 255 IIa (deutsches HGB). | Basis für Lernkacheln, Quizfragen, Lernziele und Kapitel-Intros. Relikte werden bei der Contentproduktion durch UGB-Normen ersetzt. |
| Übungsbuch Steiner/Orth/Schwarzmann, 5. Aufl. 2011, Schäffer-Poeschel | HGB (BilMoG-Stand 2011) und IFRS (Stand 2011). | Basis für die Fälle. Jede Aufgabe wird auf UGB umgestellt, in die Rahmengeschichte eingepasst, mit den anderen Runden abgestimmt und von IFRS-Teilen befreit. |

Bekannte Anpassungspunkte bei der Umstellung HGB auf UGB, die in den Contentphasen zwingend zu beachten sind:

- Aktivierung selbst erstellter immaterieller Vermögensgegenstände des Anlagevermögens: Wahlrecht nach § 248 II HGB, im UGB Ansatzverbot (§ 197 UGB, so auch Skript Teil C und D). Betroffene Aufgaben (etwa 3.3, 4.11, 5.4) werden umgebaut.
- Größenklassen: § 267 HGB wird durch § 221 UGB ersetzt. Die Schwellenwerte des § 221 UGB sind vor Contentphase 2 im RIS auf aktuellem Stand zu prüfen, da sie zuletzt EU-weit angehoben wurden.
- Bewertungsnormen: § 253 und § 255 HGB werden durch §§ 201, 203, 204, 206, 207, 208, 209 und 211 UGB ersetzt, jeweils nach Maßgabe der Skripten.
- Rückstellungen: Aufgabe 8.8 (Instandhaltung nach § 249 I 2 Nr. 1 HGB) wird zum Fall über Aufwandsrückstellungen nach § 198 VIII 2 UGB. Abzinsung und Bewertung nach § 211 UGB gemäß Skript Teil H.
- Österreichische Spezifika aus Skript Teil H (Abfertigungen, Jubiläumsgelder, Kulanzen, nicht konsumierter Urlaub) fließen in Kacheln und Quiz ein.
- Gesetzesstände (etwa GWG-Grenze nach § 13 EStG, Zinssätze nach § 211 UGB) werden je Contentphase im RIS verifiziert und im Prompt mit Fundstelle dokumentiert.

Urheberrecht: Das Repository ist öffentlich. Die adaptierten Inhalte stammen aus Deinen eigenen Werken. Die Original-PDFs kommen nicht in das Repository. Falls Du die Spieltexte nicht öffentlich zeigen willst, stelle das Repository auf privat, GitHub Pages funktioniert dann weiterhin über den Actions-Workflow.

## 3. Spielkonzept

### 3.1 Rahmengeschichte

Lena Berger und Jakob Fuchs gründen zum 1. Jänner die AlpenRad GmbH in Graz, eine Manufaktur für hochwertige E-Bikes und Lastenräder. Die Spielerin oder der Spieler ist die neue Assistenz der kaufmännischen Leitung. Mentorin ist Mag. Sophie Huber, Bilanzbuchhalterin. Sie führt durch das Onboarding und liefert die Rundeneinstiege samt Hilfetexten. Das Spieljahr läuft von der Gründung im Jänner bis zu den Abschlussarbeiten zum 31. Dezember. Die Erzählung liefert für jedes Thema einen natürlichen Anlass: Halle und Maschinen für das Anlagevermögen, Rahmen und Akkus für Vorräte und Verbrauchsfolge, insolvente Händler für die Forderungsbewertung, Garantiezusagen und ein Prozessrisiko für die Rückstellungen.

### 3.2 Rundenstruktur

| Runde | Thema | Stoffquelle | Fallbasis (Übungsbuch, UGB-adaptiert) | Kennwort |
|---|---|---|---|---|
| 1 | Grundlagen der Rechnungslegung | Teil A | Auswahl aus 1.1 bis 1.5 | GreenField |
| 2 | Grundsätze ordnungsmäßiger Buchführung | Teil B | Auswahl aus 2.1 bis 2.5 | GoldenRule |
| 3 | Bilanzierung dem Grunde nach (Ansatz) | Teil C Kap. 1 | Auswahl aus 3.1 bis 3.5 | CornerStone |
| 4 | Bewertung | Teil C Kap. 2 | Auswahl aus 4.1 bis 4.24 | FairValue |
| 5 | Anlagevermögen | Teil D | Auswahl aus 5.1 bis 5.16, ohne reine IFRS-Aufgaben | IronWorks |
| 6 | Umlaufvermögen | Teil E | Auswahl aus 6.1 bis 6.10 | QuickSilver |
| 7 | Rückstellungen | Teil H | Auswahl aus 8.4 bis 8.9 | SafeHarbor |

Jede Runde besteht aus vier Abschnitten: Intro (Story-Einstieg samt Inhalten und Lernzielen), sechs Lernkacheln, Quiz mit zehn Single-Choice-Fragen (je fünf Antwortoptionen, genau eine richtig), danach drei bis fünf Fälle. Die Runden 1 und 2 stehen für sich. Ab Runde 3 bauen die Fälle aufeinander auf und verändern die Musterbilanz.

Trainerinformation zu den Kennwörtern: Das Kennwort einer Runde schaltet deren Auswertung frei und öffnet damit die Folgerunde. Es wird vom Trainer in der Präsenzeinheit bekanntgegeben. Der Kennwortvergleich ignoriert Groß- und Kleinschreibung sowie Leerzeichen. Die Sprungfunktion auf dem Startbildschirm nutzt dieselben Kennwörter: Wer das zuletzt bekanntgegebene Kennwort eingibt, startet direkt in der Folgerunde, übersprungene Runden zählen 0 Punkte und werden in den PDFs ausgewiesen. Der Trainerzugang Control#99 zeigt alle Kennwörter. Er erlaubt freie Navigation und den Direkteinstieg in die Fälle jeder Runde ohne Kacheln und Quiz.

### 3.3 Punktesystem

Je Runde 100 Punkte, gesamt 700 Punkte. Das Quiz bringt 20 Punkte (zehn Fragen je 2 Punkte). Die Fälle bringen zusammen 80 Punkte, die Verteilung auf die einzelnen Fälle legt die jeweilige Contentphase fest, der Content-Validator erzwingt die Summe. Je Fall gibt es zwei Buttons mit Warnhinweis vor Ausführung: „Hilfe zur Lösung" begrenzt die erreichbaren Punkte dieses Falls auf die Hälfte, „Lösung anzeigen" setzt sie auf null. Numerische Eingaben akzeptieren österreichisches Zahlenformat (Komma als Dezimaltrennzeichen) mit konfigurierbarer Toleranz je Teilaufgabe.

Ränge in der Gesamtauswertung: ab 90 Prozent Bilanzmeister, ab 75 Prozent Abschlussprofi, ab 50 Prozent Solide Basis, darunter Trainingsrunde empfohlen.

### 3.4 Musterbilanz

Die Bilanz folgt einer vereinfachten Gliederung in Anlehnung an § 224 UGB (Positionsnamen werden in Contentphase 4 gegen Skript und RIS geprüft). Sie entwickelt sich deterministisch entlang der Musterlösungen, unabhängig von den Antworten der Studierenden. Nur so ist Konsistenz über alle Runden garantiert. Abweichende Antworten werden in der Auswertung dem Musterwert gegenübergestellt. Eine Invariantenprüfung (Summe Aktiva gleich Summe Passiva, Vortrag je Runde korrekt) läuft als automatischer Test und im Content-Validator. Die Gründungsbilanz erscheint ab Spielstart, die Deltas beginnen mit Runde 3. Die Zahlenwelt (Gründungsbilanz, alle Geschäftsfälle) wird in den Phasen 1 und 4 bis 8 von mir entworfen und von Dir fachlich abgenommen.

### 3.5 PDFs und E-Mail

Nach jeder Runde: Runden-PDF mit Name, Datum, Rundentitel, Punktedetail zu Quiz und Fällen (inklusive Vermerk über genutzte Hilfe- oder Lösungsbuttons), Bilanz der Runde, vollständigen Kachelinhalten als Lernunterlage und den Notizen der Studierenden.

Nach Runde 7: Gesamt-PDF mit Name, Gesamtpunktzahl, Rundenübersicht, Rang, Schlussbilanz und einem hervorgehobenen Versandhinweis: Das PDF ist per E-Mail an eberhard.steiner@uvm-institut.de zu senden. Ein Button öffnet einen vorbefüllten E-Mail-Entwurf (Betreff mit Name), das PDF muss manuell angehängt werden, worauf die App ausdrücklich hinweist. Notizen erscheinen im Gesamt-PDF nicht. Der Name wird beim Spielstart abgefragt und steht auf jedem PDF an erster Stelle.

## 4. Technische Architektur

Entschieden am 21.07.2026: reine Browser-App ohne Backend.

| Baustein | Entscheidung |
|---|---|
| Stack | React mit TypeScript, Vite, Tailwind CSS, jeweils aktuelle stabile Version |
| Routing | react-router mit HashRouter, Vite base "./", dadurch lauffähig unter jedem Pfad, auch unter /er |
| State | zustand mit persist-Middleware, localStorage, versionierter Schlüssel |
| PDF | jsPDF mit jspdf-autotable, clientseitig. Umlaute und Eurozeichen werden in Phase 0 getestet, Fallback ist die Schreibweise EUR |
| Inhalte | Reine Datenmodule in TypeScript (eine Datei je Lektion), strikt typisiert. Contentphasen liefern nur Daten, keinen neuen Code |
| Qualität | Vitest für Engines und Gates, eigenes Skript npm run validate für Contentregeln |
| Deployment Test | GitHub Actions baut bei jedem Push und veröffentlicht auf GitHub Pages (https://eberhardsteiner.github.io/er/) |
| Deployment Produktion | Inhalt von dist/ per FTP in das Verzeichnis /er auf uvm-akademie.de, keine Serverkonfiguration nötig |
| Datenschutz | Name und Spielstand bleiben im Browser, keine Übertragung an Server |

Der Content-Validator prüft je Lektion mindestens: genau sechs Kacheln, genau zehn Quizfragen mit je fünf Antworten und genau einer richtigen, Fallpunktsumme genau 80, Erklärungstext je Frage vorhanden, Hilfe- und Lösungstext je Fall vorhanden, Bilanz-Deltas balanciert, Kennwort definiert.

## 5. Design

Farbwelt Petrol und Amber auf hellem Grund: dunkles Petrol (etwa #0F4C5C) für Navigation und Primärflächen, Amber (etwa #F2A541) für Punkte und Erfolge, dazu Ampelfarben für richtig und falsch sowie neutrale Grautöne. Feinabstimmung in Phase 0. Typografie Inter oder vergleichbare Systemschrift. Gestaltungsprinzipien: kartenbasierte Kacheln, klare Fortschrittsanzeigen (Rundenkarten, Punktebadges, Fortschrittsring, Punktezähler), dezente Animationen bei Punktevergabe und Rundenabschluss, durchgängige Ikonografie (lucide-react). Desktop first, nutzbar ab Tabletbreite. UI-Sprache Deutsch mit österreichischen Varianten (Jänner). UI-Texte in Du-Form, kurz gehalten, ohne Gedankenstriche und ohne Floskeln.

## 6. Funktionsumfang

| Bereich | Funktionen |
|---|---|
| Start | Titel, Namenseingabe (Pflicht), Neues Spiel, Fortsetzen, Zu Runde springen (Kennwortdialog), dezenter Trainer-Login |
| Onboarding | Überspringbare Tour mit Mentorin Mag. Huber: Kacheln, Quiz, Fälle mit Hilfe- und Lösungsbuttons, Notizbuch, Bedienhilfe, Punkte und Kennwörter |
| Dashboard | Sieben Rundenkarten mit Status (gesperrt, offen, in Arbeit, abgeschlossen) und Punkten, Gesamtfortschritt, Gesamtpunktestand, Bilanzpanel |
| Lektion | Intro, Kachelgalerie (6), Quizrunner (Frage einzeln, Navigation, Übersicht, Abgabe mit Bestätigung), Fallrunner (Sachverhalt, Teilaufgaben, Warnmodale, Hilfe- und Lösungsbutton), Kennwort-Gate, Auswertung |
| Auswertung | Quizergebnis mit Erklärungen, Fallergebnisse mit Musterlösung, Punkte, Bilanzveränderung der Runde, PDF-Download, Weiter zur nächsten Runde |
| Abschluss | Gesamtauswertung mit Punkten je Runde, Rang, Schlussbilanz, Gesamt-PDF, E-Mail-Button mit Versandhinweis |
| Seitenleisten | Notizbuch (einklappbar, automatische Speicherung, Zuordnung je Runde, Zeichenzähler), Bedienhilfe (Kurzanleitung, Punkteregeln, Kennwortlogik, Neustart) |
| Trainer | Kennwortübersicht, freie Navigation, Direkteinstieg in Fälle, Spielstand zurücksetzen |
| Persistenz | Automatisches Speichern, Fortsetzen nach Neuladen, Zurücksetzen mit doppelter Bestätigung, versionierter Spielstand |

## 7. Phasenplan

Je Phase genau ein Mega-Prompt für Claude Code. Korrekturen laufen als kurzer Nachtragsprompt innerhalb derselben Phase, nicht als neue Phase.

| Phase | Inhalt | Lieferobjekt | Abnahmekriterien |
|---|---|---|---|
| 0 | Grundaufbau: Projekt, Design-System, alle Screens und Engines, Demo-Runde mit fachneutralen Platzhalterdaten, Validator, Tests, Pages-Deploy | Lauffähige App mit Demo-Runde | Demo-Runde vollständig durchspielbar inklusive Kennwort-Gate und beider PDFs, Trainer-Modus funktioniert, npm test und npm run validate grün, Pages-URL erreichbar |
| 1 | Story und Rahmentexte: Hintergrundgeschichte, Gründungsbilanz, Intros aller sieben Runden, endgültige Onboarding- und Bedienhilfetexte, Demo-Runde wird ausgeblendet | Erzählrahmen komplett | Alle Texte stilkonform und fachlich stimmig, sieben Runden sichtbar, R1 offen, Rest gesperrt |
| 2 | Runde 1 Grundlagen: 6 Kacheln, 10 Fragen, Fälle aus 1.1 bis 1.5 (UGB, § 189 ff., § 221 UGB nach RIS-Prüfung) | Contentpaket R1 | Fachliche Abnahme durch Dich, Validator grün, Tests grün, Runde durchspielbar |
| 3 | Runde 2 GoB: Kacheln, Quiz, Fälle aus 2.1 bis 2.5 | Contentpaket R2 | wie Phase 2 |
| 4 | Runde 3 Ansatz: Kacheln, Quiz, Fälle aus 3.1 bis 3.5, Start der Bilanz-Deltas ab dieser Runde | Contentpaket R3 | wie Phase 2, Bilanzinvariante grün |
| 5 | Runde 4 Bewertung: Kacheln, Quiz, Fälle aus Kapitel 4 (AK, HK, planmäßige Abschreibung, außerplanmäßige Abschreibung) | Contentpaket R4 | wie Phase 4 |
| 6 | Runde 5 Anlagevermögen: Kacheln, Quiz, Fälle aus Kapitel 5 | Contentpaket R5 | wie Phase 4 |
| 7 | Runde 6 Umlaufvermögen: Kacheln, Quiz, Fälle aus Kapitel 6 | Contentpaket R6 | wie Phase 4 |
| 8 | Runde 7 Rückstellungen: Kacheln, Quiz, Fälle aus 8.4 bis 8.9, Schlussbilanz, Übergang zur Gesamtauswertung | Contentpaket R7 | wie Phase 4, Schlussbilanz fachlich abgenommen |
| 9 | Feinschliff: Gesamtauswertung, PDF-Feinschliff, Spielstand-Export und -Import als Datei, Barrierefreiheit-Basics, Endabnahme, Produktions-Deployment nach uvm-akademie.de/er | Release 1.0 | Kompletter Durchlauf aller sieben Runden ohne Befund, Deployment-Anleitung getestet |

Inhaltliche Arbeitsteilung in den Phasen 2 bis 8: Ich extrahiere den Stoff aus Deinen Skripten, stelle die Übungsbuchfälle auf UGB um, füge sie in die Rahmengeschichte ein, entwerfe die Bilanzwirkungen und liefere alles ausformuliert im Mega-Prompt. Claude Code integriert nur die Datenmodule und ergänzt fehlende Anzeigelogik. So bleibt die fachliche Kontrolle bei uns und Claude Code erfindet keine Inhalte.

## 8. Arbeitsablauf je Phase

1. Vorbereitung einmalig: Diese Datei als docs/PRODUKTIONSPLAN.md in das Repository legen.
2. Ich liefere den Mega-Prompt der Phase als Datei.
3. Du öffnest Claude Code im Repository-Ordner (neue Unterhaltung je Phase) und übergibst den Prompt unverändert.
4. Claude Code implementiert, führt npm test und npm run validate aus, committet und pusht. Der Pages-Deploy läuft automatisch.
5. Du schickst mir die Pages-URL und Deine Anmerkungen, gern mit Screenshots. Bei Contentphasen prüfst Du die Fachlichkeit, ich prüfe gegen Plan und Abnahmekriterien.
6. Befunde fasse ich in einem Nachtragsprompt zusammen, danach folgt der Mega-Prompt der nächsten Phase.

## 9. Qualitätssicherung

Vier Sicherungsebenen: automatisierte Tests der Engines (Punkte, Gates, Bilanzinvariante, Persistenz), der Content-Validator als Pflichtlauf vor jedem Commit, meine Prüfung gegen Plan und Quelltexte je Phase und Deine fachliche Abnahme je Contentpaket. Für Rechtsangaben gilt: Jede Paragrafenangabe in Kacheln, Quiz, Fällen und Intros wird gegen Skript und RIS geprüft, der Prüfstand wird im jeweiligen Prompt datiert. Unsichere Angaben kommen nicht in die App.

## 10. Risiken und bewusste Entscheidungen

- Kennwörter liegen im Client und sind für technisch versierte Studierende auffindbar. Sie werden leicht verschleiert abgelegt. Für ein Planspiel ohne Prüfungscharakter akzeptiert.
- Der Spielstand ist gerätegebunden (localStorage). Ausgleich über die Sprungfunktion, in Phase 9 kommen Export und Import des Spielstands als Datei dazu.
- jsPDF und Sonderzeichen: Test in Phase 0, notfalls Schreibweise EUR statt Eurozeichen.
- Die Umstellung der Fälle von HGB auf UGB ist fachlich heikel. Absicherung über das Vier-Augen-Prinzip: Ich entwerfe mit dokumentierter RIS-Prüfung, Du nimmst jeden Fall fachlich ab.
- Öffentliches Repository: Inhalte sind einsehbar. Entscheidung über privat oder öffentlich liegt bei Dir, technisch ist beides gleichwertig.
