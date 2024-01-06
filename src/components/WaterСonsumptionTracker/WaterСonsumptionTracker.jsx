// import { NavLink } from "react-router-dom";
import {
  StyledDiv,
  StyledHeader,
  StyledLi,
  StyledListParagraph,
  StyledNavLink,
  StyledParagraph,
  StyledPreHeader,
  StyledSvg,
  StyledUl,
} from "./WaterСonsumptionTracker.styled";
import sprite from "../../images/sprite.svg";
export const WaterСonsumptionTracker = () => {
  return (
    <StyledDiv>
      <StyledHeader>Water consumption tracker</StyledHeader>
      <StyledPreHeader>Record daily water intake and track</StyledPreHeader>
      <StyledParagraph>Tracker Benefits</StyledParagraph>
      <StyledUl>
        <StyledLi>
          <StyledSvg fill="white">
            <use href={sprite + "#icon1"}></use>
          </StyledSvg>
          <StyledListParagraph>Habit drive</StyledListParagraph>
        </StyledLi>
        <StyledLi>
        <StyledSvg fill="white">
            <use href={sprite + "#icon2"}></use>
          </StyledSvg>
          <StyledListParagraph>View statistics</StyledListParagraph>
        </StyledLi>
        <StyledLi>
        <StyledSvg fill="white">
            <use href={sprite + "#icon3"}></use>
          </StyledSvg>
          <StyledListParagraph>Personal rate setting</StyledListParagraph>
        </StyledLi>
      </StyledUl>
      <StyledNavLink to={"/signup"}>Try tracker</StyledNavLink>
    </StyledDiv>
  );
};
