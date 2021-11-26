import React, { useContext } from "react";
import Todo from "../models/Todo";
import { TodoList } from "./TodoList";
import classes from "./Todo.module.css";
import { TodosContext } from "./store/todos-context";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          onCLickHandler={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
