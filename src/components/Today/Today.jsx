import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPortionsList } from "../../redux/todayOperations.js";
import { currentDate } from "../../services/currentDate.js";
import css from "./Today.module.css";

const Today = () => {
  const portions = useSelector((state) => state.portions.portions);
  const isLoading = useSelector((state) => state.isLoading);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getPortionsList());
  }, [dispath]);

  function getDailyPortions() {
    const dayPortions = portions.filter(
      (portion) => portion.date === currentDate
    );
    return dayPortions;
  }

  function onChangePortion() {
    console.log("Open modal window and need change portion");
  }

  function onDeletePortion() {
    console.log("Delete portion");
  }

  if (getDailyPortions().length === 0) {
    return <p>No result</p>;
  } else {
    if (isLoading === true) {
      return <div>Loading...</div>;
    } else {
      const array = getDailyPortions().map(
        (portions) => portions.dailyPortions
      );
      return (
        <div className={css.wrapper}>
          <h3>Today</h3>
          <ul>
            {array[0].map(({ quantity, id, time }) => {
              return (
                <li key={id}>
                  <span>{quantity}</span>
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
    }
  }
};

export default Today;
