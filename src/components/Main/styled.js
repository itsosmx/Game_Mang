import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContanier = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 70vh;
`
export const Sections = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`
export const SectionGroup = styled(Link)`
  text-decoration: none;
  border-radius: 1rem;
  width: 40%;
  height: 50%;
  box-shadow: 0 5px 10px var(--shadow);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--white);
  align-items: center;
  justify-content: center;
  background-color: ${(props => props.Random)};
  text-shadow: 0 5px 10px var(--shadow);

  h4 {
    font-size: 1.5rem;
  }
  :hover, :focus {
    filter: brightness(1.1);
  }
`
export const SectionIcon = styled.div`
  font-size: 3rem;
  width: 60px;
  color: var(--white);
  height: 60px;
  padding: .5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 5px 1px var(--shadow);
`
export const SectionBody = styled.div``
export const SectionHover = styled.div``