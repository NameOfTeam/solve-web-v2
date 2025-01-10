import { WokrbookFilterState } from "@/types/zustand/workbookFilterState";
import { create } from "zustand";

export const useWorkbookFilterStore = create<WokrbookFilterState>(set=>({
  filter: null,
  setFilter: (filter) => set({ filter })
}));