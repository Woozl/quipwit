import styles from "./RoundCard.module.css";

const RoundCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Drag</span>
        <span>X</span>
      </div>
      <div className={styles.settings}>
        <select name="type" id="type">
          <option value="Quiplash">Quiplash 1</option>
          <option value="Quiplash Classic">Quiplash Classic</option>
          <option value="Thriplash">Thriplash</option>
          <option value="Quiplash XL">Quiplash XL</option>
        </select>
        <label htmlFor="playersPerPrompt">Players per prompt:</label>
        <input
          type="number"
          id="playersPerPrompt"
          name="playersPerPrompt"
          min="2"
          max="5"
        ></input>
        <label htmlFor="numberOfQuestions">Number of questions:</label>
        <input
          type="number"
          id="numberOfQuestions"
          name="numberOfQuestions"
          min="1"
          max="30"
        ></input>
        <label htmlFor="numberOfQuestions">Time per question:</label>
        <input
          type="number"
          id="numberOfQuestions"
          name="numberOfQuestions"
          min="10"
          max="300"
        ></input>
      </div>
    </div>
  );
};

export default RoundCard;
