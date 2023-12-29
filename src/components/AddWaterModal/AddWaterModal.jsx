import { useState } from "react";
import { createPortal } from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Btn,
  BtnClose,
  Counter,
  Label,
  StyledModal,
  StyledOverlay,
  Text,
  Title,
  WrapCounter,
} from "./AddWaterModal.styled";
// import { useDispatch } from 'react-redux';

const modalRoot = document.querySelector("#modal-root");

export const AddWaterModal = () => {
  const [counter, setCounter] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.code === "Escape") {
  //       closeModal();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [closeModal]);

  const updateWaterUsed = (newValue) => {
    setFieldValue("waterCounter", newValue);
  };

  const handleDecrease = () => {
    if (counter > 0) {
      setCounter((prevValue) => {
        const newValue = prevValue - 50;
        updateWaterUsed(newValue);
        return newValue;
      });
    }
  };

  const handleIncrease = () => {
    if (counter < 5000) {
      setCounter((prevValue) => {
        const newValue = prevValue + 50;
        updateWaterUsed(newValue);
        return newValue;
      });
    }
  };

  const handleSave = ({ waterCounter, date }) => {
    const formattedTime = (date) => {
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    };

    const formatDate = (date) => {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };

    const formattedDate = formatDate(date);
    const time = formattedTime(date);

    const newWaterUsed = { water: waterCounter, date: formattedDate, time };
    console.log(newWaterUsed);
    // console.log(waterCounter);

    // dispatch(addWaterThunk(newWaterUsed));

    // closeModal();
  };

  const { handleSubmit, setFieldValue, errors, touched, values, handleChange } =
    useFormik({
      initialValues: {
        waterCounter: 0,
        date: startDate,
      },
      validationSchema: Yup.object({
        waterCounter: Yup.number()
          .min(50, "Min 50ml")
          .max(5000, "Max 5000ml")
          .required("Enter water value"),
        date: Yup.date(),
      }),
      validateOnChange: false,
      onSubmit: (values) => {
        handleSave(values);
      },
    });

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      // closeModal();
    }
  };

  return createPortal(
    <>
      <StyledOverlay onClick={handleOverlayClick}>
        <StyledModal>
          <div>
            <Title>Add water</Title>
            <BtnClose>X</BtnClose>
            <Text>Choose a value:</Text>
            <form onSubmit={handleSubmit}>
              <label>
                Amount of water:
                <WrapCounter>
                  <Btn type="button" onClick={handleDecrease}>
                    -
                  </Btn>
                  <Counter>{counter}ml</Counter>
                  <Btn type="button" onClick={handleIncrease}>
                    +
                  </Btn>
                </WrapCounter>
              </label>

              <Label>
                Recording time:
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setFieldValue("date", date);
                  }}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={5}
                  timeCaption="Time"
                  dateFormat="HH:mm"
                  timeFormat="HH:mm"
                  minTime={
                    new Date(
                      startDate.getFullYear(),
                      startDate.getMonth(),
                      startDate.getDate(),
                      0,
                      0,
                      0
                    )
                  }
                  maxTime={new Date()}
                  maxDate={new Date()}
                />
              </Label>
              <label>
                Enter the value of the water used:
                <input
                  type="number"
                  name="waterCounter"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={(e) => {
                    setFieldValue("waterCounter", parseFloat(e.target.value));
                    setCounter(parseFloat(e.target.value));
                  }}
                  value={values.waterCounter}
                />
                {touched.waterCounter && errors.waterCounter && (
                  <div>{errors.waterCounter}</div>
                )}
              </label>

              <div>
                <p>{counter}ml</p>
                <button type="submit" onSubmit={handleSave}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </StyledModal>
      </StyledOverlay>
    </>,
    modalRoot
  );
};