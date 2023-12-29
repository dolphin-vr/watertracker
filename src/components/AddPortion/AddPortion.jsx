// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";
// import { addNewPortion } from "../../redux/todayOperations.js";

export const AddPortion = () => {
  const portions = useSelector((state) => state.portions.portions);
  const dispath = useDispatch();

  function onOpenModalWindow() {
    console.log("Modal window is open");
  }

  return;
};
