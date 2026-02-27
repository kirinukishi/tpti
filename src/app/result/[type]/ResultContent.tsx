"use client";

import Link from "next/link";
import { travelTypes } from "../../../data/travelTypes";
import { travelTypesEn } from "../../../data/travelTypes.en";
import { TravelTypeID } from "../../../data/types";
import { getTypeColor, getTypeColorWithOpacity } from "../../../lib/colors";
import ShareButtons from "../../../components/ShareButtons";
import AxisBadge from "../../../components/AxisBadge";
import AffiliateSection from "../../../components/AffiliateSection";
import { useLocale, useSetLocale } from "../../../i18n/LocaleProvider";
import { getDictionary } from "../../../i18n";

function getRecommendedItems(typeId: string, locale: "ja" | "en") {
    const items = [];

    if (locale === "ja") {
        if (typeId[0] === "E") {
            items.push({ name: "モバイルバッテリー", desc: "冒険先でも安心の大容量", query: "モバイルバッテリー 大容量 旅行" });
        } else {
            items.push({ name: "スーツケース", desc: "王道スポットを快適に巡る相棒", query: "スーツケース 機内持ち込み 軽量" });
        }
        if (typeId[1] === "P") {
            items.push({ name: "トラベルポーチセット", desc: "荷物を完璧に整理する計画派の必需品", query: "トラベルポーチ 圧縮 セット" });
        } else {
            items.push({ name: "折りたたみリュック", desc: "急な予定変更も身軽に対応", query: "折りたたみ リュック 軽量 旅行" });
        }
        const combo = typeId[2] + typeId[3];
        if (combo === "OA") {
            items.push({ name: "自撮り棒・三脚", desc: "仲間との思い出を最高のアングルで", query: "自撮り棒 三脚 Bluetooth リモコン" });
        } else if (combo === "OR") {
            items.push({ name: "Bluetoothスピーカー", desc: "みんなで過ごすリラックスタイムに", query: "Bluetooth スピーカー 防水 アウトドア" });
        } else if (combo === "IA") {
            items.push({ name: "アクションカメラ", desc: "冒険を臨場感たっぷりに記録", query: "アクションカメラ 防水 4K" });
        } else {
            items.push({ name: "ノイキャンイヤホン", desc: "自分だけの心地よい空間を", query: "ノイズキャンセリング イヤホン ワイヤレス" });
        }
    }

    return items;
}

