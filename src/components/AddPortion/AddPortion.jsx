// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
// import { Button } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { addNewPortion } from "../../redux/todayOperations.js";

const AddPortion = () => {
  const portions = useSelector((state) => state.portions.portions);
  const dispath = useDispatch();

  function onOpenModalWindow() {
    console.log("Modal window is open");
  }

  return (
    <button type="button" onClick={() => onOpenModalWindow()}>
      Add water
    </button>
  );
};

export default AddPortion;
