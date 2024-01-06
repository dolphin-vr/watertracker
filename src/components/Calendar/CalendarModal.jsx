import PropTypes from "prop-types";
// import { useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import sprite from "../../images/sprite.svg";

// Modal.setAppElement("#root");
const StyledModal = styled(Modal)`
  // Custom styles for the modal
  &.custom-overlay {
    background: none;
  }
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
  margin-left: 2px;
`;

const CalendarModal = ({
  isOpen,
  closeModal,
  clickedDayDataForClick,
  date,
  buttonCoordinates = {},
}) => {
  // useEffect(() => {
  //   console.log("Modal Coordinates:", {
  //     top: buttonCoordinates?.top || 0,
  //     left: buttonCoordinates?.left || 0,
  //   });
  // }, [buttonCoordinates]);
  return (
    <StyledModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal window Calendar"
      buttonCoordinates={buttonCoordinates}
      overlayClassName="custom-overlay"
    >
      {clickedDayDataForClick && (
        <CustomModalConteiner>
          <ModalHeader>
            <ModalDate>
              {`${date.getDate()}, ${date.toLocaleString("en-US", {
                month: "long",
              })}`}
            </ModalDate>
            <CloseButton onClick={closeModal}>
              <svg stroke="#407BFF" width="16" height="16">
                <use href={sprite + "#modalclose"}></use>
              </svg>
            </CloseButton>
          </ModalHeader>
          <ModalList>
            <ModalIndicators>
              Daily norma:{" "}
              <ModalAccent>
                {(clickedDayDataForClick.waterNorma &&
                  (clickedDayDataForClick.waterNorma / 1000).toFixed(1)) ||
                  "N/A"}{" "}
                L
              </ModalAccent>
            </ModalIndicators>
            <ModalIndicators>
              Fulfillment of the daily norm:{" "}
              <ModalAccent>{clickedDayDataForClick.percentage}%</ModalAccent>
            </ModalIndicators>
            <ModalIndicators>
              How many servings of water:{" "}
              <ModalAccent>{clickedDayDataForClick.doses}</ModalAccent>
            </ModalIndicators>
          </ModalList>
        </CustomModalConteiner>
      )}
    </StyledModal>
  );
};

CalendarModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  clickedDayDataForClick: PropTypes.shape({
    waterNorma: PropTypes.number,
    percentage: PropTypes.number,
    doses: PropTypes.number,
  }),
  date: PropTypes.instanceOf(Date),
  buttonCoordinates: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
};

export { CalendarModal };
