import React, { useState } from "react";
import { Button, Container, TextInput } from "./AddTodoInput.styled";
/**
 * @typedef {Object} AddTodoProps
 * @property {function} onAddItem
 *
 * @param {AddTodoProps} props
 */
export function AddTodoInput(props) {
  const [description, setDescription] = useState("");
  function handleClickButton() {
    props.onAddItem(description);
    setDescription("");
  }
  return (
    <Container>
      <TextInput placeholder="Adicione uma nova tarefa..." value={description} onChange={(event) => setDescription(event.target.value)} />
      <Button onClick={handleClickButton}>Add</Button>
    </Container>
  );
}
