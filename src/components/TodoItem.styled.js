import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-width: 40rem;
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  .checkbox {
    width: 1.5rem;
  }
  .description {
    flex: 1;
    text-align: left;
    color: #333;
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }
  .actions {
    display: flex;
    gap: 0.5rem;
  }
`;
export const CheckboxInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const Description = styled.span`
  text-decoration: ${(props) => (props.state === "completed" ? "line-through" : "none")};
`;

export const TextInput = styled.input`
  width: 100%;
  height: 38px;
  border: none;
  font-size: 1.2rem;
  background-color: transparent;
  color: #333;
  outline: none; // remove o contorno ao clicar no input
`;
