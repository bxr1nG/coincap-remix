import styled from 'styled-components';

export const Background = styled('div')`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  z-index: -1;
  background: ${(props) => props.theme.palette.primary.main};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.palette.primary.main} 0%,
    ${(props) => props.theme.palette.secondary.main} 100%
  );
  @media (min-width: 575.98px) {
    display: block;
  }
`;
