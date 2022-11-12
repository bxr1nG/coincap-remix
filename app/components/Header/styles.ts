import styled from 'styled-components';

export const Header = styled('div')`
  background-color: ${(props) => props.theme.palette.common.white};
  box-shadow: 0px 0px 10px 2px rgba(34, 40, 49, 0.2);
  font: ${(props) => props.theme.font.body};
  color: ${(props) => props.theme.palette.common.gray};
`;

export const Container = styled('div')`
  padding: 0 15px;
  @media (min-width: 575.98px) {
    padding: 0 calc(50% - 270px);
  }
  @media (min-width: 767.98px) {
    padding: 0 calc(50% - 360px);
  }
  @media (min-width: 991.98px) {
    padding: 0 calc(50% - 480px);
  }
  @media (min-width: 1199.98px) {
    padding: 0 calc(50% - 590px);
  }
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
