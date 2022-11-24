export type Asset = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string | null;
  explorer: string | null;
};

export type Assets = {
  data: Asset[];
  timestamp: number;
};

export type AssetHistoryStage = {
  priceUsd: string;
  time: number;
};

export type LocalStorageAsset = {
  id: string;
  name: string;
  amount: number;
  price: number;
  total: number;
};

export type PortfolioAsset = {
  id: string;
  name: string;
  amount: number;
  price: number;
  total: number;
  currentPrice: number;
  currentTotal: number;
  change: number;
};

export type PortfolioSummary = {
  initial: number;
  change: number;
  changePercent: number;
};
