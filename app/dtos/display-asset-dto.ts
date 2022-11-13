import type { Asset, DisplayAsset } from '~/types/assets';

export const displayAssetDto = (asset: Asset): DisplayAsset => ({
  symbol: asset.symbol,
  priceUsd: asset.priceUsd,
  changePercent24Hr: asset.changePercent24Hr
});
