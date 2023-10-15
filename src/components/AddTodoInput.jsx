import { Button, Container, TextInput } from "./AddTodoInput.styled";

export function AddTodoInput() {
  return (
    <Container>
      <TextInput placeholder="Add a new todo..." />
      <Button>Add</Button>
    </Container>
  );
}
