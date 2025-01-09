export interface ContestFilterState {
  filter: null | "UPCOMING" | "ONGOING" | "ENDED";
  setFilter: (filter: null | "UPCOMING" | "ONGOING" | "ENDED") => void;
}