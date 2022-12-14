import Button from "../../Button/Button";
import HorizontalRule from "../../HorizontalRule/HorizonalRule";
import InputCodeField from "../../InputCodeField/InputCodeField";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quipwit</h1>
      <InputCodeField />
      <Button onClick={() => console.log("Join button clicked")}>
        Join Game
      </Button>
      <HorizontalRule text="or" width="200px" />
      <Button onClick={() => console.log("Create button clicked")}>
        Create Game
      </Button>
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
