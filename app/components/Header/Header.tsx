import { useLoaderData, useNavigate } from '@remix-run/react';

import type { Asset } from '~/types/assets';
import { moneyFormatter } from '~/utils/numberFormatter';
import { Price } from '~/styles/price';
import PortfolioButton from '~/components/PortfolioUI/Button/Button';

import {
  Header as StyledHeader,
  HeaderContainer,
  Logo,
  PricesContainer
} from './styles';

function Header() {
  const navigate = useNavigate();
  const assets = useLoaderData<Asset[]>();

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
        <PortfolioButton />
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
