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
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;
