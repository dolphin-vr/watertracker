import styled from "styled-components";
import Modal from "react-modal";

export const ModalStyled = styled(Modal)`
   &.overlay {
      background: none;
   }
`;

export const BackdporModal = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: ${({ theme }) => theme.colors.secondary.backdrop};
`;

export const ModalWrap = styled.div`
   position: fixed;
   background-color: ${({ theme }) => theme.colors.primary.white};
   border-radius: 10px;
   width: 280px;
   height: 280px;
   padding: 32px 24px;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   @media (min-width: 768px) {
      width: 592px;
      height: 208px;
   }
`;

export const Title = styled.h2`
   margin: 0;
   font-size: 26px;
   margin-bottom: 24px;
`;

export const BtnClose = styled.button`
   background-color: transparent;
   width: 24px;
   height: 24px;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   position: absolute;
   top: 36px;
   right: 24px;
   padding: 0;
   cursor: pointer;
`;

export const Text = styled.p`
   font-size: 18px;
   margin: 0;
   margin-bottom: 24px;
`;

export const WrapBtn = styled.div`
   display: flex;
   flex-direction: column;
   gap: 24px;
   flex-direction: column-reverse;

   @media (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-end;
   }
`;

export const BtnDelete = styled.button`
   height: 36px;
   border-radius: 10px;
   border: none;
   background-color: ${({ theme }) => theme.colors.secondary.red};
   color: #fff;
   box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
   cursor: pointer;
   &:hover {
      opacity: 0.7;
   }
   @media (min-width: 768px) {
      width: 160px;
      height: 44px;
   }
`;

export const BtnCancel = styled.button`
   height: 36px;
   border-radius: 10px;
   border: none;
   color: ${({ theme }) => theme.colors.primary.blue};
   background-color: ${({ theme }) => theme.colors.secondary.whiteblue};
   cursor: pointer;
   &:hover {
      opacity: 0.7;
   }
   @media (min-width: 768px) {
      width: 160px;
      height: 44px;
   }
`;
