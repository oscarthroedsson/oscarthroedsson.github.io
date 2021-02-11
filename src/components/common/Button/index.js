import React from "react";
import styles from "./button.module.scss";

const Button = ({ text, onClick, submit, name, id, light }) => {
  if (submit) {
    return (
      <input
        type="submit"
        value={text}
        name={name}
        id={id}
        className={`${styles.button} ${light ? styles.light : ""}`}
        onClick={onClick}
      />
    );
  }
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
