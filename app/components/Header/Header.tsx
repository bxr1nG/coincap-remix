import { useLoaderData, useNavigate } from '@remix-run/react';

import type { DisplayAsset } from '~/types/assets';
import { moneyFormatter } from '~/utils/numberFormatter';

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
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo
          onClick={() => {
            navigate('/assets');
          }}
        />
        <PricesContainer>
          {assets.map((asset) => (
            <Price
              key={asset.symbol}
              changeSign={asset.changePercent24Hr[0] !== '-'}
            >
              {`${asset.symbol}: ${moneyFormatter(+asset.priceUsd)}`}
            </Price>
          ))}
        </PricesContainer>
        <Portfolio>Portfolio</Portfolio>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
