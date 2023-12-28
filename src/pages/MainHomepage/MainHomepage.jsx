import { AddPortion } from "../../components/AddPortion/AddPortion";
import { Calendar } from "../../components/Calendar/Calendar";
import { DailyNorma } from "../../components/DailyNorma/DailyNorma";
import { Today } from "../../components/Today/Today";
import { WaterProgresBar } from "../../components/WaterProgresBar/WaterProgresBar";
import css from "./MainHomepage.module.css";

const MainHomepage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.statistic}>
        <DailyNorma />
        <div>
          <WaterProgresBar />
          <AddPortion />
        </div>
      </div>
      <div className={css.portions}>
        {/* <Today /> */}
        <Calendar />
      </div>
    </div>
  );
};
export default MainHomepage;
