import { render } from "preact";
import { useStore } from "@nanostores/preact";

import { Setup } from "./components/Setup/Setup";
import { Player } from "./components/Player/Player";
import { Transition } from "./components/Transition/Transition";

import { PlayerService } from "./services/player.service";
import { PlayerStore, PlayingState } from "./stores/player";

import { DEFAULT_WPM } from "./constants";

import "./style.css";

const player = new PlayerService("", { store: PlayerStore, wpm: DEFAULT_WPM });

export function App() {
  const { playingState } = useStore(PlayerStore);

  const setupReading = async (content: string) => {
    player.changeContent(content);
    player.play();
  };

  return (
    <main class="view">
      <Setup onSubmit={setupReading} />

      <div className="player-view">
        <Transition
          visibility={!(["idle"] as PlayingState[]).includes(playingState)}
        >
          <Player player={player} />
        </Transition>
      </div>
    </main>
  );
}

render(<App />, document.getElementById("app"));
