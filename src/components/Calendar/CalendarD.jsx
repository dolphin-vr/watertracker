import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/user/userSelectors";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { instance } from "../../redux/auth/auth";
import { currentDate, dateISO, daysTable } from "../../shared/api/dates";
import { CalendarContainer, DaysContainer } from "./CalendarD.styled";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import { Day } from "../Day/Day";
import { CalendarModal } from "../CalendarModal/CalendarModal";

export const CalendarD = () => {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState({
    isOpen: false,
    modalId: null,
  });
  const [month, setMonth] = useState([]);
  const [norma, setNorma] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const [buttonCoordinates, setButtonCoordinates] = useState(null);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27 && modalIsOpen.isOpen) {
        setModalIsOpen({ isOpen: false, modalId: null });
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [modalIsOpen]);

  useEffect(() => {
    const handleClickOnWindow = () => {
      if (modalIsOpen.isOpen && modalIsOpen.modalId !== null) {
        setModalIsOpen({ isOpen: false, modalId: null });
      }
    };
    window.addEventListener("click", handleClickOnWindow);
    return () => {
      window.removeEventListener("click", handleClickOnWindow);
    };
  }, [modalIsOpen]);

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

  const calendar = daysTable(date, month, currentDate);

  const handleDayClick = (event, day) => {
    event.stopPropagation();
    if (day.percentage === 0) {
      toast.error("You do not have data for this day!");
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

    if (!modalIsOpen.isOpen) {
      setModalIsOpen({ isOpen: true, modalId: day.id });
      setSelectedDay(day);
      setButtonCoordinates(buttonCoordinates);
      return;
    }

    if (modalIsOpen.isOpen === true && modalIsOpen.modalId === day.id) {
      setModalIsOpen({ isOpen: false, modalId: null });
      return;
    }

    if (modalIsOpen.isOpen === true && modalIsOpen.modalId !== day.id) {
      setModalIsOpen({ isOpen: false, modalId: null });
      setTimeout(() => {
        setSelectedDay(day);
        setButtonCoordinates(buttonCoordinates);
        setModalIsOpen({ isOpen: true, modalId: day.id });
      }, 250);
      return;
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

        const [prevMonthNum, prevYearNum] = prevMonthMonthYear
          .split("/")
          .map(Number);
        const [userMonthNum, userYearNum] = userRegistrationMonthYear
          .split("/")
          .map(Number);

        if (
          prevYearNum > userYearNum ||
          (prevYearNum === userYearNum && prevMonthNum >= userMonthNum)
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
      <Toaster position="top-center" />
      <CalendarHeader date={date} handleMonthChange={handleMonthChange} />
      <DaysContainer className="ul_calendar">
        {calendar.map((day) => (
          <Day
            key={day.id}
            day={day}
            onClick={(event) => handleDayClick(event, day)}
          />
        ))}
      </DaysContainer>
      {/* Модальне вікно */}
      <CalendarModal
        isOpen={modalIsOpen.isOpen}
        closeModal={() => setModalIsOpen({ modalIsOpen: false, modalId: null })}
        day={selectedDay}
        date={date}
        norma={norma}
        buttonCoordinates={buttonCoordinates}
      />
    </CalendarContainer>
  );
};
