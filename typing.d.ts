interface CoinsT {
  data: Array<{
    id: number;
    rank: number;
    slug: string;
    name: string;
    symbol: string;
    category: string;
    type: string;
    volume24hBase: number;
    circulatingSupply: number;
    totalSupply: number;
    maxSupply: string;
    values: {
      USD: ValueT;
    };
    lastUpdated: Data;
    tokens: string;
  }>;
}

interface OneCoinT {
  data: {
    athPrice: PriceT;
    atlPrice: PriceT;
    price: CurrentPriceT;
  };
}

type PriceT = {
  BTC: numbe;
  ETH: number;
  USD: number;
  date: Date;
  dateBTC: Date;
  dateETH: Date;
};

type CurrentPriceT = Omit<PriceT, "date" | "dateBTC" | "dateETH">;

interface ValueT {
  high24h: number;
  low24h: number;
  marketCap: number;
  percentChange3m: number;
  percentChange6m: number;
  percentChange7d: number;
  percentChange24h: number;
  percentChange30d: number;
  price: number;
  volume24h: number;
}
