import styled from 'styled-components';

import { Container } from '~/styles/container';

export const Header = styled('div')`
  background-color: ${(props) => props.theme.palette.common.white};
  box-shadow: ${(props) => props.theme.shadow};
  font: ${(props) => props.theme.font.body};
  color: ${(props) => props.theme.palette.common.darkGray};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 70px;
  gap: 3rem;
`;

export const Logo = styled('div')`
  background-image: url('/images/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 40px;
  cursor: pointer;
`;

export const PricesContainer = styled('div')`
  display: none;
  @media (min-width: 767.98px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const Price = styled('p')<{ changeSign: boolean }>`
  font: ${(props) => props.theme.font.heading};
  color: ${(props) =>
    props.changeSign
      ? props.theme.palette.common.green
      : props.theme.palette.common.red};
`;

export const Portfolio = styled('div')`
  display: flex;
  margin-left: auto;
`;
