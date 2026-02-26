import Link from "next/link";
import { TypeCard } from "../../components/wbti/TypeCard";
import { weekendBossTypes } from "../../data/wbti/weekendBossTypes";

export default function WeekendHome() {
  const featuredTypes = [weekendBossTypes.ESFT, weekendBossTypes.PWBA, weekendBossTypes.EWBT];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/weekend"
            className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500"
          >
            WBTI
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/weekend/types"
              className="text-xs font-bold text-gray-400 hover:text-amber-500 transition-colors"
            >
              16タイプ一覧
            </Link>
            <Link
              href="/weekend/quiz"
              className="text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-yellow-500 px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
            >
              診断する
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 opacity-80" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="mb-2">
            <span className="text-6xl sm:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
              WBTI
            </span>
          </div>
          <div className="text-sm sm:text-base font-bold text-gray-400 tracking-widest mb-2">
            ウィブティ
          </div>
          <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider uppercase mb-10">
            Weekend Boss Type Indicator
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
            週末だけ社長をするなら、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
              あなたはどのタイプ？
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            20の質問に答えて、あなたの週末社長タイプを16種類から診断。<br />
            自分でも気づかなかった「社長の方程式」を見つけましょう。
          </p>
          <p className="text-sm text-gray-400 mb-8">
            20問 / 所要時間 約3分
          </p>

          {/* マスコット */}
          <div className="mb-10">
            <img
              src="/images/tippi.jpg"
              alt="ティッピー"
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/weekend/quiz"
              className="px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-lg font-bold rounded-2xl shadow-[0_10px_40px_-10px_rgba(245,158,11,0.4)] hover:scale-105 transition-transform duration-300"
            >
              診断を開始する（無料・約3分）
            </Link>
            <Link
              href="/weekend/types"
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
              4つの軸であなたの社長スタイルを分析
            </h2>
            <p className="text-gray-500">
              WBTIは4つの性格軸の組み合わせで、16タイプに分類します
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 sm:p-8 rounded-3xl border border-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  E / P
                </span>
                <h3 className="text-lg font-bold text-gray-900">何を売る？</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">Experience vs Product</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                体験派？モノ派？<br />
                教室やイベントを開くか、作品やモノを売るか。
              </p>
            </div>

            <div className="bg-blue-50 p-6 sm:p-8 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  S / W
                </span>
                <h3 className="text-lg font-bold text-gray-900">誰に届ける？</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">Small vs Wide</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                少人数？広く？<br />
                お客さん全員の名前を覚えるか、1万人に届けるか。
              </p>
            </div>

            <div className="bg-emerald-50 p-6 sm:p-8 rounded-3xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  F / B
                </span>
                <h3 className="text-lg font-bold text-gray-900">スタンス</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">Front vs Behind</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                前に出る？裏方？<br />
                自分の名前で活動するか、仕組みを回す側か。
              </p>
            </div>

            <div className="bg-purple-50 p-6 sm:p-8 rounded-3xl border border-purple-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  T / A
                </span>
                <h3 className="text-lg font-bold text-gray-900">動機</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">Thanks vs Amazing</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                ありがとう？すごい？<br />
                感謝されたいか、尊敬されたいか。
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
                週末社長にも色々なスタイルがある。あなたはどれに当てはまる？
              </p>
            </div>
            <Link
              href="/weekend/types"
              className="text-amber-600 font-bold flex items-center gap-1 hover:underline"
            >
              すべてのタイプを見る →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTypes.map((type) => (
              <TypeCard key={type.id} type={type} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust / SEO Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-3">WBTIでわかること</h2>
          <p className="text-gray-500 mb-10">
            4つの軸から導き出される、あなただけの週末社長の取扱説明書
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">あなたの社長タイプ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                4つの軸から導き出される、週末社長としてのスタイル
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">強み・魅力と注意点</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                あなたの武器と気をつけるべきポイントを具体的に解説
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">おすすめの週末ビジネス</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                あなたのタイプに合った、リアルな副業アイデア3選
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">相性の良い社長タイプ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                一緒に組んだら最強のパートナーを紹介
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2026 WBTI
          </p>
        </div>
      </footer>
    </div>
  );
}
