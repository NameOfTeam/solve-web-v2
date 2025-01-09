import { ProblemFilterState } from "@/types/zustand/problemFilterState";
import { create } from "zustand";

export const useProblemFilterStore = create<ProblemFilterState>((set) => ({
  states: [],
  tiers: [],
  order: "LATEST",
  setStates: (states: string[]) => set({ states }),
  setTiers: (tiers: string[]) => set({ tiers }),
  setOrder: (order: string) => set({ order }),
}));
