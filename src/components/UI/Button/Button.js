import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return <div className={`${styles["button"]} ${props.className}`}>
    <button onClick={props.onClick} type={props.type} >{props.name}</button>
  </div>;
};

export default Button;
