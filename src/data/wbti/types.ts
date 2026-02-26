export type WeekendBossTypeID =
  | "ESFT" | "ESFA" | "ESBT" | "ESBA"
  | "EWFT" | "EWFA" | "EWBT" | "EWBA"
  | "PSFT" | "PSFA" | "PSBT" | "PSBA"
  | "PWFT" | "PWFA" | "PWBT" | "PWBA";

export interface RecommendedJob {
  title: string;
  description: string;
}

export interface CompatibleType {
  id: WeekendBossTypeID;
  sharedTraits: string[];
}

export interface WeekendBossType {
  id: WeekendBossTypeID;
  name: string;
  catchCopy: string;
  description: string;
  strengths: string[];
  warnings: string[];
  quote: string;
  recommendedJobs: RecommendedJob[];
  bestPartner: WeekendBossTypeID;
  compatibleTypes: CompatibleType[];
  color: string;
  image: string;
}

export interface ScoreSet {
  EP: number;
  SW: number;
  FB: number;
  TA: number;
}
