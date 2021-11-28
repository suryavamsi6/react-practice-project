import styles from "./OutputField.module.css";
import Card from "../UI/Card";

const OutputField = (props) => {
  return (
    <div className={styles["output-field-div"]}>
      <Card className={styles["output-field-card"]}>
        <p>Name (Age)</p>
      </Card>
    </div>
  );
};

export default OutputField;
