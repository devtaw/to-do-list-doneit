import { useState } from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem";
import { AddTodoInput } from "./components/AddTodoInput";
import { Filter } from "./components/Filter";
import { Header, Logo } from "./App.styled";
import logo from "./assets/img/logo-done-it.svg";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterState, setFilterState] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const todoList = filterText.length || filterState !== "all" ? filteredTodos : todos;

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

  function handleEditItem(id, newData) {
    // encontra o indice do item a ser editado
    const todoItemIndex = todos.findIndex((todo) => todo.id === id);
    // cria um novo array de items com a copia do array de items atual
    const newTodos = [...todos];
    // atualiza o item do array com as novas informacoes do item
    newTodos[todoItemIndex] = {
      ...newTodos[todoItemIndex],
      ...newData,
    };
    // atualiza o estado de todos com o novo array de items
    setTodos(newTodos);
  }

  function handleFilter(description) {
    setFilterState("all");
    setFilterText(description);
    const newFilteredTodos = todos.filter((todo) => todo.description.toUpperCase().includes(description.toUpperCase()));
    setFilteredTodos(newFilteredTodos);
  }

  function handleFilterState(state) {
    console.log("handlefilter state: " + state);
    setFilterText("");
    setFilterState(state);
    const newFilteredTodos = todos.filter((todo) => {
      if (state === "done") {
        return todo.isCompleted === true;
      }

      if (state === "undone") {
        return todo.isCompleted === false;
      }

      return true;
    });
    setFilteredTodos(newFilteredTodos);
  }

  function handleDeleteItem(id) {
    // filtra os items que não devem ser removidos
    const newTodos = todos.filter((todo) => todo.id !== id);
    // atualiza o estado de todos com o novo array de items
    setTodos(newTodos);
  }

  return (
    <>
      <Header>
        <Logo src={logo} />

        <Filter onFilterChange={handleFilter} onFilterStateChange={handleFilterState} />
      </Header>

      <AddTodoInput onAddItem={handleAddNewTodoItem} />

      {todoList.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} description={todo.description} isChecked={todo.isCompleted} onEditItem={handleEditItem} onDeleteItem={handleDeleteItem} />
      ))}
    </>
  );
}
export default App;
