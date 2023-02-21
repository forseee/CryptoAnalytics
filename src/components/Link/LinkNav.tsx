import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

interface Props extends LinkProps {
  activelink?: boolean;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
}

const LinkNav = ({ children, activelink, target, ...props }: Props) => {
  return (
    <Link {...props} target={target}>
      <SpanS activelink={activelink}>{children}</SpanS>
    </Link>
  );
};

const SpanS = styled.span<{ activelink?: boolean }>`
  color: ${(props) =>
    props.activelink ? props.theme.colors.active : "inherit"};
  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export default LinkNav;
