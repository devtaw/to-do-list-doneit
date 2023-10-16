import { ButtonStyled } from "./Button.styled";

/**
 * @typedef {Object} ButtonProps
 * @property {*} child
 * @property {'default' | 'sucess' | 'danger'} variant
 *
 * @param {FilterProp} props
 */
export function Button({ variant, children, ...rest }) {
  return (
    <ButtonStyled variant={variant} {...rest}>
      {children}
    </ButtonStyled>
  );
}
