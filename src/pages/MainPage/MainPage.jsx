import { useDispatch } from "react-redux";
// import { AddPortion } from "../../components/AddPortion/AddPortion";
// import { Calendar } from "../../components/Calendar/Calendar";
import { DailyNorma } from "../../components/DailyNorma/DailyNorma";
import { Today } from "../../components/Today/Today";
import { WaterProgresBar } from "../../components/WaterProgresBar/WaterProgresBar";
import {
  MainPageContainer,
  MainPageStatistic,
  WaterProgressWrap,
  MainPagePortions,
  AddPortionButton,
  Backgound,
  StyledSvgPlus,
} from "./MainPage.styled";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../redux/user/userOperations";
import {
  addNewPortion,
  getPortionsList,
} from "../../redux/water/todayOperations";
import { WaterModal } from "../../components/WaterModal/WaterModal";
import { CalendarD } from "../../components/Calendar/CalendarD";
import sprite from "../../images/sprite.svg";

const MainPage = () => {
  const [openAddWaterModal, setOpenAddWaterModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getPortionsList());
  }, [dispatch]);

  function onOpenModalWindow() {
    setOpenAddWaterModal(!openAddWaterModal);
  }

  return (
    <MainPageContainer>
      <Backgound />
      <MainPageStatistic>
        <DailyNorma />
        <WaterProgressWrap>
          <WaterProgresBar />
          <AddPortionButton type="button" onClick={() => onOpenModalWindow()}>
            <StyledSvgPlus>
              <use href={sprite + "#pluscircle"}>Add water</use>
            </StyledSvgPlus>
            Add water
          </AddPortionButton>
        </WaterProgressWrap>
      </MainPageStatistic>
      <MainPagePortions>
        <Today />
        <CalendarD />
      </MainPagePortions>
      {openAddWaterModal && (
        <WaterModal
          title="Add water"
          subtitle="Choose a value:"
          onCloseModal={onOpenModalWindow}
          onAddWater={(data) => {
            dispatch(addNewPortion(data));
          }}
          initialWater={0}
          initialDate={new Date()}
          isEditing={false}
        />
      )}
    </MainPageContainer>
  );
};
export default MainPage;
