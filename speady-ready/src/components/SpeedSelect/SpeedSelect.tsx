import { useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";

import low from "../../../public/turtle.png";
import medium from "../../../public/cat.png";
import high from "../../../public/alien.png";

import { Button } from "../Button/Button";

import { PlayerStore } from "../../stores/player";

import styles from "./SpeedSelect.module.css";

const SPEED_OPTIONS = [
  {
    label: "Low speed (100 words per minute)",
    value: 100,
    icon: low,
    iconAlt: "turtle",
    id: "low-speed",
  },
  {
    label: "Medium speed (300 words per minute)",
    value: 300,
    icon: medium,
    iconAlt: "cat",
  },
  {
    label: "High speed (450 words per minute)",
    value: 450,
    icon: high,
    iconAlt: "alien",
  },
];

export const SpeedSelect = ({ onSpeedChange, onCancel }) => {
  const { speedInWpm } = useStore(PlayerStore);
  const [currentSpeed, setCurrentSpeed] = useState(speedInWpm);
  const handleSpeedChange = ({ target }) => setCurrentSpeed(+target.value);

  const handleApplySpeed = () => {
    onSpeedChange(currentSpeed);
    onCancel();
  };

  return (
    <section className={styles.SpeedSelect}>
      <div className={styles.SpeedSelect__content}>
        <div className={styles.SpeedSelect__CurrentValue}>
          <span>
            <strong>{currentSpeed}</strong> Words Per Minute
          </span>
        </div>
        <h3>Choose speed option</h3>
        <div className={styles.SpeedSelect__RadioGroup}>
          {SPEED_OPTIONS.map((option) => (
            <label key={option.value}>
              <input
                onChange={handleSpeedChange}
                className="visually-hidden"
                type="radio"
                name="speed"
                checked={option.value === currentSpeed}
                aria-label={option.label}
                value={option.value}
              />
              <div className="custom-icon">
                <img
                  src={option.icon}
                  alt={option.iconAlt}
                  className={option.id === "low-speed" && styles.LowSpeed}
                />
              </div>
            </label>
          ))}
        </div>
        <h3>or set custom speed</h3>

        <input
          type="range"
          min={100}
          max={700}
          step={50}
          value={currentSpeed}
          onChange={handleSpeedChange}
        />
      </div>
      <div className={styles.SpeedSelect__footer}>
        <Button onClick={handleApplySpeed}>Apply</Button>
        <Button onClick={onCancel} className={styles.CancelButton}>
          Cancel
        </Button>
      </div>
    </section>
  );
};
