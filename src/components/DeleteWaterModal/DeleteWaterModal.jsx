import { StyledModal, StyledOverlay } from "./DeleteWaterModal.styled";
import { createPortal } from "react-dom";
// import { useDispatch } from "react-redux";

const modalRoot = document.querySelector("#modal-root");

export const DeleteWaterModal = () => {
  // const handleClose = () => {
  //   closeModal();
  // };
  //   const dispatch = useDispatch();

  // const handleDelete = (id) => {
  //   dispatch(deleteEntryThunk(id));
  //   dispatch
  //   closeModal();
  // };

  return createPortal(
    <StyledOverlay>
      <StyledModal>
        <div>
          <h1>Delete entry</h1>
          <button type="button">X</button>
          <p>Are you sure you want to delete the entry?</p>
          <button type="button">Cancel</button>
          <button type="submit">Delete</button>
        </div>
      </StyledModal>
    </StyledOverlay>,
    modalRoot
  );
};
