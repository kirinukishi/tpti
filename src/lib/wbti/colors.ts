export const colorMap: Record<string, string> = {
  "amber-500": "#f59e0b",
  "orange-500": "#f97316",
  "rose-400": "#fb7185",
  "violet-500": "#8b5cf6",
  "pink-400": "#f472b6",
  "red-500": "#ef4444",
  "slate-500": "#64748b",
  "blue-500": "#3b82f6",
  "emerald-500": "#10b981",
  "teal-500": "#14b8a6",
  "indigo-400": "#818cf8",
  "cyan-600": "#0891b2",
  "lime-500": "#84cc16",
  "purple-500": "#a855f7",
  "stone-500": "#78716c",
  "yellow-600": "#ca8a04",
};

export function getTypeColor(color: string): string {
  return colorMap[color] ?? "#6b7280";
}

export function getTypeColorWithOpacity(color: string, opacity: number): string {
  const hex = getTypeColor(color);
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
