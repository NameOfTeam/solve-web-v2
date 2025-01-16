import { ScoringState } from "@/types/zustand/scoringState";
import { create } from "zustand";

export const useScoringStore = create<ScoringState>((set) => ({
  scoringData: null,
  setScoringData: (scoringData) => set({ scoringData }),
}));
