import { useSelector } from "react-redux";
import css from "./Today.module.css";
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

  // if (dailyPortions.length === 0) {
  //   return <p>No result about today portions</p>;
  // } else {
  //   if (isLoading === true) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div className={css.wrapper}>
      <h3>Today</h3>
      <ul>
        {dailyPortions.map(({ water, id, time }) => {
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
      </ul>
    </div>
  );
};

export default Today;
