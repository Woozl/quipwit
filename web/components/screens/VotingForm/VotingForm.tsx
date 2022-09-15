import { ChangeEventHandler, useState } from "react";
import Button from "../../Button/Button";
import styles from "./VotingForm.module.css";

interface VotingFormProps {
  roundId: number;
  currentQuestion: number;
  numberOfQuestions: number;
  questionText: string;
  answers: string[];
}

const VotingForm = ({
  roundId,
  currentQuestion,
  numberOfQuestions,
  questionText,
  answers,
}: VotingFormProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setSelectedAnswer(value);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Round {roundId}</h2>
        <h2>
          Voting {currentQuestion}/{numberOfQuestions}
        </h2>
      </header>
      <h1 className={styles.question}>{questionText}</h1>
      <div className={styles.answerContainer} onChange={handleAnswerChange}>
        {answers.map((answer, i) => (
          <label>
            <input type="radio" value={answer} name="answer" />
            <p>{answer}</p>
          </label>
        ))}
      </div>
      <div className={styles.voteButton}>
        <Button
          text="Vote"
          onClick={() => console.log("Vote button clicked")}
        />
      </div>
    </div>
  );
};

export default VotingForm;
