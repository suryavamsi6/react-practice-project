import styles from "./InputFormFields.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import Modal from "../UI/Modal";

const InputFormFields = (props) => {
  const [enteredUserInput, setEnteredUserInput] = useState({
    enteredName: "",
    enteredAge: "",
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserInput.enteredName.trim().length === 0 ||
      enteredUserInput.enteredAge.trim().length === 0
    ) {
      props.empty(true);
      return;
    }
    const enteredUserData = {
      name: enteredUserInput.enteredName,
      age: enteredUserInput.enteredAge,
      id: Math.random().toString(),
    };

    props.empty(false);
    props.onSaveData(enteredUserData);
    setEnteredUserInput((prevState) => {
      return {
        ...prevState,
        enteredName: "",
        enteredAge: "",
      };
    });
  };

  const nameChangeHandler = (event) => {
    setEnteredUserInput((prevState) => {
      return {
        ...prevState,
        enteredName: event.target.value,
      };
    });
  };

  const ageChangeHandler = (event) => {
    setEnteredUserInput((prevState) => {
      return {
        ...prevState,
        enteredAge: event.target.value,
      };
    });
  };

  return (
    <div>
      <Card className={styles["form-card"]}>
        <form onSubmit={formSubmitHandler}>
          <label>Username</label>
          <input
            onChange={nameChangeHandler}
            value={enteredUserInput.enteredName}
            type="text"
          />
          <label>Age (Years)</label>
          <input
            onChange={ageChangeHandler}
            value={enteredUserInput.enteredAge}
            type="text"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default InputFormFields;
