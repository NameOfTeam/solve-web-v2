import {create} from "zustand";
import {SubmittedState} from "@/types/zustand/submittedState";

export const useSubmittedStore = create<SubmittedState>(set=>({
  submitted: null,
  setSubmitted: (submitted) => set({submitted})
}))