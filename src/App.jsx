import { useState } from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem";
import { AddTodoInput } from "./components/AddTodoInput";
import { Filter } from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const todoList = filteredTodos.length ? filteredTodos : todos;

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

  function handleFilter(description) {
    const newFilteredTodos = todos.filter((todo) => todo.description.includes(description));

    setFilteredTodos(newFilteredTodos);
  }

  return (
    <>
      <h1>Todo List</h1>

      <Filter onFilterChange={handleFilter} />
      <AddTodoInput onAddItem={handleAddNewTodoItem} />

      {todoList.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} description={todo.description} onEditItem={handleEditItem} />
      ))}
    </>
  );
}
export default App;
