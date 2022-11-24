import type { FetcherWithComponents } from '@remix-run/react';
import invariant from 'tiny-invariant';

import type {
  Asset,
  LocalStorageAsset,
  PortfolioAsset,
  PortfolioSummary
} from '~/types/assets';
import { moneyFormatter, percentageFormatter } from '~/utils/numberFormatter';

export function checkAssetsDataAvailability(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetcher: FetcherWithComponents<any>,
  portfolio: LocalStorageAsset[]
): boolean {
  return (
    fetcher.data &&
    fetcher.state === 'idle' &&
    [...new Set(portfolio.map((asset: LocalStorageAsset) => asset.id))]
      .length ===
      [...new Set(fetcher.data.map((asset: LocalStorageAsset) => asset.id))]
        .length
  );
}

export function calculatePortfolioAssets(
  portfolio: LocalStorageAsset[],
  assetsData: Asset[]
): PortfolioAsset[] {
  return portfolio.map((asset) => {
    const assetData = assetsData.find((data) => data.id === asset.id);
    invariant(assetData, 'expected assetData');
    return {
      ...asset,
      currentPrice: +assetData.priceUsd,
      currentTotal: +assetData.priceUsd * asset.amount,
      change: 1 - asset.price / (+assetData.priceUsd * asset.amount)
    };
  });
}

export function calculatePortfolioSummary(portfolio: PortfolioAsset[]) {
  const initialPortfolioPrice = portfolio.reduce((acc, asset) => {
    return acc + asset.total;
  }, 0);
  const currentPortfolioPrice = portfolio.reduce((acc, asset) => {
    return acc + asset.currentTotal;
  }, 0);

  return {
    initial: initialPortfolioPrice,
    change: currentPortfolioPrice - initialPortfolioPrice,
    changePercent:
      (currentPortfolioPrice - initialPortfolioPrice) / initialPortfolioPrice
  };
}

export function portfolioOverviewCreator(summary: PortfolioSummary) {
  if (summary.initial === 0) {
    return 'Empty portfolio';
  }
  if (summary.initial > 1_000_000) {
    return 'Too much money';
  }
  const formattedInitial = moneyFormatter(summary.initial, false, true);
  const formattedChange = moneyFormatter(summary.change, true, true);
  const formattedChangePercent = percentageFormatter(
    summary.changePercent,
    true
  );
  const sign = summary.changePercent >= 0 ? '+' : '';
  return `${formattedInitial} ${sign}${formattedChange} (${formattedChangePercent})`;
}
