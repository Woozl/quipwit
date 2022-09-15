import { ChangeEvent, useCallback, useState } from "react";
import Button from "../../Button/Button";
import styles from "./QuestionForm.module.css";

interface QuestionFormProps {
  roundId: number;
  currentQuestion: number;
  numberOfQuestions: number;
  questionText: string;
  numberOfPromptFields: number;
}

const QuestionForm = ({
  roundId,
  currentQuestion,
  numberOfQuestions,
  questionText,
  numberOfPromptFields,
}: QuestionFormProps) => {
  const [answers, setAnswers] = useState<string[]>(
    new Array(numberOfPromptFields).fill("")
  );

  const promptChangeHandler = useCallback(
    (index: number, e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      setAnswers((prevAnswers) => {
        prevAnswers[index] = e.target.value;
        return prevAnswers.slice();
      });
    },
    []
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Round {roundId}</h2>
        <h2>
          Question {currentQuestion}/{numberOfQuestions}
        </h2>
      </header>
      <h1 className={styles.question}>{questionText}</h1>
      <div className={styles.promptContainer}>
        <div className={styles.prompts}>
          {[...new Array(numberOfPromptFields)].map((_, i) => (
            <input
              key={i}
              className={styles.promptInput}
              onChange={(event) => promptChangeHandler(i, event)}
            />
          ))}
        </div>
        <div className={styles.submitButton}>
          <Button
            text="Submit"
            onClick={() => console.log("Submit Button Pressed")}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
