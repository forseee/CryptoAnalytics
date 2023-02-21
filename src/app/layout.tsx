"use client";

import styled, { ThemeProvider } from "styled-components";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StyledComponentsRegistry from "./registry";
import { GlobalStyle } from "@/styles/globals";
import { defaultTheme } from "@/styles/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <WrapperS>
              <Header />
              <MainS>{children}</MainS>
              <Footer />
            </WrapperS>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

const WrapperS = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainS = styled.main`
  flex: 1 0 auto;
  padding: 30px 0;
`;
