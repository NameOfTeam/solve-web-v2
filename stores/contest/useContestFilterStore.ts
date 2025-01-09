import { ContestFilterState } from "@/types/zustand/contestFilterState";
import { create } from "zustand";

export const useContestFilterStore = create<ContestFilterState>(set=>({
  filter: null,
  setFilter: (filter: null | "UPCOMING" | "ONGOING" | "ENDED") => set({ filter })
}));