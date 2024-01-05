import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthStyled = styled.div`
   @media (min-width: 320px) {
      padding: 24px 20px;
   }
   @media (min-width: 768px) {
      padding: 40px 32px;
   }
   @media (min-width: 1440px) {
      padding: 140px 0 40px 0;
   }
`;

export const FormContainer = styled.div``;

export const BackgroundStyled = styled.div`
   position: fixed;
   top: 56px;
   left: 0;

   width: 100%;
   height: 100vh;

   background-image: url("../../../src/images/auth/BackgroundElementAuth-min.png");
   background-repeat: no-repeat;
   background-size: auto;
   z-index: -2;
   @media (min-width: 320px) {
      background-size: cover;
   }
   @media (min-width: 768px) {
      background-image: url("../../../src/images/auth/BackgroundBubblesAuthTablet-min.png");
      top: 90px;
      height: 100%;
      /* left: -20px; */
   }
   @media (min-width: 1440px) {
      background-image: url("images/auth/BackgroundBubblesAuthDesktop-min.png");
      background-size: contain;
      top: 70px;
   }
`;

export const Bottle = styled.div`
   background-image: url("../../../src/images/auth/BottleAuth-min.png");
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
   }
`;

export const Title = styled.h1`
   font-size: 24px;
   color: #2f2f2f;
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
   margin-bottom: 8px;
   color: #2f2f2f; //var(--Primery-Color-Black)
   font-size: 18px;
   line-height: 1.33;
`;

export const Input = styled.input`
   margin-bottom: 16px;
   padding: 12px 10px;
   border-radius: 6px;

   border: 1px solid #d7e3ff; //var(--Secondary-color-5)
   background-color: #fff;

   color: #9ebbff; //var(--Secondary-color-4)
   font-size: 16px;
   line-height: 1.25;
   width: 280px;
   outline: none;

   &:focus {
      color: #407bff;
   }

   &::placeholder {
      color: #9ebbff; //var(--Secondary-color-4)
   }
   &.input-error {
      margin-bottom: 4px;
      border-color: #ef5050; //var(--Secondary-color-3)
      color: #ef5050; //var(--Secondary-color-3)
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
   color: #ef5050; //var(--Secondary-color-3)
   font-size: 14px;
   line-height: 1.28;
   margin-top: 4px;
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
   @media (min-width: 768px) {
      left: 308px;
   }
   @media (min-width: 1440px) {
      left: calc(386px - 26px);
   }
`;

export const AuthBtn = styled.button`
  width: 100%;
  background-color: #407BFF; //var(--Primery-Color-Blue)
  color: #FFF; 
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  margin-bottom: 16px;

  &:active {
    box-shadow: none;
  }
`;

export const AuthLink = styled(Link)`
   display: block;
   color: #407bff; //var(--Primery-Color-Blue)
   font-size: 16px;
   font-weight: 400;
   line-height: 1.25;

   &:hover {
      color: #ff9d43; ///var(--Secondary-color-5)
   }
`;
