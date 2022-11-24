import type { LocalStorageAsset } from '~/types/assets';
import { createContext } from 'react';

export const PortfolioContext = createContext<{
  portfolio: LocalStorageAsset[];
  setPortfolio: (
    value:
      | LocalStorageAsset[]
      | ((val: LocalStorageAsset[]) => LocalStorageAsset[])
  ) => void;
}>({
  portfolio: [],
  setPortfolio: () => {}
});
