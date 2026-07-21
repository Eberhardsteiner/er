import { describe, expect, it } from 'vitest';
import {
  kennwortFuerRunde,
  pruefeKennwort,
  pruefeTrainerKennwort,
  sprungziel,
  trainerKennwort,
} from './kennwort';

describe('Kennwoerter', () => {
  it('dekodiert alle Rundenkennwoerter korrekt', () => {
    expect(kennwortFuerRunde('R0')).toBe('TestDrive');
    expect(kennwortFuerRunde('R1')).toBe('GreenField');
    expect(kennwortFuerRunde('R2')).toBe('GoldenRule');
    expect(kennwortFuerRunde('R3')).toBe('CornerStone');
    expect(kennwortFuerRunde('R4')).toBe('FairValue');
    expect(kennwortFuerRunde('R5')).toBe('IronWorks');
    expect(kennwortFuerRunde('R6')).toBe('QuickSilver');
    expect(kennwortFuerRunde('R7')).toBe('SafeHarbor');
    expect(trainerKennwort()).toBe('Control#99');
  });

  it('vergleicht normalisiert mit trim und Kleinschreibung', () => {
    expect(pruefeKennwort('R0', 'TestDrive')).toBe(true);
    expect(pruefeKennwort('R0', '  testdrive  ')).toBe(true);
    expect(pruefeKennwort('R0', 'TESTDRIVE')).toBe(true);
  });

  it('lehnt Falscheingaben ab', () => {
    expect(pruefeKennwort('R0', 'TestDriver')).toBe(false);
    expect(pruefeKennwort('R0', '')).toBe(false);
    expect(pruefeKennwort('R1', 'TestDrive')).toBe(false);
  });

  it('behandelt den Trainercode gleich', () => {
    expect(pruefeTrainerKennwort('Control#99')).toBe(true);
    expect(pruefeTrainerKennwort(' control#99 ')).toBe(true);
    expect(pruefeTrainerKennwort('Control99')).toBe(false);
  });
});

describe('Sprunglogik', () => {
  it('startet mit dem Kennwort von Runde n in Runde n+1', () => {
    expect(sprungziel('TestDrive')).toBe('R1');
    expect(sprungziel('GreenField')).toBe('R2');
    expect(sprungziel('quicksilver')).toBe('R7');
  });

  it('liefert null nach der letzten Runde und bei Falscheingabe', () => {
    expect(sprungziel('SafeHarbor')).toBeNull();
    expect(sprungziel('falsch')).toBeNull();
  });
});
