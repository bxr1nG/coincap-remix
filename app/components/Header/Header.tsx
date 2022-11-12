import { useLoaderData } from '@remix-run/react';

import type { DisplayAsset } from '~/types/assets';

import {
  Header as StyledHeader,
  HeaderContainer,
  Logo,
  PricesContainer,
  Price,
  Portfolio
} from './styles';

function Header() {
  const assets = useLoaderData<DisplayAsset[]>();
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <PricesContainer>
          {assets.map((asset) => (
            <Price key={asset.symbol} changeSign={asset.changeSign}>
              {`${asset.symbol}: ${asset.price}`}
            </Price>
          ))}
        </PricesContainer>
        <Portfolio>Portfolio</Portfolio>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
