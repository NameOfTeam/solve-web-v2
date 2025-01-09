import { User } from "../user/user";

export interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}
