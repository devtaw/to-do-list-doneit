import { CheckboxStyled, TodoItemStyled } from "./TodoItem.styled";

export function TodoItem() {
  return (
    <TodoItemStyled>
      <div className="checkbox">
        <CheckboxStyled type="checkbox" />
      </div>

      <div className="description">Learn React</div>

      <div className="actions">
        <button className="edit">Edit</button>
      </div>
    </TodoItemStyled>
  );
}
