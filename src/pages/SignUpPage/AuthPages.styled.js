import styled from "styled-components";
import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";

export const AuthStyled = styled.main`
   @media (min-width: 320px) {
      /* padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(5)};  */
   }
   @media screen and (min-width: 320px) and (min-height: 681px) {
      height: calc(100vh - 80px);
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   @media (min-width: 768px) {
      /* padding: ${({ theme }) => theme.spacing(10)} ${({ theme }) => theme.spacing(8)} 0; */
   }
   @media screen and (min-width: 768px) and (min-height: 681px) {
      height: calc(100vh - 88px);
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   @media (min-width: 1440px) {
      /* padding: ${({ theme }) => theme.spacing(35)} 0 ${({ theme }) => theme.spacing(10)} 0; */
   }
   @media screen and (min-width: 1440px) and (min-height: 801px) {
      height: calc(100vh - 60px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 0;
   }
`;
export const StyledSection = styled.section`
background-image: url(${sprite}#sign-bg-m);
   background-size: cover;
   background-position: 0 0;
   background-repeat: no-repeat;
   height: 600px;

   @media screen and (min-width: 768px) {
      background-image: url(${sprite}#sign-bg-t);
      background-size: auto;
      height: 590px;
      padding-left: 32px;
   }
   @media screen and (min-width: 1440px) {
      background-image: url(${sprite}#sign-bg-d);
      background-size: contain;
      background-position: 0 0;
      width: 100%;
      margin: 0 auto;
      height: 748px;
      padding-top: 140px;
   }
`

export const BackgroundStyled = styled.div`
   /* position: fixed;
   top: 56px;
   left: 0;

   width: 100%;
   height: 100vh; */

   /* background-image: url("../../../src/images/auth/BackgroundElementAuth-min.png");
   background-repeat: no-repeat;
   background-size: auto;
   z-index: -2;
   @media (min-width: 320px) {
      background-size: cover;
   } */
   /* @media (min-width: 768px) {
      background-image: url("../../../src/images/auth/BackgroundBubblesAuthTablet-min.png");
      top: 90px;
      height: 100%; */
      /* left: -20px; */
   /* } */
   /* @media (min-width: 1440px) {
      background-image: url("../../../src/images/auth/BackgroundBubblesAuthDesktop-min.png");
      background-size: contain;
      top: 70px;
   } */
`;

export const Bottle = styled.div`
   /* background-image: url("../../../src/images/auth/BottleAuth-min.png");
   background-size: bottom contain;
   background-repeat: no-repeat;
   z-index: -1;
   position: fixed;
   top: calc(100% - 225px);
   left: 50%;
   transform: translateX(-50%);
   width: 280px;
   height: 210px;
   @media (min-width: 768px) {
      background-image: url("../../../src/images/auth/BottleAuthTablet-min.png");
      background-size: center contain;
      background-repeat: no-repeat;
      top: calc(100% - 564px);
      left: 302px;
      right: auto;
      height: 548px;
      width: 736px;
      transform: translateX(0);
   }
   @media (min-width: 1440px) {
      background-image: url("../../../src/images/auth/BottleAuthDesktop-min.png");
      background-size: center contain;
      background-repeat: no-repeat;
      left: -50px;
      top: calc(100% - 720px);
      height: 680px;
      width: 916px;
   } */
`;

export const Title = styled.h1`
   font-size: 24px;
   color: ${({ theme }) => theme.colors.primary.Black};
`;

export const FormStyled = styled.form`
   width: 280px;
   margin-left: auto;
   margin-right: auto;

   @media (min-width: 768px) {
      margin-left: 0;
      width: 336px;
   }

   @media (min-width: 1440px) {
      margin-left: auto;
      margin-right: 198px;
      width: 384px;
   }
`;

export const Label = styled.label`
   display: block;
   margin-bottom: ${({ theme }) => theme.spacing(2)};
   color: ${({ theme }) => theme.colors.primary.Black};
   font-size: 18px;
   line-height: 1.33;
`;

export const Input = styled.input`
   margin-bottom: ${({ theme }) => theme.spacing(4)};
   padding:  ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
   border-radius: 6px;

   border: 1px solid ${({ theme }) => theme.colors.secondary.WhiteBlue};
   background-color: ${props => props.theme.colors.primary.White}; 

   color: ${({ theme }) => theme.colors.secondary.Blue};
   font-size: 16px;
   line-height: 1.25;
   width: 280px;
   outline: none;

   &:focus {
      ${({ theme }) => theme.colors.primary.Blue};
   }

   &::placeholder {
      color: ${({ theme }) => theme.colors.secondary.Blue};
   }

   &.input-error {
      margin-bottom: ${({ theme }) => theme.spacing(1)};
      border-color: ${({ theme }) => theme.colors.secondary.Red};
      color: ${({ theme }) => theme.colors.secondary.Red};
   }

   @media (min-width: 768px) {
      width: 336px;
      height: 44px;
   }

   @media (min-width: 1440px) {
      width: 386px;
   }

`;

export const ErrorMessageStyled = styled.div`
   color: ${({ theme }) => theme.colors.secondary.Red};
   font-size: 14px;
   line-height: 1.28;
   margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const IconContainer = styled.div`
   position: relative;
`;

export const IconBtn = styled.button`
   position: absolute;
   left: calc(280px - 26px);
   top: 13px;
   background-color: transparent;
   border: none;
   width: 16px;
   height: 16px;
   padding: 0;
   stroke: ${({ theme }) => theme.colors.primary.Blue};
   @media (min-width: 768px) {
      left: 308px;
   }
   @media (min-width: 1440px) {
      left: calc(386px - 26px);
   }
`;

export const AuthBtn = styled.button`
   width: 100%;
   background-color: ${({ theme }) => theme.colors.primary.Blue};
   color:  ${({ theme }) => theme.colors.primary.White}; 
   padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(7.5)};
   font-size: 18px;
   font-weight: 500;
   border: none;
   border-radius: 10px;
   cursor: pointer;
   box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
   margin-bottom: ${({ theme }) => theme.spacing(4)};

   &:active {
      box-shadow: none;
   }
`;

export const AuthLink = styled(Link)`
   display: block;
   color: ${({ theme }) => theme.colors.primary.Blue};
   font-size: 16px;
   font-weight: 400;
   line-height: 1.25;

   &:hover {
      color: ${({ theme }) => theme.colors.secondary.Orange};
   }
`;
