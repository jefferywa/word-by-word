import { Progress } from "../Progress/Progress";

import details from "../../../public/menu-dots-vertical.png";

import styles from "./PlayerHead.module.css";

export const PlayerHead = ({ onDetailsClick, onCancel, progress }) => {
  return (
    <div className={styles.PlayerHead}>
      <Progress value={progress} />

      <div className={styles.Actions}>
        <button
          className={styles.DetailsButton}
          onClick={onDetailsClick}
          aria-label="View settings"
        >
          <img src={details} alt="" aria-hidden="true" />
        </button>
        <button
          className={styles.CloseButton}
          onClick={onCancel}
          aria-label="Cancel reading session"
        ></button>
      </div>
    </div>
  );
};
