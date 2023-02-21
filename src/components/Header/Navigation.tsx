import { usePathname } from "next/navigation";
import styled from "styled-components";

import { routes } from "@/constants/constants";
import LinkNav from "../Link/LinkNav";

const links = [
  { name: "Home", link: routes.home },
  { name: "Converter", link: routes.converter },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <UlS>
        {links.map((item, index) => (
          <li key={index}>
            <LinkNav href={item.link} activelink={pathname === item.link}>
              {item.name}
            </LinkNav>
          </li>
        ))}
      </UlS>
    </nav>
  );
};

const UlS = styled.ul`
  display: flex;
  gap: 40px;
`;

export default Navigation;
