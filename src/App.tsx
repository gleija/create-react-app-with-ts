import "./App.css";
import Todos from "./components/Todo";
import NewForm from "./components/NewForm";
import TodosContextProvider from "./components/store/todos-context";

const App = () => {
  return (
    <TodosContextProvider>
      <NewForm />
      <Todos />
    </TodosContextProvider>
  );
};

export default App;
