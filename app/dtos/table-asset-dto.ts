import type { Asset, TableAsset } from '~/types/assets';

export const tableAssetDto = (asset: Asset): TableAsset => ({
  id: asset.id,
  rank: asset.rank,
  symbol: asset.symbol,
  name: asset.name,
  supply: `$${(+asset.supply).toFixed(2)}`,
  price: `$${(+asset.priceUsd).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`,
  changePercent24Hr: `${(+asset.changePercent24Hr).toFixed(2)}%`,
  changeSign: +asset.changePercent24Hr > 0
});
