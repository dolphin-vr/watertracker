import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { instance } from "../../redux/auth/auth";
import { currentDate, dateISO, days, daysTable } from "../../shared/api/dates";
import { CalendarContainer, DaysContainer, MonthHeader, MonthLabel, Pagination, PaginationButton } from "./Calendar.styled";
import { Day } from "../Day/Day";

export const CalendarD = () => {
  const [date, setDate] = useState(currentDate);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [month, setMonth] = useState([]); // array for current month = from back + id=dat and isToday
  const [norma, setNorma] = useState(0);
  console.log('month init= ', month);
  console.log('norma init=', norma);

  const fetchData = useCallback(async () => {
    try {
      const endpoint = "water/month";
      const apiUrl = `${endpoint}/${dateISO(date)}`;
      const response = await instance.get(apiUrl);
      setMonth(daysTable(days(date), response.data.month, currentDate));
      setNorma(response.data.waterNorma);
    } catch (error) {
      toast.error("Error fetching data. Please try again.");
      setMonth([]);
    }
  }, [date]);

  useEffect(() => {
    fetchData();
  }, [date, fetchData]);



  const handleDayClick = (day) => {
    console.log('clicked Day data= ', day)
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
          <PaginationButton onClick={() => handleMonthChange("prev")}>{"<"}</PaginationButton>
          <span> {`${date.toLocaleString("en-US", { month: "long", })}, ${date.getFullYear()}`} </span>
          <PaginationButton onClick={() => handleMonthChange("next")}>{">"}</PaginationButton>
        </Pagination>
      </MonthHeader>
      <DaysContainer>
        {month.map(el => {<Day day={el.day} percent={el.percentage} isToday={el.isToday}
          onClick={()=> handleDayClick(el)}
        />})}
      </DaysContainer>

      {/* {renderDaysOfMonth()} */}
      {/* <Modal
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
      </Modal> */}
    </CalendarContainer>
  );
};

// return (
//   <DaysContainer>
//       return (
//         <DayTile key={day}>
//         </DayTile>
//       );
//   </DaysContainer>
// );
// };