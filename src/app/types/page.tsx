import Link from "next/link";
import { travelTypes } from "../../data/travelTypes";
import { TravelTypeID } from "../../data/types";
import { getTypeColor, getTypeColorWithOpacity } from "../../lib/colors";

export const metadata = {
  title: "16の旅タイプ一覧 | TPTI",
  description:
    "TPTI（ティプティ）の16種類の旅行タイプを一覧で紹介。冒険派から定番派まで、あなたの旅のスタイルを見つけよう。",
};

const groups = [
  {
    name: "Explorer × Planner",
    label: "冒険×計画派",
    description:
      "穴場を見つけ出し、綿密な計画で攻略する。冒険心と段取り力を兼ね備えたグループ。",
    types: ["EPOA", "EPOR", "EPIA", "EPIR"] as TravelTypeID[],
    color: "#f97316",
  },
  {
    name: "Explorer × Spontaneous",
    label: "冒険×直感派",
    description:
      "未知の場所に飛び込み、流れに身を任せる。自由と冒険を愛するグループ。",
    types: ["ESOA", "ESOR", "ESIA", "ESIR"] as TravelTypeID[],
    color: "#f43f5e",
  },
  {
    name: "Classic × Planner",
    label: "定番×計画派",
    description:
      "王道スポットを完璧な段取りで楽しむ。安心感と充実感を大切にするグループ。",
    types: ["CPOA", "CPOR", "CPIA", "CPIR"] as TravelTypeID[],
    color: "#3b82f6",
  },
  {
    name: "Classic × Spontaneous",
    label: "定番×直感派",
    description:
      "人気スポットを気ままに楽しむ。ゆるさと柔軟性が魅力のグループ。",
    types: ["CSOA", "CSOR", "CSIA", "CSIR"] as TravelTypeID[],
    color: "#22c55e",
  },
];

function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default function TypesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500"
          >
            TPTI
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-rose-50 to-blue-50 opacity-60" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 mb-4">
            16の旅タイプ
          </h1>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            4つの軸の組み合わせで生まれる、16種類の旅のスタイル
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-16 sm:space-y-24">
          {groups.map((group) => (
            <div key={group.name}>
              {/* Group Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: group.color }}
                  />
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    {group.name}
                  </h2>
                </div>
                <p
                  className="text-sm font-bold mb-2"
                  style={{ color: group.color }}
                >
                  {group.label}
                </p>
                <p className="text-sm text-gray-500 max-w-lg">
                  {group.description}
                </p>
              </div>

              {/* Type Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {group.types.map((typeId) => {
                  const type = travelTypes[typeId];
                  const typeColor = getTypeColor(type.color);
                  const typeBg = getTypeColorWithOpacity(type.color, 0.08);

                  return (
                    <Link
                      key={type.id}
                      href={`/result/${type.id}`}
                      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <div className="flex">
                        {/* Left Border Accent */}
                        <div
                          className="w-1.5 shrink-0 rounded-l-2xl"
                          style={{ backgroundColor: typeColor }}
                        />

                        {/* ティッピー */}
                        <div
                          className="w-16 shrink-0 flex items-center justify-center"
                          style={{ backgroundColor: typeBg }}
                        >
                          <img
                            src="/images/tippi.jpg"
                            alt={type.name}
                            className="w-12 h-12 rounded-xl object-cover"
                          />
                        </div>

                        <div className="flex-1 p-5 sm:p-6">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div
                              className="px-2.5 py-1 rounded-md text-xs font-bold tracking-wider"
                              style={{
                                backgroundColor: typeBg,
                                color: typeColor,
                              }}
                            >
                              {type.id}
                            </div>
                            <span className="text-gray-300 group-hover:text-gray-400 transition-colors text-sm">
                              &rarr;
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1.5 group-hover:translate-x-0.5 transition-transform">
                            {type.name}
                          </h3>

                          <p className="text-sm text-gray-500 leading-relaxed">
                            {type.catchCopy}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            あなたはどのタイプ？
          </h2>
          <p className="text-gray-500 mb-8 text-sm sm:text-base">
            質問に答えて、自分の旅タイプを診断しよう
          </p>
          <Link
            href="/quiz"
            className="inline-block px-10 py-5 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-lg font-bold rounded-2xl shadow-[0_10px_40px_-10px_rgba(244,63,94,0.4)] hover:scale-105 transition-transform duration-300"
          >
            診断を開始する
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">&copy; 2026 TPTI</p>
        </div>
      </footer>
    </div>
  );
}
