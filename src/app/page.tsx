import Link from "next/link";
import { TravelTypeCard } from "../components/TravelTypeCard";
import { travelTypes } from "../data/travelTypes";

export default function Home() {
  const featuredTypes = [travelTypes.EPOA, travelTypes.ESOR, travelTypes.CPIR];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-rose-50 to-orange-50 opacity-80" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="mb-2">
            <span className="text-6xl sm:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
              TPTI
            </span>
          </div>
          <div className="text-sm sm:text-base font-bold text-gray-400 tracking-widest mb-2">
            ティプティ
          </div>
          <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider uppercase mb-10">
            Travel Personality Type Indicator
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
            あなたの旅の正体は、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
              どのスタイル？
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            28の質問に答えて、あなたの隠れた旅行タイプを16種類から診断。<br />
            自分でも気づかなかった、最高に楽しむための「旅の方程式」を見つけましょう。
          </p>
          <p className="text-sm text-gray-400 mb-8">
            28問 / 所要時間 約5分
          </p>

          {/* ティッピー */}
          <div className="mb-10">
            <img
              src="/images/tippi.jpg"
              alt="ティッピー"
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quiz"
              className="px-10 py-5 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-lg font-bold rounded-2xl shadow-[0_10px_40px_-10px_rgba(244,63,94,0.4)] hover:scale-105 transition-transform duration-300"
            >
              診断を開始する（無料・約5分）
            </Link>
            <Link
              href="/types"
              className="px-10 py-5 bg-white text-gray-700 text-lg font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              タイプ一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Axes Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              4つの軸であなたの旅スタイルを分析
            </h2>
            <p className="text-gray-500">
              TPTIは4つの性格軸の組み合わせで、16タイプに分類します
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 冒険性 */}
            <div className="bg-orange-50 p-6 sm:p-8 rounded-3xl border border-orange-100">
              <div className="text-3xl mb-4">🧭</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  E / C
                </span>
                <h3 className="text-lg font-bold text-gray-900">冒険性</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Explorer vs Classic
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                穴場派？定番派？<br />
                ガイドブックの外に出たいか、王道を押さえたいか。
              </p>
            </div>

            {/* 計画性 */}
            <div className="bg-blue-50 p-6 sm:p-8 rounded-3xl border border-blue-100">
              <div className="text-3xl mb-4">📋</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  P / S
                </span>
                <h3 className="text-lg font-bold text-gray-900">計画性</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Planner vs Spontaneous
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                計画派？直感派？<br />
                スケジュールを作り込むか、気分で動くか。
              </p>
            </div>

            {/* 交流性 */}
            <div className="bg-emerald-50 p-6 sm:p-8 rounded-3xl border border-emerald-100">
              <div className="text-3xl mb-4">🤝</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  O / I
                </span>
                <h3 className="text-lg font-bold text-gray-900">交流性</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Open vs Independent
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                みんなで？ひとりで？<br />
                旅先で人と関わりたいか、自分の世界に浸りたいか。
              </p>
            </div>

            {/* 行動性 */}
            <div className="bg-purple-50 p-6 sm:p-8 rounded-3xl border border-purple-100">
              <div className="text-3xl mb-4">🏃</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  A / R
                </span>
                <h3 className="text-lg font-bold text-gray-900">行動性</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Active vs Relaxed
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                動き回る？のんびり？<br />
                足を止めずに回りたいか、ゆっくり味わいたいか。
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
                16種類の個性豊かなタイプ
              </h2>
              <p className="text-gray-500">
                冒険家からまどろみ派まで。あなたはどれに当てはまる？
              </p>
            </div>
            <Link
              href="/types"
              className="text-orange-600 font-bold flex items-center gap-1 hover:underline"
            >
              すべてのタイプを見る →
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
          <h2 className="text-2xl font-bold mb-3">TPTIでわかること</h2>
          <p className="text-gray-500 mb-10">
            4つの軸から導き出される、あなただけの旅の取扱説明書
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">旅の行動傾向</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                計画の立て方から当日の動きまで、あなたの深層心理にある行動パターンを4つの軸で分析します。
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">おすすめの国内スポット</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                あなたのタイプに最もマッチする、日本国内の観光地や穴場スポットを具体的に提案します。
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">3つの相性タイプ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ベストパートナーを含む相性の良い3タイプを紹介。一緒に旅をすると相乗効果で楽しさが倍増する相手がわかります。
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">旅の注意点とアドバイス</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                楽しみを最大化し、トラブルを回避するためのワンポイントアドバイスもお届けします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2026 TPTI
          </p>
        </div>
      </footer>
    </div>
  );
}
