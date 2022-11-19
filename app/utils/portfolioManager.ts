import type { TableAsset } from '~/types/assets';

export const buyAsset = (asset: TableAsset, amount: number): void => {
  const portfolio = JSON.parse(localStorage.getItem('portfolio') || '[]');
  portfolio.push({
    id: asset.id,
    name: asset.name,
    amount,
    price: asset.priceUsd,
    total: amount * +asset.priceUsd
  });
  localStorage.setItem('portfolio', JSON.stringify(portfolio));
};
