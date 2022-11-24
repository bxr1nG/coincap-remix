import styled from 'styled-components';

export const Button = styled('button')<{
  secondary?: boolean;
  large?: boolean;
  disabled?: boolean;
}>`
  background-color: ${(props) => {
    if (props.disabled) {
      return props.theme.palette.common.gray;
    }
    if (props.secondary) {
      return props.theme.palette.secondary.main;
    }
    return props.theme.palette.primary.main;
  }};
  color: ${(props) => props.theme.palette.primary.contrastText};
  border: none;
  border-radius: 2rem;
  padding: ${(props) => (props.large ? '1rem 2rem' : '0.5rem 1rem')};
  font: ${(props) => props.theme.font.heading};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: ${(props) => (props.disabled ? '' : props.theme.shadow)};
  }
`;
