import { useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";

import { PlayerHead } from "../PlayerHead/PlayerHead";
import { Reader } from "../Reader/Reader";
import { SpeedSelect } from "../SpeedSelect/SpeedSelect";
import { Transition } from "../Transition/Transition";

import { PlayerStore } from "../../stores/player";
import { PlayerService } from "../../services/player.service";

import styles from "./Player.module.css";

export const Player = ({ player }: { player: PlayerService }) => {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const { currentWord, playingState, progressInPercent } =
    useStore(PlayerStore);

  const handleToggle = () => {
    setSettingsVisible(false);
    playingState === "playing" ? player.pause() : player.play();
  };

  const handleSettingsVisibility = {
    show: () => {
      player.pause();
      setSettingsVisible(true);
    },
    hide: () => {
      setSettingsVisible(false);
      player.play();
    },
  };

  const handleChangeSpeed = (value) => player.changeSpeed(value);

  const handleMove = ({ target }) => player.moveTo(+target.value);

  const handleCancel = () => player.cancel();

  return (
    <section className={styles.Player}>
      <PlayerHead
        progress={progressInPercent}
        onDetailsClick={handleSettingsVisibility.show}
        onCancel={handleCancel}
      />

      <Reader word={currentWord} onTogglePlayPause={handleToggle} />

      <input
        type="range"
        value={progressInPercent}
        min={1}
        max={100}
        step={1}
        onChange={handleMove}
      />

      {playingState === "paused" && (
        <span className={styles.Player__annotation}>Tap to play</span>
      )}

      <div className="settings">
        <Transition visibility={settingsVisible}>
          <SpeedSelect
            onSpeedChange={handleChangeSpeed}
            onCancel={handleSettingsVisibility.hide}
          />
        </Transition>
      </div>
    </section>
  );
};
