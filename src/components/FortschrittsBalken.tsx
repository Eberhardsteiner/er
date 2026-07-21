interface FortschrittsBalkenProps {
  prozent: number;
  label: string;
}

export function FortschrittsBalken({ prozent, label }: FortschrittsBalkenProps) {
  const begrenzt = Math.max(0, Math.min(100, prozent));
  return (
    <div
      className="h-2 w-full overflow-hidden rounded-full bg-petrol-100"
      role="progressbar"
      aria-label={label}
      aria-valuenow={Math.round(begrenzt)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-amber-500"
        style={{ width: `${begrenzt}%`, transition: 'width 0.4s ease' }}
      />
    </div>
  );
}
