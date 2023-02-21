import useSWR from "swr";
import fetcher from "./utils/fetcher";

export function useExchangeRates() {
  const { data, error, isLoading } = useSWR<OneCoinT>(
    `https://tstapi.cryptorank.io/v0/coins/bitcoin`,
    fetcher
  );
  const USDinBTK = data?.data.price.USD;
  const USDinETH = data && data.data.price.USD / data.data.price.ETH;

  return {
    USDinBTK,
    USDinETH,
    isLoading,
    isError: error,
  };
}
