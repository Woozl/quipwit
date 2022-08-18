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
      <footer className={styles.footer}>
        <span className={styles.howToPlay}>
          <a href="#">How to play</a>
        </span>
        <span>
          Made with 💜 by{" "}
          <a
            href="https://davidglymph.com"
            target="__blank"
            rel="noopener noreferrer"
          >
            David Glymph
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Intro;
