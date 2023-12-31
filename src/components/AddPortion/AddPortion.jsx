// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";
import { selectDailyPortions } from "../../redux/water/todaySelectors";
// import { addNewPortion } from "../../redux/todayOperations.js";

export const AddPortion = () => {
  const portions = useSelector(selectDailyPortions);
  const dispath = useDispatch();

  function onOpenModalWindow() {
    console.log("Modal window is open");
  }

  return;
};
