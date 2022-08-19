import Checkbox from "../Checkbox";
import styles from "./GameSettings.module.css";

const GameSettings = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Game</h1>
      <div className={styles.roundPicker}></div>
      <Checkbox label="Check to use this device as a display" />
    </div>
  );
};

export default GameSettings;
