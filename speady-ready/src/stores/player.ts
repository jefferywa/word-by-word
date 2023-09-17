import { map } from "nanostores";

export type PlayingState = "idle" | "playing" | "paused" | "ended";
export type PromisifiedEntry = () => Promise<string>;

export interface IPlayerStore {
  content: string;
  currentWord: string;
  currentEntryIdx: number;
  speedInWpm: number;
  progressInPercent: number;
  playingState: PlayingState;
  entries: string[];
  promisifiedEntries: PromisifiedEntry[];
}

export const initialPlalerStore: IPlayerStore = {
  content: "",
  currentWord: "",
  speedInWpm: 0,
  currentEntryIdx: 0,
  progressInPercent: 0,
  playingState: "idle",
  entries: [],
  promisifiedEntries: [],
};

export const PlayerStore = map<IPlayerStore>(initialPlalerStore);
