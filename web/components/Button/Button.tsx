import { CSSProperties, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  color?: "green" | "purple";
}

const Button = ({
  text,
  onClick,
  style,
  color: version = "green",
}: ButtonProps) => {
  return (
    <button
      className={styles.pushable}
      onClick={onClick}
      style={
        version === "green"
          ? style
          : ({
              "--accent-light": "#2E294E",
              "--accent-dark": "#171332",
              "--text-color": "#D499B9",
              ...style,
            } as CSSProperties)
      }
    >
      <span className={styles.shadow}></span>
      <span
        className={styles.edge}
        style={
          version === "green"
            ? style
            : {
                background:
                  "linear-gradient(to left,#06050c 0%,#171332 8%,#171332 92%,#06050c 100%)",
                ...style,
              }
        }
      ></span>
      <span className={styles.front}>{text}</span>
    </button>
  );
};

export default Button;
