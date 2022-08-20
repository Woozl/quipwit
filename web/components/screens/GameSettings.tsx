import Checkbox from "../Checkbox";
import RoundConfiguration from "../RoundConfiguration";
import styles from "./GameSettings.module.css";

const GameSettings = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Game</h1>
      <RoundConfiguration />
      <div>
        <Checkbox label="Use this device as a display" />
        <Checkbox label="Allow adult prompts" />
      </div>
    </div>
  );
};

export default GameSettings;
