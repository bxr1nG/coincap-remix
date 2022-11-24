import styled from 'styled-components';

export const Input = styled('input')<{
  width?: string;
  outlined?: boolean;
  hideArrows?: boolean;
}>`
  border: ${(props) =>
    props.outlined ? `2px solid ${props.theme.palette.primary.main}` : 'none'};
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  font: ${(props) => props.theme.font.body};
  margin-right: 0.5rem;
  transition-property: box-shadow, border;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  width: ${(props) => (props.width ? props.width : '5rem')};
  &:focus {
    box-shadow: ${(props) => (props.outlined ? 'none' : props.theme.shadow)};
    border: ${(props) =>
      props.outlined
        ? `2px solid ${props.theme.palette.secondary.main}`
        : 'none'};
    outline: none;
  }

  ${(props) =>
    props.hideArrows &&
    `
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }
    }
    `}
`;
