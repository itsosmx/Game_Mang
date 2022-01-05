import React, { useEffect, useState } from "react";
import { bestGameByPlat } from "../../../api";
import {
  BestContainer,
  CardDetails,
  CardImage,
  CardMedia,
  CardSubject,
  Counter,
  GameCard,
  GameIndex,
  GameLink,
  GameScore,
  GameTheme,
  GameThemes,
  ScoreCounter,
  ScoreTitle,
  SubTitle,
  TotalPlayers,
} from "./styled";
import testJson from "./test.json";
function BestGames() {
  const [games, setGames] = useState([]);
  const [platform, setPlatform] = useState("pc");

  useEffect(() => {
    setGames(testJson["pc"].data);
    // setGames(bestGameByPlat(platform, 20));
  }, [platform]);

  return (
    <BestContainer>
      {games.map((item, i) => (
        <GameCard key={i}>
          <GameIndex>#{i + 1}</GameIndex>
          <CardMedia>
            <CardImage src={item.box_art} alt={item.game_name} />
          </CardMedia>
          <CardSubject>
            <CardDetails>
              <SubTitle>{item.game_name}</SubTitle>
              <GameThemes>
                {item.game_themes.split(", ").map((theme, key) => (
                  <GameTheme key={key}>{theme}</GameTheme>
                ))}
              </GameThemes>
              <TotalPlayers>
                Total Players
                <Counter>
                  {new Intl.NumberFormat().format(item.total_gamer_count)}
                </Counter>
              </TotalPlayers>
              <GameLink href={item.game_url}>Game Link</GameLink>
            </CardDetails>
            <GameScore>
              <ScoreCounter>{item.playscore}</ScoreCounter>
              <ScoreTitle>Game Score</ScoreTitle>
            </GameScore>
          </CardSubject>
        </GameCard>
      ))}
    </BestContainer>
  );
}

export default BestGames;
