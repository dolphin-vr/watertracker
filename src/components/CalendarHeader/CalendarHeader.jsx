import PropTypes from "prop-types";
import {
  MonthHeader,
  MonthLabel,
  Pagination,
  PaginationButtonL,
  PaginationButtonR,
  PaginationConteiner,
} from "./CalendarHeader.styled";
import sprite from "../../images/sprite.svg";

export const CalendarHeader = ({ date, handleMonthChange }) => {
  return (
    <MonthHeader>
      <MonthLabel>Month</MonthLabel>
      <PaginationConteiner>
        <PaginationButtonL
          width="14"
          height="14"
          onClick={() => handleMonthChange("prev")}
        >
          <use href={sprite + "#arrowleftcalendar"}></use>
        </PaginationButtonL>
        <Pagination>{`${date.toLocaleString("en-US", {
          month: "long",
        })}, ${date.getFullYear()}`}</Pagination>
        <PaginationButtonR
          width="14"
          height="14"
          onClick={() => handleMonthChange("next")}
        >
          <use href={sprite + "#arrowrightcalendar"}></use>
        </PaginationButtonR>
      </PaginationConteiner>
    </MonthHeader>
  );
};

CalendarHeader.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  handleMonthChange: PropTypes.func.isRequired,
};

export default CalendarHeader;
