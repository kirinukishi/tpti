import type { Locale } from "../i18n/LocaleProvider";

const axisLabelsJa: Record<string, { label: string; active: boolean }> = {
  E: { label: "Explorer 冒険派", active: true },
  C: { label: "Classic 定番派", active: false },
  P: { label: "Planner 計画派", active: true },
  S: { label: "Spontaneous 直感派", active: false },
  O: { label: "Open 社交派", active: true },
  I: { label: "Independent 独立派", active: false },
  A: { label: "Active 行動派", active: true },
  R: { label: "Relaxed まったり派", active: false },
};

const axisLabelsEn: Record<string, { label: string; active: boolean }> = {
  E: { label: "Explorer", active: true },
  C: { label: "Classic", active: false },
  P: { label: "Planner", active: true },
  S: { label: "Spontaneous", active: false },
  O: { label: "Open", active: true },
  I: { label: "Independent", active: false },
  A: { label: "Active", active: true },
  R: { label: "Relaxed", active: false },
};

const activeColor = "#3b82f6";
const inactiveColor = "#94a3b8";

interface AxisBadgeProps {
  typeId: string;
  locale?: Locale;
}

export default function AxisBadge({ typeId, locale = "ja" }: AxisBadgeProps) {
  const letters = typeId.split("");
  const labels = locale === "ja" ? axisLabelsJa : axisLabelsEn;

  return (
    <div className="flex flex-wrap gap-2">
      {letters.map((letter, i) => {
        const axis = labels[letter];
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
