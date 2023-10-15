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
        id: todos.length + 1,
        description,
        isCompleted: false,
      },
    ]);
  }
  function handleEditItem(id, description) {
    // encontra o indice do item a ser editado
    const todoItemIndex = todos.findIndex((todo) => todo.id === id);
    // cria um novo array de items com a copia do array de items atual
    const newTodos = [...todos];
    // atualiza o item do array com o novo valor de description
    newTodos[todoItemIndex] = {
      ...newTodos[todoItemIndex],
      description,
    };
    // atualiza o estado de todos com o novo array de items
    setTodos(newTodos);
  }
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoInput onAddItem={handleAddNewTodoItem} />

      {todos.map((todo) => (
        <TodoItem key={todo.id} description={todo.description} onEditItem={handleEditItem} />
      ))}
    </>
  );
}
export default App;
