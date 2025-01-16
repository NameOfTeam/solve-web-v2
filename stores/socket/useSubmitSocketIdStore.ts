import { SocketIdState } from "@/types/zustand/socketIdState";
import { create } from "zustand";

export const useSubmitSocketIdStore = create<SocketIdState>((set) => ({
  id: 0,
  setId: (id: number) => set({ id }),
}));
