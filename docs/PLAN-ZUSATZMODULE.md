# Planerweiterung: Trainerfreischaltbare Zusatzmodule

Stand 21.07.2026. Ergänzung zu docs/PRODUKTIONSPLAN.md, dort als Abschnitt 11 einzufügen. Auftrag: Der Trainer kann vier optionale Module freischalten (Eigenkapital, Verbindlichkeiten, Rechnungsabgrenzungsposten, GuV), die korrekt mit der Bilanz arbeiten.

## 1. Konzept

Die vier Zusatzmodule sind vollwertige Lerneinheiten im bekannten Format (Intro, 6 Kacheln, 10 Quizfragen mit Gleichverteilung, Fälle mit 80 Punkten, Kennwort-Gate, Auswertung, Modul-PDF mit Notizen). Sie spielen NACH der Schlussbilanz als Vertiefung zum 1. Jänner des Folgejahres. Didaktischer Anker ist die Bilanzidentität (§ 201 Abs 2 Z 6 UGB): Die Eröffnungsbilanz des neuen Jahres ist die Schlussbilanz des Spieljahres, und genau auf ihr arbeiten die Module.

| Modul | Thema | Quellen | Kennwort |
|---|---|---|---|
| Z1 | Eigenkapital | Übungsbuch Kap. 7, Skript fehlt (siehe Abschnitt 5) | GoldenShare |
| Z2 | Verbindlichkeiten | Teil G, Übungsbuch 8.1 bis 8.3 | IronBridge |
| Z3 | Rechnungsabgrenzungsposten | Übungsbuch Kap. 9, Skript fehlt | TimeGate |
| Z4 | GuV | Übungsbuch Kap. 11, Skript fehlt | ClearWater |

## 2. Freischaltung und Rollen

Die Freischaltung läuft wie die Rundenkennwörter über den Trainer: Auf dem Dashboard erscheint nach der R7-Auswertung der Bereich „Zusatzmodule" mit vier gesperrten Karten. Studierende schalten ein Modul mit dem vom Trainer genannten Modul-Kennwort frei. Der Trainer sieht im Cockpit die vier Modul-Kennwörter, kann jedes Modul lokal sofort aktivieren und wie gewohnt direkt zu den Fällen springen. Module sind einzeln und in beliebiger Kombination und Reihenfolge spielbar.

## 3. Punktelogik

Die Kernwertung bleibt unangetastet: 700 Punkte, Rang wie gehabt. Jedes Zusatzmodul bringt 100 Zusatzpunkte (20 Quiz, 80 Fälle, Hilfe- und Lösungsregeln unverändert), die getrennt geführt werden. Gesamtauswertung und Gesamt-PDF zeigen zusätzlich eine Zeile „Zusatzmodule: x von y Punkten (n von 4 gespielt)", ohne Einfluss auf den Rang. Modul-PDFs entsprechen den Runden-PDFs (mit Kachelinhalten und Notizen), das Gesamt-PDF bleibt ohne Notizen.

## 4. Bilanz- und GuV-Verdrahtung

Die Kernkette (Gründungsbilanz bis Schlussbilanz 719.305) bleibt unverändert und trainerunabhängig, sonst hinge der geprüfte Spielstand von Freischaltungen ab. Die Module arbeiten auf einer Vertiefungsbilanz: Schlussbilanz plus die Deltas der aktiven Module. Damit jede Kombination aufgeht, gelten drei Regeln, die der Validator erzwingt: Erstens ist jedes Modul-Delta für sich balanciert (auf Basis der Schlussbilanz). Zweitens verändern verschiedene Module niemals denselben Posten und legen keine gleichnamigen Posten an (Disjunktheit), dadurch sind die Deltas kommutativ. Drittens werden Modul-Deltas nie in die Kernkette gerechnet.

Inhaltliche Skizze der Deltas (Feinausarbeitung in den Contentphasen, jeweils mit RIS-Prüfung): Z1 bucht eine Kapitalerhöhung mit Aufgeld zum 1. Jänner (Bank, Stammkapital, Kapitalrücklage nach § 229 UGB) und behandelt Rücklagen und Ergebnisverwendung. Z2 gliedert die 600.000 Bankdarlehen nach Restlaufzeiten, behandelt Erfüllungsbetrag (§ 211 UGB) und tilgt eine Tranche. Z3 bucht eine im Jänner fällige, noch im Dezember bezahlte Vorauszahlung als aktiven Rechnungsabgrenzungsposten (§ 198 Abs 5 UGB, bereits volltextverifiziert) samt Gegenstück auf der Passivseite (§ 198 Abs 6 UGB).

Z4 (GuV) bucht nichts, sondern leitet die komplette Jahres-GuV des Spieljahres aus den bereits gespielten Zahlen ab und stimmt sie gegen das Bilanzergebnis ab. Das Zahlengerüst geht exakt auf: Umsatzerlöse 180.000, Materialaufwand 48.000, Personalaufwand 30.000, Gemeinkosten der Fertigung 18.000, Entwicklungsaufwand 20.000, Abschreibungen 35.695, Vorratsabwertung 3.000, Forderungswertberichtigungen 6.000, Rückstellungsaufwand 16.600, Ergebnis 2.705 gleich dem Bilanzgewinn der Schlussbilanz. Die Bestandsveränderung der fertigen Erzeugnisse ist im Spieljahr null (96.000 produziert, 96.000 verkauft). Die App braucht dafür eine GuV-Anzeige in Staffelform und einen GuV-Block im Modul-PDF.

## 5. Quellenlage und Bitte

Für Z2 liegt Teil G vor. Für Eigenkapital, Rechnungsabgrenzungsposten und GuV habe ich keine Skripten, nur das HGB-Übungsbuch. Bitte liefere die Textskripten zu diesen Themen nach, falls vorhanden (vermutlich Teile F, I und J Deiner Reihe). Sonst baue ich die Kacheln aus Übungsbuch plus UGB-Volltexten (§ 224 Abs 3 A, § 229, § 231), was etwas mehr fachliche Abnahmearbeit für Dich bedeutet.

## 6. Phasen

| Phase | Inhalt | Abnahmekriterien |
|---|---|---|
| Z0 | Technisches Fundament: Modulmechanik, Freischaltung, Vertiefungsbilanz, GuV-Anzeige, Punkte- und PDF-Erweiterung, Validator-Regeln, leere Modul-Shells | Trainer kann Module freischalten und sieht Shells, Studierende sehen den gesperrten Bereich nach R7, Kern-Kette und alle bisherigen Kontrollwerte unverändert grün |
| Z1 bis Z4 | Je ein Contentpaket (Reihenfolge nach Bedarf, Z2 zuerst möglich, da Quellen komplett) | Wie Kernrunden: fachliche Abnahme, Validator grün, Modul durchspielbar, Vertiefungsbilanz und Kombinationen korrekt |

Empfohlene Einordnung: Z0 jetzt, danach Phase 9 (Feinschliff deckt dann Kern und Modulmechanik gemeinsam ab), die Contentphasen Z1 bis Z4 flexibel danach.
