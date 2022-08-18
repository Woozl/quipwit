import Button from "../Button";
import HorizontalRule from "../HorizonalRule";
import InputCodeField from "../InputCodeField";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quipwit</h1>
      <InputCodeField />
      <Button text="Join Game" />
      <HorizontalRule text="or" width="400px" />
      <Button text="Create Game" />
    </div>
  );
};

export default Intro;
