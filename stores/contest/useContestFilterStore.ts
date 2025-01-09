import { ContestFilterState } from "@/types/zustand/contestFilterState";
import { create } from "zustand";

export const useContestFilterStore = create<ContestFilterState>(set=>({
  state: null,
  setState: (state: null | "UPCOMING" | "ONGOING" | "ENDED") => set({ state })
}));