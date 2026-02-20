import { ScoreSet, TravelTypeID } from "../data/types";
import { questions } from "../data/questions";

// タイプ判定（7段階リッカート: 各軸7問 × 1~7 = 7~49, 中間28）
export function determineTravelType(scores: ScoreSet): TravelTypeID {
    const ec = scores.EC >= 28 ? "E" : "C";
    const ps = scores.PS >= 28 ? "P" : "S";
    const oi = scores.OI >= 28 ? "O" : "I";
    const ar = scores.AR >= 28 ? "A" : "R";

    return `${ec}${ps}${oi}${ar}` as TravelTypeID;
}

// 7段階リッカート尺度のスコア計算
// answers: { questionId: 1~7 }
export function calculateScores(answers: Record<string, number>): ScoreSet {
    const scores: ScoreSet = { EC: 0, PS: 0, OI: 0, AR: 0 };

    questions.forEach((q) => {
        const rawValue = answers[q.id] || 4; // デフォルト4（中間）
        let value = rawValue;

        if (q.isReverse) {
            // 7 -> 1, 6 -> 2, 5 -> 3, 4 -> 4, 3 -> 5, 2 -> 6, 1 -> 7
            value = 8 - rawValue;
        }

        scores[q.axis] += value;
    });

    return scores;
}

// 傾向の強さを5段階で返す（7段階リッカート用）
export function getInclinationLevel(score: number): number {
    if (score <= 17) return 1; // かなり極B寄り
    if (score <= 24) return 2; // やや極B寄り
    if (score <= 31) return 3; // ほぼ中間
    if (score <= 38) return 4; // やや極A寄り
    return 5; // かなり極A寄り
}
