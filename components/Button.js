import styles from "./Button.module.css";
import utils from "../styles/utils.module.css";

const Button = ({ btnText }) => {
  return (
    <button className={`${styles.btn__style} ${utils.m__a__c}`}>
      {btnText}
    </button>
  );
};

export default Button;
