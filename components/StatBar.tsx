interface StatBarProps {
  label: string;
  value: number;
}

export default function StatBar({ label, value }: StatBarProps) {
  return (
    <div className="mb-2">
      <p className="text-sm">{label}: {value}/10</p>
      <div className="w-full bg-pixel-gray h-4 rounded">
        <div 
          className="bg-blue-500 h-full rounded" 
          style={{ width: `${(value / 10) * 100}%` }}
        />
      </div>
    </div>
  );
}