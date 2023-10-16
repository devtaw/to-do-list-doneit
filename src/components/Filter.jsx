import { Container, Content } from "./Filter.styled";
import { TextInput } from "./TodoItem.styled";

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
      </Container>
    </Content>
  );
}
