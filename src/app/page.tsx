"use client";

import Link from "next/link";
import { TravelTypeCard } from "../components/TravelTypeCard";
import { travelTypes } from "../data/travelTypes";
import { travelTypesEn } from "../data/travelTypes.en";
import { useLocale, useSetLocale } from "../i18n/LocaleProvider";
import { getDictionary } from "../i18n";

export default function Home() {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const t = getDictionary(locale);
  const types = locale === "ja" ? travelTypes : travelTypesEn;
  const featuredTypes = [types.EPOA, types.ESOR, types.CPIR];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500"
          >
            TPTI
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLocale(locale === "ja" ? "en" : "ja")}
              className="text-xs font-bold text-gray-400 hover:text-orange-500 transition-colors"
            >
              {locale === "ja" ? "EN" : "日本語"}
            </button>
            <Link
              href="/types"
              className="text-xs font-bold text-gray-400 hover:text-orange-500 transition-colors"
            >
              {t.nav.allTypes}
            </Link>
            <Link
              href="/quiz"
              className="text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
            >
              {t.nav.startQuiz}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-rose-50 to-orange-50 opacity-80" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="mb-2">
            <span className="text-6xl sm:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
              {t.common.siteName}
            </span>
          </div>
          <div className="text-sm sm:text-base font-bold text-gray-400 tracking-widest mb-2">
            {t.common.tagline}
          </div>
          <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider uppercase mb-10">
            {t.common.subtitle}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
            {t.home.heroTitle1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
              {t.home.heroTitle2}
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
            {t.home.heroDescription}
          </p>
          <p className="text-sm text-gray-400 mb-8">
            {t.home.heroMeta}
          </p>

          {/* ティッピー */}
          <div className="mb-10">
            <img
              src="/images/tippi.jpg"
              alt="Tippi"
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quiz"
              className="px-10 py-5 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-lg font-bold rounded-2xl shadow-[0_10px_40px_-10px_rgba(244,63,94,0.4)] hover:scale-105 transition-transform duration-300"
            >
              {t.home.ctaStart}
            </Link>
            <Link
              href="/types"
              className="px-10 py-5 bg-white text-gray-700 text-lg font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {t.home.ctaTypes}
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Axes Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {t.home.axesTitle}
            </h2>
            <p className="text-gray-500">
              {t.home.axesDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 sm:p-8 rounded-3xl border border-orange-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  E / C
                </span>
                <h3 className="text-lg font-bold text-gray-900">{t.home.axisEC.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">{t.home.axisEC.sub}</p>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {t.home.axisEC.description}
              </p>
            </div>

            <div className="bg-blue-50 p-6 sm:p-8 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  P / S
                </span>
                <h3 className="text-lg font-bold text-gray-900">{t.home.axisPS.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">{t.home.axisPS.sub}</p>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {t.home.axisPS.description}
              </p>
            </div>

            <div className="bg-emerald-50 p-6 sm:p-8 rounded-3xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  O / I
                </span>
                <h3 className="text-lg font-bold text-gray-900">{t.home.axisOI.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">{t.home.axisOI.sub}</p>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {t.home.axisOI.description}
              </p>
            </div>

            <div className="bg-purple-50 p-6 sm:p-8 rounded-3xl border border-purple-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  A / R
                </span>
                <h3 className="text-lg font-bold text-gray-900">{t.home.axisAR.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">{t.home.axisAR.sub}</p>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {t.home.axisAR.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Types Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {t.home.featuredTitle}
              </h2>
              <p className="text-gray-500">
                {t.home.featuredDescription}
              </p>
            </div>
            <Link
              href="/types"
              className="text-orange-600 font-bold flex items-center gap-1 hover:underline"
            >
              {t.home.viewAllLink}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTypes.map((type) => (
              <TravelTypeCard key={type.id} type={type} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust / SEO Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-3">{t.home.trustTitle}</h2>
          <p className="text-gray-500 mb-10">
            {t.home.trustDescription}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">{t.home.trust1Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.home.trust1Description}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">{t.home.trust2Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.home.trust2Description}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">{t.home.trust3Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.home.trust3Description}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">{t.home.trust4Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.home.trust4Description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            {t.common.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
