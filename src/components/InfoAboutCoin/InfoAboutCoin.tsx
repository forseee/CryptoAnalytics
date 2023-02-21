import styled from "styled-components";
import { Text } from "uiKit";

import { useInfoAboutCoin } from "@/hooks/useInfoAboutCoin";
import { Flex } from "@/uiKit/positions";
import { Fix, FixForFirstNum } from "@/utils/formaters";

type Props = {
  coin: string;
};

const InfoAboutCoin = ({ coin }: Props) => {
  const { coinInfo } = useInfoAboutCoin(coin);

  const fromATH =
    coinInfo &&
    Fix(100 - (coinInfo.price.USD / coinInfo.athPrice.USD) * 100, 6);

  const toATH =
    coinInfo && Fix((coinInfo.athPrice.USD / coinInfo.price.USD - 1) * 100, 2);

  if (coinInfo) {
    return (
      <WrapperS>
        <Flex>
          <Text>Hight:</Text>
          <Text>{FixForFirstNum(coinInfo.athPrice.USD, 2)} USD</Text>
        </Flex>
        <Flex>
          <Text>Low:</Text>
          <Text>{FixForFirstNum(coinInfo.atlPrice.USD, 2)} USD</Text>
        </Flex>
        <Flex>
          <Text>Current:</Text>
          <Text>{FixForFirstNum(coinInfo.price.USD, 2)} USD</Text>
        </Flex>
        <Flex>
          <Text>From highest price to current</Text>
          <Text>
            <span>{fromATH} %</span>
          </Text>
        </Flex>
        <Flex>
          <Text>From current price to highest</Text>
          <Text>
            <span>{toATH} %</span>
          </Text>
        </Flex>
      </WrapperS>
    );
  }
  return <WrapperS></WrapperS>;
};

const WrapperS = styled.div`
  min-width: 200px;
  min-height: 83px;
  display: inline-block;
  margin-top: 24px;
`;

export default InfoAboutCoin;
