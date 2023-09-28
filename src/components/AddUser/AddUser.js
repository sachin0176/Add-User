import React, { useState,  useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
let message = "";
let title = "";
const AddUser = (props) => {

  const [isValid, setIsValid]=useState(true)
  const usernameInput = useRef();
  const ageInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = usernameInput.current.value;
    const enteredAge = ageInput.current.value;

    if (
     enteredName.trim().length === 0 &&
      +enteredAge === 0
    ) {
      setIsValid(false);
      title = "Invalid input";
      message = "Please enter a valid name and age (non-empty values)";
    } else if (+enteredAge <= 0) {
      setIsValid(false);
      title = "Invalid age";
      message = "Please enter a valid age > 0";
    } else if (enteredName.trim().length === 0) {
      setIsValid(false);
      title = "Empty name";
      message = "Please enter a valid name";
    } else {
      props.onAddUser(enteredName, enteredAge);
      usernameInput.current.value = "";
      ageInput.current.value = "";
    }
  };

  const confirmHandler = () => {
    setIsValid(true);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <Card>
          <div className={styles["form-control"]}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={usernameInput} />
          </div>

          <div className={styles["form-control"]}>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInput} />
          </div>

          <Button name="Add User" type="submit" />
        </Card>
      </form>
      {!isValid && (
        <ErrorModal
          onConfirm={confirmHandler}
          title={title}
          message={message}
        />
      )}
    </>
  );
};

export default AddUser;
