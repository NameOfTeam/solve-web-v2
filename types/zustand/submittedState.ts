import {SubmitData} from "@/types/problem/submit";

export interface SubmittedState {
  submitted: SubmitData | null;
  setSubmitted: (submitted: SubmitData | null) => void;
}