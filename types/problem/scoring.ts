import { ProblemSubmitState } from "./problem";

export interface ScoringData {
  result: ProblemSubmitState;
  progress: number;
  submitId: string;
  language?: string;
  memoryUsage?: string;
  timeUsage?: string;
}