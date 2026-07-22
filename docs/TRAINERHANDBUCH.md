# Trainerhandbuch AlpenRad, das Bilanz-Planspiel

Stand v1.0.0, Juli 2026. Dieses Handbuch richtet sich an Trainerinnen und Trainer der Lehrveranstaltung Externes Rechnungswesen. Es enthält alle Kennwörter und gehört deshalb nicht in die Hände der Studierenden.

## 1. Das Spiel in einem Absatz

Die Studierenden begleiten die fiktive AlpenRad GmbH, eine E-Bike-Manufaktur in Graz, durch ihr erstes Geschäftsjahr. Sieben Runden führen von den Grundlagen der Rechnungslegung bis zur Schlussbilanz mit Rückstellungen, jede Runde besteht aus sechs Lernkacheln, einem Quiz mit zehn Fragen und drei bis fünf Fällen. Ab Runde 3 verändern die Fälle eine Musterbilanz, die sich deterministisch entlang der Musterlösungen entwickelt (Gründungsbilanz 250.000, Schlussbilanz 719.305). Nach Runde 7 können vier Zusatzmodule freigeschaltet werden, die auf einer Vertiefungsbilanz zum 1. Jänner des Folgejahres aufsetzen. Alles läuft im Browser, es gibt kein Backend und keine Datenübertragung.

## 2. Spielablauf aus Trainersicht

1. Die Studierenden starten auf der Startseite, geben ihren Namen ein und durchlaufen ein kurzes Onboarding mit der Mentorin Mag. Sophie Huber.
2. Runde 1 ist sofort offen. Die Studierenden lesen die sechs Kacheln (Pflicht vor dem Quiz), geben das Quiz ab und bearbeiten dann die Fälle.
3. Sind alle Fälle einer Runde abgegeben, erscheint das Kennwort-Gate. Du gibst das Kennwort der Runde in der Präsenzeinheit bekannt. Die Eingabe schaltet die Auswertung frei und öffnet die Folgerunde.
4. In der Auswertung sehen die Studierenden Quiz- und Fallergebnisse mit Musterlösungen, die Bilanz der Runde und laden bei Bedarf das Runden-PDF.
5. Nach der Auswertung von Runde 7 stehen die Gesamtauswertung, das Gesamt-PDF und der Zusatzmodul-Bereich offen.
6. Das Gesamt-PDF senden die Studierenden per E-Mail an eberhard.steiner@uvm-institut.de. Ein Button öffnet einen vorbefüllten Entwurf, das PDF muss manuell angehängt werden, die App weist ausdrücklich darauf hin.

Wer eine Runde verpasst hat, nutzt auf der Startseite die Sprungfunktion: Das Kennwort der zuletzt ausgewerteten Runde startet direkt in der Folgerunde. Übersprungene Runden zählen 0 Punkte und werden in den PDFs ausgewiesen.

## 3. Kennworttabelle

| Einheit | Kennwort |
|---|---|
| R0 Probelauf (nur Trainer) | TestDrive |
| Runde 1 Grundlagen | GreenField |
| Runde 2 GoB | GoldenRule |
| Runde 3 Ansatz | CornerStone |
| Runde 4 Bewertung | FairValue |
| Runde 5 Anlagevermögen | IronWorks |
| Runde 6 Umlaufvermögen | QuickSilver |
| Runde 7 Rückstellungen | SafeHarbor |
| Modul Z1 Eigenkapital | GoldenShare |
| Modul Z2 Verbindlichkeiten | IronBridge |
| Modul Z3 Rechnungsabgrenzung | TimeGate |
| Modul Z4 GuV | ClearWater |
| Trainerzugang | Control#99 |

Der Kennwortvergleich ignoriert Groß- und Kleinschreibung sowie umgebende Leerzeichen. Die Kennwörter liegen im Client nur leicht verschleiert, das ist für ein Planspiel ohne Prüfungscharakter eine bewusste Entscheidung.

## 4. Trainer-Cockpit

Anmeldung über den dezenten Link Trainerzugang auf der Startseite mit Control#99. Danach zeigt eine amberfarbene Leiste den Trainermodus an. Das Cockpit bietet:

- Kennwortübersicht über alle Runden, Module und den Trainerzugang.
- Freie Navigation: jede Runde lässt sich unabhängig vom Fortschritt öffnen.
- Direkteinstieg in die Fälle jeder Runde und jedes Moduls. Kacheln- und Quizpflicht entfallen, das Quiz zählt dann 0 Punkte und wird als nicht absolviert vermerkt.
- Aktivieren und Deaktivieren der Zusatzmodule ohne Kennwort (wirkt nur lokal auf Deinem Gerät).
- Spielstand sichern und laden (siehe Abschnitt 8).
- Spielstand zurücksetzen mit doppelter Bestätigung.
- Die Demo-Runde R0 (Probelauf) ist nur im Trainermodus sichtbar und zählt nicht zur Wertung.

## 5. Punktesystem

