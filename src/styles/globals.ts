import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
  p {
    margin: 0;
    padding: 0;
  }
  ul,li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    height: 100vh;
    margin: 0;
    background: ${({ theme }) => theme.colors.background.main};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fonts.fontSize.small};
    line-height: ${({ theme }) => theme.fonts.lineHeight.medium};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
  }

  #root{
  }

  button{
    margin: 0;
  }

  h1{
    line-height: 1;
  }

  h4{
    font-size: 2em;
  }

  h5{
    font-size: 1.5em;
  }
`;
