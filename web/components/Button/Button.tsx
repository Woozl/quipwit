import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  style?: string;
}

const Button = ({ text, onClick, style }: ButtonProps) => {
  return (
    <button className={styles.pushable} onClick={onClick}>
      <span className={styles.shadow}></span>
      <span className={styles.edge}></span>
      <span className={styles.front}>{text}</span>
    </button>
  );
};

export default Button;
