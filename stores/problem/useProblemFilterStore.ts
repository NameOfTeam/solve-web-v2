import { ProblemFilterState } from "@/types/zustand/problemFilterState";
import { create } from "zustand";

export const useProblemFilterStore = create<ProblemFilterState>((set) => ({
  states: [],
  tiers: [],
  order: "LATEST",
  setStates: (states) => set({ states }),
  setTiers: (tiers) => set({ tiers }),
  setOrder: (order) => set({ order }),
}));
