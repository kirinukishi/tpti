import Link from "next/link";
import { weekendBossTypes } from "../../../data/wbti/weekendBossTypes";
import { WeekendBossTypeID } from "../../../data/wbti/types";
import { getTypeColor, getTypeColorWithOpacity } from "../../../lib/wbti/colors";

export const metadata = {
    title: "全16タイプ一覧 | WBTI",
    description:
        "WBTI（ウィビティ）の16種類の週末社長タイプを一覧で紹介。体験を売る社長からモノを売る社長まで、あなたの社長スタイルを見つけよう。",
};

const groups = [
    {
        name: "おもてなし系社長（ES系）",
        description: "体験を売る × 少人数に届ける。一人ひとりに全力を注ぐ、ぬくもりの社長たち。",
        types: ["ESFT", "ESFA", "ESBT", "ESBA"] as WeekendBossTypeID[],
        color: "#f59e0b",
    },
    {
        name: "イベント系社長（EW系）",
        description: "体験を売る × 広く届ける。大勢を巻き込んで場を創る、エネルギーの社長たち。",
        types: ["EWFT", "EWFA", "EWBT", "EWBA"] as WeekendBossTypeID[],
        color: "#ef4444",
    },
    {
        name: "工房系社長（PS系）",
        description: "モノを売る × 少人数に届ける。手仕事と想いを込める、職人気質の社長たち。",
        types: ["PSFT", "PSFA", "PSBT", "PSBA"] as WeekendBossTypeID[],
        color: "#10b981",
    },
    {
        name: "ブランド系社長（PW系）",
        description: "モノを売る × 広く届ける。世界観とクオリティで勝負する、ブランドの社長たち。",
        types: ["PWFT", "PWFA", "PWBT", "PWBA"] as WeekendBossTypeID[],
        color: "#a855f7",
    },
];

export default function TypesPage() {
    return (
        <div className="min-h-screen bg-[#fafafa]">
            {/* Header */}
            <header className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                    <Link
                        href="/weekend"
                        className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400"
                    >
                        WBTI
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 opacity-60" />
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 mb-4">
                        全16タイプ一覧
                    </h1>
                    <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
                        4つの系統 × 4タイプ = あなたの社長スタイル
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
                                <p className="text-sm text-gray-500 max-w-lg">
                                    {group.description}
                                </p>
                            </div>

                            {/* Type Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {group.types.map((typeId) => {
                                    const typeData = weekendBossTypes[typeId];
                                    if (!typeData) return null;
                                    const typeColor = getTypeColor(typeData.color);
                                    const typeBg = getTypeColorWithOpacity(typeData.color, 0.08);

                                    return (
                                        <Link
                                            key={typeId}
                                            href={`/weekend/result/${typeId.toLowerCase()}`}
                                            className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                                        >
                                            <div className="flex">
                                                {/* Left Border Accent */}
                                                <div
                                                    className="w-1.5 shrink-0 rounded-l-2xl"
                                                    style={{ backgroundColor: typeColor }}
                                                />

                                                {/* キャラクター画像 */}
                                                <div
                                                    className="w-16 shrink-0 flex items-center justify-center"
                                                    style={{ backgroundColor: typeBg }}
                                                >
                                                    <img
                                                        src={typeData.image}
                                                        alt={typeData.name}
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
                                                            {typeId}
                                                        </div>
                                                        <span className="text-gray-300 group-hover:text-gray-400 transition-colors text-sm">
                                                            &rarr;
                                                        </span>
                                                    </div>

                                                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1.5 group-hover:translate-x-0.5 transition-transform">
                                                        {typeData.name}
                                                    </h3>

                                                    <p className="text-sm text-gray-500 leading-relaxed">
                                                        {typeData.catchCopy}
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
                        質問に答えて、自分の週末社長タイプを診断しよう
                    </p>
                    <Link
                        href="/weekend/quiz"
                        className="inline-block px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-lg font-bold rounded-2xl shadow-[0_10px_40px_-10px_rgba(245,158,11,0.4)] hover:scale-105 transition-transform duration-300"
                    >
                        診断を開始する
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-gray-400">&copy; 2026 WBTI</p>
                </div>
            </footer>
        </div>
    );
}
