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
  animation: ${fadeIn} 1s ease;
  position: fixed;
  top: ${(props) =>
    props.buttonCoordinates ? props.buttonCoordinates.top - 204 : 0}px;
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  height: 188px;
  z-index: 1;

  @media (min-width: 768px) {
    width: 292px;
    top: ${(props) =>
    props.buttonCoordinates ? props.buttonCoordinates.top - 188 : 0}px;
    left: ${(props) =>
    props.buttonCoordinates
      ? props.buttonCoordinates.left > 400
        ? props.buttonCoordinates.left - 258
        : props.buttonCoordinates.left
      : 0}px;
    transform: translateX(0%);
  }

  @media (min-width: 1440px) {
    left: ${(props) =>
    props.buttonCoordinates
      ? props.buttonCoordinates.left > 1000
        ? props.buttonCoordinates.left - 258
        : props.buttonCoordinates.left
      : 0}px;
  }
`;

const CustomModalConteiner = styled.div`
  //Custom styles here
  background-color: #fff;
  padding: 24px 13px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  @media (min-width: 768px) {
    padding: 24px 16px;
  }
`;

const ModalHeader = styled.div`
  align-items: center;
  margin-bottom: 16px;
`;

const ModalDate = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 125% */
  color: #407bff;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 26px;
  right: 13px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;

const ModalList = styled.ul`
  display: flex;
  flex-direction: column;
  & > li:not(:last-child) {
    margin-bottom: 16px;
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
  color: #407bff;
  margin-left: 6px;
`;

export {
  StyledModal,
  CustomModalConteiner, ModalHeader, ModalDate, CloseButton, ModalList, ModalIndicators, ModalAccent
};