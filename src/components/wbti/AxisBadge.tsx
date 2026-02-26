const axisLabels: Record<string, { label: string; active: boolean }> = {
  E: { label: "Experience 体験派", active: true },
  P: { label: "Product モノ派", active: false },
  S: { label: "Small 少人数派", active: true },
  W: { label: "Wide 広く派", active: false },
  F: { label: "Front 前に出る派", active: true },
  B: { label: "Behind 裏方派", active: false },
  T: { label: "Thanks ありがとう派", active: true },
  A: { label: "Amazing すごい派", active: false },
};

const activeColor = "#d97706";
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
