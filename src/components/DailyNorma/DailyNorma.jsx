import { useState } from "react";
import { useSelector } from "react-redux";
// import { getPortionsList } from "../../redux/todayOperations.js";
import bottleImg from "../../images/bottle-mainPage-mobile.png";
import CalcModal from "../СalcModal/CalcModal";
import { selectUserNorma } from "../../redux/user/userSelectors";
import {
  DailyNormaContainer,
  DailyNormaTitle,
  DailyNormaInfo,
  DailyNormaSpan,
  DailyNormaBth,
  DailyNormaImg,
} from "./DailyNorma.styled";

export const DailyNorma = () => {
  const dailyNorma = useSelector(selectUserNorma);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <DailyNormaContainer>
        <DailyNormaTitle>My daily norma</DailyNormaTitle>
        <DailyNormaInfo>
          <span>{dailyNorma ? dailyNorma / 1000 : "2.0"}</span>
          <DailyNormaSpan>L</DailyNormaSpan>
          <DailyNormaBth type="button" onClick={handleEditClick}>
            Edit
          </DailyNormaBth>
          {isModalOpen && <CalcModal onClose={handleCloseModal} />}
        </DailyNormaInfo>
      </DailyNormaContainer>

      <DailyNormaImg src={bottleImg} alt="img" />
    </>
  );
};
