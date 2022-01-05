import React from "react";
import {
  MainContanier,
  SectionBody,
  SectionGroup,
  SectionHover,
  SectionIcon,
  Sections,
} from "./styled";

function Main() {
  const Colors = [
    "#3450bd",
    "#35c892",
    "#e6961b",
    "#e14c21",
    "#192030",
    "#501953",
  ];
  const Random = () => {
    const Choosin = Colors[Math.floor(Math.random() * Colors.length)];
    Colors.splice(Colors.indexOf(Choosin), 1);
    return Choosin;
  };
  return (
    <MainContanier>
      <Sections>
        <SectionGroup Random={Random} to="/best">
          <SectionIcon className="fas fa-award"></SectionIcon>
          <SectionBody>
            <h4>Best Games.</h4>
          </SectionBody>
          <SectionHover></SectionHover>
        </SectionGroup>
        <SectionGroup Random={Random} to="/new">
          <SectionIcon className="fas fa-award"></SectionIcon>
          <SectionBody>
            <h4>New Games.</h4>
          </SectionBody>
          <SectionHover></SectionHover>
        </SectionGroup>
        <SectionGroup to="/forme" Random={Random}>
          <SectionIcon className="fas fa-award"></SectionIcon>
          <SectionBody>
            <h4>Recommended For You.</h4>
          </SectionBody>
          <SectionHover></SectionHover>
        </SectionGroup>
      </Sections>
    </MainContanier>
  );
}

export default Main;
