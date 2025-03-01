import { ProblemSubmitState } from "./problem";

export interface SubmitData {
  id: number;
  result: ProblemSubmitState;
  language?: string;
  memoryUsage?: string;
  timeUsage?: string;
}