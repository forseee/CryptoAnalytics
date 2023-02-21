import useSWR from "swr";
import fetcher from "./utils/fetcher";


export function useAllCoins(api: string) {
  const { data, error, isLoading } = useSWR<CoinsT>(
    `https://api.cryptorank.io/v1/currencies/?api_key=${api}`,
    fetcher
  );

  return {
    coins: data?.data,
    isLoading,
    isError: error,
  };
}
