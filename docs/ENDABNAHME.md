# Endabnahme-Protokoll AlpenRad v1.0.0

Datum: 22. Juli 2026. Geprüfter Stand: Commit c07bcf7 (Phase 9 Feinschliff) zuzüglich zweier während der Endabnahme behobener Befunde (siehe unten), gemeinsam getaggt als v1.0.0. Durchlauf im Produktionsbuild (vite preview, dist/), Browser Chromium. Automatisierte Sicherung vorab: npm test (85 Tests inklusive Goldener Pfad) und npm run validate ohne Befund.

Die Eingaben wurden über die DOM-Oberfläche der App gesetzt (Kachel-Klicks, Radio-Buttons, Zahlenfelder, Warnmodale, Kennwort-Gates), die Musterlösungen stammen aus den Content-Datenmodulen. Punktestände und Bilanzen wurden nach jedem Schritt gegen die Kontrollwerte aus docs/KONSISTENZ.md geprüft.

## Häkchenliste

1. [x] **Onboarding und Namenserfassung.** Startseite mit Namensfeld (Mindestlänge geprüft), Warnhinweis beim Überschreiben eines bestehenden Spielstands, Onboarding-Tour mit Mag. Sophie Huber in sechs Schritten vollständig durchlaufen, Abschluss führt aufs Dashboard („Servus Anna Endabnahme!").
2. [x] **R0-Demo mit TestDrive.** Im Trainermodus gespielt (R0 ist für Studierende unsichtbar): sechs Kacheln, Quiz 20 von 20, Gate akzeptiert „  TESTDRIVE  " normalisiert und weist ein falsches Kennwort mit role=alert ab.
3. [x] **Runden 1 bis 7 mit Musterlösungen.** Jede Runde 100 von 100 Punkten. Bilanz nach der Runde traf jeden Kontrollwert: R1/R2 250.000 (unverändert), R3 290.000, R4 740.000, R5 704.305, R6 719.305, R7 Schlussbilanz 719.305. Alle sieben Runden-PDFs ausgelöst.
4. [x] **Hilfe halbiert, Lösung nullt.** In der Wegwerf-Runde R0: Fall F0-1 mit Hilfe und vollständig richtigen Antworten ergab 20 von 40 Punkten (Deckelung), Fall F0-2 mit Lösung und richtigen Antworten ergab 0 Punkte. Beide Warnmodale erschienen vor der Ausführung, beide Vermerke stehen in der Auswertung. Danach wurde der Spielstand für den Protokolldurchlauf über „Neues Spiel" zurückgesetzt.
5. [x] **Gesamtauswertung.** 700 von 700 Punkten, Rang Bilanzmeister, Schlussbilanz 719.305, Gesamt-PDF ausgelöst (Name an erster Stelle, keine Notizen), Versandhinweis auf eberhard.steiner@uvm-institut.de und Button „E-Mail-Entwurf öffnen" vorhanden.
6. [x] **Zusatzmodule in vertauschter Reihenfolge Z3, Z1, Z4, Z2.** Jede Freischaltung per Kennwortdialog, jedes Modul 100 Zusatzpunkte. Vertiefungsbilanz nach jedem Schritt korrekt: Z3 720.805 (Bank 87.000), plus Z1 780.805 (Bank 147.000), Z4 unverändert (bucht nichts), plus Z2 Endstand 765.805 beidseitig mit Bank 132.000. Z4-Auswertung zeigt die GuV-Staffel bis „26. Bilanzgewinn 2.705" samt Hinweis statt einer Bilanz. Dashboard und Gesamtauswertung zeigen „400 von 400, 4 von 4 Modulen gespielt". Alle vier Modul-PDFs ausgelöst.
7. [x] **Export-Import-Roundtrip.** „Spielstand sichern" erzeugte alpenrad-spielstand-Anna_Endabnahme-2026-07-22.json mit Feld exportiertAm. Danach frisches Spiel als zweiter Stand („Bernd Zweitgerät", 0 Punkte), Import der Datei: Sicherheitsabfrage erschien, danach war der komplette Stand zurück (Name, 700 Kernpunkte, 400 Zusatzpunkte, Freischaltreihenfolge). Eine absichtlich defekte Datei wurde mit klarer Meldung abgewiesen, ohne den aktuellen Stand zu verändern. Anpassung: Da die Testumgebung nur ein Browserprofil bietet, wurde das zweite Profil durch einen frischen Spielstand im selben Browser simuliert. Der Datenweg (Datei raus, Datei rein) ist identisch.
8. [x] **Trainermodus.** Anmeldung mit „  control#99  " (normalisiert), Kennworttabelle mit allen 13 Kennwörtern, Direkteinstieg in die Fälle (Quiz zählt 0 und wird vermerkt), Zusatzmodul Aktivieren und Deaktivieren, Trainer verlassen über Abmelden.
9. [x] **Tastatur-Stichprobe R1.** Rundenkarte per Enter geöffnet (tabIndex 0, role button, sichtbarer 2-px-Fokusring), Kachel per Enter und per Leertaste geöffnet, Fokus sprang in das Modal, Esc schloss es und der Fokus kehrte zur Kachel zurück. Quiz- und Fallantworten sind native Radio-Buttons und Textfelder mit verbundenem Label. Anmerkung: Die Kachel-Aktivierung wurde über Tastaturereignisse am fokussierten Element geprüft, weil die Testumgebung physische Tastendrücke nur unzuverlässig weiterreicht.
10. [x] **Robustheit und Umgebung.** Browserkonsole über den gesamten Durchlauf ohne Fehler und ohne Warnungen. Kein horizontales Scrollen bei 768 px (Tablet) und 853 px (entspricht 150 Prozent Zoom auf 1280). Unbekannte Route leitet aufs Dashboard beziehungsweise zum Start. Produktionsbuild aus einem Unterverzeichnis getestet (Static-Server, Pfad /er/): App lädt und startet vollständig, alle Assets relativ.
11. [x] **Info-Panel.** „Über dieses Planspiel" zeigt Version 1.0.0, Copyright, Rechtsstand Juli 2026 und Kontakt.

