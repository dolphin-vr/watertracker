import { useDispatch } from "react-redux";
import { AddPortion } from "../../components/AddPortion/AddPortion";
import { Calendar } from "../../components/Calendar/Calendar";
import { DailyNorma } from "../../components/DailyNorma/DailyNorma";
import { Today } from "../../components/Today/Today";
import { WaterProgresBar } from "../../components/WaterProgresBar/WaterProgresBar";
import {
  // MainHomepageBackground,
  MainHomepageContainer,
  MainHomepageStatistic,
  WaterProgressWrap,
  MainHomepagePortions,
  AddPortionButton,
} from "./MainHomepage.styled";
import { useEffect } from "react";
import { getUserInfo } from "../../redux/user/userOperations";
import { getPortionsList } from "../../redux/water/todayOperations";

const MainHomepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getPortionsList());
  }, [dispatch]);

  function onOpenModalWindow() {
    console.log("Modal window is open");
  }

  return (
    // <MainHomepageBackground>
    <MainHomepageContainer>
      <MainHomepageStatistic>
        <DailyNorma />
        <WaterProgressWrap>
          <WaterProgresBar />
          <AddPortionButton type="button" onClick={() => onOpenModalWindow()}>
            Add water
          </AddPortionButton>
        </WaterProgressWrap>
      </MainHomepageStatistic>
      <MainHomepagePortions>
        <Today />
        <Calendar />
      </MainHomepagePortions>
    </MainHomepageContainer>
    // </MainHomepageBackground>
  );
};
export default MainHomepage;
