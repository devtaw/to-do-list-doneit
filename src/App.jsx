import { useState } from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem";
import { AddTodoInput } from "./components/AddTodoInput";
function App() {
  const [todos, setTodos] = useState([]);

  function handleAddNewTodoItem(description) {
    setTodos((todos) => [
      ...todos,
      {
        description,
        isCompleted: false,
      },
    ]);
  }

  return (
    <>
      <h1>Done It - Lista de Tarefas</h1>

      <AddTodoInput onAddItem={handleAddNewTodoItem} />

      {todos.map((todo) => (
        <TodoItem description={todo.description} />
      ))}
    </>
  );
}
export default App;
