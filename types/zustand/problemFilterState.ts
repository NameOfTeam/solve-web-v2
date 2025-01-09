import { Tier } from "../tier/tier";

export interface ProblemFilterState {
  states: string[];
  tiers: Tier[];
  order: string;
  setStates: (states: string[]) => void;
  setTiers: (tiers: Tier[]) => void;
  setOrder: (filter: string) => void;
}
