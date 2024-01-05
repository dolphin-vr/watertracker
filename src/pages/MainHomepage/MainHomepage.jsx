import { useDispatch } from "react-redux";
import { AddPortion } from "../../components/AddPortion/AddPortion";
import { Calendar } from "../../components/Calendar/Calendar";
import { DailyNorma } from "../../components/DailyNorma/DailyNorma";
import { Today } from "../../components/Today/Today";
import { WaterProgresBar } from "../../components/WaterProgresBar/WaterProgresBar";
import {
  MainHomepageContainer,
  MainHomepageStatistic,
  WaterProgressWrap,
  MainHomepagePortions,
  AddPortionButton,
} from "./MainHomepage.styled";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../redux/user/userOperations";
import {
  addNewPortion,
  getPortionsList,
} from "../../redux/water/todayOperations";
import { WaterModal } from "../../components/WaterModal/WaterModal";

const MainHomepage = () => {
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
    </MainHomepageContainer>
  );
};
export default MainHomepage;
