import styles from "./InputForm.module.css";

import InputFormFields from "./InputFormFields";
import OutputField from "../OutputField/OutputField";

const InputForm = (props) => {
  return (
    <div className={styles["form-div"]}>
      <InputFormFields />
      <OutputField />
    </div>
  );
};

export default InputForm;
