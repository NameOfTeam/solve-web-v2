import { BoardFilterState } from "@/types/zustand/boardFilterState";
import { create } from "zustand";

export const useBoardFilterStore = create<BoardFilterState>(set=>({
  state: null,
  setState: (state) => set({ state })
}));