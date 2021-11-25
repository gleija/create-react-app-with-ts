import "./App.css";
import Todo from "./models/Todo";
import Todos from "./components/Todo";

const App = () => {
  const todos = [new Todo("Learn React"), new Todo("Learn Ts")];
  return <Todos items={todos} />;
}

export default App;