export default function ResultContent({ typeId }: { typeId: TravelTypeID }) {
    const locale = useLocale();
    const setLocale = useSetLocale();
    const t = getDictionary(locale);
    const types = locale === "ja" ? travelTypes : travelTypesEn;
    const typeData = types[typeId];
    const typeColor = getTypeColor(typeData.color);

    // 英語版タイプデータ（シェア用）
    const typeDataEn = travelTypesEn[typeId];

    const shareText = locale === "ja"
        ? `あなたは${typeId}型【${typeData.name}】\n${typeData.catchCopy}\n#TPTI #旅行タイプ診断 #性格診断 #MBTI\nhttps://tpti.jp/result/${typeId.toLowerCase()}`
        : `I'm ${typeId} type — ${typeDataEn.name}!\n${typeDataEn.catchCopy}\n#TPTI #TravelType #PersonalityQuiz\nhttps://tpti.jp/result/${typeId.toLowerCase()}`;

    const recommendedItems = getRecommendedItems(typeId, locale);

    return (
        <div className="min-h-screen bg-[#fafafa] pb-20">
            {/* ヘッダー */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-3xl">
                    <Link
                        href="/"
                        className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500"
                    >
                        TPTI
                    </Link>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setLocale(locale === "ja" ? "en" : "ja")}
                            className="text-xs font-bold border border-gray-300 text-gray-500 hover:border-orange-400 hover:text-orange-500 px-3 py-1 rounded-full transition-colors"
                        >
                            {locale === "ja" ? "🌐 EN" : "🌐 日本語"}
                        </button>
                        <Link
                            href="/quiz"
                            className="text-xs font-bold text-gray-400 hover:text-orange-500 transition-colors"
                        >
                            {t.nav.retakeQuiz}
                        </Link>
                    </div>
                </div>
            </header>

            {/* 1. ヒーローセクション */}
            <section
                className="pt-20 pb-16 relative overflow-hidden"
                style={{ backgroundColor: getTypeColorWithOpacity(typeData.color, 0.08) }}
            >
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider bg-white/80 backdrop-blur-sm rounded-full"
                        style={{ color: typeColor }}
                    >
                        {t.result.badge}
                    </div>

                    <p className="text-xl font-medium text-gray-600 mb-4">{t.result.yourType}</p>

                    <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-3 tracking-tight">
                        {typeData.name}
                    </h1>

                    <p
                        className="text-lg font-bold tracking-widest mb-4"
                        style={{ color: typeColor }}
                    >
                        {typeId}
                    </p>

                    <p className="text-xl sm:text-2xl font-bold text-gray-700 mb-10">
                        {typeData.catchCopy}
                    </p>

                    {/* キャラクター */}
                    <div className="w-48 h-48 mx-auto bg-white rounded-[3rem] shadow-2xl flex items-center justify-center mb-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden border-4 border-white">
                        <img
                            src={`/images/tippi-${typeId.toLowerCase()}.png`}
                            alt={typeData.name}
                            className="w-full h-full object-cover transform scale-110"
                        />
                    </div>

                    {/* 4軸バッジ */}
                    <div className="flex justify-center mb-8">
                        <AxisBadge typeId={typeId} locale={locale} />
                    </div>

                    {/* シェアセクション */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                        <div className="flex justify-center mb-4">
                            <ShareButtons
                                typeId={typeId}
                                typeName={typeData.name}
                                catchCopy={typeData.catchCopy}
                                locale={locale}
                                typeNameEn={typeDataEn.name}
                                catchCopyEn={typeDataEn.catchCopy}
                            />
                        </div>
                        <div className="bg-white/80 rounded-xl p-3 text-left">
                            <p className="text-xs text-gray-400 font-bold mb-1">{t.result.shareTextLabel}</p>
                            <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{shareText}</p>
                        </div>
                    </div>
                </div>

                {/* 背景装飾 */}
                <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32 blur-3xl"
                    style={{ backgroundColor: getTypeColorWithOpacity(typeData.color, 0.05) }}
                />
                <div
                    className="absolute bottom-0 left-0 w-64 h-64 rounded-full -ml-32 -mb-32 blur-3xl"
                    style={{ backgroundColor: getTypeColorWithOpacity(typeData.color, 0.05) }}
                />
            </section>

            {/* メインコンテンツ */}
            <div className="container mx-auto px-4 max-w-3xl -mt-6 relative z-20 space-y-8">
                {/* 2. 性格テキスト */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 rounded-full" style={{ backgroundColor: typeColor }} />
                        {t.result.personality}
                    </h2>
                    <p className="text-gray-700 leading-loose text-lg mb-8">
                        {typeData.description}
                    </p>
                    <blockquote
                        className="border-l-4 pl-6 py-2 italic text-xl font-medium"
                        style={{ borderColor: getTypeColorWithOpacity(typeData.color, 0.4), color: typeColor }}
                    >
                        &ldquo;{typeData.quote}&rdquo;
                    </blockquote>
                </div>

                {/* 3. 強み・注意点 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-gray-100">
                        <h3 className="font-black text-emerald-700 mb-4 text-lg flex items-center gap-2">
                            <span className="w-2 h-6 bg-emerald-500 rounded-full" />
                            {t.result.strengths}
                        </h3>
                        <ul className="space-y-3">
                            {typeData.strengths.map((s, i) => (
                                <li key={i} className="text-sm text-emerald-800 leading-relaxed flex gap-2">
                                    <span className="text-emerald-400 mt-0.5 shrink-0">&#9679;</span>
                                    <span>{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-gray-100">
                        <h3 className="font-black text-rose-700 mb-4 text-lg flex items-center gap-2">
                            <span className="w-2 h-6 bg-rose-500 rounded-full" />
                            {t.result.warnings}
                        </h3>
                        <ul className="space-y-3">
                            {typeData.warnings.map((w, i) => (
                                <li key={i} className="text-sm text-rose-800 leading-relaxed flex gap-2">
                                    <span className="text-rose-400 mt-0.5 shrink-0">&#9679;</span>
                                    <span>{w}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 4. おすすめスポット */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 rounded-full" style={{ backgroundColor: typeColor }} />
                        {t.result.spots}
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        {typeData.spots.map((spot, i) => (
                            <div
                                key={i}
                                className="group p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-black text-gray-900">{spot.name}</h3>
                                    <span className="px-3 py-1 bg-white text-gray-500 text-xs font-bold rounded-full border border-gray-200 shrink-0 ml-3">
                                        {spot.location}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{spot.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* ロケール対応アフィリエイト: スポットセクション内 */}
                    {locale === "ja" && (
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <p className="text-sm font-bold text-gray-700 mb-3 text-center">
                                {t.result.spotsAffiliateCta}
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
                            <p className="text-[10px] text-gray-300 mt-2 text-right">{t.result.pr}</p>
                        </div>
                    )}
                </div>

                {/* アフィリエイトセクション（ロケール対応） */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-black mb-2 flex items-center gap-2">
                        <span className="w-2 h-8 rounded-full" style={{ backgroundColor: typeColor }} />
                        {typeData.name}{t.result.travelGoods}
                    </h2>
                    <p className="text-sm text-gray-400 mb-6 ml-5">{t.result.travelGoodsDescription}</p>
                    <AffiliateSection
                        locale={locale}
                        typeId={typeId}
                        typeColor={typeColor}
                        recommendedItems={recommendedItems}
                    />
                </div>

                {/* 5. 相性の良いタイプ x 3 */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                        <span className="w-2 h-8 rounded-full" style={{ backgroundColor: typeColor }} />
                        {t.result.compatibility}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {typeData.compatibleTypes.map((compat) => {
                            const partnerData = types[compat.id];
                            if (!partnerData) return null;
                            const partnerColor = getTypeColor(partnerData.color);
                            const isBest = compat.id === typeData.bestPartner;

                            return (
                                <div
                                    key={compat.id}
                                    className="relative rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all"
                                    style={{
                                        borderColor: isBest ? getTypeColorWithOpacity(partnerData.color, 0.4) : undefined,
                                    }}
                                >
                                    {isBest && (
                                        <span
                                            className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold text-white rounded-full whitespace-nowrap"
                                            style={{ backgroundColor: partnerColor }}
                                        >
                                            Best Partner
                                        </span>
                                    )}

                                    <div className="flex justify-center mb-4">
                                        <div
                                            className="w-20 h-20 rounded-2xl overflow-hidden border-2"
                                            style={{
                                                backgroundColor: getTypeColorWithOpacity(partnerData.color, 0.1),
                                                borderColor: getTypeColorWithOpacity(partnerData.color, 0.2),
                                            }}
                                        >
                                            <img
                                                src={`/images/tippi-${partnerData.id.toLowerCase()}.png`}
                                                alt={partnerData.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-center text-lg font-black text-gray-900 mb-1">
                                        {partnerData.name}
                                    </h3>
                                    <p className="text-center text-xs font-bold mb-4" style={{ color: partnerColor }}>
                                        {compat.id}
                                    </p>

                                    <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                                        {t.result.sharedTraits}
                                    </p>
                                    <ul className="space-y-2">
                                        {compat.sharedTraits.map((trait, j) => (
                                            <li key={j} className="text-xs text-gray-600 leading-relaxed flex gap-1.5">
                                                <span className="mt-0.5 shrink-0" style={{ color: partnerColor }}>&#9679;</span>
                                                <span>{trait}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-4 text-center">
                                        <Link
                                            href={`/result/${compat.id.toLowerCase()}`}
                                            className="text-sm font-bold hover:underline"
                                            style={{ color: partnerColor }}
                                        >
                                            {t.result.viewType}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 6. シェアセクション（下部） */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 text-center">
                    <h2 className="text-xl font-black mb-2">{t.result.shareTitle}</h2>
                    <p className="text-sm text-gray-500 mb-6">{t.result.shareDescription}</p>

                    <div className="flex justify-center mb-6">
                        <ShareButtons
                            typeId={typeId}
                            typeName={typeData.name}
                            catchCopy={typeData.catchCopy}
                            locale={locale}
                            typeNameEn={typeDataEn.name}
                            catchCopyEn={typeDataEn.catchCopy}
                        />
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-left max-w-md mx-auto">
                        <p className="text-xs text-gray-400 font-bold mb-1">{t.result.shareTextLabel}</p>
                        <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{shareText}</p>
                    </div>
                </div>

                {/* Audible/Prime - JAのみ */}
                {locale === "ja" && (
                    <>
                        <a
                            href="https://www.amazon.co.jp/b/ref=adbl_JP_as_0068?ie=UTF8&node=7471076051&tag=tpti-22"
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            className="group block bg-gradient-to-r from-orange-500 to-amber-500 p-8 sm:p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-16 -mt-16" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-12 -mb-12" />
                            <div className="relative z-10 text-center sm:text-left">
                                <span className="text-[10px] text-white/40">{t.result.pr}</span>
                                <p className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">
                                    {t.result.audibleFree}
                                </p>
                                <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-4">
                                    {t.result.audibleTitle}
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-lg">
                                    {t.result.audibleDescription}
                                </p>
                                <span className="inline-block px-8 py-3.5 bg-white text-orange-600 font-black rounded-full shadow-lg group-hover:shadow-xl transition-shadow text-base">
                                    {t.result.audibleCta}
                                </span>
                            </div>
                        </a>

                        <a
                            href="https://www.amazon.co.jp/amazonprime?tag=tpti-22"
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            className="group block bg-gradient-to-r from-blue-600 to-sky-500 p-8 sm:p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-16 -mt-16" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-12 -mb-12" />
                            <div className="relative z-10 text-center sm:text-left">
                                <span className="text-[10px] text-white/40">{t.result.pr}</span>
                                <p className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">
                                    {t.result.primeFree}
                                </p>
                                <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-4">
                                    {t.result.primeTitle}
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-lg">
                                    {t.result.primeDescription}
                                </p>
                                <span className="inline-block px-8 py-3.5 bg-white text-blue-600 font-black rounded-full shadow-lg group-hover:shadow-xl transition-shadow text-base">
                                    {t.result.primeCta}
                                </span>
                            </div>
                        </a>
                    </>
                )}

                {/* Booking.com - ENのみ */}
                {locale === "en" && (
                    <div className="bg-blue-50 rounded-[2.5rem] p-8 sm:p-10 border border-blue-100">
                        <h3 className="text-lg font-black text-gray-900 mb-2">
                            Ready to plan your next adventure?
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Explore destinations and find the best deals on Booking.com
                        </p>
                        {/* SECURITY: アフィリエイトIDは後で設定 */}
                        <a
                            href="https://www.booking.com"
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Search on Booking.com
                        </a>
                    </div>
                )}

                {/* 7. 仕事スタイル診断 Coming Soon */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-slate-700 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full -mr-20 -mt-20 blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full -ml-16 -mb-16 blur-2xl" />
                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-bold rounded-full mb-4 tracking-wider">
                            {t.result.comingSoonLabel}
                        </span>
                        <h2 className="text-2xl font-black text-white mb-3">
                            {t.result.comingSoonTitle}
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed mb-2">
                            {t.result.comingSoonDescription1}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {t.result.comingSoonDescription2}
                        </p>
                    </div>
                </div>

                {/* 8. もう一度診断する & タイプ一覧 */}
                <div className="flex flex-col items-center gap-4 pt-4 pb-8">
                    <Link
                        href="/quiz"
                        className="w-full max-w-sm block py-4 text-center text-white rounded-2xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: typeColor }}
                    >
                        {t.result.retakeQuiz}
                    </Link>
                    <Link
                        href="/types"
                        className="text-sm font-bold hover:underline"
                        style={{ color: typeColor }}
                    >
                        {t.result.viewAllTypes}
                    </Link>
                </div>

                {/* アフィリエイト開示 */}
                <p className="text-[10px] text-gray-300 text-center leading-relaxed">
                    {locale === "ja"
                        ? "※ 本ページはプロモーションを含みます。Amazonのアソシエイトとして、TPTIは適格販売により収入を得ています。"
                        : "This page contains affiliate links."}
                </p>
            </div>
        </div>
    );
}
