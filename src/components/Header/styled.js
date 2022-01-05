import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 120px;
  background-color: var(--blue);
  border-bottom-left-radius: 5rem;
  box-shadow: 0 0 10px var(--shadow);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
  
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3cpath d='M10 250L260 0L428 0L178 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M284.6 250L534.6 0L812.1 0L562.1 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M489.20000000000005 250L739.2 0L898.2 0L648.2 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M742.8000000000001 250L992.8000000000001 0L1258.3000000000002 0L1008.3000000000001 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M1439 250L1189 0L1097.5 0L1347.5 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M1186.4 250L936.4000000000001 0L633.4000000000001 0L883.4000000000001 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M924.8 250L674.8 0L578.8 0L828.8 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M686.1999999999999 250L436.19999999999993 0L370.19999999999993 0L620.1999999999999 250z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3cpath d='M1190.3023565085227 250L1440 0.30235650852273466L1440 250z' fill='url(%23SvgjsLinearGradient1001)'%3e%3c/path%3e%3cpath d='M0 250L249.69764349147727 250L 0 0.30235650852273466z' fill='url(%23SvgjsLinearGradient1002)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1001'%3e%3cstop stop-color='rgba(102%2c 112%2c 227%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(102%2c 112%2c 227%2c 1)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1002'%3e%3cstop stop-color='rgba(102%2c 112%2c 227%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(102%2c 112%2c 227%2c 1)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  }
`

export const HeaderContainer = styled.div`
  z-index: 1;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`
export const HeaderLogo = styled.h1`
  color: var(--white);
`
export const HeaderLinks = styled.div``
export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 .5rem;
  color: var(--white);
  font-size: 1.1rem;
  transition: filter .3s;
  text-transform: capitalize;

  :hover, :focus {
    filter: brightness(.8);
  }
`


// Search Bar
export const SearchContainer = styled.div`
  position: absolute;
  top: 170%;
  left: 50%;
  background-color: var(--white);
  width: 80%;
  padding: .7rem 1.5rem;
  transform: translate(-50%, -50%);
  border-radius: .6rem;
  box-shadow: 0 2px 10px -5px var(--shadow);

`
export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SearchGroup = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`
export const SearchIcon = styled.i`
  color: var(--light-blue);
`
export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: .4rem;
  width: 100%;
  color: var(--blue);
  font-size: 1.1rem;
`

export const SearchButton = styled.button`
  border: none;
  outline: none;
  padding: .4rem 1rem;
  background-color: var(--blue);
  color: var(--white);
  border-radius: .5rem;
  font-size: 1.1rem;

`
export const Filter = styled.div``
