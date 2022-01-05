import React from "react";
import Theme from "../Theme";
import {
  SearchButton,
  SearchContainer,
  SearchForm,
  SearchGroup,
  SearchIcon,
  SearchInput,
} from "./styled";

function Search({ theme, setTheme }) {
  return (
    <SearchContainer>
      <SearchForm>
        <SearchGroup>
          <SearchIcon className="fas fa-search"></SearchIcon>
          <SearchInput type="search" placeholder="Search for game.." />
        </SearchGroup>
        <Theme theme={theme} setTheme={setTheme}>
          Click Me
        </Theme>
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
}

export default Search;
