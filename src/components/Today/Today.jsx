import { useSelector, useDispatch } from "react-redux";
import {
  addNewPortion,
  getPortionsList,
  updatePortion,
} from "../../redux/water/todayOperations.js";
import {
  TodayWrapper,
  TodayTitle,
  TodayText,
  TodayList,
  TodayItem,
  QuantityWrap,
  TodayQuantity,
  TodayTime,
  ButtonsWrap,
  SvgButtonCreate,
  SvgButtonDel,
  AddWaterButton,
} from "./Today.styled.js";
import {
  selectDailyPortions,
  selectIsLoading,
} from "../../redux/water/todaySelectors.js";
// import IconClass from "../../images/today/Today_class.svg";
import {
  IconGlass,
  IconPencil,
  IconTrash,
} from "../../images/today/TodayIcons.jsx";
// import { AddWaterModal } from "../AddWaterModal/AddWaterModal.jsx";
import { useState } from "react";
import { DeleteWaterModal } from "../DeleteWaterModal/DeleteWaterModal.jsx";
import { WaterModal } from "../WaterModal/WaterModal.jsx";
// import { useDispatch } from "react-redux";

export const Today = () => {
  const dispatch = useDispatch();
  const [openAddWaterModal, setOpenAddWaterModal] = useState(false);
  const [openDeleteWaterModal, setOpenDeleteWaterModal] = useState(false);
  const [openEditWaterModal, setOpenEditWaterModal] = useState(false);

  const [id, setId] = useState(null);
  const [data, setData] = useState(null);

  const isLoading = useSelector(selectIsLoading);
  const dailyPortions = useSelector(selectDailyPortions);

  function onChangePortion(water, id, time) {
    setOpenEditWaterModal(true);
    setData({ water, id, time });
  }

  function onCloseChangePortion() {
    setOpenEditWaterModal(false);
    setData(null);
  }

  function onDeletePortion(id) {
    setOpenDeleteWaterModal(true);
    setId(id);
  }
  function onCloseDeletePortion() {
    setOpenDeleteWaterModal(false);
    setId(null);
  }

  function onAddPortion() {
    setOpenAddWaterModal(!openAddWaterModal);
  }

  return (
    <TodayWrapper>
      <TodayTitle>Today</TodayTitle>
      {dailyPortions === null || dailyPortions.length === 0 ? (
        <TodayText>No notes yet</TodayText>
      ) : (
        <>
          <TodayList>
            {dailyPortions.map(({ water, id, time }) => (
              <TodayItem key={id}>
                <QuantityWrap>
                  <IconGlass />
                  <TodayQuantity>
                    {water}
                    <span> ml</span>
                  </TodayQuantity>
                  <TodayTime>{time}</TodayTime>
                </QuantityWrap>
                <ButtonsWrap>
                  <SvgButtonCreate
                    type="button"
                    onClick={() => onChangePortion(water, id, time)}
                  >
                    <IconPencil />
                  </SvgButtonCreate>
                  <SvgButtonDel
                    type="button"
                    onClick={() => onDeletePortion(id)}
                  >
                    <IconTrash />
                  </SvgButtonDel>
                </ButtonsWrap>
              </TodayItem>
            ))}
          </TodayList>
          <AddWaterButton type="button" onClick={() => onAddPortion()}>
            Add water
          </AddWaterButton>
        </>
      )}
      {openAddWaterModal && (
        <WaterModal
          title="Add water"
          subtitle="Choose a value:"
          onCloseModal={onAddPortion}
          onAddWater={(data) => {
            dispatch(addNewPortion(data));
          }}
          initialWater={0}
          initialDate={new Date()}
          isEditing={false}
        />
      )}
      {openDeleteWaterModal && (
        <DeleteWaterModal onCloseModal={onCloseDeletePortion} id={id} />
      )}
      {openEditWaterModal && (
        <WaterModal
          title="Edit the entered amount of water"
          subtitle="Correct entered data:"
          onCloseModal={onCloseChangePortion}
          onEditWater={(data) => {
            dispatch(updatePortion(data));
          }}
          initialWater={data.water}
          initialId={data.id}
          initialDate={new Date(`2024-01-01T${data.time}`)}
          isEditing={true}
        />
      )}
    </TodayWrapper>
  );

  // if (getDailyPortions() === null || getDailyPortions().length === 0) {
  //   return <p>No result about today portions</p>;
  // } else {
  //   if (isLoading === true) {
  //     return <div>Loading...</div>;
  //   } else {
  //     const array = getDailyPortions().map(
  //       (portions) => portions.dailyPortions
  //     );
  // return (
  //   <div className={css.wrapper}>
  //     <h3>Today</h3>
  //     <ul>
  //       {array[0].map(({ water, id, time }) => {
  //         return (
  //           <li key={id}>
  //             <span>{water}</span>
  //             <span> ml </span>
  //             <span>{time}</span>
  //             <button type="button" onClick={() => onChangePortion(id)}>
  //               Change
  //             </button>
  //             <button type="button" onClick={() => onDeletePortion(id)}>
  //               Delete
  //             </button>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
  //   }
  // }
  // return (
  //   <div className={css.wrapper}>
  //     <h3>Today</h3>
  //     {/* <ul>
  //       {portions.map(({ water, id, time }) => {
  //         return (
  //           <li key={id}>
  //             <span>{water}</span>
  //             <span> ml </span>
  //             <span>{time}</span>
  //             <button type="button" onClick={() => onChangePortion(id)}>
  //               Change
  //             </button>
  //             <button type="button" onClick={() => onDeletePortion(id)}>
  //               Delete
  //             </button>
  //           </li>
  //         );
  //       })}
  //     </ul> */}
  //   </div>
  // );
};

export default Today;
