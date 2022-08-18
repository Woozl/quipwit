import styles from "./Button.module.css";

interface ButtonProps {
  style: string;
}

const Button = () => {
  return (
    <button className={styles.pushable}>
      <span className={styles.shadow}></span>
      <span className={styles.edge}></span>
      <span className={styles.front}>Create Game</span>
    </button>
  );
};

export default Button;
