// import { NavLink } from "react-router-dom";
import {
  StyledDiv,
  StyledHeader,
  StyledLi,
  StyledListParagraph,
  StyledNavLink,
  StyledParagraph,
  StyledPreHeader,
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
          <svg fill="white" width="40" height="40">
            <use href={sprite + "#icon1"}></use>
          </svg>
          <StyledListParagraph>Habit drive</StyledListParagraph>
        </StyledLi>
        <StyledLi>
        <svg fill="white" width="40" height="40">
            <use href={sprite + "#icon2"}></use>
          </svg>
          <StyledListParagraph>View statistics</StyledListParagraph>
        </StyledLi>
        <StyledLi>
        <svg fill="white" width="40" height="40">
            <use href={sprite + "#icon3"}></use>
          </svg>
          <StyledListParagraph>Personal rate setting</StyledListParagraph>
        </StyledLi>
      </StyledUl>
      <StyledNavLink to={"/signup"}>Try tracker</StyledNavLink>
    </StyledDiv>
  );
};
