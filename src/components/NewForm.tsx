import React, { useRef, useContext } from "react";
import classes from "./NewForm.module.css";
import { TodosContext } from "./store/todos-context";

const NewForm: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  const inputValue = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputValue.current!.value;
    if (enteredText.length === 0) {
      // throw an error
      return;
    }
    todoCtx.addTodo(enteredText);
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
