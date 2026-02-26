import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { weekendBossTypes } from "../../../../data/wbti/weekendBossTypes";
import { WeekendBossTypeID } from "../../../../data/wbti/types";
import { getTypeColor, getTypeColorWithOpacity } from "../../../../lib/wbti/colors";
import ShareButtons from "../../../../components/wbti/ShareButtons";
import AxisBadge from "../../../../components/wbti/AxisBadge";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
    const { type } = await params;
    const typeId = type.toUpperCase() as WeekendBossTypeID;
    const typeData = weekendBossTypes[typeId];

    if (!typeData) {
        return { title: "WBTI — 週末社長タイプ診断" };
    }

    const title = `${typeId}型【${typeData.name}】| WBTI`;
    const description = `${typeData.catchCopy} — WBTIで診断されたあなたの週末社長タイプは「${typeData.name}」。`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://tpti.jp/weekend/result/${typeId.toLowerCase()}`,
            type: "article",
            siteName: "WBTI",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

interface ResultPageProps {
    params: Promise<{ type: string }>;
}

export default async function ResultPage({ params }: ResultPageProps) {
    const { type } = await params;
    const typeId = type.toUpperCase() as WeekendBossTypeID;
    const typeData = weekendBossTypes[typeId];

    if (!typeData) {
        notFound();
    }

    const typeColor = getTypeColor(typeData.color);
    const shareText = `あなたは${typeId}型【${typeData.name}】\n${typeData.catchCopy}\n#WBTI #週末だけ社長 #性格診断\nhttps://tpti.jp/weekend/result/${typeId.toLowerCase()}`;

    return (
        <div className="min-h-screen bg-[#fafafa] pb-20">
            {/* ヘッダー */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-3xl">
                    <Link
                        href="/weekend"
                        className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400"
                    >
                        WBTI
                    </Link>
                    <Link
                        href="/weekend/quiz"
                        className="text-xs font-bold text-gray-400 hover:text-amber-500 transition-colors"
                    >
                        もう一度診断する
                    </Link>
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
                        診断結果
                    </div>

                    <p className="text-xl font-medium text-gray-600 mb-4">あなたは...</p>

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

                    {/* キャラクター画像 */}
                    <div className="w-48 h-48 mx-auto bg-white rounded-[3rem] shadow-2xl flex items-center justify-center mb-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden border-4 border-white">
                        <img
                            src={typeData.image}
                            alt={typeData.name}
                            className="w-full h-full object-cover transform scale-110"
                        />
                    </div>

                    {/* 4軸バッジ */}
                    <div className="flex justify-center mb-8">
                        <AxisBadge typeId={typeId} />
                    </div>

                    {/* シェアセクション */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                        <div className="flex justify-center mb-4">
                            <ShareButtons typeId={typeId} typeName={typeData.name} catchCopy={typeData.catchCopy} />
                        </div>
                        <div className="bg-white/80 rounded-xl p-3 text-left">
                            <p className="text-xs text-gray-400 font-bold mb-1">シェアテキスト</p>
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
                {/* 2. あなたの社長像 */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 rounded-full" style={{ backgroundColor: typeColor }} />
                        あなたの社長像
                    </h2>
                    <p className="text-gray-700 leading-loose text-lg">
                        {typeData.description}
                    </p>
                    <blockquote
                        className="mt-8 border-l-4 pl-6 py-2 italic text-xl font-medium text-gray-700"
                        style={{ borderColor: getTypeColorWithOpacity(typeData.color, 0.4) }}
                    >
                        &ldquo;{typeData.quote}&rdquo;
                    </blockquote>
                </div>

                {/* 3. 強み・魅力 + 注意点 */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 強み・魅力 */}
                        <div>
                            <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                                <span className="w-2 h-7 rounded-full bg-emerald-500" />
                                強み・魅力
                            </h2>
                            <ul className="space-y-4">
                                {typeData.strengths.map((s, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                        <span className="text-gray-700 leading-relaxed">{s}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* 注意点 */}
                        <div>
                            <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                                <span className="w-2 h-7 rounded-full bg-rose-400" />
                                注意点
                            </h2>
                            <ul className="space-y-4">
                                {typeData.warnings.map((w, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                                        <span className="text-gray-700 leading-relaxed">{w}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4. おすすめの週末ビジネス */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 rounded-full" style={{ backgroundColor: typeColor }} />
                        おすすめの週末ビジネス
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                        {typeData.recommendedJobs.map((job, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-2">{job.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. 相性の良い社長タイプ */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 rounded-full" style={{ backgroundColor: typeColor }} />
                        あなたと相性の良い社長タイプ
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {typeData.compatibleTypes.map((compat, i) => {
                            const partnerData = weekendBossTypes[compat.id];
                            if (!partnerData) return null;
                            const partnerColor = getTypeColor(partnerData.color);
                            return (
                                <a
                                    key={compat.id}
                                    href={`/weekend/result/${compat.id.toLowerCase()}`}
                                    className="block p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all group"
                                >
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden mb-3 border-2" style={{ borderColor: getTypeColorWithOpacity(partnerData.color, 0.3) }}>
                                        <img src={partnerData.image} alt={partnerData.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-xs font-bold tracking-wider mb-1" style={{ color: partnerColor }}>
                                        {compat.id}
                                    </div>
                                    <h3 className="text-lg font-black text-gray-900 mb-3 group-hover:translate-x-0.5 transition-transform">
                                        {partnerData.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        {compat.sharedTraits[0]}
                                    </p>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* 6. シェアセクション（下部） */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 text-center">
                    <h2 className="text-xl font-black mb-2">結果をシェアしよう</h2>
                    <p className="text-sm text-gray-500 mb-6">友達にもこの診断を試してもらおう</p>

                    <div className="flex justify-center mb-6">
                        <ShareButtons typeId={typeId} typeName={typeData.name} catchCopy={typeData.catchCopy} />
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-left max-w-md mx-auto">
                        <p className="text-xs text-gray-400 font-bold mb-1">シェアテキスト</p>
                        <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{shareText}</p>
                    </div>
                </div>

                {/* 4. もう一度診断する & タイプ一覧 */}
                <div className="flex flex-col items-center gap-4 pt-4 pb-8">
                    <Link
                        href="/weekend/quiz"
                        className="w-full max-w-sm block py-4 text-center text-white rounded-2xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: typeColor }}
                    >
                        もう一度診断する
                    </Link>
                    <Link
                        href="/weekend/types"
                        className="text-sm font-bold hover:underline"
                        style={{ color: typeColor }}
                    >
                        全16タイプ一覧を見る &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}
