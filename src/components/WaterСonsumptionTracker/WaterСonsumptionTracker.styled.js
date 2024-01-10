import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 439px;
  }
`;
export const StyledHeader = styled.h2`
  font-family: Roboto;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: 0em;
  margin: 0 0 16px;
  color: ${(props) => props.theme.colors.primary.Black};
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.16;
  }
`;
export const StyledPreHeader = styled.p`
  font-family: Roboto;
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: 0em;
  margin: 0 0 24px;
  color: ${(props) => props.theme.colors.primary.Black};
  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;
export const StyledParagraph = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  letter-spacing: 0em;
  margin: 0 0 12px;
  color: ${(props) => props.theme.colors.primary.primaryBlack};
`;
export const StyledListParagraph = styled.p`
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0em;
  margin: 0;
  color: ${(props) => props.theme.colors.primary.Black};
`;
export const StyledNavLink = styled(NavLink)`
  display: block;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0em;
  color: ${(props) => props.theme.colors.primary.White};
  background-color: ${(props) => props.theme.colors.primary.Blue};
  padding: 8px 30px;
  border-radius: 10px;
  width: 100%;
  text-align: center;
  margin: 24px 0 0 0;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  text-decoration: none;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &.active {
    background-color: ${(props) => props.theme.colors.primary.Blue};
  }
  @media screen and (min-width: 768px) {
   padding: 10px 30px;
   width: 276px;
   font-size: 18px;
   line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
width: 324px;
  }
`;
export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 216px;
  @media screen and (min-width: 768px) {
width: 224px;
  }
  @media screen and (min-width: 1440px) {
width: 248px;
  }
`;
export const StyledUl = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
@media screen and (min-width: 768px) {
  flex-direction: row;
    justify-content: space-between;
    gap: 0px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`
export const StyledSvg = styled.svg`
width: 32px;
height: 32px;
  @media screen and (min-width: 768px) {
    width: 40px;
height: 40px;
  }
`
