import { User } from "@/types/user/user";
import { UserState } from "@/types/zustand/userState";
import { create } from "zustand";

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
}));
