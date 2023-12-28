import { useState, useEffect, useCallback } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/selectors";

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
} from "./Calendar.styled";

export const Calendar = () => {
  const token = useSelector(selectToken);
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clickedDayData, setClickedDayData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL;
      const endpoint = "water/month";
      const currentDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

      const apiUrl = `${apiBaseUrl}/${endpoint}/${currentDate}`;

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setClickedDayData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data. Please try again.");
      setClickedDayData(null);
    }
  }, [date, token]);

  useEffect(() => {
    fetchData();
  }, [date, fetchData]);

  // const todayData = clickedDayData?.daily.find(
  //   (data) =>
  //     data.date ===
  //     `${date.getFullYear()}-${(date.getMonth() + 1)
  //       .toString()
  //       .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
  // );

  const renderDaysOfMonth = () => {
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <DaysContainer>
        {daysArray.map((day) => {
          const isToday = day === new Date().getDate();
          const isTodayOrPastDay = day <= new Date().getDate();
          const todayData = clickedDayData?.daily?.find(
            (data) =>
              data.date ===
              `${date.getFullYear()}-${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${day.toString().padStart(2, "0")}`
          );
          const isNotCompleted = todayData?.percentage < 100;

          return (
            <DayTile key={day}>
              <DayButton onClick={() => handleDayClick(day)}>
                {isToday ? (
                  <TodayCircle>{day}</TodayCircle>
                ) : isTodayOrPastDay ? (
                  todayData ? (
                    isNotCompleted ? (
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

  const handleDayClick = (day) => {
    const clickedDate = new Date(date.getFullYear(), date.getMonth(), day);
    const clickedDateString = `${clickedDate.getFullYear()}-${(
      clickedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

    const clickedDayDataForClick = clickedDayData?.daily.find(
      (data) => data.date === clickedDateString
    );

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
        const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        setDate(prevMonth);
        await fetchData();
      } else if (direction === "next") {
        const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);

        if (nextMonth <= new Date()) {
          setDate(nextMonth);
          await fetchData();
        } else {
          toast.error("Cannot select a future month");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data. Please try again.");
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
            width: "280px",
            height: "188px",
            top: "25%",
            left: "25%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        {clickedDayData && (
          <div>
            <div>
              {`${date.getDate()}, ${date.toLocaleString("en-US", {
                month: "long",
              })}`}
            </div>
            <div>
              <p>
                Daily norma: <span>{clickedDayData.waterNorma} L</span>
              </p>
              <p>
                Fulfillment of the daily norm:{" "}
                <span>{clickedDayData.percentage}%</span>
              </p>
              <p>
                How many servings of water: <span>{clickedDayData.doses}</span>
              </p>
            </div>
          </div>
        )}
      </Modal>
    </CalendarContainer>
  );
};
