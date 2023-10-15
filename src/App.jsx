import { useState } from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem";
import { AddTodoInput } from "./components/AddTodoInput";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Done It - Lista de Tarefas</h1>
      <AddTodoInput />
      {todos.map((todo) => (
        <TodoItem description={todo.description} />
      ))}
    </>
  );
}
export default App;
