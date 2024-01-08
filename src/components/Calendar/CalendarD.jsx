import { useState, useEffect, } from "react";
import toast from "react-hot-toast";
import { instance } from "../../redux/auth/auth";
import { currentDate, dateISO, daysTable,  } from "../../shared/api/dates";
import { CalendarContainer, DaysContainer, } from "./Calendar.styled";
import CalendarHeader from "./CalendarHeader";
import {Day} from "../Day/Day";

export const CalendarD = () => {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [month, setMonth] = useState([]); // array for current month = from back + id=dat and isToday
  const [norma, setNorma] = useState(0);

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

  const handleDayClick = (day) => {
    console.log('clicked Day data= ', day, norma)
    // const clickedDate = new Date(date.getFullYear(), date.getMonth(), day);
    // console.log('clickedDate= ', clickedDate)
    // const clickedDateString = dateISO(clickedDate);
    // console.log('clickedDateString= ', clickedDateString)

    // const clickedDayDataForClick = clickedDayData.month.find((data) => data.date === clickedDateString );
    // console.log('clickedDayDataForClick= ', clickedDayDataForClick)

    // if (clickedDayDataForClick) {
    //   if (clickedDate <= new Date()) {
    //     setDate(clickedDate);
    //     setModalIsOpen(true);
    //     setClickedDayData(clickedDayDataForClick);
    //   } else {
    //     toast.error("No data available for future dates");
    //   }
    // } else {
    //   toast.error("No data available for selected date");
    // }
  };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

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
    <CalendarContainer>
      <CalendarHeader date={date} handleMonthChange={handleMonthChange} />
      <DaysContainer>
        {calendar.map(day => ( <Day  key={day.id} day={day} onClick={()=> handleDayClick(day)} /> ))}
      </DaysContainer>
    </CalendarContainer>
  );
};
