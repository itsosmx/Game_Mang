import React from "react";
import Search from "./search";
import {
  HeaderContainer,
  HeaderLink,
  HeaderLinks,
  HeaderLogo,
  HeaderWrapper,
} from "./styled";

function Header({ theme, setTheme }) {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>Game Mang.</HeaderLogo>
        <Search theme={theme} setTheme={setTheme} />
        <HeaderLinks>
          <HeaderLink to={""}>Home</HeaderLink>
          <HeaderLink to={""}>Best Game</HeaderLink>
          <HeaderLink to={""}>All Games</HeaderLink>
          <HeaderLink to={""}>Choose my Game</HeaderLink>
        </HeaderLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
