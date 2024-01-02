import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getPortionsList } from "../../redux/todayOperations.js";
import bottleImg from "../../images/bottle-mainPage-mobile.png";
import {
  DailyNormaContainer,
  DailyNormaTitle,
  DailyNormaInfo,
  DailyNormaSpan,
  DailyNormaBth,
  DailyNormaImg,
} from "./DailyNorma.styled";

export const DailyNorma = () => {
  // const dailyNorma = useSelector((state) => state.portions.dailyNorma);

  function onChangeDailyNorma() {
    console.log("change dailyNorma");
  }

  return (
    <>
      <DailyNormaContainer>
        <DailyNormaTitle>My daily norma</DailyNormaTitle>
        <DailyNormaInfo>
          <span>1.5</span>
          <DailyNormaSpan>L</DailyNormaSpan>
          <DailyNormaBth type="button" onClick={() => onChangeDailyNorma()}>
            Edit
          </DailyNormaBth>
        </DailyNormaInfo>
      </DailyNormaContainer>

      <DailyNormaImg src={bottleImg} alt="img" />
    </>
  );
};
