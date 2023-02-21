"use client";

import { Text } from "uiKit";
import styled from "styled-components";

import { OptionT } from "../ConverterBox";

interface SelectorT {
  label?: string;
  options: Array<OptionT>;
  value: string | number;
  onChange?: (name: string) => void;
}

const Selector = ({ label, options, value, onChange }: SelectorT) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange && onChange(value);
  };

  return (
    <WrapperS>
      <Text>{label}</Text>
      <SelectWrapperS>
        <SelectroS value={value} onChange={(e) => handleOnChange(e)}>
          {options.map((option) => {
            return (
              <option value={option.value} key={option.key}>
                {option.label}
              </option>
            );
          })}
        </SelectroS>
        <ArrowS />
      </SelectWrapperS>
    </WrapperS>
  );
};

const WrapperS = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  flex-direction: column;
`;
const SelectWrapperS = styled.div`
  position: relative;
`;

const ArrowS = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-20%);
  display: block;
  border: 6px solid transparent;
  border-top: 6px solid ${({ theme }) => theme.selector.primery.main};
  pointer-events: none;
`;

const SelectroS = styled.select`
  width: 100%;
  display: inline-block;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.selector.primery.main};
  transition: all 0.5s ease;
  appearance: none;
  outline: none;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 10px ${({ theme }) => theme.selector.primery.shadow};
  }
`;

export default Selector;
