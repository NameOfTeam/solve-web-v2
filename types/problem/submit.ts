import { ProblemSubmitState } from "./problem";

export interface SubmitData {
  result: ProblemSubmitState;
  progress: number;
  submitId: string;
  language?: string;
  memoryUsage?: string;
  timeUsage?: string;
}