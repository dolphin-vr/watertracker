import PropTypes from "prop-types";
import Modal from "react-modal";
import { ModalDate, ModalAccent } from "./Calendar.styled";

const CalendarModal = ({
  isOpen,
  closeModal,
  clickedDayDataForClick,
  date,
  buttonCoordinates,
}) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal window Calendar"
      style={{
        content: {
          top: buttonCoordinates?.top - 188 - 14,
          left: "50%",
          transform: "translateX(-50%)",
          width: "280px",
          height: "188px",
        },
      }}
    >
      {clickedDayDataForClick && (
        <div>
          <ModalDate>
            {`${date.getDate()}, ${date.toLocaleString("en-US", {
              month: "long",
            })}`}
          </ModalDate>
          <div>
            <p>
              Daily norma:{" "}
              <ModalAccent>
                {(clickedDayDataForClick.waterNorma &&
                  (clickedDayDataForClick.waterNorma / 1000).toFixed(1)) ||
                  "N/A"}{" "}
                L
              </ModalAccent>
            </p>
            <p>
              Fulfillment of the daily norm:{" "}
              <ModalAccent>{clickedDayDataForClick.percentage}%</ModalAccent>
            </p>
            <p>
              How many servings of water:{" "}
              <ModalAccent>{clickedDayDataForClick.doses}</ModalAccent>
            </p>
          </div>
        </div>
      )}
    </Modal>
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
