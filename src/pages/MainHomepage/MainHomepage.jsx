import { AddPortion } from "../../components/AddPortion/AddPortion";
import { Calendar } from "../../components/Calendar/Calendar";
import { DailyNorma } from "../../components/DailyNorma/DailyNorma";
import { Today } from "../../components/Today/Today";
import { WaterProgresBar } from "../../components/WaterProgresBar/WaterProgresBar";
import {
  MainHomepageContainer,
  MainHomepageStatistic,
  MainHomepagePortions,
} from "./MainHomepage.styled";

const MainHomepage = () => {
  return (
    <MainHomepageContainer>
      <MainHomepageStatistic>
        <DailyNorma />
        <WaterProgresBar />
        <AddPortion />
      </MainHomepageStatistic>
      <MainHomepagePortions>
        {/* <Today /> */}
        <Calendar />
      </MainHomepagePortions>
    </MainHomepageContainer>
  );
};
export default MainHomepage;
