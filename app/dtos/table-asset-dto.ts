import type { Asset, TableAsset } from '~/types/assets';

export const tableAssetDto = (asset: Asset): TableAsset => ({
  id: asset.id,
  rank: asset.rank,
  symbol: asset.symbol,
  name: asset.name,
  supply: asset.supply,
  priceUsd: asset.priceUsd,
  changePercent24Hr: asset.changePercent24Hr
});
