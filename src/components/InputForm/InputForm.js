import styles from "./InputForm.module.css";

import InputFormFields from "./InputFormFields";
import OutputField from "../OutputField/OutputField";
import { useState } from "react";
import Modal from "../UI/Modal";

const DUMMY_DATA = [
  {
    id: "d1",
    name: "John Doe",
    age: "34",
  },
];

const InputForm = (props) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const [inputData, setInputData] = useState(DUMMY_DATA);

  const saveDataHandler = (enteredUserData) => {
    setInputData((prevState) => {
      return [enteredUserData, ...prevState];
    });
  };

  const emptyHandler = (emptyValue) => {
    setIsEmpty(emptyValue);
  };
  return (
    <div className={styles["form-div"]}>
      <Modal empty={isEmpty} />
      <InputFormFields onSaveData={saveDataHandler} empty={emptyHandler} />
      <OutputField data={inputData} />
    </div>
  );
};

export default InputForm;
