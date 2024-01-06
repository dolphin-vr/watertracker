import { useSelector } from "react-redux";
// import { getPortionsList } from "../../redux/water/todayOperations.js";
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
import { selectDailyPortions } from "../../redux/water/todaySelectors.js";
import {
  IconGlass,
  IconPencil,
  IconTrash,
} from "../../images/today/TodayIcons.jsx";

export const Today = () => {
  const dailyPortions = useSelector(selectDailyPortions);

  function onChangePortion(water, id, time) {
    console.log("Open modal window and need change portion");
  }

  function onDeletePortion(id) {
    console.log("Delete portion");
  }

  function onAddPortion(water, id) {
    console.log("Add portion");
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
    </TodayWrapper>
  );
};

export default Today;
