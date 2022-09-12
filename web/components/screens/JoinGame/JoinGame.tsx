import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../Button/Button";
import CharacterRadio from "./CharacterRadio/CharacterRadio";
import styles from "./JoinGame.module.css";

const MAX_NAME_LENGTH = 20;

const JoinGame = () => {
  const [name, setName] = useState("");
  const [character, setCharacter] = useState("");

  const handleNameChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setName(value.slice(0, MAX_NAME_LENGTH));
  };

  const handleCharacterChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (value) setCharacter(value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Join Game</h1>
      <div className={styles.center}>
        <div className={styles.nameField}>
          <h2>Enter your name:</h2>
          <input type="input" onChange={handleNameChange} value={name} />
          <div className={styles.charsRemaining}>{`${
            MAX_NAME_LENGTH - name.length
          } characters remaining`}</div>
        </div>
        <div className={styles.characterSelector}>
          <h2>Select character:</h2>
          <div
            className={styles.characterGrid}
            onChange={handleCharacterChange}
          >
            <CharacterRadio character="bread" />
            <CharacterRadio character="diamond" />
            <CharacterRadio character="hotdog" />
            <CharacterRadio character="egg" />
            <CharacterRadio character="heart" />
            <CharacterRadio character="ghost" />
            <CharacterRadio character="fish" />
            <CharacterRadio character="cherries" />
            <CharacterRadio character="lightbulb" />
            <CharacterRadio character="avocado" />
          </div>
        </div>
      </div>
      <div className={styles.joinGameButton}>
        <Button
          text="Join"
          onClick={() => console.log("Join button clicked")}
        />
      </div>
    </div>
  );
};

export default JoinGame;
