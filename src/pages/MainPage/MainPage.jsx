import { useDispatch } from "react-redux";
// import { AddPortion } from "../../components/AddPortion/AddPortion";
import { Calendar } from "../../components/Calendar/Calendar";
import { DailyNorma } from "../../components/DailyNorma/DailyNorma";
import { Today } from "../../components/Today/Today";
import { WaterProgresBar } from "../../components/WaterProgresBar/WaterProgresBar";
import {
  MainPageContainer,
  MainPageStatistic,
  WaterProgressWrap,
  MainPagePortions,
  AddPortionButton,
} from "./MainPage.styled";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../redux/user/userOperations";
import { getPortionsList } from "../../redux/water/todayOperations";
import { AddWaterModal } from "../../components/AddWaterModal/AddWaterModal";
// import { CalendarD } from "../../components/Calendar/CalendarD";

const MainPage = () => {
  const [openAddWaterModal, setOpenAddWaterModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getPortionsList());
  }, [dispatch]);

  function onOpenModalWindow() {
    // console.log("Modal window is open");
    setOpenAddWaterModal(!openAddWaterModal);
  }

  return (
    <MainPageContainer>
      <MainPageStatistic>
        <DailyNorma />
        <WaterProgressWrap>
          <WaterProgresBar />
          <AddPortionButton type="button" onClick={() => onOpenModalWindow()}>
            Add water
          </AddPortionButton>
        </WaterProgressWrap>
      </MainPageStatistic>
      <MainPagePortions>
        <Today />
        <Calendar />
      </MainPagePortions>
      {openAddWaterModal && <AddWaterModal onCloseModal={onOpenModalWindow} />}
    </MainPageContainer>
  );
};
export default MainPage;
