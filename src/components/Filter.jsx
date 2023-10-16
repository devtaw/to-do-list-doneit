import { Container, Content } from "./Filter.styled";
import { TextInput } from "./TodoItem.styled";
import { MagnifyingGlass } from "@phosphor-icons/react";

/**
 * @typedef {Object} FilterProps
 * @property {function} onFilterChange
 *
 * @param {FilterProp} props
 */

export function Filter(props) {
  function handleFilterChange(event) {
    props.onFilterChange(event.target.value);
  }

  return (
    <Content>
      <Container>
        <TextInput type="text" placeholder="Filtrar por nome" onChange={handleFilterChange} />
        <MagnifyingGlass color="#6985C0" size={32} />
      </Container>
    </Content>
  );
}
