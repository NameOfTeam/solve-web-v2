export interface ContestFilterState {
  state: null | "UPCOMING" | "ONGOING" | "ENDED";
  setState: (state: null | "UPCOMING" | "ONGOING" | "ENDED") => void;
}