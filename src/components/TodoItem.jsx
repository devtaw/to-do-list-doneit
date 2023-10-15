import React, { useState } from "react";
import { CheckboxInput, Container, Description } from "./TodoItem.styled";

export function TodoItem() {
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

      <div className="description">Learn React</div>

      <div className="actions">
        <button className="edit">Edit</button>
      </div>
    </Container>
  );
}
