import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getUserInfo } from "../../redux/user/userOperations";
import { addNewPortion, getPortionsList } from "../../redux/water/todayOperations";
import {
  // selectUserIsLoading,
  selectUserNorma,
} from "../../redux/user/userSelectors";
import { Today } from "../../components/Today/Today";
import { MainPagePortions, Main } from "./MainPage.styled";
import { WaterModal } from "../../components/WaterModal/WaterModal";
import { CalendarD } from "../../components/Calendar/CalendarD";
// import sprite from "../../assets/sprite.svg";
import { CalcModal } from "../../components/СalcModal/CalcModal";
import { MainStat } from "../../components/MainStat/MainStat";
// import { Loader } from "../../components/Loader/Loader";
// import { selectIsLoading } from "../../redux/water/todaySelectors";

export const MainPage = () => {
  const dispatch = useDispatch();
  const [openAddWaterModal, setOpenAddWaterModal] = useState(false);
  const [openCalcModal, setOpenCalcModal] = useState(false);
  const dailyNorma = useSelector(selectUserNorma);
  // const isLoading = useSelector(selectIsLoading);
  // const isUserIsLoading = useSelector(selectUserIsLoading);

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
    <Main>
      <MainStat onClick={onOpenModalWindow} />
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
          onAddWater={data => {
            dispatch(addNewPortion(data));
          }}
          initialWater={0}
          initialDate={new Date()}
          isEditing={false}
        />
      )}
    </Main>
  );
};
