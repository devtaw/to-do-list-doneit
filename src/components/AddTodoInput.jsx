import { Button, Container, TextInput } from "./AddTodoInput.styled";
export function AddTodoInput() {
  return (
    <Container>
      <TextInput placeholder="Adicione uma nova tarefa..." />
      <Button>Add</Button>
    </Container>
  );
}
