export interface Problem {
  id: number;
  title: string;
  content: string;
  input: string;
  output: string;
  memoryLimit: number;
  timeLimit: number;
  correctRate: number;
  testCases: ProblemTestCase[];
  author: ProblemAuthorResponse;
  state?: ProblemSubmitState;
}

interface ProblemAuthorResponse {
  username: string;
}

export interface ProblemTestCase {
  id: number;
  input: string;
  output: string;
}

export interface SubmitCode {
  code: string;
  testCases: ProblemTestCase[];
  language: string;
  timeLimit: number;
  memoryLimit: number;
}

export interface ProblemSubmitResponse {
  id: number;
  result: string;
}

export interface ProblemSubmitProgressResponse {
  submitId: number;
  progress: number;
  result: ProblemSubmitState;
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
