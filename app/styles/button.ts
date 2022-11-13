import styled from 'styled-components';

export const Button = styled('button')<{
  secondary?: boolean;
  large?: boolean;
}>`
  background-color: ${(props) =>
    props.secondary
      ? props.theme.palette.secondary.main
      : props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  border: none;
  border-radius: 2rem;
  padding: ${(props) => (props.large ? '1rem 2rem' : '0.5rem 1rem')};
  font: ${(props) => props.theme.font.heading};
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: ${(props) => props.theme.shadow};
  }
`;
