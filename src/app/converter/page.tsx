"use client";

import { Container, Text } from "uiKit";

import ConverterBox from "@/components/ConverterBox";
import { API_KEY } from "@/constants/constants";
import { useAllCoins } from "@/hooks/useAllCoins";

function Converter() {
  const { coins } = useAllCoins(API_KEY);
  const options = coins?.map((coin) => {
    return {
      key: coin.id,
      label: coin.name,
      value: coin.slug,
      usdPrice: coin.values.USD.price,
      symbol: coin.symbol,
    };
  });

  return (
      <Container>
        <Text as="h3">Cryptocurrency Converter Calculator</Text>
        {options && (
          <ConverterBox optionsFirst={options} optionsSecond={options} />
        )}
      </Container>
  );
}

export default Converter;
