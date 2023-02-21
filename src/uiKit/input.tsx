import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "./politre";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return <InputS {...props} />;
};

const InputS = styled.input`
  min-width: 100px;
  max-width: 200px;
  background-color: transparent;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${theme.primery.main};
  box-shadow: 0 0 2px ${theme.primery.shadow};
  appearance: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px ${theme.primery.focus}
  }
`;
