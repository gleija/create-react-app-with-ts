import React from "react";
import Todo from "../models/Todo";
import { TodoList } from "./TodoList";
import classes from "./Todo.module.css";

const Todos: React.FC<{
  items: Todo[];
  onClickHandlerWithId: (todoId: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          onCLickHandler={props.onClickHandlerWithId.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
