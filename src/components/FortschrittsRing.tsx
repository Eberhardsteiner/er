interface FortschrittsRingProps {
  prozent: number;
  label: string;
  groesse?: number;
}

// Kreisfoermige Fortschrittsanzeige auf SVG-Basis.
export function FortschrittsRing({ prozent, label, groesse = 72 }: FortschrittsRingProps) {
  const begrenzt = Math.max(0, Math.min(100, prozent));
  const radius = 30;
  const umfang = 2 * Math.PI * radius;
  const offset = umfang * (1 - begrenzt / 100);

  return (
    <div
      className="relative inline-flex items-center justify-center"
      role="img"
      aria-label={`${label}: ${Math.round(begrenzt)} Prozent`}
    >
      <svg width={groesse} height={groesse} viewBox="0 0 72 72" aria-hidden="true">
        <circle cx="36" cy="36" r={radius} fill="none" stroke="#e3eef1" strokeWidth="7" />
        <circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke="#f2a541"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={umfang}
          strokeDashoffset={offset}
          transform="rotate(-90 36 36)"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      <span className="absolute text-xs font-semibold text-petrol-900">
        {Math.round(begrenzt)}%
      </span>
    </div>
  );
}