## Befunde und Behebung

Zwei Befunde wurden während der Endabnahme gefunden, sofort behoben und im selben Durchlauf erneut geprüft:

1. **Doppelte Eingabefeld-Ids bei ähnlichen Fragen.** ZahlFeld leitete die Input-Id aus den ersten Zeichen des Labels ab. Bei Fall FZ4-2 (zwei Fragen, die gleich beginnen) kollidierten die Ids, das zweite Label zeigte auf das erste Feld. Behoben: Teilaufgaben-Eingaben tragen jetzt eine eindeutige Id aus Fall- und Teilaufgaben-Id (src/features/lektion/FaelleAnsicht.tsx).
2. **Stufenanzeige klebte beim direkten Einheitenwechsel.** Beim Wechsel zwischen zwei Runden ohne Seitenneuaufbau (Trainer-Navigation, Browser-Zurück) blieb die zuletzt aktive Stufe stehen, eine frische Runde konnte so die Fälle-Ansicht zeigen. Behoben: Die Stufe springt beim Einheitenwechsel auf die zum Spielstand passende Anfangsstufe zurück (src/features/lektion/LektionSeite.tsx).

## Ergebnis

Alle Punkte des Endabnahme-Protokolls sind erfüllt, keine offenen Befunde. Release v1.0.0 freigegeben.

## Nachträge

Hotfix v1.0.1 (22. Juli 2026): Fokusverlust in Modals mit Eingabefeld behoben (Fokusfalle lief bei jedem Rerender). Regressionstest ergänzt. Manuell nachgeprüft: flüssiges Tippen in allen drei Kennwort-Dialogen (Modul-Freischaltung, Rundensprung, Trainerzugang), Tab-Zirkulation, Esc und Fokusrückkehr unverändert intakt, WarnModal-Strecke für Hilfe und Lösung funktioniert, Konsole ohne Einträge.
