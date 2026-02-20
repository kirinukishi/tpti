export type TravelTypeID =
  | "EPOA" | "EPOR" | "EPIA" | "EPIR"
  | "ESOA" | "ESOR" | "ESIA" | "ESIR"
  | "CPOA" | "CPOR" | "CPIA" | "CPIR"
  | "CSOA" | "CSOR" | "CSIA" | "CSIR";

export interface Spot {
  name: string;
  location: string;
  description: string;
}

export interface CompatibleType {
  id: TravelTypeID;
  sharedTraits: string[]; // 3つの共通点
}

export interface TravelType {
  id: TravelTypeID;
  name: string;
  catchCopy: string;
  description: string;
  strengths: string[];
  warnings: string[];
  quote: string;
  spots: Spot[];
  bestPartner: TravelTypeID;
  compatibleTypes: CompatibleType[]; // 相性の良い3タイプ（1番目=bestPartner）
  color: string; // Tailwind color class or hex
}

export interface ScoreSet {
  EC: number; // Explorer/Classic
  PS: number; // Planner/Spontaneous
  OI: number; // Social(Open)/Solo(Independent)
  AR: number; // Active/Relaxed
}
