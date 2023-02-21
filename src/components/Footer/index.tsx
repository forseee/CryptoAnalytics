"use client";

import styled from "styled-components";
import { Container, Text } from "uiKit";
import LinkNav from "../Link/LinkNav";

import Logo from "../Logo";

type socialNetworksT = {
  link: string;
  name: string;
  imgName: "FacebookImg" | "TwitterImg" | "InstagramImg" | "YoutubeImg";
}[];

const socialNetworks: socialNetworksT = [
  { link: "https://facebook.com", name: "Facebook", imgName: "FacebookImg" },
  { link: "https://twitter.com", name: "Twitter", imgName: "TwitterImg" },
  { link: "https://youtube.com", name: "Youtube", imgName: "YoutubeImg" },
  { link: "https://instagram.com", name: "Instgram", imgName: "InstagramImg" },
];

const Footer = () => {
  return (
    <FotterS>
      <Container>
        <WrapperS>
          <Logo size="s" />
          <UlS>
            {socialNetworks.map((network, index) => (
              <li key={index}>
                <LinkNav target="_blank" href={network.link}>
                  {network.name}
                </LinkNav>
              </li>
            ))}
          </UlS>
        </WrapperS>
        <Text align="center">©2023 All rights reserved</Text>
      </Container>
    </FotterS>
  );
};

const FotterS = styled.div`
  flex: 0 0 auto;
  background: ${({ theme }) => theme.colors.background.footer};
  border-top: ${({ theme }) => theme.line.main};
  padding-top: 48px;
  padding-bottom: 40px;
  @media ${({ theme }) => theme.media.tablet} {
    border-top: none;
  }
`;

const WrapperS = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const UlS = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export default Footer;
