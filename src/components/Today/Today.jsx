import { useSelector, useDispatch } from "react-redux";
import {
  addNewPortion,
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
  StyledSvgGlass,
  StyledSvgPencil,
  StyledSvgTrash,
  StyledSvgPlus,
} from "./Today.styled.js";
import { selectDailyPortions } from "../../redux/water/todaySelectors.js";
import sprite from "../../images/sprite.svg";
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

  // const isLoading = useSelector(selectIsLoading);
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
                  <StyledSvgGlass>
                    <use href={sprite + "#cup"} width="26" height="26"></use>
                  </StyledSvgGlass>
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
                    <StyledSvgPencil>
                      <use href={sprite + "#pencil"}></use>
                    </StyledSvgPencil>
                  </SvgButtonCreate>
                  <SvgButtonDel
                    type="button"
                    onClick={() => onDeletePortion(id)}
                  >
                    <StyledSvgTrash>
                      <use href={sprite + "#trash"}></use>
                    </StyledSvgTrash>
                  </SvgButtonDel>
                </ButtonsWrap>
              </TodayItem>
            ))}
          </TodayList>
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
      <AddWaterButton type="button" onClick={() => onAddPortion()}>
        <StyledSvgPlus>
          <use href={sprite + "#plus"}></use>
        </StyledSvgPlus>
        Add water
      </AddWaterButton>
    </TodayWrapper>
  );
};

export default Today;
