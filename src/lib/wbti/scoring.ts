import { ScoreSet, WeekendBossTypeID } from "../../data/wbti/types";
import { questions } from "../../data/wbti/questions";

// タイプ判定（5段階リッカート: 各軸5問 × 1~5 = 5~25, 中間15）
export function determineWeekendBossType(scores: ScoreSet): WeekendBossTypeID {
  const ep = scores.EP >= 15 ? "E" : "P";
  const sw = scores.SW >= 15 ? "S" : "W";
  const fb = scores.FB >= 15 ? "F" : "B";
  const ta = scores.TA >= 15 ? "T" : "A";

  return `${ep}${sw}${fb}${ta}` as WeekendBossTypeID;
}

// 5段階リッカート尺度のスコア計算
// answers: { questionId: 1~5 }
export function calculateScores(answers: Record<string, number>): ScoreSet {
  const scores: ScoreSet = { EP: 0, SW: 0, FB: 0, TA: 0 };

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

// 傾向の強さを5段階で返す（5問 × 1~5 = 5~25）
export function getInclinationLevel(score: number): number {
  if (score <= 8) return 1;   // かなり右寄り
  if (score <= 12) return 2;  // やや右寄り
  if (score <= 17) return 3;  // ほぼ中間
  if (score <= 21) return 4;  // やや左寄り
  return 5;                   // かなり左寄り
}
