import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getPortionsList } from "../../redux/todayOperations.js";

export const DailyNorma = () => {
  const dailyNorma = useSelector((state) => state.portions.dailyNorma);

  function onChangeDailyNorma() {
    console.log("change dailyNorma");
  }

  return (
    <>
      <p>My daily norma</p>
      <p>
        <span>1.5</span>
        <span>L</span>
        <button type="button" onClick={() => onChangeDailyNorma()}>
          Edit
        </button>
      </p>
    </>
  );
};
