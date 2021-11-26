import "./App.css";
import Todo from "./models/Todo";
import Todos from "./components/Todo";
import NewForm from "./components/NewForm";

const onAddTodoHandler = (text: string) => {};

const App = () => {
  const todos = [new Todo("Learn React"), new Todo("Learn Ts")];
  <NewForm onAddTodo={onAddTodoHandler} />;
  return <Todos items={todos} />;
};

export default App;
