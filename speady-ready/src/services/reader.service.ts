import { type MapStore } from "nanostores";

import { DEFAULT_WPM, MIN_IN_MS, WPM_WORLD_RECORD } from "../constants";

import { ContentParserService } from "./content-parser.service";

import type { IPlayerStore, PromisifiedEntry } from "../stores/player";

type ReaderEntry = string;
type ReaderOptions = {
  wpm: number;
  store?: MapStore<IPlayerStore>;
};

export class ReaderService {
  private _resolveDelay: number = MIN_IN_MS / DEFAULT_WPM;
  private _store: MapStore<IPlayerStore> | null = null;

  private static _instance: ReaderService | null = null;

  constructor(content: string, options: ReaderOptions) {
    const { store, wpm } = options;
    const normalizedWpm = this.getNormalizedWps(wpm);

    this._store = store;
    this._resolveDelay = MIN_IN_MS / normalizedWpm;
    this._store.setKey("content", content);
    this._store.setKey("entries", ContentParserService.parseContent(content));
    this._store.setKey("speedInWpm", normalizedWpm);
  }

  setWpm(wpm: number) {
    const normalizedWpm = this.getNormalizedWps(wpm);
    this._store.setKey("speedInWpm", normalizedWpm);
    this._resolveDelay = MIN_IN_MS / normalizedWpm;
  }

  getNormalizedWps(rawWps: number): number {
    return rawWps < 0 || rawWps > WPM_WORLD_RECORD ? DEFAULT_WPM : rawWps;
  }

  getPromisifiedEntries(): PromisifiedEntry[] {
    return this._store
      .get()
      .entries.map(
        (entry) => () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(entry), this._resolveDelay)
          )
      );
  }

  public static getInstance() {
    if (!this._instance) {
      this._instance = new ReaderService("", { wpm: DEFAULT_WPM });
    }

    return this._instance;
  }
}
