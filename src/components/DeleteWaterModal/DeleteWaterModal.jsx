import { deletePortion } from "../../redux/water/todayOperations";
import {
  BtnCancel,
  BtnClose,
  BtnDelete,
  Text,
  Title,
  WrapBtn,
  modalDelete,
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
  // console.log(id);

  const handleDelete = (id) => {
    dispatch(deletePortion(id));
    onCloseModal();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onCloseModal}
      contentLabel="WaterModal"
      style={modalDelete}
    >
      <div>
        <Title>Delete entry</Title>
        <BtnClose type="button" onClick={onCloseModal}>
          <svg stroke="#407BFF" width="24" height="24">
            <use href={sprite + "#modalclose"}></use>
          </svg>
        </BtnClose>

        <Text>Are you sure you want to delete the entry?</Text>
        <WrapBtn>
          <BtnDelete type="submit" onClick={() => handleDelete(id)}>
            Delete
          </BtnDelete>
          <BtnCancel type="button" onClick={onCloseModal}>
            Cancel
          </BtnCancel>
        </WrapBtn>
      </div>
    </Modal>
  );
};
