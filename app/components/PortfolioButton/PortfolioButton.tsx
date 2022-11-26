import { useContext, useEffect, useState } from 'react';
import { useFetcher } from '@remix-run/react';

import type {
  LocalStorageAsset,
  PortfolioAsset,
  PortfolioSummary
} from '~/types/assets';
import { Button } from '~/styles/button';
import { PortfolioContext } from '~/context/portfolioContext';
import PortfolioModal from '~/components/PortfolioModal/PortfolioModal';
import {
  checkAssetsDataAvailability,
  calculatePortfolioAssets,
  calculatePortfolioSummary,
  portfolioOverviewCreator
} from '~/utils/portfolioHelper';

import { Portfolio } from './styles';

function PortfolioButton() {
  const fetcher = useFetcher();

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

    if (!portfolio.length) {
      setModal(false);
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

  const [modal, setModal] = useState(false);

  return (
    <>
      <Portfolio>
        <Button
          secondary
          disabled={
            !checkAssetsDataAvailability(fetcher, portfolio) ||
            !portfolio.length
          }
          onClick={() => {
            if (
              checkAssetsDataAvailability(fetcher, portfolio) ||
              portfolio.length
            ) {
              setModal(true);
            }
          }}
        >
          {portfolio.length
            ? portfolioOverviewCreator(portfolioData.summary)
            : 'Empty portfolio'}
        </Button>
      </Portfolio>
      <PortfolioModal
        modal={modal}
        setModal={setModal}
        portfolioData={portfolioData}
      />
    </>
  );
}

export default PortfolioButton;
