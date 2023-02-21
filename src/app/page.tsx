"use client";

import { useMemo, useState } from "react";
import styled from "styled-components";
import { Container, Text } from "uiKit";

import Button from "@/components/Button";
import Table from "@/components/Table";
import { allCurrency, API_KEY } from "@/constants/constants";
import { useAllCoins } from "@/hooks/useAllCoins";
import { useExchangeRates } from "@/hooks/useExchangeRates";
import { Fix, FixForFirstNum, roundCounter } from "@/utils/formaters";

const TitleForTable = [
  { name: "№" },
  { name: "Name" },
  { name: "Price", sort: true },
  { name: "Circulating Supply", sort: true },
  { name: "Market Cap" },
  { name: "Category" },
];

export default function Home() {
  const { coins } = useAllCoins(API_KEY);
  const { USDinBTK, USDinETH } = useExchangeRates();

  const [currentCurencyCount, setCurntCurrencyCount] = useState(0);

  const currentCurrency = allCurrency[currentCurencyCount];

  const handleOnClick = () => {
    setCurntCurrencyCount(
      roundCounter(currentCurencyCount, allCurrency.length)
    );
  };

  const dataForTable = useMemo(() => {
    if (USDinBTK && USDinETH && coins) {
      const newCoins = coins.map((coin, index) => {
        return {
          number: index + 1,
          name: (
            <TextS>
              <span>{coin.name}</span> {coin.symbol}
            </TextS>
          ),
          value: {
            USD: (
              <Text>
                <span>USD</span> {FixForFirstNum(coin.values.USD.price, 2)}
              </Text>
            ),
            ETH: (
              <Text>
                <span>ETH</span>{" "}
                {FixForFirstNum(coin.values.USD.price / USDinETH, 2)}
              </Text>
            ),
            BTC: (
              <Text>
                <span>BTC</span>{" "}
                {FixForFirstNum(coin.values.USD.price / USDinBTK, 2)}
              </Text>
            ),
          },
          circulatingSupply: coin.circulatingSupply,
          marketCap: {
            USD: (
              <Text>
                <span>USD</span> {Fix(coin.values.USD.marketCap, 2)}
              </Text>
            ),
            ETH: (
              <Text>
                <span>ETH</span> {Fix(coin.values.USD.marketCap / USDinETH, 2)}
              </Text>
            ),
            BTC: (
              <Text>
                <span>BTC</span> {Fix(coin.values.USD.marketCap / USDinBTK, 2)}
              </Text>
            ),
          },
          category: coin.category,
        };
      });
      return newCoins;
    }
  }, [coins, USDinETH, USDinBTK]);

  return (
    <Container>
      <Text as="h1" align="center">
        Current cryptocurrency rates
      </Text>
      <Wrapper>
        <Button onClick={handleOnClick}>{currentCurrency}</Button>
      </Wrapper>
      {dataForTable && (
        <Table
          titles={TitleForTable}
          data={dataForTable}
          currency={currentCurrency}
        />
      )}
    </Container>
  );
}

const TextS = styled(Text)`
  span {
    color: blue;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 16px;
`;
