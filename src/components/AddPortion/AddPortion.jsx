// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
// import { Button } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { selectDailyPortions } from "../../redux/water/todaySelectors";
// import { addNewPortion } from "../../redux/todayOperations.js";

export const AddPortion = () => {
  const portions = useSelector(selectDailyPortions);
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
