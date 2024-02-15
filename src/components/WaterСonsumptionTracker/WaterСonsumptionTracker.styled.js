import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Hero = styled.section`
   display: flex;
   flex-direction: column;
   width: 100%;
   @media screen and (min-width: 1440px) {
      width: 439px;
   }
`;
export const HeroTitle = styled.h1`
   font-size: 28px;
   font-weight: 700;
   line-height: 1.14;
   margin-bottom: 16px;
   color: ${({ theme }) => theme.colors.primary.black};
   @media screen and (min-width: 768px) {
      font-size: 36px;
      line-height: 1.16;
   }
`;
export const Slogan = styled.h2`
   font-size: 24px;
   font-weight: 400;
   margin-bottom: 24px;
   color: ${({ theme }) => theme.colors.primary.black};
   @media screen and (min-width: 768px) {
      font-size: 26px;
      line-height: 1.23;
   }
`;
export const SectionTitle = styled.h3`
   margin-bottom: 12px;
   font-size: 18px;
   font-weight: 500;
   line-height: 1.11;
   color: ${({ theme }) => theme.colors.primary.primaryblack};
`;
export const StyledListParagraph = styled.p`
   color: ${({ theme }) => theme.colors.primary.black};
`;
export const StyledNavLink = styled(NavLink)`
   display: block;
   width: 100%;
   padding: 8px 30px;
   border-radius: 10px;
   font-weight: 500;
   text-align: center;
   color: ${({ theme }) => theme.colors.primary.white};
   background-color: ${({ theme }) => theme.colors.primary.blue};
   box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
   text-decoration: none;
   &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
   }
   &.active {
      background-color: ${({ theme }) => theme.colors.primary.blue};
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
export const Item = styled.li`
   display: flex;
   align-items: center;
   gap: 8px;
   @media screen and (min-width: 768px) {
      width: 224px;
   }
   @media screen and (min-width: 1440px) {
      width: 248px;
   }
`;
export const List = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 16px;
   margin-bottom: 24px;
   @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
   }
   @media screen and (min-width: 1440px) {
      flex-direction: column;
      gap: 16px;
   }
`;
export const StyledSvg = styled.svg`
   width: 32px;
   height: 32px;
   @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
   }
`;
