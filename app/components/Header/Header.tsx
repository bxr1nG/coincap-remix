import { useLoaderData } from '@remix-run/react';
import numeral from 'numeral';

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
            <Price
              key={asset.symbol}
              changeSign={asset.changePercent24Hr[0] !== '-'}
            >
              {`${asset.symbol}: ${
                +asset.priceUsd < 1
                  ? numeral(asset.priceUsd).format('$0,0.00000')
                  : numeral(asset.priceUsd).format('$0,0.00')
              }`}
            </Price>
          ))}
        </PricesContainer>
        <Portfolio>Portfolio</Portfolio>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
