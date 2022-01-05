import styled from "styled-components";

export const BestContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`
export const GameCard = styled.div`
  width: 90%;
  height: 3%;
  padding: .5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  border: 2px solid rgba(255, 255 ,255 , .02);
  gap: 1rem;
  /* background-color: var(--light-blue); */
`
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const GameIndex = styled.div`
  position: absolute;
  font-size: 3rem;
  opacity: .2;
  right: 0;
  top: 0;
  color:var(--blue);
`

export const CardMedia = styled.div`

`
export const CardImage = styled.img`
  box-sizing: 0 0 10px var(--shadow);
`
export const CardSubject = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* flex-direction: column; */
`
export const SubTitle = styled.h2`
  color: var(--blue);
  font-size: 2rem;
`
export const GameThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .1rem;
`
export const GameTheme = styled.span`
  background-color: var(--red);
  color: var(--white);
  font-size: .7rem;
  padding: .2rem .5rem;
  opacity: .5;
  border-radius: .4rem;
`
export const TotalPlayers = styled.div`
  font-weight: bold;
  color: var(--)
`
export const Counter = styled.span`
  margin-left: 1rem;
`

export const GameLink = styled.a`
  text-decoration: none;
  color: var(--blue)
`
export const GameScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--green);
  height: 100%;
  padding: 1rem;
  border-radius: 2rem;
  color: var(--white);
`
export const ScoreCounter = styled.h3`
  font-size: 3rem;
`
export const ScoreTitle = styled.div``
// export const BestContainer = styled.div``