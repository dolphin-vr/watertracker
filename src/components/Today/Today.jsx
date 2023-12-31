import { useSelector, useDispatch } from "react-redux";
import { getPortionsList } from "../../redux/water/todayOperations.js";
import {
  TodayWrapper,
  TodayTitle,
  TodayText,
  TodayList,
  TodayItem,
  TodayQuantity,
  TodayTime,
  AddWaterButton,
} from "./Today.styled.js";
import {
  selectDailyPortions,
  selectIsLoading,
} from "../../redux/water/todaySelectors.js";

export const Today = () => {
  const isLoading = useSelector(selectIsLoading);
  const dailyPortions = useSelector(selectDailyPortions);

  function onChangePortion() {
    console.log("Open modal window and need change portion");
  }

  function onDeletePortion() {
    console.log("Delete portion");
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
                <TodayQuantity>
                  {water}
                  <span> ml</span>
                </TodayQuantity>
                <TodayTime>{time}</TodayTime>
                <button type="button" onClick={() => onChangePortion(id)}>
                  Change
                </button>
                <button type="button" onClick={() => onDeletePortion(id)}>
                  Delete
                </button>
              </TodayItem>
            ))}
          </TodayList>
          <AddWaterButton type="button" onClick={() => onDeletePortion()}>
            Add water
          </AddWaterButton>
        </>
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
  return (
    <div className={css.wrapper}>
      <h3>Today</h3>
      {/* <ul>
        {portions.map(({ water, id, time }) => {
          return (
            <li key={id}>
              <span>{water}</span>
              <span> ml </span>
              <span>{time}</span>
              <button type="button" onClick={() => onChangePortion(id)}>
                Change
              </button>
              <button type="button" onClick={() => onDeletePortion(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default Today;
