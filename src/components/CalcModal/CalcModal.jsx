import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
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
  GenderInput,
  GenderLabel,
  CalcForm,
  Label,
  ResultCont,
  Littres,
  TextResult,
  BoldLabel,
  Btn,
  CloseBtn,
  StyledModal,
  CalcInput,
} from "./CalcModal.styled";
import { Icon } from "../Icon/Icon";
import { calcSchema } from "../../shared/utils/authValidate";
import { ErrorMsg } from "../../pages/SignUpPage/AuthPages.styled";
// import { useMemo } from "react";

export const CalcModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { waterNorma, gender: userGender } = useSelector(selectUserInfo);
  const [gender, setGender] = useState(userGender);
  // const [weight, setWeight] = useState(0);
  // const [time, setTime] = useState(0);
  // const [result, setResult] = useState(0);
  // const [isModalOpen, setIsModalOpen] = useState(true);

  // const rrr = useMemo(() => {
  //   if (gender === "girl") {
  //     // setResult((weight * 0.03 + time * 0.4).toFixed(1));
  //     return weight * 0.03 + time * 0.4;
  //   } else {
  //     // setResult((weight * 0.04 + time * 0.6).toFixed(1));
  //     return weight * 0.04 + time * 0.6;
  //   }
  // }, [gender, time, weight]);

  // useEffect(() => {
  //   setResult(rrr);
  // }, [rrr]);

  const handleClose = () => {
    // setIsModalOpen(false);
    onClose();
  };

  // console.log("result= ", rrr);
  return (
    <StyledModal isOpen={true} onRequestClose={handleClose} overlayClassName="overlay">
      <Backdrop onClick={handleClose} />
      <Container>
        <Title>My Daily Norma</Title>
        <CloseBtn type="button" onClick={handleClose}>
          <svg>
            <Icon tag={"close"} />
          </svg>
        </CloseBtn>
        <Formulas>
          <Gender>
            For girl: <Formula>V=(M*0.03)+(T*0.4)</Formula>
          </Gender>
          <Gender>
            For man: <Formula>V=(M*0.04)+(T*0.6)</Formula>
          </Gender>
        </Formulas>
        <Description>
          <Start>*</Start>V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of
          loads (in the absence of these, you must set 0)
        </Description>

        <Formik
          initialValues={{ gender: gender, weight: "", time: "", rate: waterNorma / 1000 }}
          validationSchema={calcSchema}
          onSubmit={values => {
            dispatch(updateWaterNorma(values.rate * 1000));
            onClose();
          }}>
          {({ values, errors, touched, handleChange }) => (
            <CalcForm>
              <TitleLabel>Calculate Your Rate:</TitleLabel>
              <RadioBtn>
                <GenderBtn>
                  <GenderLabel>
                    <GenderInput type="radio" value="girl" name="gender" onChange={() => setGender("girl")} />
                    For girl
                  </GenderLabel>
                </GenderBtn>
                <GenderBtn>
                  <GenderLabel>
                    <GenderInput type="radio" value="man" name="gender" onChange={() => setGender("man")} />
                    For man
                  </GenderLabel>
                </GenderBtn>
              </RadioBtn>

              <Label>
                Your weight in kilograms:
                <CalcInput
                  type="text"
                  name="weight"
                  className={touched.weight && errors.weight ? "invalid" : ""}
                  onInput={e => {
                    handleChange(e);
                    // console.log(e);
                    // setWeight(values.weight);
                  }}
                  value={values.weight}
                />
                <ErrorMsg name="weight" component="span" />
              </Label>
              <Label>
                The time of active participation in sports or other activities with a high physical load:
                <CalcInput
                  type="text"
                  name="time"
                  className={touched.time && errors.time ? "invalid" : ""}
                  onInput={e => {
                    handleChange(e);
                    // setTime(values.time);
                  }}
                  value={values.time}
                />
                <ErrorMsg name="time" component="span" />
              </Label>
              <ResultCont>
                <TextResult>The required amount of water in liters per day:</TextResult>
                <Littres>{gender === "girl" ? (values.weight * 0.03 + values.time * 0.4).toFixed(2) : (values.weight * 0.04 + values.time * 0.6).toFixed(2)} L</Littres>
              </ResultCont>
              <BoldLabel>
                Write down how much water you will drink:
                <CalcInput type="text" id="water" name="rate" className={touched.rate && errors.rate ? "invalid" : ""} />
                <ErrorMsg name="rate" component="span" />
              </BoldLabel>
              <Btn type="submit">Save</Btn>
            </CalcForm>
          )}
        </Formik>
      </Container>
    </StyledModal>
  );
};
