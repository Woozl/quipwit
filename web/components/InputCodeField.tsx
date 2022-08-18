import VerificationInput from "react-verification-input";
import styles from "./InputCodeField.module.css";

const InputCodeField = () => {
  return (
    <VerificationInput
      onChange={(e) => console.log(e)}
      length={4}
      validChars="A-Za-z"
      placeholder=""
      classNames={{
        container: styles.container,
        character: styles.character,
        characterInactive: styles.characterInactive,
        characterSelected: styles.characterSelected,
      }}
    />
  );
};

export default InputCodeField;
