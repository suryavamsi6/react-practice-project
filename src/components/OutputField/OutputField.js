import styles from "./OutputField.module.css";
import Card from "../UI/Card";

const OutputField = (props) => {
  return (
    <div className={styles["output-field-div"]}>
      {props.data.map((userData) => (
        <Card key={userData.id} className={styles["output-field-card"]}>
          {userData.name} ({userData.age})
        </Card>
      ))}
    </div>
  );
};

export default OutputField;
