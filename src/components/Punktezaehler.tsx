import { useEffect, useState } from 'react';

interface PunktezaehlerProps {
  ziel: number;
  dauerMs?: number;
}

// Animierter Punktezaehler fuer die Auswertung.
export function Punktezaehler({ ziel, dauerMs = 900 }: PunktezaehlerProps) {
  const [wert, setWert] = useState(0);

  useEffect(() => {
    // Reduzierte Bewegung: Endwert sofort zeigen, keine Zaehlanimation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setWert(ziel);
      return;
    }
    let laeuft = true;
    const start = performance.now();
    function schritt(jetzt: number) {
      if (!laeuft) return;
      const anteil = Math.min(1, (jetzt - start) / dauerMs);
      setWert(Math.round(ziel * anteil));
      if (anteil < 1) requestAnimationFrame(schritt);
    }
    requestAnimationFrame(schritt);
    // Absicherung: In gedrosselten Tabs feuert requestAnimationFrame nicht
    // zuverlaessig, der Endwert wird deshalb zusaetzlich per Timeout gesetzt.
    const timer = window.setTimeout(() => {
      if (laeuft) setWert(ziel);
    }, dauerMs + 100);
    return () => {
      laeuft = false;
      window.clearTimeout(timer);
    };
  }, [ziel, dauerMs]);

  return <span>{wert}</span>;
}
