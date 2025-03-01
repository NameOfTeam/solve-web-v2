import {ProblemSubmitState} from "@/types/problem/problem";

export interface SubmitSocket {
  submitId: number;
  progress: number;
  result: ProblemSubmitState;
}