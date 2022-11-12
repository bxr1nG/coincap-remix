import type { Asset, DisplayAsset } from '~/types/assets';

export const displayAssetDto = (asset: Asset): DisplayAsset => ({
  symbol: asset.symbol,
  price: `$${(+asset.priceUsd).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`,
  changeSign: +asset.changePercent24Hr > 0
});
