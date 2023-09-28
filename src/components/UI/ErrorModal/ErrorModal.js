import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Button from "../Button/Button";
import Card from "../card/Card";

const Backdrop = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles['modal']}>
      <header className={styles['header']}>
        <h2>{props.title}</h2>
      </header>

      <div className={styles['content']}>
        <p>{props.message}</p>
      </div>
      <footer  className={styles["action"]}>
      <Button
        onClick={props.onConfirm}
        type="button"
        name="Okay"
      />
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
