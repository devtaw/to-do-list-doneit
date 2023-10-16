import React, { useState } from "react";
import { Container, TextInput } from "./AddTodoInput.styled";
import { Button } from "./Button";

/**
 * @typedef {Object} AddTodoProps
 * @property {function} onAddItem
 *
 * @param {AddTodoProps} props
 */
export function AddTodoInput(props) {
  const [description, setDescription] = useState("");
  function handleClickButton() {
    if (description.trim()?.length < 3) {
      window.alert("Informe um texto válido que possua 3 ou mais caracteres!");
      return;
    }
    props.onAddItem(description);
    setDescription("");
  }

  return (
    <Container>
      <TextInput placeholder="Adicione uma nova tarefa..." value={description} onChange={(event) => setDescription(event.target.value)} />
      <Button onClick={handleClickButton} variant="sucess">
        Adicionar
      </Button>
    </Container>
  );
}
