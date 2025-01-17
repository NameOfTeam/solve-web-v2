import { ProblemSubmitState } from "@/types/problem/problem";

export const isWrongAnswer = (status: ProblemSubmitState) => {
  switch(status){
    case "ACCEPTED":
      return false;
    default:
      return true; 
  }
}