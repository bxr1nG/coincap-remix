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

export type DisplayAsset = {
  symbol: string;
  price: string;
  changeSign: boolean;
};

export type TableAsset = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  price: string;
  changePercent24Hr: string;
  changeSign: boolean;
};

export type AssetHistoryStage = {
  priceUsd: string;
  time: number;
};
