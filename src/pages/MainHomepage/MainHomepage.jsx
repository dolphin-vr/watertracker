<<<<<<< HEAD
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
=======
import { Calendar } from "../../components/Calendar/Calendar";
// import { Today } from "../../components/Today/Today";
import { Toaster } from "react-hot-toast";

const MainHomepage = () => {
  return (
    <div>
      <Toaster />
      {/* <Today /> */}
      <Calendar />
>>>>>>> 8984c3b12927bb0698a22caa5a0f5f1f2532de1c
    </div>
  );
};
export default MainHomepage;
