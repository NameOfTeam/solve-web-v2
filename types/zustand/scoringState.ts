import { ScoringData } from "../problem/scoring";

export interface ScoringState {
  scoringData: ScoringData | null;
  setScoringData: (scoringData: ScoringData | null) => void;
}