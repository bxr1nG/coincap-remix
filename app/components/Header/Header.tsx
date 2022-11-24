import { useFetcher, useLoaderData, useNavigate } from '@remix-run/react';
import { useContext, useEffect, useState } from 'react';

import type {
  Asset,
  LocalStorageAsset,
  PortfolioAsset,
  PortfolioSummary
} from '~/types/assets';
import { moneyFormatter } from '~/utils/numberFormatter';
import { PortfolioContext } from '~/context/portfolioContext';
import {
  checkAssetsDataAvailability,
  calculatePortfolioAssets,
  calculatePortfolioSummary,
  portfolioOverviewCreator
} from '~/utils/portfolioHelper';
import { Button } from '~/styles/button';

import {
  Header as StyledHeader,
  HeaderContainer,
  Logo,
  PricesContainer,
  Price,
  Portfolio
} from './styles';

function Header() {
  const navigate = useNavigate();
  const fetcher = useFetcher();

  const assets = useLoaderData<Asset[]>();

  const { portfolio } = useContext(PortfolioContext);

  const [portfolioData, setPortfolioData] = useState<{
    assets: PortfolioAsset[];
    summary: PortfolioSummary;
  }>({
    assets: [],
    summary: {
      initial: 0,
      change: 0,
      changePercent: 0
    }
  });

  useEffect(() => {
    const ids = [
      ...new Set(portfolio.map((asset: LocalStorageAsset) => asset.id))
    ].join(',');
    if (ids) {
      fetcher.load(`/assets/portfolio-data?ids=${ids}`);
    }
  }, [portfolio]);

  useEffect(() => {
    if (checkAssetsDataAvailability(fetcher, portfolio)) {
      const portfolioAssets = calculatePortfolioAssets(portfolio, fetcher.data);
      const summary = calculatePortfolioSummary(portfolioAssets);
      setPortfolioData({
        assets: portfolioAssets,
        summary
      });
    }
  }, [fetcher.data]);

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
        <Portfolio>
          <Button
            secondary
            disabled={
              !checkAssetsDataAvailability(fetcher, portfolio) ||
              !portfolio.length
            }
          >
            {portfolioOverviewCreator(portfolioData.summary)}
          </Button>
        </Portfolio>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
