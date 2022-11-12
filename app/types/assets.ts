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
  vwap24Hr: string;
  explorer: string;
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
