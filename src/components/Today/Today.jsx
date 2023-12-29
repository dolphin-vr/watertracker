import { useEffect } from "react";
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

export const Today = () => {
  const portions = useSelector((state) => state.portions.portions);
  const isLoading = useSelector((state) => state.isLoading);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getPortionsList());
  }, [dispath]);

  function getDailyPortions() {
    return portions;
  }

  function onChangePortion() {
    console.log("Open modal window and need change portion");
  }

  function onDeletePortion() {
    console.log("Delete portion");
  }

  return (
    <TodayWrapper>
      <TodayTitle>Today</TodayTitle>
      {getDailyPortions() === null || getDailyPortions().length === 0 ? (
        <TodayText>No notes yet</TodayText>
      ) : (
        <>
          <TodayList>
            {getDailyPortions()[0].dailyPortions.map(({ water, id, time }) => (
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
  //     return (
  //       <div className={css.wrapper}>
  //         <h3>Today</h3>
  //         <ul>
  //           {array[0].map(({ water, id, time }) => {
  //             return (
  //               <li key={id}>
  //                 <span>{water}</span>
  //                 <span> ml </span>
  //                 <span>{time}</span>
  //                 <button type="button" onClick={() => onChangePortion(id)}>
  //                   Change
  //                 </button>
  //                 <button type="button" onClick={() => onDeletePortion(id)}>
  //                   Delete
  //                 </button>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     );
  //   }
  // }
};

// export default Today;
