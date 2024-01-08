import { DayTile, DayButton, Circle, Label } from "./Day.styled";
import { useSelector } from "react-redux";
import { DayTile, DayButton, Circle, Label } from "./Day.styled";
import {
  selectDoses,
  selectPercentage,
} from "../../redux/water/todaySelectors";
import { currentDate } from "../../shared/api/dates";
import { useMemo } from "react";

export const Day = ({ day, onClick }) => {
  return (
    <DayTile isToday={day.isToday}>
      <DayButton onClick={() => onClick(day)}>
        <Circle percent={day.percentage}>{day.id}</Circle>
        <Label>{day.percentage ? `${day.percentage}  %` : ""}</Label>
      </DayButton>
    </DayTile>
  );
};
