import type { Asset, AssetHistoryStage, Assets } from '~/types/assets';

export const getThreeAssets: () => Promise<Assets> = async () => {
  const response = await fetch('https://api.coincap.io/v2/assets?limit=3');
  return response.json();
};

export const getTableAssets: (
  page: number,
  itemsPerPage: number
) => Promise<Assets> = async (page, itemsPerPage) => {
  const response = await fetch(
    `https://api.coincap.io/v2/assets?limit=${itemsPerPage}&offset=${
      (page - 1) * itemsPerPage
    }`
  );
  return response.json();
};

export const getAsset: (id: string) => Promise<{ data: Asset }> = async (
  id
) => {
  const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
  return response.json();
};

export const getAssetHistory: (id: string) => Promise<{
  data: AssetHistoryStage[];
}> = async (id) => {
  const response = await fetch(
    `https://api.coincap.io/v2/assets/${id}/history?interval=h1`
  );
  return response.json();
};
