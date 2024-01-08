import { useState } from "react";
import { useSelector } from "react-redux";
// import { getPortionsList } from "../../redux/todayOperations.js";
import CalcModal from "../СalcModal/CalcModal";
import { selectUserNorma } from "../../redux/user/userSelectors";
import {
  DailyNormaContainer,
  DailyNormaTitle,
  DailyNormaInfo,
  DailyNormaSpan,
  DailyNormaBth,
  DailyNormaWrapper,
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
    <DailyNormaWrapper>
      <DailyNormaContainer>
        <DailyNormaTitle>My daily norma</DailyNormaTitle>
        <DailyNormaInfo>
          <span>{dailyNorma / 1000}</span>
          <DailyNormaSpan>L</DailyNormaSpan>
          <DailyNormaBth type="button" onClick={handleEditClick}>
            Edit
          </DailyNormaBth>
          {isModalOpen && <CalcModal onClose={handleCloseModal} />}
        </DailyNormaInfo>
      </DailyNormaContainer>
    </DailyNormaWrapper>
  );
};
