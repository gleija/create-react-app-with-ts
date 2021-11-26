import React, { useRef } from "react";
import classes from "./NewForm.module.css";

const NewForm: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputValue = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputValue.current!.value;
    if (enteredText.length === 0) {
      // throw an error
      return;
    }
    props.onAddTodo(enteredText);
  };

  return (
    <form className={classes.form}>
      <label htmlFor="text">My Form</label>
      <input id="text" ref={inputValue} type="text" />
      <button type="button" onClick={submitHandler}>
        Add Todo
      </button>
    </form>
  );
};

export default NewForm;
