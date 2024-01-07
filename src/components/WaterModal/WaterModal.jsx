import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import Modal from "react-modal";
import * as Yup from "yup";
import { modal } from "./WaterModal.styled";

Modal.setAppElement("#modal-root");

export const WaterModal = ({
  title,
  subtitle,
  onCloseModal,
  onAddWater,
  onEditWater,
  initialWater,
  initialDate,
  initialId,
  isEditing,
}) => {
  const [counter, setCounter] = useState(initialWater);
  const [startDate, setStartDate] = useState(initialDate);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const updateWaterUsed = (newValue) => {
    setFieldValue("waterCounter", newValue);
  };

  const handleDecrease = () => {
    if (counter > 0) {
      setCounter((prevValue) => {
        const remainder = prevValue % 50;
        const difference = remainder === 0 ? 50 : remainder;
        const newValue = Math.max(prevValue - difference, 0);
        updateWaterUsed(newValue);
        return newValue;
      });
    }
  };

  const handleIncrease = () => {
    if (counter < 5000) {
      setCounter((prevValue) => {
        const remainder = prevValue % 50;
        const difference = 50 - remainder;
        const newValue = Math.min(prevValue + difference, 5000);
        updateWaterUsed(newValue);
        return newValue;
      });
    }
  };

  const handleSave = (values) => {
    const formattedTime = (date) => {
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    };

    const time = formattedTime(values.date);

    const waterData = { water: values.waterCounter, time };

    const contextData = isEditing
      ? { id: initialId, portion: { ...waterData } }
      : waterData;

    if (isEditing) {
      onEditWater(contextData);
    } else {
      onAddWater(contextData);
    }

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
          .min(1, "Min 1 ml")
          .max(5000, "Max 5000 ml")
          .required("Enter water value"),
        date: Yup.date(),
      }),
      onSubmit: (values) => {
        handleSave(values);
      },
    });

  return (
    <Modal
      isOpen={true}
      onRequestClose={onCloseModal}
      contentLabel="WaterModal"
      style={modal}
    >
      <div>
        <div>
          <h2>{title}</h2>
          <button type="button" onClick={onCloseModal}>
            X
          </button>
          {initialWater !== 0 && (
            <div>
              {`${initialWater}ml`}
              {initialDate && (
                <span>{` ${initialDate
                  .getHours()
                  .toString()
                  .padStart(2, "0")}:${initialDate
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`}</span>
              )}
            </div>
          )}

          <p>{subtitle}</p>
          <form onSubmit={handleSubmit}>
            <label>Amount of water:</label>
            <button type="button" onClick={handleDecrease}>
              -
            </button>
            <p>{counter}ml</p>
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
        </div>
      </div>
    </Modal>
  );
};
