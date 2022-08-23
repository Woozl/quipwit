import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import RoundConfiguration from "./RoundConfiguration";
import styles from "./GameSettings.module.css";

const GameSettings = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Game</h1>
      <RoundConfiguration />
      <div className={styles.settings}>
        <Checkbox label="Use this device as a display" />
        <Checkbox label="Allow non-PG prompts" />
      </div>
      <div className={styles.createGameButton}>
        <Button text="Create" />
      </div>
    </div>
  );
};

export default GameSettings;
