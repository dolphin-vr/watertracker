import { useDispatch, useSelector } from "react-redux";
// import { AddPortion } from "../../components/AddPortion/AddPortion";
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
import { selectUserNorma } from "../../redux/user/userSelectors";
import CalcModal from "../../components/СalcModal/CalcModal";
import toast from "react-hot-toast";

const MainPage = () => {
  const [openAddWaterModal, setOpenAddWaterModal] = useState(false);
  const [openCalcModal, setOpenCalcModal] = useState(false);

  const dailyNorma = useSelector(selectUserNorma);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getPortionsList());
  }, [dispatch]);

  function onOpenModalWindow() {
    if (dailyNorma === 0) {
      setOpenCalcModal(true);
      toast("Please enter your daily water norma first", {
        duration: 4000,
        position: "top-right",
        style: {
          backgroundColor: "yellow",
        },
      });
    } else setOpenAddWaterModal(true);
  }

  function onCloseModalWindow() {
    setOpenCalcModal(false);
    setOpenAddWaterModal(false);
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
      {openCalcModal && <CalcModal onClose={onCloseModalWindow} />}
      {openAddWaterModal && (
        <WaterModal
          title="Add water"
          subtitle="Choose a value:"
          onCloseModal={onCloseModalWindow}
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
