import styled from 'styled-components';

export const Input = styled('input')<{ width?: string }>`
  border: none;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  font: ${(props) => props.theme.font.body};
  margin-right: 0.5rem;
  transition: box-shadow 0.2s ease-in-out;
  width: ${(props) => (props.width ? props.width : '5rem')};
  &:focus {
    box-shadow: ${(props) => props.theme.shadow};
    outline: none;
  }
`;
