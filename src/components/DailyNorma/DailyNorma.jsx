import { useSelector } from "react-redux";
// import { getPortionsList } from "../../redux/todayOperations.js";
import bottleImg from "../../images/bottle-mainPage-mobile.png";
import { selectUserNorma } from "../../redux/user/userSelectors";
import {
  DailyNormaContainer,
  DailyNormaTitle,
  DailyNormaInfo,
  DailyNormaSpan,
  DailyNormaBth,
  DailyNormaImg,
  DailyNormaWrapper,
} from "./DailyNorma.styled";

export const DailyNorma = () => {
  const dailyNorma = useSelector(selectUserNorma);

  function onChangeDailyNorma() {
    console.log("change dailyNorma");
  }

  return (
    <DailyNormaWrapper>
      <DailyNormaContainer>
        <DailyNormaTitle>My daily norma</DailyNormaTitle>
        <DailyNormaInfo>
          <span>{dailyNorma}</span>
          <DailyNormaSpan>L</DailyNormaSpan>
          <DailyNormaBth type="button" onClick={() => onChangeDailyNorma()}>
            Edit
          </DailyNormaBth>
        </DailyNormaInfo>
      </DailyNormaContainer>

      {/* <DailyNormaImg src={bottleImg} alt="img" /> */}
    </DailyNormaWrapper>
  );
};
