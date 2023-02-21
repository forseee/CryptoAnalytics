import styled from "styled-components";
import { theme } from "./politre";

export const Text = styled.p<{
  align?: "start" | "end" | "center";
}>`
  text-align: ${(props) => props.align};
  color: inherit;
  span {
    color: ${theme.primery.action};
  }
`;

export const Title = styled.h2`
  display: inline;
  color: ${theme.primery.action};
`;
