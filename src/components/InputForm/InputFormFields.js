import styles from "./InputFormFields.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const InputFormFields = (props) => {
  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredAge: "",
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  const nameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredName: event.target.value,
      };
    });
  };

  const ageChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAge: event.text.value,
      };
    });
  };
  return (
    <Card className={styles["form-card"]}>
      <form onSubmit={formSubmitHandler}>
        <label>Username</label>
        <input onChange={nameChangeHandler} type="text" />
        <label>Age (Years)</label>
        <input onChange={ageChangeHandler} type="text" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default InputFormFields;