- Je Runde 100 Punkte: 20 aus dem Quiz (zehn Fragen je 2 Punkte), 80 aus den Fällen.
- Kernwertung: 700 Punkte aus den Runden 1 bis 7. Nur sie bestimmt den Rang: ab 90 Prozent Bilanzmeister, ab 75 Prozent Abschlussprofi, ab 50 Prozent Solide Basis, darunter Trainingsrunde empfohlen.
- Zusatzmodule bringen je 100 Zusatzpunkte, maximal 400. Zusatzpunkte laufen getrennt und haben keinen Einfluss auf den Rang.
- Hilfe-Button je Fall: halbiert die erreichbaren Punkte dieses Falls (kaufmännisch gerundet). Lösung-Button: setzt den Fall auf 0 Punkte. Beide warnen vor der Ausführung, beide werden in Auswertung und PDFs vermerkt.
- Zahleneingaben akzeptieren österreichisches Format (Komma als Dezimaltrennzeichen, Tausenderpunkt erlaubt) mit einer Toleranz je Teilaufgabe.

## 6. PDF-Typen

| PDF | Inhalt | Wann |
|---|---|---|
| Runden-PDF | Name, Datum, Punktedetail zu Quiz und Fällen samt Hilfe- und Lösungsvermerken, Bilanz der Runde, vollständige Kachelinhalte als Lernunterlage, Notizen der Runde | nach jeder Rundenauswertung |
| Modul-PDF | wie Runden-PDF, mit Vertiefungsbilanz und bei Z4 der GuV-Staffel | nach jeder Modulauswertung |
| Gesamt-PDF | Name an erster Stelle, Gesamtpunkte, Rang, Rundentabelle, gegebenenfalls Zusatzmodul-Block, Schlussbilanz, umrandeter Versandhinweis an eberhard.steiner@uvm-institut.de. Keine Notizen | nach Runde 7 |

## 7. Zusatzmodule

Der Zusatzmodul-Bereich erscheint für Studierende nach der Auswertung von Runde 7 auf dem Dashboard. Freischaltung je Modul mit dem Kennwort aus der Tabelle, das Du nur für die Module bekanntgibst, die Du einsetzen willst. Alle vier Module setzen auf der Vertiefungsbilanz zum 1. Jänner auf (Eröffnungsbilanz gleich Schlussbilanz 719.305) und sind in beliebiger Reihenfolge und Auswahl spielbar:

| Modul | Thema | Wirkung auf die Vertiefungsbilanz |
|---|---|---|
| Z1 Eigenkapital | Kapitalerhöhung mit Aufgeld | plus 60.000 (Bilanzsumme 779.305) |
| Z2 Verbindlichkeiten | Tilgung und erhaltene Anzahlung | minus 15.000 (704.305) |
| Z3 Rechnungsabgrenzung | aktive und passive RAP | plus 1.500 (720.805) |
| Z4 GuV | Jahres-Staffel nach dem GKV | keine Buchung, verprobt die GuV auf den Bilanzgewinn 2.705 |

Mit allen vier Modulen beträgt die Vertiefungsbilanzsumme 765.805 bei einem Bankguthaben von 132.000.

## 8. Spielstand sichern und laden

Auf dem Dashboard und im Trainer-Cockpit gibt es die Buttons Spielstand sichern und Spielstand laden. Sichern lädt eine JSON-Datei herunter (alpenrad-spielstand-Name-Datum.json), Laden ersetzt nach einer Sicherheitsabfrage den aktuellen Stand. Damit nehmen Studierende ihren Spielstand auf ein anderes Gerät oder in einen anderen Browser mit, etwa vom Hörsaalrechner nach Hause. Ungültige Dateien werden abgewiesen, ohne den aktuellen Stand zu verändern. Falls der Browser nichts dauerhaft speichern kann (privater Modus), warnt ein Banner und der Export ist der empfohlene Weg.

## 9. Empfehlung zum Rundenrhythmus

Bewährt hat sich eine Runde je Vorlesungswoche: Die Studierenden bearbeiten Kacheln, Quiz und Fälle als Vorbereitung oder in der Übungsphase, Du besprichst die Fälle in der Präsenzeinheit und gibst am Ende das Kennwort bekannt. Runde 1 und 2 sind eigenständige Übungsrunden, ab Runde 3 lohnt der wöchentliche Blick auf die fortgeschriebene Musterbilanz als roter Faden. Für die Zusatzmodule bieten sich die letzten Einheiten oder die Prüfungsvorbereitung an, Z4 (GuV) eignet sich als Abschluss, weil es die Ergebnisentstehung des gesamten Spieljahres erklärt.

## 10. Support und Contentpflege

Alle fachlichen Inhalte liegen als Datenmodule in src/content (Runden in lektionen, Module in module). Nach jeder Änderung npm run validate ausführen, der Validator prüft Struktur, Antwortverteilung, Punktesummen, Bilanzkette und GuV-Verprobung. Details zur Zahlenwelt stehen in docs/KONSISTENZ.md.
