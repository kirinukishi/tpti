"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { questions } from "../data/questions";
import { calculateScores, determineTravelType } from "../lib/scoring";

export default function Home() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showError, setShowError] = useState(false);

  const handleSelect = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (showError) setShowError(false);
  };

  const handleSubmit = () => {
    // 全問回答チェック
    const unanswered = questions.filter((q) => !(q.id in answers));
    if (unanswered.length > 0) {
      setShowError(true);
      // 最初の未回答にスクロール
      const el = document.getElementById(`q-${unanswered[0].id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const scores = calculateScores(answers);
    const type = determineTravelType(scores);
    router.push(`/result/${type.toLowerCase()}`);
  };

  const answeredCount = Object.keys(answers).length;
  const totalCount = questions.length;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
            TPTI
          </span>
          <Link
            href="/types"
            className="text-xs font-bold text-gray-400 hover:text-orange-500 transition-colors"
          >
            16タイプをすべて見る
          </Link>
        </div>
      </header>

      {/* Progress bar */}
      <div className="sticky top-[49px] z-40 h-1 bg-gray-100">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-rose-500 transition-all duration-300"
          style={{ width: `${(answeredCount / totalCount) * 100}%` }}
        />
      </div>

      {/* Main */}
      <main className="max-w-2xl mx-auto px-4 pt-8 pb-32">
        {/* Minimal intro */}
        <div className="text-center mb-10">
          <h1 className="text-xl font-black text-gray-900 mb-1">
            旅行タイプ性格診断
          </h1>
          <p className="text-sm text-gray-400">
            {totalCount}問 / 直感で答えてください
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {questions.map((q, index) => {
            const isAnswered = q.id in answers;
            const isUnansweredError = showError && !isAnswered;

            return (
              <div
                key={q.id}
                id={`q-${q.id}`}
                className={`bg-white rounded-2xl p-5 sm:p-6 border transition-colors ${
                  isUnansweredError
                    ? "border-rose-300 shadow-sm shadow-rose-100"
                    : isAnswered
                      ? "border-gray-100"
                      : "border-gray-100"
                }`}
              >
                {/* Question text */}
                <p className="text-sm sm:text-base font-bold text-gray-800 mb-4 leading-relaxed">
                  <span className="text-gray-400 mr-2">{index + 1}.</span>
                  {q.text}
                </p>

                {/* 7-point scale: そう思う(green) ← → そう思わない(purple) */}
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <span className="text-xs font-bold shrink-0" style={{ color: "#10b981" }}>
                    そう思う
                  </span>
                  <div className="flex items-center gap-2 sm:gap-3">
                    {[7, 6, 5, 4, 3, 2, 1].map((value) => {
                      const isSelected = answers[q.id] === value;
                      // サイズ: 両端大きく、中間小さく
                      const sizes = { 7: 40, 6: 34, 5: 28, 4: 22, 3: 28, 2: 34, 1: 40 };
                      const smSizes = { 7: 44, 6: 38, 5: 32, 4: 26, 3: 32, 2: 38, 1: 44 };
                      // 色: 緑(そう思う) → グレー → 紫(思わない)
                      const colors: Record<number, { border: string; fill: string; hover: string }> = {
                        7: { border: "#10b981", fill: "#10b981", hover: "#d1fae5" },
                        6: { border: "#34d399", fill: "#34d399", hover: "#d1fae5" },
                        5: { border: "#6ee7b7", fill: "#6ee7b7", hover: "#ecfdf5" },
                        4: { border: "#d1d5db", fill: "#9ca3af", hover: "#f3f4f6" },
                        3: { border: "#c4b5fd", fill: "#c4b5fd", hover: "#ede9fe" },
                        2: { border: "#a78bfa", fill: "#a78bfa", hover: "#ede9fe" },
                        1: { border: "#8b5cf6", fill: "#8b5cf6", hover: "#ede9fe" },
                      };
                      const c = colors[value];

                      return (
                        <button
                          key={value}
                          onClick={() => handleSelect(q.id, value)}
                          style={{
                            width: sizes[value as keyof typeof sizes],
                            height: sizes[value as keyof typeof sizes],
                            borderColor: isSelected ? c.fill : c.border,
                            backgroundColor: isSelected ? c.fill : "transparent",
                            transform: isSelected ? "scale(1.15)" : "scale(1)",
                          }}
                          className="rounded-full border-[2.5px] transition-all duration-150 flex-shrink-0 hover:opacity-80"
                          aria-label={`${value}点`}
                        />
                      );
                    })}
                  </div>
                  <span className="text-xs font-bold shrink-0" style={{ color: "#8b5cf6" }}>
                    思わない
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Error message */}
        {showError && (
          <div className="mt-6 text-center">
            <p className="text-sm text-rose-500 font-bold">
              未回答の質問があります（赤枠の質問に回答してください）
            </p>
          </div>
        )}
      </main>

      {/* Fixed bottom submit */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-gray-400 font-bold">
            {answeredCount} / {totalCount}
          </span>
          <button
            onClick={handleSubmit}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
              answeredCount === totalCount
                ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg hover:scale-105"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            診断結果を見る
          </button>
        </div>
      </div>
    </div>
  );
}
