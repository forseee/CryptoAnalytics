import useSWR from "swr";
import fetcher from "./utils/fetcher";

export function useInfoAboutCoin(coin: string) {
  const { data, error, isLoading } = useSWR<OneCoinT>(
    `https://tstapi.cryptorank.io/v0/coins/${coin}`,
    fetcher
  );

  return {
    coinInfo: data?.data,
    isLoading,
    isError: error,
  };
}
