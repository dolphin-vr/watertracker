import DatePicker from "react-datepicker";
import { createPortal } from "react-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledModal, StyledOverlay } from "./EditWaterModal.styled";
import { updatePortion } from "../../redux/water/todayOperations";
import { useDispatch } from "react-redux";

const modalRoot = document.querySelector("#modal-root");

export const EditWaterModal = ({ onCloseModal, data }) => {
  const initialDate = data.time
    ? new Date(`2024-01-01T${data.time}`)
    : new Date();

  const [counter, setCounter] = useState(data.water);
  const [startDate, setStartDate] = useState(initialDate);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.code === "Escape") {
  //       onCloseModal();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [onCloseModal]);

  // console.log(startDate);
  // const dispatch = useDispatch();

  const updateWaterUsed = (newValue) => {
    setFieldValue("waterCounter", newValue);
    // console.log(newValue);
  };

  const handleDecrease = () => {
    // console.log(e);
    if (counter > 0) {
      setCounter((prevValue) => {
        const newValue = prevValue - 50;
        updateWaterUsed(newValue);
        return newValue;
      });
    }
  };

  const handleIncrease = () => {
    // console.log(e);
    if (counter < 5000) {
      setCounter((prevValue) => {
        const newValue = prevValue + 50;
        updateWaterUsed(newValue);
        // console.log(newValue);
        return newValue;
      });
    }
  };

  const handleSave = (values) => {
    // console.log('modal closed');
    // console.log(values);

    const formattedTime = (date) => {
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    };

    // const formatDate = (date) => {
    //   const year = date.getFullYear();
    //   const month = (date.getMonth() + 1).toString().padStart(2, "0");
    //   const day = date.getDate().toString().padStart(2, "0");
    //   return `${year}-${month}-${day}`;
    // };

    // const formattedDate = formatDate(values.date);
    const time = formattedTime(values.date);
    const newEditWater = {
      water: values.waterCounter,
      time,
    };
    console.log(newEditWater);
    dispatch(updatePortion({ id: data.id, portion: newEditWater }));
    onCloseModal();
  };

  const { handleSubmit, setFieldValue, errors, touched, values, handleChange } =
    useFormik({
      initialValues: {
        waterCounter: counter,
        date: startDate,
      },
      validationSchema: Yup.object({
        waterCounter: Yup.number()
          .min(1, "Min 1ml")
          .max(5000, "Max 5000ml")
          .required("Enter water value"),
        date: Yup.date(),
      }),
      onSubmit: (values) => {
        handleSave(values);
      },
    });

  return createPortal(
    <div>
      <StyledOverlay>
        <StyledModal>
          <h1>Edit the entered amount of water</h1>
          <button type="button" onClick={onCloseModal}>
            X
          </button>
          <div>{data.water}ml</div>
          <div>{data.time}</div>
          <p>Correct entered data:</p>
          <form onSubmit={handleSubmit}>
            <label>Amount of water:</label>
            <button type="button" onClick={handleDecrease}>
              -
            </button>
            <div>{counter}ml</div>
            <button type="button" onClick={handleIncrease}>
              +
            </button>
            <label>
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
            </label>
            <label>
              Enter the value of the water used:
              <input
                type="number"
                name="waterCounter"
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={(e) => {
                  setFieldValue("waterCounter", Number(e.target.value));
                  setCounter(Number(e.target.value));
                }}
                value={values.waterCounter}
              />
              {touched.waterCounter && errors.waterCounter && (
                <div>{errors.waterCounter}</div>
              )}
            </label>

            <div>
              <p>{counter}ml</p>
              <button type="submit">Save</button>
            </div>
          </form>
        </StyledModal>
      </StyledOverlay>
    </div>,
    modalRoot
  );
};
