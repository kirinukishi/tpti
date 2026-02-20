import { TravelType } from "../data/types";
import { getTypeColor, getTypeColorWithOpacity } from "../lib/colors";

interface TravelTypeCardProps {
  type: TravelType;
}

export function TravelTypeCard({ type }: TravelTypeCardProps) {
  const color = getTypeColor(type.color);
  const bgColor = getTypeColorWithOpacity(type.color, 0.1);

  return (
    <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-100 transition-all duration-300">
      <div
        className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 overflow-hidden border-2"
        style={{ backgroundColor: bgColor, borderColor: getTypeColorWithOpacity(type.color, 0.2) }}
      >
        <img
          src="/images/tippi.jpg"
          alt={type.name}
          className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
        />
      </div>
      <div className="text-sm font-bold text-orange-600 mb-2 uppercase tracking-widest">
        {type.id}
      </div>
      <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
        {type.name}
      </h3>
      <p className="text-gray-500 font-medium mb-4 leading-snug">
        「{type.catchCopy}」
      </p>
      <div className="pt-4 border-t border-gray-50">
        <span className="text-sm font-bold text-gray-400">
          適性軸: {type.id.split("").join(" / ")}
        </span>
      </div>
    </div>
  );
}
