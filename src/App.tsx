import React, { useState } from "react";
import "./App.css";
import Todo from "./models/Todo";
import Todos from "./components/Todo";
import NewForm from "./components/NewForm";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onAddTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };
  return (
    <>
      <NewForm onAddTodo={onAddTodoHandler} />
      <Todos items={todos} />
    </>
  );
};

export default App;
