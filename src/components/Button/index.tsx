import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

const Button = ({ iconStart, children, iconEnd, ...props }: Props) => {
  return (
    <ButtonS {...props}>
      {iconStart}
      {children}
      {iconEnd}
    </ButtonS>
  );
};

const ButtonS = styled.button`
  min-width: 50px;
  display: inline-block;
  appearance: none;
  position: relative;
  line-height: 1;
  border-radius: 8px;
  padding: 0.4em;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  font-family: inherit;
  font-weight: normal;
  text-transform: none;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.button.primery.main};
  font-size: ${({ theme }) => theme.button.primery.fontsSize};
  text-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px ${({ theme }) => theme.button.primery.shadow};
  &:hover {
    transition: all 0.2s ease 0s;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.button.primery.hover};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.button.primery.disable};
    cursor: not-allowed;
  }
`;

export default Button;
