import React from "react";
import classes from "./TodoList.module.css";

export const TodoList: React.FC<{ text: string; onCLickHandler: () => void }> =
  (props) => {
    return (
      <li onClick={props.onCLickHandler} className={classes.item}>
        {props.text}
      </li>
    );
  };
