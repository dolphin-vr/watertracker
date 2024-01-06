import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { instance } from "../../redux/auth/auth";
import { CalendarHeader } from "./CalendarHeader";
import { DaysGrid } from "./DaysGrid";
import { CalendarModal } from "./CalendarModal";
import { dateISO } from "../../shared/api/dates";

export const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clickedDayData, setClickedDayData] = useState(null);
  const [buttonCoordinates, setButtonCoordinates] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = "water/month";
        const apiUrl = `${endpoint}/${dateISO(date)}`;
        const response = await instance.get(apiUrl);
        setClickedDayData(response.data);
      } catch (error) {
        toast.error("Error fetching data. Please try again.");
        setClickedDayData(null);
      }
    };

    fetchData();
  }, [date]);

  const handleDayClick = (day, event) => {
    const clickedDate = new Date(date.getFullYear(), date.getMonth(), day);
    const clickedDateString = dateISO(clickedDate);

    const clickedDayDataForClick = clickedDayData.month.find(
      (data) => data.date === clickedDateString
    );

    if (!clickedDayDataForClick) {
      toast.error("No data available for selected date");
      return;
    }

    clickedDayDataForClick.waterNorma = clickedDayData.waterNorma;

    if (clickedDate <= new Date()) {
      setModalData(clickedDayDataForClick);
      setDate(clickedDate);
      setModalIsOpen(true);

      // Отримуємо координати кліку
      const buttonCoordinates = {
        top: event.clientY,
        left: event.clientX,
      };

      // Передаємо координати як пропс в модалку
      setButtonCoordinates(buttonCoordinates);
    } else {
      toast.error("No data available for future dates");
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleMonthChange = async (direction) => {
    try {
      if (direction === "prev") {
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();
        const prevMonth =
          currentMonth === 0
            ? new Date(currentYear - 1, 11, 1)
            : new Date(currentYear, currentMonth - 1, 1);
        setDate(prevMonth);
      } else if (direction === "next") {
        const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
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
    <div>
      <Toaster />
      <CalendarHeader date={date} handleMonthChange={handleMonthChange} />
      <DaysGrid
        date={date}
        clickedDayData={clickedDayData}
        handleDayClick={(day, event) => handleDayClick(day, event)}
        buttonCoordinates={buttonCoordinates}
      />
      <CalendarModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        clickedDayDataForClick={modalData}
        date={date}
        buttonCoordinates={buttonCoordinates}
      />
    </div>
  );
};
