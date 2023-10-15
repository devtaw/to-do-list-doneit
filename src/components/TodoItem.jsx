import React, { useState } from "react";
import { CheckboxInput, Container, Description, TextInput } from "./TodoItem.styled";

// @typedef {Object} TodoItemProps
// @property {string} description
// @param {TodoItemProps} props

export function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(props.description);

  const [isCompleted, setIsCompleted] = useState(false);

  function handleEditClick() {
    // atualiza o estado de isEditing para o valor true
    // para que o input de texto seja exibido

    setIsEditing(true);
  }
  function handleSaveClick() {
    // atualiza o estado de isEditing para o valor false
    // para que o input de texto seja escondido

    setIsEditing(false);
  }

  function handleDescriptionChange(event) {
    // atualiza o estado de description para o valor do input de texto
    // para que o input de texto seja atualizado em tempo real

    setDescription(event.target.value);
  }

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
        {!isEditing && <Description isCompleted={isCompleted}>{props.description}</Description>}

        {isEditing && <TextInput type="text" value={description} onChange={handleDescriptionChange} />}
      </div>

      <div className="actions">
        {!isEditing && <button onClick={handleEditClick}>Edit</button>}
        {isEditing && <button onClick={handleSaveClick}>Save</button>}
      </div>
    </Container>
  );
}
