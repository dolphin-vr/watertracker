import { useDispatch, useSelector } from "react-redux";
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
  StyledSection,
  StyledDiv,
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
import {
  // selectUserIsLoading,
  selectUserNorma,
} from "../../redux/user/userSelectors";
import CalcModal from "../../components/СalcModal/CalcModal";
import toast from "react-hot-toast";
// import { Loader } from "../../components/Loader/Loader";
// import { selectIsLoading } from "../../redux/water/todaySelectors";

export const MainPage = () => {
  const [openAddWaterModal, setOpenAddWaterModal] = useState(false);
  const [openCalcModal, setOpenCalcModal] = useState(false);

  const dailyNorma = useSelector(selectUserNorma);
  // const isLoading = useSelector(selectIsLoading);

  // const isUserIsLoading = useSelector(selectUserIsLoading);

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
      <StyledSection>
       <StyledDiv>
          <Backgound />
          <MainPageStatistic className="_mainstat"> 
            <DailyNorma className="_dailynorma"/>
            <WaterProgressWrap className="_progress">
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
       </StyledDiv>
      </StyledSection>
         {/*      <Backgound />
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
      {isLoading && <Loader />}
      {isUserIsLoading && <Loader />}
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
      )}  */}
    </MainPageContainer>
  );
};
