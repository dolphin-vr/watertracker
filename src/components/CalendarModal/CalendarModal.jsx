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
import sprite from "../../images/sprite.svg";

const CalendarModal = ({isOpen,closeModal, day, norma, buttonCoordinates,}) => {
  if (!isOpen || !day) {    return null;  }
  const { percentage, doses, date, id } = day;
  const ModalID = id.toString();
  const formattedDate =    new Date(date).getDate() +    ", " +    new Date(date).toLocaleString("en-US", { month: "long" });
  const normaInLiters = (norma / 1000).toFixed(1);

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      buttonCoordinates={buttonCoordinates}
      contentLabel="Modal window Calendar"
      overlayClassName="custom-overlay"
      id={ModalID}
    >
      <CustomModalConteiner>
        <ModalHeader>
          <ModalDate>{formattedDate}</ModalDate>
          <CloseButton onClick={closeModal}>
            <svg stroke="#407BFF" width="16" height="16">
              <use href={sprite + "#modalclose"}></use>
            </svg>
          </CloseButton>
        </ModalHeader>
        <ModalList>
          <ModalIndicators>
            Daily norma:<ModalAccent>{normaInLiters} L</ModalAccent>
          </ModalIndicators>
          <ModalIndicators>
            Fulfillment of the daily norm:
            <ModalAccent>{percentage}%</ModalAccent>
          </ModalIndicators>
          <ModalIndicators>
            How many servings of water:<ModalAccent>{doses}</ModalAccent>
          </ModalIndicators>
        </ModalList>
      </CustomModalConteiner>
    </StyledModal>
  );
};

export { CalendarModal };
