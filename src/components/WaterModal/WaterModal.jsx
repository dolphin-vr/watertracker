import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import Modal from "react-modal";
import * as Yup from "yup";
import {
  BtnClose,
  BtnCounter,
  BtnSave,
  BtnWrap,
  Counter,
  ModalStyled,
  ModalWrap,
  NumberCounter,
  StyledInput,
  StyledName,
  StyledText,
  Text,
  TextLabel,
  Title,
  WrapCounter,
  WrapInput,
  StyledDatePicker,
  Container,
  Amount,
  Time,
  ErrorWrap,
} from "./WaterModal.styled";
import { BackdporModal } from "../DeleteWaterModal/DeleteWaterModal.styled";
import sprite from "../../images/sprite.svg";

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
    formik.setFieldValue("waterCounter", newValue);
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

  const validationSchema = Yup.object().shape({
    waterCounter: Yup.number()
      .min(1, "Min 1 ml")
      .max(5000, "Max 5000 ml")
      .required("Enter water value"),
    date: Yup.date(),
  });

  const formik = useFormik({
    initialValues: {
      waterCounter: counter,
      date: startDate,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSave(values);
    },
  });

  return (
    <ModalStyled
      isOpen={true}
      onRequestClose={onCloseModal}
      contentLabel="WaterModal"
      overlayClassName="overlay"
    >
      <BackdporModal onClick={onCloseModal} />
      <ModalWrap initialWater={initialWater}>
        <Title>{title}</Title>
        <BtnClose type="button" onClick={onCloseModal}>
          <svg stroke="#407BFF" width="24" height="24">
            <use href={sprite + "#modalclose"}></use>
          </svg>
        </BtnClose>
        {initialWater !== 0 && (
          <Container>
            <svg stroke="#407BFF" width="24" height="24">
              <use href={sprite + "#cup"}></use>
            </svg>
            <Amount>{`${initialWater} ml`}</Amount>
            <Time>
              {initialDate && (
                <span>{` ${initialDate
                  .getHours()
                  .toString()
                  .padStart(2, "0")}:${initialDate
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`}</span>
              )}
            </Time>
          </Container>
        )}

        <Text>{subtitle}</Text>

        <TextLabel>Amount of water:</TextLabel>
        <BtnWrap>
          <BtnCounter type="button" onClick={handleDecrease}>
            <svg stroke="#407BFF" width="24" height="24">
              <use href={sprite + "#minus"}></use>
            </svg>
          </BtnCounter>
          <Counter>{counter}ml</Counter>
          <BtnCounter type="button" onClick={handleIncrease}>
            <svg stroke="#407BFF" width="24" height="24">
              <use href={sprite + "#plus"}></use>
            </svg>
          </BtnCounter>
        </BtnWrap>
        <form onSubmit={formik.handleSubmit}>
          <label>
            <WrapInput>
              <StyledText>Recording time:</StyledText>
              <StyledDatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  formik.setFieldValue("date", date);
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
            </WrapInput>
          </label>
          <label>
            <WrapInput>
              <StyledName>Enter the value of the water used:</StyledName>

              <StyledInput
                type="number"
                name="waterCounter"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                onBlur={(e) => {
                  const inputValue = Number(e.target.value);
                  const nonNegativeValue = inputValue < 0 ? 0 : inputValue;
                  formik.setFieldValue("waterCounter", nonNegativeValue);
                  setCounter(nonNegativeValue);
                }}
                value={formik.values.waterCounter}
              />
              {formik.touched.waterCounter && formik.errors.waterCounter && (
                <ErrorWrap>{formik.errors.waterCounter}</ErrorWrap>
              )}
            </WrapInput>
          </label>

          <WrapCounter>
            <NumberCounter>{counter}ml</NumberCounter>
            <BtnSave type="submit">Save</BtnSave>
          </WrapCounter>
        </form>
      </ModalWrap>
    </ModalStyled>
  );
};
