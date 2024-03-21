import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateWaterNorma } from "../../redux/user/userOperations";
import { selectUserInfo } from "../../redux/user/userSelectors";
import {
  Container,
  Title,
  Backdrop,
  Formula,
  Gender,
  Description,
  Start,
  Formulas,
  TitleLabel,
  RadioBtn,
  GenderBtn,
  ErrorMessageStyled,
  GenderInput,
  GenderLabel,
  Forma,
  Labels,
  Label,
  ModalInput,
  ResultCont,
  Littres,
  TextResult,
  BoldLabel,
  Btn,
  CloseBtn,
  StyledModal,
} from "./CalcModal.styled";
import sprite from "../../assets/sprite.svg";
import { calcSchema } from "../../shared/utils/authValidate";

const CalcModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { waterNorma, gender } = useSelector(selectUserInfo);
  const [result, setResult] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const formik = useFormik({
    initialValues: {
      gender: gender,
      weight: "",
      time: "",
      rate: waterNorma / 1000,
    },
    calcSchema,
    onSubmit: values => {
      dispatch(updateWaterNorma(values.rate * 1000));
      onClose();
    },
  });

  useEffect(() => {
    if (result !== 0) {
      formik.setFieldValue("rate", result);
    }
  }, [result]);

  const handleBlur = field => {
    calculate(formik.values.gender, formik.values.weight, formik.values.time);
    formik.handleBlur(field);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  const calculate = (gender, weight = 0, time = 0) => {
    const isValidWeight = weight >= 0 && weight < 700;
    const isValidTime = time >= 0 && time < 24;
    if (isValidWeight && isValidTime) {
      let calculatedResult = 0;
      switch (gender) {
        case "girl":
          if (weight >= 0 && time >= 0) {
            calculatedResult = weight * 0.03 + time * 0.4;
          }
          break;
        case "man":
          if (weight >= 0 && time >= 0) {
            calculatedResult = weight * 0.04 + time * 0.6;
          }
          break;
        default:
          break;
      }
      setResult(calculatedResult.toFixed(1));
    }
  };

  return (
    <StyledModal isOpen={true} onRequestClose={handleClose} overlayClassName="overlay">
      <Backdrop onClick={handleClose} />
      <Container>
        <Title>My Daily Norma</Title>
        <CloseBtn type="button" onClick={handleClose}>
          <svg>
            <use href={sprite + "#close"}></use>
          </svg>
        </CloseBtn>

        <Formulas>
          <li>
            <Gender>
              For girl:
              <Formula>V=(M*0.03)+(T*0.4)</Formula>
            </Gender>
          </li>
          <li>
            <Gender>
              For man:
              <Formula>V=(M*0.04)+(T*0.6)</Formula>
            </Gender>
          </li>
        </Formulas>

        <Description>
          <Start>*</Start>V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of
          loads (in the absence of these, you must set 0)
        </Description>

        <TitleLabel>Calculate Your Rate:</TitleLabel>
        <RadioBtn>
          <GenderBtn>
            <GenderInput type="radio" value="girl" name="gender" checked={formik.values.gender === "girl"} onChange={formik.handleChange} onBlur={() => handleBlur("gender")} />
            <GenderLabel htmlFor="Woman">For girl</GenderLabel>
          </GenderBtn>
          <GenderBtn>
            <GenderInput type="radio" value="man" name="gender" checked={formik.values.gender === "man"} onChange={formik.handleChange} onBlur={() => handleBlur("gender")} />
            <GenderLabel htmlFor="Man">For man</GenderLabel>
          </GenderBtn>
        </RadioBtn>

        <Forma onSubmit={formik.handleSubmit}>
          <Labels>
            <Label>Your weight in kilograms:</Label>
            <ModalInput
              onBlur={() => handleBlur("weight")}
              type="text"
              name="weight"
              value={formik.values.weight}
              onChange={formik.handleChange}
              onFocus={formik.handleBlur}
              className={formik.errors.weight && formik.touched.weight ? "error-input" : ""}
            />
            {formik.errors.weight && formik.touched.weight && <ErrorMessageStyled>{formik.errors.weight}</ErrorMessageStyled>}
          </Labels>
          <Labels>
            <Label>The time of active participation in sports or other activities with a high physical load:</Label>
            <ModalInput
              onBlur={() => handleBlur("time")}
              type="text"
              name="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              onFocus={formik.handleBlur}
              className={formik.errors.time && formik.touched.time ? "error-input" : ""}
            />
            {formik.errors.time && formik.touched.time && <ErrorMessageStyled>{formik.errors.time}</ErrorMessageStyled>}
          </Labels>
          <Labels>
            <ResultCont>
              <TextResult>The required amount of water in liters per day:</TextResult>
              <Littres>{result}L</Littres>
            </ResultCont>
          </Labels>
          <Labels>
            <BoldLabel>Write down how much water you will drink:</BoldLabel>
            <ModalInput
              type="text"
              id="water"
              name="rate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rate}
              onFocus={formik.handleBlur}
              className={formik.errors.rate && formik.touched.rate ? "error-input" : ""}
            />
            {formik.errors.rate && formik.touched.rate && <ErrorMessageStyled>{formik.errors.rate}</ErrorMessageStyled>}
          </Labels>
          <Btn type="submit">Save</Btn>
        </Forma>
      </Container>
    </StyledModal>
  );
};

export default CalcModal;
