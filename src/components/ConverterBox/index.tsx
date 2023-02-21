"use client";

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import styled from "styled-components";
import { Input, List, Text } from "uiKit";

import { FixForFirstNum } from "@/utils/formaters";
import Button from "../Button";
import InfoAboutCoin from "../InfoAboutCoin/InfoAboutCoin";
import Selector from "../Selector";

export interface OptionT {
  key: number;
  label: string;
  value: string;
  usdPrice: number;
  symbol: string;
}

type Props = {
  optionsFirst: OptionT[];
  optionsSecond: OptionT[];
};

const ConverterBox = ({ optionsFirst, optionsSecond }: Props) => {
  const [count, setCount] = useState<number>(1);
  const [variant, setVariant] = useState<"1" | "2">("1");
  const [firstCurransy, setFirstCurrensy] = useState<OptionT>(optionsFirst[0]);
  const [secondCurransy, setSecondCurrensy] = useState<OptionT>(
    optionsSecond[0]
  );

  const handleOnChangeSelector = (
    value: string | number,
    options: OptionT[],
    onChange: Dispatch<SetStateAction<OptionT>>
  ) => {
    const obj = options.find((obj) => obj.value === value);
    obj && onChange(obj);
  };

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCount(+value);
  };

  const handleChange = () => {
    setVariant((variant) => (variant === "1" ? "2" : "1"));
  };

  type ViewT = {
    [key: string]: {
      symbol: string;
      usdPrice: number;
      options: OptionT[];
      value: string;
      onChange: (value: string) => void;
    };
  };

  const View: ViewT = useMemo(() => {
    return {
      num1: {
        symbol: firstCurransy.symbol,
        usdPrice: firstCurransy.usdPrice,
        options: optionsFirst,
        value: firstCurransy.value,
        onChange: (value) =>
          handleOnChangeSelector(value, optionsFirst, setFirstCurrensy),
      },
      num2: {
        symbol: secondCurransy.symbol,
        usdPrice: secondCurransy.usdPrice,
        options: optionsSecond,
        value: secondCurransy.value,
        onChange: (value) =>
          handleOnChangeSelector(value, optionsSecond, setSecondCurrensy),
      },
    };
  }, [optionsFirst, firstCurransy.value, optionsSecond, secondCurransy.value]);

  const { selector1, selector2 } = useMemo(() => {
    const type = { selector1: "num1", selector2: "num2" };
    if (variant === "1") {
      return type;
    } else {
      type.selector1 = "num2";
      type.selector2 = "num1";
      return type;
    }
  }, [variant]);

  const converterExpression = FixForFirstNum(
    (count * View[selector1].usdPrice) / View[selector2].usdPrice,
    2
  );

  const ConverterString = `${count} ${View[selector1].symbol} = ${converterExpression} ${View[selector2].symbol}`;

  return (
    <List>
      <WrapperS>
        <Input
          min="0"
          type="number"
          defaultValue={count}
          onChange={(e) => handleOnChangeInput(e)}
        />
        <SelectorBoxS>
          <Selector
            label="From"
            options={View[selector1].options}
            value={View[selector1].value}
            onChange={View[selector1].onChange}
          />
          <Button onClick={handleChange}>
            <Image src="./change.svg" alt="change" width={20} height={20} />
          </Button>
          <Selector
            label="To"
            options={View[selector2].options}
            value={View[selector2].value}
            onChange={View[selector2].onChange}
          />
        </SelectorBoxS>
        <Text>{ConverterString}</Text>
      </WrapperS>
      <InfoAboutCoin coin={View[selector1].value} />
    </List>
  );
};

const WrapperS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SelectorBoxS = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
  button {
    margin-top: 16px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default ConverterBox;
