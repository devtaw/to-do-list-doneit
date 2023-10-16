import styled from "styled-components";

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

  background-color: ${(props) => (props.variant === "sucess" ? "#1EDFAA" : props.variant === "danger" ? "#ff7f7f" : "#3BBED4")};
`;
