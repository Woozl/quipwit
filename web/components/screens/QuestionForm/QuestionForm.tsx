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
        <input className={styles.promptInput} />
        <Button
          text="Submit"
          onClick={() => console.log("Submit Button Pressed")}
        />
      </div>
    </div>
  );
};

export default QuestionForm;