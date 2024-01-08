import PropTypes from "prop-types";
// import { useEffect } from "react";
import sprite from "../../images/sprite.svg";
import {
  StyledModal,
  CustomModalConteiner,
  ModalHeader,
  ModalDate,
  CloseButton,
  ModalList,
  ModalIndicators,
  ModalAccent,
} from "./CalendarModal.styled";
// Modal.setAppElement("#root");

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
      id={clickedDayDataForClick?.date}
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
