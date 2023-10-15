import { useState } from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem";
const FAKE_DATA = [
  {
    description: "Learn React",
    isCompleted: false,
  },
  {
    description: "Learn Vite",
    isCompleted: false,
  },
  {
    description: "Learn Tailwind",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState(FAKE_DATA);
  return (
    <>
      <h1>Todo List</h1>

      {todos.map((todo) => (
        <TodoItem description={todo.description} />
      ))}
    </>
  );
}
export default App;
