import styled from "styled-components";
import { Link } from "react-router-dom";
import signbgm from "../../images/sign-m.svg";
import signbgt from "../../images/sign-t.svg";
import signbgd from "../../images/sign-d.svg";
import bottle from "../../images/bottle.svg";
import { Icon } from "../../components/Icon/Icon";
import { Form, Field, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 16px;
   width: 320px;
   margin-top: 100px;
   margin-left: auto;
   margin-right: auto;
   padding: 0 20px;

   @media (min-width: 768px) {
      z-index: 1;
      margin-left: 0;
      padding: 0;
      width: 336px;
   }

   @media (min-width: 1440px) {
      margin-left: 80px;
      /* margin-right: 198px; */
      width: 384px;
   }
`;

export const StyledField = styled(Field)`
   padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
   border-radius: 6px;

   border: 1px solid ${({ theme }) => theme.colors.secondary.whiteblue};
   background-color: ${({ theme }) => theme.colors.primary.white};

   color: ${({ theme }) => theme.colors.primary.blue};
   font-size: 16px;
   line-height: 1.25;
   width: 280px;
   outline: none;

   &:focus {
      color: ${({ theme }) => theme.colors.primary.blue};
   }

   &::placeholder {
      color: ${({ theme }) => theme.colors.secondary.blue};
   }

   &.input-error {
      margin-bottom: ${({ theme }) => theme.spacing(1)};
      border-color: ${({ theme }) => theme.colors.secondary.red};
      color: ${({ theme }) => theme.colors.secondary.red};
   }

   @media (min-width: 768px) {
      width: 336px;
      height: 44px;
   }

   @media (min-width: 1440px) {
      width: 386px;
   }
`;

export const ErrorMsg = styled(ErrorMessage)`
   position: absolute;
   left: 0;
   bottom: -16px;
   margin: 0;
   color: ${({ theme }) => theme.colors.secondary.red};
   font-size: 12px;
   line-height: 1.28;
`;

export const Main = styled.main`
   height: 634px;
   padding-top: 24px;
   background-image: url(${bottle}), url(${signbgm});
   background-repeat: no-repeat;
   background-size: 280px 210px, cover;
   background-position: center 422px, center top;

   @media screen and (min-width: 768px) {
      height: 600px;
      position: relative;
      background-image: url(${bottle}), url(${signbgt});
      background-size: 564px 528px, cover;
      background-position: left calc(100% / 2 + 104px) top 86px, center;
   }
   @media screen and (min-width: 1440px) {
      min-height: 720px;
      height: calc(100vh - 60px);
      margin: 0 auto;
      padding-top: 60px;
      padding-left: 100px;
      /* height: 740px; */
      display: flex;
      flex-direction: row-reverse;
      background-image: url(${bottle}), url(${signbgd});
      background-size: 752px, cover;
      background-position: left calc(100% / 2 + -128px) top 152px, top center;
   }
`;

export const Bottle = styled.div`
   width: 280px;
   height: 210px;
   margin: 0 auto;
   background-image: url(${bottle});
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
   outline: 2px solid red;

   @media screen and (min-width: 768px) {
      position: absolute;
      top: 100px;
      right: 0;
      width: 568px;
      height: 500px;
   }
   @media screen and (min-width: 1440px) {
      position: static;
      /* margin-right: 80px; */
   }
`;

export const Title = styled.h1`
   margin: 0;
   font-size: 24px;
   color: ${({ theme }) => theme.colors.primary.black};
`;

export const FormStyled = styled.form`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 16px;
   width: 320px;
   /* margin-top: 100px; */
   margin-left: auto;
   margin-right: auto;
   padding: 0 20px;

   @media (min-width: 768px) {
      width: 768px;
      margin-top: 40px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 400px 0 32px;
   }

   @media (min-width: 1440px) {
      width: 1404px;
      margin-top: 148px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 198px 0 822px;
      background-color: transparent;
   }
`;

export const Label = styled.label`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 8px;
   color: ${({ theme }) => theme.colors.primary.black};
   font-size: 18px;
   line-height: 1.33;
`;

export const Input = styled.input`
   padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
   border-radius: 6px;

   border: 1px solid ${({ theme }) => theme.colors.secondary.whiteblue};
   background-color: ${({ theme }) => theme.colors.primary.white};

   color: ${({ theme }) => theme.colors.primary.blue};
   font-size: 16px;
   /* line-height: 1.25; */
   width: 280px;
   outline: none;
   /* 
   &:focus {
      ${({ theme }) => theme.colors.primary.blue};
   } */

   &::placeholder {
      color: ${({ theme }) => theme.colors.secondary.blue};
   }

   &.input-error {
      margin-bottom: ${({ theme }) => theme.spacing(1)};
      border-color: ${({ theme }) => theme.colors.secondary.red};
      color: ${({ theme }) => theme.colors.secondary.red};
   }

   @media (min-width: 768px) {
      width: 336px;
      height: 44px;
   }

   @media (min-width: 1440px) {
      width: 386px;
   }
`;

export const IconBtn = styled.button`
   position: absolute;
   top: 32px;
   right: 0px;
   background-color: transparent;
   border: none;
   width: 44px;
   height: 44px;
   padding: 14px;
   @media (min-width: 768px) {
      /* left: 308px; */
   }
   @media (min-width: 1440px) {
      /* left: calc(386px - 26px); */
   }
`;

export const StyledIcon = styled(Icon)`
   width: 16px;
   height: 16px;
`;

export const StyledSvg = styled.svg`
   width: 16px;
   height: 16px;
   stroke: ${({ theme }) => theme.colors.primary.blue};
`;

export const ErrorMessageStyled = styled.p`
   position: absolute;
   left: 0;
   bottom: -12px;
   margin: 0;
   color: ${({ theme }) => theme.colors.secondary.red};
   font-size: 12px;
   line-height: 1.28;
   /* margin-top: ${({ theme }) => theme.spacing(1)}; */
`;

export const IconContainer = styled.div`
   position: relative;
`;

export const AuthBtn = styled.button`
   width: 100%;
   background-color: ${({ theme }) => theme.colors.primary.blue};
   color: ${({ theme }) => theme.colors.primary.white};
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
   color: ${({ theme }) => theme.colors.primary.blue};
   font-size: 16px;
   font-weight: 400;
   line-height: 1.25;

   &:hover {
      color: ${({ theme }) => theme.colors.secondary.orange};
   }
`;
