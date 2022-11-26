import styled from 'styled-components';

export const Price = styled('p')<{ changeSign: boolean }>`
  font: ${(props) => props.theme.font.heading};
  color: ${(props) =>
    props.changeSign
      ? props.theme.palette.common.green
      : props.theme.palette.common.red};
`;
