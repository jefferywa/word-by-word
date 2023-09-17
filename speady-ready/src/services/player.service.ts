import { type MapStore } from "nanostores";

import { ReaderService } from "./reader.service";

import { type IPlayerStore, initialPlalerStore } from "../stores/player";
import { DEFAULT_WPM } from "../constants";

type PlayerServiceOptions = {
  store: MapStore<IPlayerStore>;
  wpm: number;
};

interface Player {
  play(): void;
  pause(): void;
  changeContent(content: string): void;
  changeSpeed(wpm: number): void;
  moveTo(position: number): void;
}

export class PlayerService implements Player {
  private _reader: ReaderService;
  private _isAborted: boolean = false;

  public store: MapStore<IPlayerStore>;

  constructor(content: string, options: PlayerServiceOptions) {
    this.store = options?.store;
    this._reader = new ReaderService(content, options);
  }

  async play() {
    this._isAborted = false;
    const promisifiedEntries = this._reader.getPromisifiedEntries();

    this.store.setKey("playingState", "playing");
    this.store.setKey("promisifiedEntries", promisifiedEntries);

    const { currentEntryIdx } = this.store.get();

    const restOfEntries = promisifiedEntries.slice(currentEntryIdx);

    for (const entry of restOfEntries) {
      this.store?.setKey(
        "progressInPercent",
        this.getPercentage(this.store.get().currentEntryIdx)
      );

      if (this._isAborted) {
        this._isAborted = false;
        return;
      }

      const nextWord = await entry();

      this.store?.setKey("currentWord", nextWord);

      this.store.setKey(
        "currentEntryIdx",
        this.store.get().currentEntryIdx + 1
      );
    }

    this.store?.setKey("playingState", "ended");
  }

  pause() {
    this._isAborted = true;
    this.store?.setKey("playingState", "paused");
  }

  cancel() {
    this._isAborted = true;
    this.store.set(initialPlalerStore);
  }

  changeSpeed(wpm: number) {
    const { playingState } = this.store.get();

    playingState === "playing" && this.pause();

    this._reader.setWpm(wpm);
    this.store?.setKey(
      "promisifiedEntries",
      this._reader.getPromisifiedEntries()
    );
  }

  changeContent(content: string) {
    const { playingState } = this.store.get();

    playingState === "playing" && this.pause();

    this._reader = new ReaderService(content, {
      store: this.store,
      wpm: this.store.get().speedInWpm || DEFAULT_WPM,
    });

    this.store?.setKey(
      "promisifiedEntries",
      this._reader.getPromisifiedEntries()
    );
  }

  moveTo(position: number) {
    this.store?.setKey(
      "promisifiedEntries",
      this._reader.getPromisifiedEntries()
    );

    const { promisifiedEntries, currentEntryIdx } = this.store.get();

    this._isAborted = true;

    this.store?.setKey(
      "currentEntryIdx",
      Math.floor((promisifiedEntries.length / 100) * position)
    );

    promisifiedEntries[currentEntryIdx]().then(() => {
      this.play();
    });
  }

  getPercentage(idx: number) {
    return Math.floor(((idx + 1) / this.store.get().entries.length) * 100);
  }
}
