import React from "react";
import { ThemeContainer, ThemeIcon } from "./styled";

function Theme({ theme, setTheme }) {
  const handleClick = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", theme);
  };
  return (
    <ThemeContainer>
      <ThemeIcon
        onClick={handleClick}
        theme={theme}
        className={theme ? "fas fa-moon" : "fas fa-sun"}
      ></ThemeIcon>
    </ThemeContainer>
  );
}

export default Theme;
