"use client";

import Link from "next/link";
import { Title } from "uiKit";
import { Tourney } from "@next/font/google";
import styled from "styled-components";

const tourney = Tourney({
  weight: "500",
  subsets: ["latin"],
});

type Props = {
  size: "s" | "m";
};

const Logo = ({ size }: Props) => {
  return (
    <Link href="/">
      <TitleS as={size === "m" ? "h4" : "h5"}>Crypto</TitleS>
    </Link>
  );
};

const TitleS = styled(Title)`
  color: ${({ theme }) => theme.fonts.colors.black};
  font-family: ${tourney.style.fontFamily};
`;

export default Logo;
