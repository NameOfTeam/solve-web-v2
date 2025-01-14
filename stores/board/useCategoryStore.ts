import { BoardCategoryState } from "@/types/zustand/boardCategoryState";
import { create } from "zustand";

export const useCategoryStore = create<BoardCategoryState>((set) => ({
  category: "FREE",
  setCategory: (category) => set({ category }),
}));
