import React, { useState } from "react";
import { Container, Content, FilterByStateContainer } from "./Filter.styled";
import { TextInput } from "./TodoItem.styled";
import { MagnifyingGlass } from "@phosphor-icons/react";

/**
 * @typedef {Object} FilterProps
 * @property {function} onFilterChange
 * @property {function} onFilterStateChange
 *
 * @param {FilterProp} props
 */
export function Filter({ onFilterChange, onFilterStateChange }) {
  const [filterDescription, setFilterDescription] = useState("");
  const [filterStateValue, setFilterStateValue] = useState("all");

  function handleFilterChange(event) {
    setFilterStateValue("all");
    setFilterDescription(event.target.value);
    onFilterChange(event.target.value);
  }

  function handleFilterStateChange(event) {
    setFilterDescription("");
    setFilterStateValue(event.target.value);
    onFilterStateChange(event.target.value);
  }

  return (
    <Content>
      <Container>
        <TextInput
          type="text"
          placeholder="Buscar por tarefa..."
          onChange={handleFilterChange}
          value={filterDescription || ""}
          aria-label="Buscar por tarefa"
        />
        <MagnifyingGlass color="#6985C0" size={32} />
      </Container>

      <FilterByStateContainer>
        <legend>Ou filtre por status:</legend>

        <div>
          <input
            id="filterAll"
            type="radio"
            name="filterState"
            value="all"
            onChange={handleFilterStateChange}
            checked={filterStateValue === "all"}
          />
          <label htmlFor="filterAll">Todos</label>
        </div>

        <div>
          <input
            id="filterDone"
            type="radio"
            name="filterState"
            value="done"
            onChange={handleFilterStateChange}
            checked={filterStateValue === "done"}
          />
          <label htmlFor="filterDone">Feitos</label>
        </div>

        <div>
          <input
            id="filterUndone"
            type="radio"
            name="filterState"
            value="undone"
            onChange={handleFilterStateChange}
            checked={filterStateValue === "undone"}
          />
          <label htmlFor="filterUndone">A Fazer</label>
        </div>
      </FilterByStateContainer>
    </Content>
  );
}
