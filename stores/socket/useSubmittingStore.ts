import { SubmittingState } from "@/types/zustand/submittingState";
import { create } from "zustand";

export const useSubmittingStore = create<SubmittingState>((set) => ({
  submitting: false,
  setSubmitting: (submitting: boolean) => set({ submitting }),
}));
