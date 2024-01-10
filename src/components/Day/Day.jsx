import { useSelector } from "react-redux";
import { DayTile, DayButton, Circle, Label } from "./Day.styled";
import {
  selectDoses,
  selectPercentage,
} from "../../redux/water/todaySelectors";
import { currentDate } from "../../shared/api/dates";
import { useMemo } from "react";

export const Day = ({ day, onClick }) => {
  const percentage = useSelector(selectPercentage);
  const doses = useSelector(selectDoses);
  const newday = useMemo(() => {
    if (day.date === currentDate) {
      day.percentage = percentage;
      day.doses = doses;
    }
    return day;
  }, [day, doses, percentage]);

  return (
    <DayTile istoday={newday.isToday.toString()}>
      <DayButton onClick={(event) => onClick(event, newday)} id={newday.id}>
        <Circle percent={newday.percentage}>{newday.id}</Circle>
        <Label>{newday.percentage ? `${newday.percentage}  %` : ""}</Label>
      </DayButton>
    </DayTile>
  );
};
