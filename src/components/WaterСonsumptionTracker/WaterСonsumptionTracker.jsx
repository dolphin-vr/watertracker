import {
  Hero,
  HeroTitle,
  Item,
  StyledNavLink,
  SectionTitle,
  Slogan,
  StyledSvg,
  List,
} from "./WaterСonsumptionTracker.styled";
import sprite from "../../images/sprite.svg";

export const WaterСonsumptionTracker = () => {
  return (
    <Hero>
      <HeroTitle>Water consumption tracker</HeroTitle>
      <Slogan>Record daily water intake and track</Slogan>
      <SectionTitle>Tracker Benefits</SectionTitle>      
      <List>
        <Item>
          <StyledSvg fill="white"><use href={sprite + "#calendar"}></use></StyledSvg>
          <>Habit drive</>
        </Item>
        <Item>
        <StyledSvg fill="white">
            <use href={sprite + "#stat"}></use>
          </StyledSvg>
          <>View statistics</>
        </Item>
        <Item>
        <StyledSvg fill="white">
            <use href={sprite + "#tool"}></use>
          </StyledSvg>
          <>Personal rate setting</>
        </Item>
      </List>
      <StyledNavLink to={"/signup"}>Try tracker</StyledNavLink>
    </Hero>
  );
};
