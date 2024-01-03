import { deletePortion } from "../../redux/water/todayOperations";
import { StyledModal, StyledOverlay } from "./DeleteWaterModal.styled";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

const modalRoot = document.querySelector("#modal-root");

export const DeleteWaterModal = ({ onCloseModal, id }) => {
  const dispatch = useDispatch();
  console.log(id);

  const handleDelete = (id) => {
    dispatch(deletePortion(id));
    onCloseModal();
  };

  return createPortal(
    <StyledOverlay>
      <StyledModal>
        <div>
          <h1>Delete entry</h1>
          <button type="button" onClick={onCloseModal}>
            X
          </button>
          <p>Are you sure you want to delete the entry?</p>
          <button type="button" onClick={onCloseModal}>
            Cancel
          </button>
          <button type="submit" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      </StyledModal>
    </StyledOverlay>,
    modalRoot
  );
};
