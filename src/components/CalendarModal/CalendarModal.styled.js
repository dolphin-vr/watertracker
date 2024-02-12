import styled from "styled-components";
import { keyframes } from "styled-components";
import Modal from "react-modal";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledModal = styled(Modal)`
   // Custom styles for the modal
   &.custom-overlay {
      background: none;
   }

   animation: ${(props) => (props.isOpen ? fadeIn : "none")} 0.5s ease-in-out forwards;

   position: fixed;
   top: ${(props) => (props.buttonCoordinates ? props.buttonCoordinates.top - 204 : 0)}px;
   left: 50%;
   transform: translateX(-50%);
   width: 280px;
   height: 188px;
   z-index: 1;

   @media (min-width: 768px) {
      width: 292px;
      top: ${(props) => (props.buttonCoordinates ? props.buttonCoordinates.top - 188 : 0)}px;
      left: ${(props) => (props.buttonCoordinates ? (props.buttonCoordinates.left > 400 ? props.buttonCoordinates.left - 275 : props.buttonCoordinates.left + 17) : 0)}px;
      transform: translateX(0%);
   }

   @media (min-width: 1440px) {
      left: ${(props) =>
         props.buttonCoordinates ? (props.buttonCoordinates.left > 1000 ? props.buttonCoordinates.left - 275 : props.buttonCoordinates.left + 17) : 0}px;
   }
`;

const CustomModalConteiner = styled.div`
   //Custom styles here
   padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(3)};
   border-radius: 10px;
   background: ${({ theme }) => theme.colors.primary.white};
   box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

   @media (min-width: 768px) {
      padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
   }
`;

const ModalHeader = styled.div`
   align-items: center;
   margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const ModalDate = styled.div`
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 1.25; /* 125% */
   color: ${({ theme }) => theme.colors.primary.blue};
`;
const CloseButton = styled.button`
   position: absolute;
   top: ${({ theme }) => theme.spacing(6)};
   right: ${({ theme }) => theme.spacing(3)};
   cursor: pointer;
   background: none;
   border: none;
   padding: 0;
`;

const ModalList = styled.ul`
   display: flex;
   flex-direction: column;
   & > li:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing(4)};
   }
`;

const ModalIndicators = styled.li`
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 1.25; /* 125% */
`;

const ModalAccent = styled.span`
   font-family: Roboto;
   font-size: 18px;
   font-style: normal;
   font-weight: 500;
   line-height: 1.33; /* 133.333% */
   color: ${({ theme }) => theme.colors.primary.blue};
   margin-left: ${({ theme }) => theme.spacing(1.5)};
`;

export { StyledModal, CustomModalConteiner, ModalHeader, ModalDate, CloseButton, ModalList, ModalIndicators, ModalAccent };
