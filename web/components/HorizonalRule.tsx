import styles from "./HorizontalRule.module.css";

interface HorizontalRuleProps {
  text: string;
  width?: number | string;
  thickness?: number | string;
}

const HorizontalRule = ({
  text,
  width,
  thickness = 4,
}: HorizontalRuleProps) => {
  return (
    <div className={styles.container} style={{ width }}>
      <div className={styles.line} style={{ height: thickness }} />
      <span>{text}</span>
      <div className={styles.line} style={{ height: thickness }} />
    </div>
  );
};

export default HorizontalRule;
