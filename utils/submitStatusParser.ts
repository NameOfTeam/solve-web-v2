import { ProblemSubmitState } from "@/types/problem/problem";

export const submitStatusParser = (status: ProblemSubmitState): string => {
  switch (status) {
    case "ACCEPTED":
      return "200 OK";
    case "WRONG_ANSWER":
      return "400 Wrong Answer";
    case "PRESENTATION_ERROR":
      return "422 Incorrect Output Format";
    case "TIME_LIMIT_EXCEEDED":
      return "408 Reqeust Timeout";
    case "MEMORY_LIMIT_EXCEEDED":
      return "507 Memory Exceeded";
    case "RUNTIME_ERROR":
      return "500 Runtime Error";
    case "PENDING":
      return "202 Pending";
    case "JUDGING":
    case "JUDGING_IN_PROGRESS":
      return "102 Processing";
    default:
      return "500 Internal Server Error";
  }
};
