export interface WokrbookFilterState {
  filter: null | "POPULAR" | "BOOKMARKED";
  setFilter: (filter: null | "POPULAR" | "BOOKMARKED") => void;
}