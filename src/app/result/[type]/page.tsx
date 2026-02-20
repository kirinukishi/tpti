import Link from "next/link";
import { notFound } from "next/navigation";
import { travelTypes } from "../../../data/travelTypes";
import { TravelTypeID } from "../../../data/types";
import { getTypeColor, getTypeColorWithOpacity } from "../../../lib/colors";
import ShareButtons from "../../../components/ShareButtons";
import AxisBadge from "../../../components/AxisBadge";

interface ResultPageProps {
    params: Promise<{ type: string }>;
}

export default async function ResultPage({ params }: ResultPageProps) {
    const { type } = await params;
    const typeId = type.toUpperCase() as TravelTypeID;
    const typeData = travelTypes[typeId];

    if (!typeData) {
        notFound();
    }

    const typeColor = getTypeColor(typeData.color);
    const shareText = `あなたは${typeId}型【${typeData.name}】\n${typeData.catchCopy}\n#TPTI #旅行タイプ診断\nhttps://tpti.jp/result/${typeId.toLowerCase()}`;

    return (
        <div className="min-h-screen bg-[#fafafa] pb-20">
            {/* 1. ヒーローセクション */}
            <section
                className="pt-20 pb-16 relative overflow-hidden"
                style={{ backgroundColor: getTypeColorWithOpacity(typeData.color, 0.08) }}
            >
                <div className="container mx-auto px-4 text-center relative z-10">
                    {/* シェアボタン（上部） */}
                    <div className="flex justify-center mb-8">
                        <ShareButtons typeId={typeId} typeName={typeData.name} catchCopy={typeData.catchCopy} />
                    </div>

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
                        「{typeData.catchCopy}」
                    </p>

                    {/* キャラクタープレースホルダー */}
                    <div className="w-48 h-48 mx-auto bg-white rounded-[3rem] shadow-2xl flex items-center justify-center mb-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden border-4 border-white">
                        <img
                            src="/images/tippi.jpg"
                            alt={typeData.name}
                            className="w-full h-full object-cover transform scale-110"
                        />
                    </div>

                    {/* 4軸バッジ */}
                    <div className="flex justify-center mb-6">
                        <AxisBadge typeId={typeId} />
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
                        あなたの性格
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
                            強み・魅力
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
                            注意点
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
                        おすすめの旅先
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
                                <p className="text-gray-600 text-sm leading-relaxed">{spot.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. 相性の良いタイプ x 3 */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                        <span className="w-2 h-8 rounded-full" style={{ backgroundColor: typeColor }} />
                        あなたと相性の良い旅のパートナー
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {typeData.compatibleTypes.map((compat, i) => {
                            const partnerData = travelTypes[compat.id];
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

                                    {/* ティッピー */}
                                    <div className="flex justify-center mb-4">
                                        <div
                                            className="w-20 h-20 rounded-2xl overflow-hidden border-2"
                                            style={{
                                                backgroundColor: getTypeColorWithOpacity(partnerData.color, 0.1),
                                                borderColor: getTypeColorWithOpacity(partnerData.color, 0.2),
                                            }}
                                        >
                                            <img
                                                src="/images/tippi.jpg"
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
                                        共通点
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
                                            このタイプを詳しく見る &rarr;
                                        </Link>
                                    </div>
                                </div>
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

                {/* 7. もう一度診断する & タイプ一覧 */}
                <div className="flex flex-col items-center gap-4 pt-4 pb-8">
                    <Link
                        href="/quiz"
                        className="w-full max-w-sm block py-4 text-center text-white rounded-2xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: typeColor }}
                    >
                        もう一度診断する
                    </Link>
                    <Link
                        href="/types"
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
