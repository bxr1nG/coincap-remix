import type { Assets } from '~/types/assets';

export const getThreeAssets: () => Promise<Assets> = async () => {
  const response = await fetch('https://api.coincap.io/v2/assets?limit=3');
  return response.json();
};
