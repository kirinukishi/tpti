const axisLabels: Record<string, { label: string; active: boolean }> = {
  E: { label: "Explorer 冒険派", active: true },
  C: { label: "Classic 定番派", active: false },
  P: { label: "Planner 計画派", active: true },
  S: { label: "Spontaneous 直感派", active: false },
  O: { label: "Open 社交派", active: true },
  I: { label: "Independent 独立派", active: false },
  A: { label: "Active 行動派", active: true },
  R: { label: "Relaxed まったり派", active: false },
};

const activeColor = "#3b82f6";
const inactiveColor = "#94a3b8";

interface AxisBadgeProps {
  typeId: string;
}

export default function AxisBadge({ typeId }: AxisBadgeProps) {
  const letters = typeId.split("");

  return (
    <div className="flex flex-wrap gap-2">
      {letters.map((letter, i) => {
        const axis = axisLabels[letter];
        if (!axis) return null;
        const color = axis.active ? activeColor : inactiveColor;

        return (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium text-white"
            style={{ backgroundColor: color }}
          >
            <span className="font-bold">{letter}</span>
            <span className="text-xs opacity-90">{axis.label}</span>
          </span>
        );
      })}
    </div>
  );
}
