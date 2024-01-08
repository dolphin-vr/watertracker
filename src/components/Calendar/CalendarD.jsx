import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/user/userSelectors";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { instance } from "../../redux/auth/auth";
import { currentDate, dateISO, daysTable } from "../../shared/api/dates";
import {
  CalendarContainer,
  DaysContainer,
  MonthHeader,
  MonthLabel,
  Pagination,
  PaginationButton,
} from "./Calendar.styled";
import CalendarHeader from "./CalendarHeader";
import { Day } from "../Day/Day";

export const CalendarD = () => {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [month, setMonth] = useState([]); // array for current month = from back + id=dat and isToday
  const [norma, setNorma] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const [buttonCoordinates, setButtonCoordinates] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = "water/month";
        const apiUrl = `${endpoint}/${dateISO(date)}`;
        const response = await instance.get(apiUrl);
        setMonth(response.data.month);
        setNorma(response.data.waterNorma);
      } catch (error) {
        toast.error("Error fetching data. Please try again.");
        setMonth([]);
      }
    };

    fetchData();
  }, [date]);

  const handleDayClick = (day) => {
    console.log("clicked Day data= ", day, norma);
    if (day.percentage === 0) {
      toast.error("No Data for this Day");
      return;
    }
    const button = event.target.closest("button");
    const buttonRect = button.getBoundingClientRect();
    const topCoordinate = buttonRect.top;
    const leftCoordinate = buttonRect.left;
    const buttonCoordinates = {
      top: topCoordinate,
      left: leftCoordinate,
    };
    // Клік по вже відкритому дню - закриття модального вікна
    if (selectedDay === day && modalIsOpen) {
      setModalIsOpen(false);
    } else {
      // Клік по іншому дню або поза модальним вікном - відкриття нового вікна
      setSelectedDay(day);
      setModalIsOpen(true);
      setButtonCoordinates(buttonCoordinates);
    }
  };

  const userInfo = useSelector(selectUserInfo);
  const handleMonthChange = async (direction) => {
    try {
      const userRegistrationMonthYear = new Date(
        userInfo.date
      ).toLocaleDateString("en-US", { month: "numeric", year: "numeric" });
      const currentMonth = date.getMonth();
      const currentYear = date.getFullYear();

      if (direction === "prev") {
        const prevMonth = new Date(currentYear, currentMonth - 1, 1);
        const prevMonthMonthYear = prevMonth.toLocaleDateString("en-US", {
          month: "numeric",
          year: "numeric",
        });

        if (
          prevMonthMonthYear >= userRegistrationMonthYear &&
          prevMonth <= new Date()
        ) {
          setDate(prevMonth);
        } else {
          toast.error("Cannot navigate to a month before registration");
        }
      } else if (direction === "next") {
        const nextMonth = new Date(currentYear, currentMonth + 1, 1);

        if (nextMonth <= new Date()) {
          setDate(nextMonth);
        } else {
          toast.error("Cannot select a future month");
        }
      }
    } catch (error) {
      toast.error("Error changing month. Please try again.");
    }
  };

  return (
    <CalendarContainer>
      <Toaster />
      <CalendarHeader date={date} handleMonthChange={handleMonthChange} />
      <DaysContainer>
        {calendar.map((day) => (
          <Day key={day.id} day={day} onClick={() => handleDayClick(day)} />
        ))}
      </DaysContainer>
      {/* Модальне вікно */}
      <CalendarModal
        isOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        day={selectedDay}
        date={date}
        norma={norma}
        buttonCoordinates={buttonCoordinates}
      />
    </CalendarContainer>
  );
};
