import styles from "./Checkbox.module.css";
import React, { useState } from "react";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
}

const Checkbox = ({
  label,
  checked = false,
  disabled = false,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.checkboxWrapper}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          disabled={disabled}
          className={isChecked ? styles.checked : styles.notChecked}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
