import { deletePortion } from "../../redux/water/todayOperations";
import {
  BackdporModal,
  BtnCancel,
  BtnClose,
  BtnDelete,
  ModalStyled,
  ModalWrap,
  Text,
  Title,
  WrapBtn,
} from "./DeleteWaterModal.styled";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { useEffect } from "react";
import sprite from "../../images/sprite.svg";

Modal.setAppElement("#modal-root");

export const DeleteWaterModal = ({ onCloseModal, id }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePortion(id));
    onCloseModal();
  };

  return (
    <ModalStyled
      isOpen={true}
      onRequestClose={onCloseModal}
      contentLabel="WaterModal"
      overlayClassName="overlay"
    >
      <BackdporModal onClick={onCloseModal} />
      <ModalWrap>
        <Title>Delete entry</Title>
        <BtnClose type="button" onClick={onCloseModal}>
          <svg stroke="#407BFF" width="24" height="24">
            <use href={sprite + "#modalclose"}></use>
          </svg>
        </BtnClose>

        <Text>Are you sure you want to delete the entry?</Text>
        <WrapBtn>
          <BtnCancel type="button" onClick={onCloseModal}>
            Cancel
          </BtnCancel>
          <BtnDelete type="submit" onClick={() => handleDelete(id)}>
            Delete
          </BtnDelete>
        </WrapBtn>
      </ModalWrap>
    </ModalStyled>
  );
};
