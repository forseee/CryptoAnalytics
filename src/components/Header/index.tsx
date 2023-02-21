"use client";

import styled from "styled-components";
import { Container } from "uiKit";

import Logo from "@/components/Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <WrapperS>
      <Container>
        <ContentS>
          <LogoS>
            <Logo size="m" />
          </LogoS>
          <Navigation />
        </ContentS>
      </Container>
    </WrapperS>
  );
};

const WrapperS = styled.div`
  background: ${({ theme }) => theme.colors.background.header};
  border-bottom: ${({ theme }) => theme.line.main};
  padding: 24px 0;
`;

const ContentS = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  padding-right: 30px;
  align-items: center;
  @media ${({ theme }) => theme.media.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding-right: 0;
  }
`;

const LogoS = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  @media ${({ theme }) => theme.media.desktop} {
    position: static;
    margin-right: 0;
    transform: none;
  }
`;

export default Header;
