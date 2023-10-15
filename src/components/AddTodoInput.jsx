import React, { useState } from "react";
import { Button, Container, TextInput } from "./AddTodoInput.styled";

export function AddTodoInput() {
  const [description, setDescription] = useState("");

  return (
    <Container>
      <TextInput placeholder="Adicione uma nova tarefa..." onChange={(event) => setDescription(event.target.value)} />
      <Button>Add</Button>
    </Container>
  );
}
