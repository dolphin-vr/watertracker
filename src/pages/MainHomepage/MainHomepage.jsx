import { useSelector } from "react-redux";
import { AddPortion } from "../../components/AddPortion/AddPortion";
import { Calendar } from "../../components/Calendar/Calendar";
import { DailyNorma } from "../../components/DailyNorma/DailyNorma";
import { Today } from "../../components/Today/Today";
import { WaterProgresBar } from "../../components/WaterProgresBar/WaterProgresBar";
import {
  MainHomepageContainer,
  MainHomepageStatistic,
  MainHomepagePortions,
  AddPortionButton,
} from "./MainHomepage.styled";

function onOpenModalWindow() {
  console.log("Modal vindow is open");
}

const MainHomepage = () => {
  return (
    <MainHomepageContainer>
      <MainHomepageStatistic>
        {/* <DailyNorma /> */}
        <WaterProgresBar />
        <AddPortionButton type="button" onClick={() => onOpenModalWindow()}>
          Add water
        </AddPortionButton>
      </MainHomepageStatistic>
      <MainHomepagePortions>
        {/* <Today /> */}
        <Calendar />
      </MainHomepagePortions>
    </MainHomepageContainer>
  );
};
export default MainHomepage;
