import styled from "styled-components";
import Modal from "react-modal";

export const ModalStyled = styled(Modal)`
   &.custom-overlay {
      background: none;
   }
`;

export const Backdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 100;
   background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
   position: absolute;
   background-color: ${({ theme }) => theme.colors.primary.white};
   border-radius: 10px;
   width: 280px;
   height: 260px;
   padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(6)};
   z-index: 100;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   @media (min-width: 768px) {
      width: 592px;
      height: 208px;
   }

   @media (min-width: 1440px) {
      width: 592px;
      height: 208px;
   }
`;

export const Title = styled.h2`
   color: ${({ theme }) => theme.colors.primary.black};
   font-family: Roboto;
   font-size: 26px;
   font-style: normal;
   font-weight: 500;
   line-height: 32px;
   margin: 0;
`;

export const XBtn = styled.button`
   border: none;
   background-color: transparent;
   padding: 0;
   margin: 0;
   cursor: pointer;
`;

export const TitleContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const Ask = styled.p`
   color: ${({ theme }) => theme.colors.primary.black};
   font-family: Roboto;
   font-size: 18px;
   font-style: normal;
   font-weight: 500;
   line-height: 20px;
   margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const Wrap = styled.div`
   margin-top: ${({ theme }) => theme.spacing(6)};
   @media (min-width: 768px) {
      display: flex;
      justify-content: flex-end;
   }
   @media (min-width: 1440px) {
      display: flex;
      justify-content: flex-start;
   }
`;

export const CancelBtn = styled.button`
   margin-top: ${({ theme }) => theme.spacing(6)};
   width: 232px;
   padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(7.5)};
   border-radius: 10px;
   background-color: ${({ theme }) => theme.colors.secondary.whiteblue};
   color: ${({ theme }) => theme.colors.primary.blue};
   border: none;
   box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
   margin-right: ${({ theme }) => theme.spacing(6)};
   &:hover {
      opacity: 0.7;
   }
   @media (min-width: 768px) {
      padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(7.5)};
      width: 160px;
   }
`;

export const LogoutBtn = styled.button`
   margin-top: ${({ theme }) => theme.spacing(6)};
   width: 232px;
   padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(7.5)};
   border-radius: 10px;
   background-color: ${({ theme }) => theme.colors.secondary.red};
   color: ${({ theme }) => theme.colors.primary.white};
   border: none;
   box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
   &:hover {
      opacity: 0.7;
   }
   @media (min-width: 768px) {
      padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(7.5)};
      width: 160px;
   }
`;
