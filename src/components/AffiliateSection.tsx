"use client";

import type { Locale } from "../i18n/LocaleProvider";

interface RecommendedItem {
  name: string;
  desc: string;
  query: string;
}

interface AffiliateSectionProps {
  locale: Locale;
  typeId: string;
  typeColor: string;
  recommendedItems: RecommendedItem[];
}

export default function AffiliateSection({
  locale,
  typeId,
  typeColor,
  recommendedItems,
}: AffiliateSectionProps) {
  if (locale === "en") {
    return <AffiliateSectionEn />;
  }

  return <AffiliateSectionJa typeId={typeId} typeColor={typeColor} recommendedItems={recommendedItems} />;
}

// --- 日本語版: 既存のアフィリエイト要素をそのまま移植 ---

function AffiliateSectionJa({
  typeColor,
  recommendedItems,
}: {
  typeId: string;
  typeColor: string;
  recommendedItems: RecommendedItem[];
}) {
  return (
    <>
      {/* 楽天トラベル バナー */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="text-sm font-bold text-gray-700 mb-3 text-center">
          気になる旅先、チェックしてみる？
        </p>
        <div className="flex justify-center">
          <a
            href="https://hb.afl.rakuten.co.jp/hsc/5134a7a5.0fda9f10.2b84543f.2e2baf0f/?link_type=pict&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJwaWN0IiwiY29sIjoxLCJjYXQiOiIxMzMiLCJiYW4iOjIxODg2NTksImFtcCI6ZmFsc2V9"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="hover:opacity-90 transition-opacity"
          >
            <img
              src="https://hbb.afl.rakuten.co.jp/hsb/5134a7a5.0fda9f10.2b84543f.2e2baf0f/?me_id=2100001&me_adv_id=2188659&t=pict"
              alt="楽天トラベル"
              className="rounded-lg"
            />
          </a>
        </div>
        <p className="text-[10px] text-gray-300 mt-2 text-right">PR</p>
      </div>

      {/* Amazon 旅グッズ */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recommendedItems.map((item, i) => (
            <a
              key={i}
              href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(item.query)}&tag=tpti-22`}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="group rounded-2xl bg-gray-50 hover:bg-amber-50 hover:shadow-md transition-all border border-transparent hover:border-amber-200 overflow-hidden"
            >
              <div className="h-1 w-full" style={{ backgroundColor: typeColor, opacity: 0.4 }} />
              <div className="p-5 text-center">
                <h3 className="font-black text-gray-900 mb-1 group-hover:text-amber-700 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-block px-4 py-2 bg-amber-500 text-white text-xs font-bold rounded-full group-hover:bg-amber-600 transition-colors">
                  Amazonで見る
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className="text-[10px] text-gray-300 mt-4 text-right">PR</p>
      </div>

      {/* Audible バナー */}
      <a
        href="https://www.amazon.co.jp/b/ref=adbl_JP_as_0068?ie=UTF8&node=7471076051&tag=tpti-22"
        target="_blank"
        rel="nofollow sponsored noopener"
        className="group block bg-gradient-to-r from-orange-500 to-amber-500 p-8 sm:p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all relative overflow-hidden mt-8"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-12 -mb-12" />
        <div className="relative z-10 text-center sm:text-left">
          <span className="text-[10px] text-white/40">PR</span>
          <p className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">
            30日間無料
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-4">
            Audible — 移動時間が、旅になる。
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-lg">
            飛行機や電車の中でオーディオブック。旅先の歴史や物語を聴いておくと、景色の見え方が変わる。
          </p>
          <span className="inline-block px-8 py-3.5 bg-white text-orange-600 font-black rounded-full shadow-lg group-hover:shadow-xl transition-shadow text-base">
            無料で体験する
          </span>
        </div>
      </a>

      {/* Amazon Prime バナー */}
      <a
        href="https://www.amazon.co.jp/amazonprime?tag=tpti-22"
        target="_blank"
        rel="nofollow sponsored noopener"
        className="group block bg-gradient-to-r from-blue-600 to-sky-500 p-8 sm:p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all relative overflow-hidden mt-8"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-12 -mb-12" />
        <div className="relative z-10 text-center sm:text-left">
          <span className="text-[10px] text-white/40">PR</span>
          <p className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">
            30日間無料
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-4">
            Amazon Prime — 出発前日でも、間に合う。
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-lg">
            お急ぎ便で翌日届く。旅行グッズも映画も音楽も、これひとつ。
          </p>
          <span className="inline-block px-8 py-3.5 bg-white text-blue-600 font-black rounded-full shadow-lg group-hover:shadow-xl transition-shadow text-base">
            無料で体験する
          </span>
        </div>
      </a>

      {/* アフィリエイト開示 */}
      <p className="text-[10px] text-gray-300 text-center leading-relaxed mt-8">
        ※ 本ページはプロモーションを含みます。Amazonのアソシエイトとして、TPTIは適格販売により収入を得ています。
      </p>
    </>
  );
}

// --- 英語版: Booking.com プレースホルダー ---

function AffiliateSectionEn() {
  return (
    <>
      <div className="mt-8 bg-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
        <h3 className="text-lg font-black text-gray-900 mb-2">
          Ready to plan your next adventure?
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Explore destinations and find the best deals on Booking.com
        </p>
        {/* SECURITY: アフィリエイトIDは後で設定。現在はプレースホルダーリンク */}
        <a
          href="https://www.booking.com"
          target="_blank"
          rel="nofollow sponsored noopener"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors"
        >
          Search on Booking.com
        </a>
      </div>

      {/* アフィリエイト開示（英語） */}
      <p className="text-[10px] text-gray-300 text-center leading-relaxed mt-8">
        This page contains affiliate links.
      </p>
    </>
  );
}
