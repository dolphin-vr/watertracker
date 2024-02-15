import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
   overlay {
      background: none;
   }
`;
export const Backdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.8);
`;

export const Container = styled.div`
   max-width: 100%;
   padding: 24px 12px;
   z-index: 100;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -25%);
   background-color: ${({ theme }) => theme.colors.primary.white};
   border-radius: 10px;
   margin: 0 auto;

   @media screen and (min-width: 768px) {
      padding: 32px 24px;
      width: 704px;
      top: 50%;
   }
   @media screen and (min-width: 1280px) {
      transform: translate(-50%, -50%);
      padding: 32px 24px;
      width: 592px;
   }
`;

export const Title = styled.h2`
   font-size: 26px;
   font-weight: 500;
   color: ${({ theme }) => theme.colors.primary.black};
   line-height: calc(32 / 26);
   margin-top: 0px;
`;

export const Formula = styled.span`
   color: ${({ theme }) => theme.colors.primary.blue};
   font-size: 18px;
   line-height: calc(24 / 18);
`;

export const Gender = styled.li`
   display: flex;
   gap: 4px;
   color: ${({ theme }) => theme.colors.primary.black};
   font-size: 16px;
   line-height: calc(20 / 16);
`;
export const GenderFormula = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 16px;
   margin-bottom: 12px;
`;

export const Description = styled.p`
   max-width: 256px;
   width: 100%;
   padding: 10px;
   color: #8f8f8f;
   border-radius: 10px;
   border: 1px solid ${({ theme }) => theme.colors.secondary.whiteblue};
   align-items: flex-start;
   font-size: 12px;
   line-height: 1.33;
   font-style: normal;
   font-weight: 400;

   @media screen and (min-width: 768px) {
      max-width: 656px;
   }
   @media screen and (min-width: 1440px) {
      max-width: 544px;
   }
`;

export const Start = styled.span`
   color: ${({ theme }) => theme.colors.primary.blue};
`;

export const TitleLabel = styled.h3`
   color: ${({ theme }) => theme.colors.primary.black};
   margin-bottom: 16px;
   font-size: 18px;
   font-weight: 500;
   line-height: 20px;
   margin-top: 0;
`;

export const RadioBtn = styled.div`
   display: flex;
   gap: 24px;
   margin-bottom: 16px;
`;

export const GenderBtn = styled.div`
   display: flex;
   gap: 3px;
   align-items: center;
`;

export const GenderInput = styled.input`
   position: relative;
   height: 14px;
   width: 14px;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   outline: none;
   margin: 0;
   margin-right: 8px;

   &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({ theme }) => theme.colors.primary.white};
      border: 2px solid ${({ theme }) => theme.colors.primary.blue};
   }

   &:checked:after {
      content: "";
      position: absolute;
      top: 58%;
      left: 50%;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary.blue};
      transform: translate(-53%, -66%);
      visibility: visible;
   }
`;

export const CloseBtn = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.colors.primary.white};
   border: none;
   width: 24px;
   height: 24px;
   padding: 0;
   position: absolute;
   top: 28px;
   right: 12px;
   cursor: pointer;

   @media screen and (min-width: 768px) {
      right: 24px;
      top: 36px;
   }
`;

export const GenderLabel = styled.label`
   color: ${({ theme }) => theme.colors.primary.black};
   font-size: 16px;
   line-height: 20px;
`;

export const Forma = styled.form`
   display: flex;
   flex-direction: column;
   gap: 16px;
`;

export const Labels = styled.div`
   display: flex;
   flex-direction: column;
   gap: 16px;

   @media screen and (min-width: 768px) {
      max-width: 656px;
   }
`;

export const DataLabel = styled.label`
   color: ${({ theme }) => theme.colors.primary.black};
   font-size: 16px;
   line-height: 20px;
`;

export const ModalInput = styled.input`
   padding: 12px 10px;
   border-radius: 6px;
   border: 1px solid ${({ theme }) => theme.colors.secondary.whiteblue};
   max-width: 256px;
   width: 100%;
   font-size: 16px;
   line-height: 20px;

   &.error-input {
      border: 2px solid ${({ theme }) => theme.colors.secondary.red};
   }

   @media screen and (min-width: 768px) {
      max-width: 656px;
   }
   @media screen and (min-width: 1440px) {
      max-width: 544px;
   }
`;

export const ResultCont = styled.div`
   display: flex;
   gap: 6px;
   align-items: center;

   @media screen and (min-width: 768px) {
   }
`;

export const TextResult = styled.p`
   max-width: 190px;
   margin-top: 0px;
   margin-bottom: 0px;

   @media screen and (min-width: 768px) {
      max-width: 328px;
   }
`;

export const Littres = styled.p`
   width: 57px;
   color: #407bff;
   font-size: 18px;
   font-weight: 700;
   line-height: 24px;
   margin-top: 0px;
   margin-bottom: 0px;

   @media screen and (min-width: 768px) {
      width: 42px;
   }
`;

export const WriteInput = styled.label`
   font-size: 18px;
   font-weight: 500;
   line-height: 20px;
`;

export const Btn = styled.button`
   background-color: ${({ theme }) => theme.colors.primary.blue};
   color: ${({ theme }) => theme.colors.primary.white};
   padding: 8px 30px;
   border-radius: 10px;
   border: none;
   box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
   width: 256px;
   display: block;
   text-align: center;
   font-size: 16px;
   font-weight: 500;
   line-height: 20px;

   @media screen and (min-width: 768px) {
      padding: 10px 30px;
      margin-left: auto;
      width: 160px;

      &:hover {
         box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
      }
   }
`;
export const ErrorMessageStyled = styled.span`
   color: ${({ theme }) => theme.colors.secondary.red};
   font-size: 14px;
   line-height: 1.28;
   margin-top: 4px;
`;
