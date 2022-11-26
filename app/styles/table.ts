import styled from 'styled-components';

export const Table = styled('table')<{
  maxHeight?: string;
  simpleStyle?: boolean;
}>`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : 'auto')};
  box-shadow: ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.palette.common.white};
  font: ${(props) => props.theme.font.body};
  color: ${(props) => props.theme.palette.common.darkGray};
  tbody tr {
    border-top: 0.03rem solid ${(props) => props.theme.palette.common.lightGray};
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: #f8f8ff;
    }
  }
  @media (min-width: 575.98px) {
    overflow: ${(props) => (props.simpleStyle ? 'scroll' : 'hidden')};
    margin-top: ${(props) => (props.simpleStyle ? '1rem' : '3rem')};
    border-radius: ${(props) => props.theme.borderRadius};
  }
  ${(props) =>
    props.simpleStyle &&
    `
    box-shadow: none;
    overflow: scroll;
    margin-top: 1rem;
    `}
`;

export const Thead = styled('thead')`
  background-color: #f5f5f5;
  th {
    font: ${(props) => props.theme.font.heading};
    font-weight: 700;
  }
`;

export const ClickableTr = styled('tr')`
  cursor: pointer;
`;

export const Td = styled('td')<{ textAlign: string; hideMobile?: boolean }>`
  display: ${(props) => (props.hideMobile ? 'none' : 'table-cell')};
  vertical-align: middle;
  text-align: ${(props) => props.textAlign};
  padding: 0.75rem 0.5rem;
  @media (min-width: 767.98px) {
    display: table-cell;
  }
`;

export const PercentTd = styled(Td)<{ changeSign: boolean }>`
  color: ${(props) =>
    props.changeSign
      ? props.theme.palette.common.green
      : props.theme.palette.common.red};
`;
