import { ScoreSet, TravelTypeID } from "../data/types";
import { questions } from "../data/questions";

// タイプ判定（5段階リッカート: 各軸7問 × 1~5 = 7~35, 中間21）
export function determineTravelType(scores: ScoreSet): TravelTypeID {
    const ec = scores.EC >= 25 ? "E" : "C";
    const ps = scores.PS >= 25 ? "P" : "S";
    const oi = scores.OI >= 25 ? "O" : "I";
    const ar = scores.AR >= 25 ? "A" : "R";

    return `${ec}${ps}${oi}${ar}` as TravelTypeID;
}

// 5段階リッカート尺度のスコア計算
// answers: { questionId: 1~5 }
export function calculateScores(answers: Record<string, number>): ScoreSet {
    const scores: ScoreSet = { EC: 0, PS: 0, OI: 0, AR: 0 };

    questions.forEach((q) => {
        const rawValue = answers[q.id] || 3; // デフォルト3（ふつう）
        let value = rawValue;

        if (q.isReverse) {
            // 5 -> 1, 4 -> 2, 3 -> 3, 2 -> 4, 1 -> 5
            value = 6 - rawValue;
        }

        scores[q.axis] += value;
    });

    return scores;
}

// 傾向の強さを5段階で返す
export function getInclinationLevel(score: number): number {
    if (score <= 13) return 1; // かなり極B寄り
    if (score <= 20) return 2; // やや極B寄り
    if (score <= 24) return 3; // ほぼ中間
    if (score <= 28) return 4; // やや極A寄り
    return 5; // かなり極A寄り
}
