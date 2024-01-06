import PropTypes from "prop-types";
import {
  MonthHeader,
  MonthLabel,
  Pagination,
  PaginationButton,
} from "./Calendar.styled";

export const CalendarHeader = ({ date, handleMonthChange }) => {
  return (
    <MonthHeader>
      <MonthLabel>Month</MonthLabel>
      <Pagination>
        <PaginationButton onClick={() => handleMonthChange("prev")}>
          {"<"}
        </PaginationButton>
        <span>{`${date.toLocaleString("en-US", {
          month: "long",
        })}, ${date.getFullYear()}`}</span>
        <PaginationButton onClick={() => handleMonthChange("next")}>
          {">"}
        </PaginationButton>
      </Pagination>
    </MonthHeader>
  );
};

CalendarHeader.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  handleMonthChange: PropTypes.func.isRequired,
};

export default CalendarHeader;
