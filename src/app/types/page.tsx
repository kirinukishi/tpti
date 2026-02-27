"use client";

import Link from "next/link";
import { travelTypes } from "../../data/travelTypes";
import { travelTypesEn } from "../../data/travelTypes.en";
import { TravelTypeID } from "../../data/types";
import { getTypeColor, getTypeColorWithOpacity } from "../../lib/colors";
import { useLocale, useSetLocale } from "../../i18n/LocaleProvider";
import { getDictionary } from "../../i18n";

const groupConfigs = [
  {
    key: "EP" as const,
    name: "Explorer × Planner",
    types: ["EPOA", "EPOR", "EPIA", "EPIR"] as TravelTypeID[],
    color: "#f97316",
  },
  {
    key: "ES" as const,
    name: "Explorer × Spontaneous",
    types: ["ESOA", "ESOR", "ESIA", "ESIR"] as TravelTypeID[],
    color: "#f43f5e",
  },
  {
    key: "CP" as const,
    name: "Classic × Planner",
    types: ["CPOA", "CPOR", "CPIA", "CPIR"] as TravelTypeID[],
    color: "#3b82f6",
  },
  {
    key: "CS" as const,
    name: "Classic × Spontaneous",
    types: ["CSOA", "CSOR", "CSIA", "CSIR"] as TravelTypeID[],
    color: "#22c55e",
  },
];

export default function TypesPage() {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const t = getDictionary(locale);
  const types = locale === "ja" ? travelTypes : travelTypesEn;

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
          <button
            onClick={() => setLocale(locale === "ja" ? "en" : "ja")}
            className="text-xs font-bold border border-gray-300 text-gray-500 hover:border-orange-400 hover:text-orange-500 px-3 py-1 rounded-full transition-colors"
          >
            {locale === "ja" ? "🌐 EN" : "🌐 日本語"}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-rose-50 to-blue-50 opacity-60" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 mb-4">
            {t.types.pageTitle}
          </h1>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            {t.types.pageDescription}
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-16 sm:space-y-24">
          {groupConfigs.map((group) => {
            const groupDict = t.types.groups[group.key];
            return (
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
                    {groupDict.label}
                  </p>
                  <p className="text-sm text-gray-500 max-w-lg">
                    {groupDict.description}
                  </p>
                </div>

                {/* Type Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {group.types.map((typeId) => {
                    const type = types[typeId];
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
                              src={`/images/tippi-${type.id.toLowerCase()}.png`}
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
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            {t.types.ctaTitle}
          </h2>
          <p className="text-gray-500 mb-8 text-sm sm:text-base">
            {t.types.ctaDescription}
          </p>
          <Link
            href="/quiz"
            className="inline-block px-10 py-5 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-lg font-bold rounded-2xl shadow-[0_10px_40px_-10px_rgba(244,63,94,0.4)] hover:scale-105 transition-transform duration-300"
          >
            {t.types.ctaButton}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">{t.common.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
