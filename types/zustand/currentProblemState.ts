import { Problem } from "../problem/problem";

export interface CurrentProblemState {
  problem: Problem | null;
  setProblem: (problem: Problem | null) => void;
}
