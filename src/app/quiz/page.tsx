"use client";

import { useState, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { questions, Question } from "../../data/questions";
import { calculateScores, determineTravelType } from "../../lib/scoring";

function shuffleQuestions(qs: Question[]): Question[] {
    const shuffled = [...qs];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    for (let attempt = 0; attempt < 10; attempt++) {
        let hasTriple = false;
        for (let i = 0; i < shuffled.length - 2; i++) {
            if (
                shuffled[i].axis === shuffled[i + 1].axis &&
                shuffled[i + 1].axis === shuffled[i + 2].axis
            ) {
                hasTriple = true;
                const swapTarget = Math.min(
                    i + 3 + Math.floor(Math.random() * (shuffled.length - i - 3)),
                    shuffled.length - 1
                );
                [shuffled[i + 2], shuffled[swapTarget]] = [shuffled[swapTarget], shuffled[i + 2]];
            }
        }
        if (!hasTriple) break;
    }
    return shuffled;
}

const OPTIONS = [
    { label: "すごく当てはまる", value: 5, color: "bg-orange-500 hover:bg-orange-600" },
    { label: "やや当てはまる", value: 4, color: "bg-orange-400 hover:bg-orange-500" },
    { label: "どちらともいえない", value: 3, color: "bg-gray-400 hover:bg-gray-500" },
    { label: "あまり当てはまらない", value: 2, color: "bg-orange-300 hover:bg-orange-400 opacity-80" },
    { label: "全く当てはまらない", value: 1, color: "bg-orange-200 hover:bg-orange-300 opacity-60" },
];

const OPTIONS_REVERSED = [...OPTIONS].reverse();

export default function QuizPage() {
    const router = useRouter();
    const shuffledRef = useRef<Question[] | null>(null);
    const displayReversedRef = useRef<boolean[] | null>(null);

    const shuffledQuestions = useMemo(() => {
        if (!shuffledRef.current) {
            shuffledRef.current = shuffleQuestions(questions);
        }
        return shuffledRef.current;
    }, []);

    const displayReversed = useMemo(() => {
        if (!displayReversedRef.current) {
            displayReversedRef.current = shuffledQuestions.map(() => Math.random() > 0.5);
        }
        return displayReversedRef.current;
    }, [shuffledQuestions]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [isTransitioning, setIsTransitioning] = useState(false);

    const currentQuestion = shuffledQuestions[currentIndex];
    const progress = ((currentIndex + 1) / shuffledQuestions.length) * 100;
    const isReversedDisplay = displayReversed[currentIndex];
    const currentOptions = isReversedDisplay ? OPTIONS_REVERSED : OPTIONS;

    const handleAnswer = (value: number) => {
        if (isTransitioning) return;

        setAnswers((prev) => ({
            ...prev,
            [currentQuestion.id]: value,
        }));

        if (currentIndex < shuffledQuestions.length - 1) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prev) => prev + 1);
                setIsTransitioning(false);
            }, 300);
        } else {
            const finalAnswers = { ...answers, [currentQuestion.id]: value };
            const scores = calculateScores(finalAnswers);
            const type = determineTravelType(scores);
            router.push(`/result/${type}`);
        }
    };

    const handleBack = () => {
        if (isTransitioning || currentIndex === 0) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => prev - 1);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="h-2 bg-gray-100 w-full">
                    <div
                        className="h-full bg-gradient-to-r from-orange-500 to-rose-500 transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="p-8 sm:p-12">
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center gap-4">
                            {currentIndex > 0 && (
                                <button
                                    onClick={handleBack}
                                    className="text-gray-400 hover:text-orange-500 transition-colors"
                                    aria-label="前の質問に戻る"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 12H5" />
                                        <path d="m12 19-7-7 7-7" />
                                    </svg>
                                </button>
                            )}
                            <Link href="/" className="text-sm font-black text-orange-500 tracking-tight hover:text-orange-600 transition-colors">
                                TPTI
                            </Link>
                        </div>
                        <span className="text-sm font-black text-gray-400 uppercase tracking-widest">
                            {currentIndex + 1} / {shuffledQuestions.length}
                        </span>
                    </div>

                    <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-12">
                            {currentQuestion.text}
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                            {currentOptions.map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => handleAnswer(opt.value)}
                                    className="group relative flex items-center justify-between p-5 rounded-2xl border-2 border-gray-100 hover:border-orange-500 hover:bg-orange-50/30 transition-all duration-200 text-left"
                                >
                                    <span className="text-lg font-bold text-gray-700 group-hover:text-orange-600">
                                        {opt.label}
                                    </span>
                                    <div className={`w-3 h-3 rounded-full ${opt.color} group-hover:scale-125 transition-transform`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 text-center">
                    <p className="text-xs text-gray-400 font-medium tracking-wide">
                        あなたの回答は統計的に処理され、性格タイプ判定のみに使用されます。
                    </p>
                </div>
            </div>
        </div>
    );
}
