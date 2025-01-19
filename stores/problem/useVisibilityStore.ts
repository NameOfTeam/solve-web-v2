import { VisibilityState } from "@/types/zustand/visibilityState";
import { create } from "zustand";

export const useVisibilityStore = create<VisibilityState>((set) => ({
  visibility: "PUBLIC" as "PUBLIC" | "PRIVATE",
  setVisibility: (visibility) => set({ visibility }),
}));
