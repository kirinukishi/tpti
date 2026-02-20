export const colorMap: Record<string, string> = {
  "orange-500": "#f97316",
  "rose-500": "#f43f5e",
  "emerald-600": "#059669",
  "violet-500": "#8b5cf6",
  "amber-500": "#f59e0b",
  "pink-400": "#f472b6",
  "teal-600": "#0d9488",
  "indigo-400": "#818cf8",
  "blue-500": "#3b82f6",
  "sky-400": "#38bdf8",
  "cyan-600": "#0891b2",
  "purple-400": "#c084fc",
  "yellow-500": "#eab308",
  "lime-400": "#a3e635",
  "slate-500": "#64748b",
  "stone-400": "#a8a29e",
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
