import React, { useState } from "react";
import { CheckboxInput, Container, Description } from "./TodoItem.styled";

/**
 * @typedef {Object} TodoItemProps
 * @property {string} description
 *
 * @param {TodoItemProps} props
 */
export function TodoItem(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Container>
      <div className="checkbox">
        <CheckboxInput
          type="checkbox"
          onChange={(event) => {
            setIsCompleted(event.target.checked);
          }}
        />
      </div>

      <div className="description">
        <Description isCompleted={isCompleted}>{props.description}</Description>
      </div>

      <div className="actions">
        <button className="edit">Edit</button>
      </div>
    </Container>
  );
}
