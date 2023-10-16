import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 20rem;
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const FilterByStateContainer = styled.fieldset`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;
  margin-top: 0.5rem;

  box-sizing: border-box;
  border-radius: 8px;

  label {
    font-size: 18px;
  }

  legend {
    font-size: 12px;
    text-align: left;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  font-size: 1rem;
  background-color: transparent;
  color: #333;
  outline: none; // remove o contorno ao clicar no input
`;
