"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { questions } from "../../data/questions";
import { calculateScores, determineTravelType } from "../../lib/scoring";

export default function QuizPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showError, setShowError] = useState(false);

  const handleSelect = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (showError) setShowError(false);
  };

  const handleSubmit = () => {
    const unanswered = questions.filter((q) => !(q.id in answers));
    if (unanswered.length > 0) {
      setShowError(true);
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
          <Link
            href="/"
            className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500"
          >
            TPTI
          </Link>
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
                    : "border-gray-100"
                }`}
              >
                {/* Question text */}
                <p className="text-sm sm:text-base font-bold text-gray-800 mb-4 leading-relaxed">
                  <span className="text-gray-400 mr-2">{index + 1}.</span>
                  {q.text}
                </p>

                {/* 5-point scale */}
                <div className="flex items-center justify-center gap-4 sm:gap-5">
                  <span className="text-xs font-bold shrink-0" style={{ color: "#f472b6" }}>
                    思わない
                  </span>
                  <div className="flex items-center gap-3 sm:gap-4">
                    {[1, 2, 3, 4, 5].map((value) => {
                      const isSelected = answers[q.id] === value;
                      const sizes: Record<number, number> = { 1: 44, 2: 38, 3: 32, 4: 38, 5: 44 };
                      const s = sizes[value];

                      return (
                        <button
                          key={value}
                          onClick={() => handleSelect(q.id, value)}
                          style={{
                            width: s,
                            height: s,
                          }}
                          className={`rounded-full transition-all duration-200 flex-shrink-0 ${
                            isSelected
                              ? "bg-gray-700 shadow-md scale-110"
                              : "bg-gray-200 hover:bg-gray-300"
                          }`}
                          aria-label={`${value}点`}
                        />
                      );
                    })}
                  </div>
                  <span className="text-xs font-bold shrink-0" style={{ color: "#34d399" }}>
                    そう思う
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
