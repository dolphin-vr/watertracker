import { useState, useEffect, useCallback } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
import { instance } from "../../redux/auth/auth";
import {
  CalendarContainer,
  MonthHeader,
  MonthLabel,
  Pagination,
  PaginationButton,
  DaysContainer,
  DayTile,
  DayButton,
  DayCircle,
  TodayCircle,
  CompletionText,
  DayNotCompelete,
  ModalAccent,
  ModalDate,
} from "./Calendar.styled";
import { dateISO } from "../../shared/api/dates";

export const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clickedDayData, setClickedDayData] = useState(null);
  console.log('date init= ', date);
  console.log('clickData init=', clickedDayData);

  const fetchData = useCallback(async () => {
    try {
      // const apiBaseUrl = import.meta.env.VITE_API_URL;
      const endpoint = "water/month";
      const apiUrl = `${endpoint}/${dateISO(date)}`;
      const response = await instance.get(apiUrl);
      setClickedDayData(response.data);
    } catch (error) {
      toast.error("Error fetching data. Please try again.");
      setClickedDayData(null);
    }
  }, [date]);

  useEffect(() => {
    fetchData();
  }, [date, fetchData]);

  // Days Grid
  const renderDaysOfMonth = () => {
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    console.log('daysArray= ', daysArray)

    return (
      <DaysContainer>
        {daysArray.map((day) => {
          const isToday = day === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();

          const isTodayOrPastDay = true;
          const todayData = clickedDayData?.month?.find((data) => data.date === dateISO(date)
              // `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
          );

          return (
            <DayTile key={day}>
              <DayButton onClick={() => handleDayClick(day)}>
                {isToday ? (<TodayCircle>{day}</TodayCircle>)
                  : isTodayOrPastDay ? (
                      todayData ? 
                        (todayData.percentage < 100 ? (<DayNotCompelete>{day}</DayNotCompelete>) : (<DayCircle>{day}</DayCircle>))
                      : (<DayCircle>{day}</DayCircle>))
                    : (<DayCircle>{day}</DayCircle>)
                }
                {isTodayOrPastDay && todayData && (<CompletionText>{todayData.percentage}%</CompletionText>)}
              </DayButton>
            </DayTile>
          );
        })}
      </DaysContainer>
    );
  };

  const handleDayClick = (day) => {
    const clickedDate = new Date(date.getFullYear(), date.getMonth(), day);
    console.log('clickedDate= ', clickedDate)
    const clickedDateString = dateISO(clickedDate);
    console.log('clickedDateString= ', clickedDateString)
    // `${clickedDate.getFullYear()}-${(      clickedDate.getMonth() + 1    )      .toString()      .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

    const clickedDayDataForClick = clickedDayData.month.find((data) => data.date === clickedDateString );
    console.log('clickedDayDataForClick= ', clickedDayDataForClick)

    if (clickedDayDataForClick) {
      if (clickedDate <= new Date()) {
        setDate(clickedDate);
        setModalIsOpen(true);
        setClickedDayData(clickedDayDataForClick);
      } else {
        toast.error("No data available for future dates");
      }
    } else {
      toast.error("No data available for selected date");
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
    <CalendarContainer>
      <MonthHeader>
        <MonthLabel>Month</MonthLabel>
        <Pagination>
          <PaginationButton onClick={() => handleMonthChange("prev")}>
            {"<"}
          </PaginationButton>
          <span>
            {`${date.toLocaleString("en-US", {
              month: "long",
            })}, ${date.getFullYear()}`}
          </span>

          <PaginationButton onClick={() => handleMonthChange("next")}>
            {">"}
          </PaginationButton>
        </Pagination>
      </MonthHeader>

      {renderDaysOfMonth()}
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal window Calendar"
        style={{
          content: {
            width: "292px",
            height: "188px",
            top: "25%",
            left: "25%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        {clickedDayData && (
          <div>
            <ModalDate>
              {`${date.getDate()}, ${date.toLocaleString("en-US", {
                month: "long",
              })}`}
            </ModalDate>
            <div>
              <p>
                Daily norma:{" "}
                <ModalAccent>
                  {(clickedDayData.waterNorma / 1000).toFixed(1)} L
                </ModalAccent>
              </p>
              <p>
                Fulfillment of the daily norm:{" "}
                <ModalAccent>{clickedDayData.percentage}%</ModalAccent>
              </p>
              <p>
                How many servings of water:{" "}
                <ModalAccent>{clickedDayData.doses}</ModalAccent>
              </p>
            </div>
          </div>
        )}
      </Modal>
    </CalendarContainer>
  );
};
