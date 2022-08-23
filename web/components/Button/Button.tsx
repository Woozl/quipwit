import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  style?: string;
}

const Button = ({ text, style }: ButtonProps) => {
  return (
    <button className={styles.pushable}>
      <span className={styles.shadow}></span>
      <span className={styles.edge}></span>
      <span className={styles.front}>{text}</span>
    </button>
  );
};

export default Button;
