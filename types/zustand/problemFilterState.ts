export interface ProblemFilterState {
  states: string[];
  tiers: string[];
  order: string;
  setStates: (states: string[]) => void;
  setTiers: (tiers: string[]) => void;
  setOrder: (filter: string) => void;
}
