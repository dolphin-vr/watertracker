import PropTypes from "prop-types";
import {
  DaysContainer,
  DayTile,
  DayButton,
  TodayCircle,
  DayNotCompelete,
  DayCircle,
  CompletionText,
} from "./Calendar.styled";
import { dateISO } from "../../shared/api/dates";

const DaysGrid = ({ date, clickedDayData, handleDayClick }) => {
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <DaysContainer>
      {daysArray.map((day) => {
        const isToday =
          day === new Date().getDate() &&
          date.getMonth() === new Date().getMonth() &&
          date.getFullYear() === new Date().getFullYear();
        const isTodayOrPastDay = true;
        const clickedDate = new Date(date.getFullYear(), date.getMonth(), day);
        const todayData = clickedDayData?.month?.find((data) => {
          return data.date === dateISO(clickedDate);
        });

        return (
          <DayTile key={day}>
            <DayButton onClick={(event) => handleDayClick(day, event)}>
              {isToday ? (
                <TodayCircle>{day}</TodayCircle>
              ) : isTodayOrPastDay ? (
                todayData ? (
                  todayData.percentage < 100 ? (
                    <DayNotCompelete>{day}</DayNotCompelete>
                  ) : (
                    <DayCircle>{day}</DayCircle>
                  )
                ) : (
                  <DayCircle>{day}</DayCircle>
                )
              ) : (
                <DayCircle>{day}</DayCircle>
              )}
              {isTodayOrPastDay && todayData && (
                <CompletionText>{todayData.percentage}%</CompletionText>
              )}
            </DayButton>
          </DayTile>
        );
      })}
    </DaysContainer>
  );
};

DaysGrid.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  clickedDayData: PropTypes.object,
  handleDayClick: PropTypes.func.isRequired,
};

export { DaysGrid };
