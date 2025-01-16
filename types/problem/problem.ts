import { Tier } from "../tier/tier";
import { User } from "../user/user";

export interface Problem {
  id: number;
  title: string;
  content: string;
  input: string;
  output: string;
  memoryLimit: number;
  timeLimit: number;
  correctRate: number;
  author: User;
  state?: ProblemSubmitState;
  solvedCount: number;
  tier: Tier;
  isSolved: boolean;
  examples: ProblemExample[];
}

export interface ProblemExample {
  input: string;
  output: string;
  description?: string;
}

export type ProblemSubmitState =
  | "ACCEPTED"
  | "WRONG_ANSWER"
  | "PRESENTATION_ERROR"
  | "TIME_LIMIT_EXCEEDED"
  | "MEMORY_LIMIT_EXCEEDED"
  | "RUNTIME_ERROR"
  | "PENDING"
  | "JUDGING"
  | "JUDGING_IN_PROGRESS";
