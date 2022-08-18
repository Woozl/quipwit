import Button from "../Button";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quipwit</h1>
      <Button />
    </div>
  );
};

export default Intro;
