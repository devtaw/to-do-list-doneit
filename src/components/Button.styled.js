import styled from "styled-components";

const ButtonVariants = {
  default: "#3BBED4",
  sucess: "#4BEEB4",
  danger: "#ff7f7f",
  edit: "#96DCE8",
};

export const ButtonStyled = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  background-color: ${(props) => ButtonVariants[props.variant] || "#3BBED4"};
`;
