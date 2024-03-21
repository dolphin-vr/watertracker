import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Formik } from "formik";
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
import { Icon } from "../../components/Icon/Icon";
import { calcSchema } from "../../shared/utils/authValidate";
import { ErrorMsg } from "../../pages/SignUpPage/AuthPages.styled";
import { useMemo } from "react";

export const CalcModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { waterNorma, gender: userGender } = useSelector(selectUserInfo);
  const [gender, setGender] = useState(userGender);
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const rrr = useMemo(() => {
    if (gender === "girl") {
      // setResult((weight * 0.03 + time * 0.4).toFixed(1));
      return weight * 0.03 + time * 0.4;
    } else {
      // setResult((weight * 0.04 + time * 0.6).toFixed(1));
      return weight * 0.04 + time * 0.6;
    }
  }, [gender, time, weight]);
  
  useEffect(() => {
    // if (gender === "girl") {
    //   setResult((weight * 0.03 + time * 0.4).toFixed(1));
    //   // return weight * 0.03 + time * 0.4;
    // } else {
    //   setResult((weight * 0.04 + time * 0.6).toFixed(1));
    //   // return weight * 0.04 + time * 0.6;
    // }
    setResult(rrr)
  }, [rrr]);

  // const handleBlur = (field) => {
  //   calculate(formik.values.gender, formik.values.weight, formik.values.time);
  //   formik.handleBlur(field);
  // };

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  // const calculate = (gender, weight = 0, time = 0) => {
  //   const isValidWeight = weight >= 0 && weight < 700;
  //   const isValidTime = time >= 0 && time < 24;
  //   if (isValidWeight && isValidTime) {
  //     let calculatedResult = 0;
  //     switch (gender) {
  //       case "girl":
  //         if (weight >= 0 && time >= 0) {
  //           calculatedResult = weight * 0.03 + time * 0.4;
  //         }
  //         break;
  //       case "man":
  //         if (weight >= 0 && time >= 0) {
  //           calculatedResult = weight * 0.04 + time * 0.6;
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //     setResult(calculatedResult.toFixed(1));
  //   }
  // };

  // handleChange;

  const calcRate = (gender, weight = 0, time = 0) => {
    if (gender === 'girl') {
      setResult((weight * 0.03 + time * 0.4).toFixed(1));
      // return weight * 0.03 + time * 0.4;
    } else {
      setResult((weight * 0.04 + time * 0.6).toFixed(1));
      // return weight * 0.04 + time * 0.6;
    }
  }
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
          <Start>*</Start>V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity
          commensurate in terms of loads (in the absence of these, you must set 0)
        </Description>

        <Formik
          initialValues={{ gender: gender, weight: "", time: "", rate: waterNorma / 1000 }}
          validationSchema={calcSchema}
          //       onChange={(values) => {
          // if (values.gender === "girl") {
          //   values.result=((values.weight * 0.03 + values.time * 0.4).toFixed(1));
          //   // return weight * 0.03 + time * 0.4;
          // } else {
          //   values.result = (values.weight * 0.04 + values.time * 0.6).toFixed(1);
          //   // return weight * 0.04 + time * 0.6;
          // }
          //         // calcRate(values.gender, values.weight, values.time);
          //       }}
          onSubmit={(values) => {
            dispatch(updateWaterNorma(values.rate * 1000));
            onClose();
          }}>
          {({ values, errors, touched, handleChange }) => (
            <CalcForm>
              <TitleLabel>Calculate Your Rate:</TitleLabel>
              <RadioBtn>
                <GenderBtn>
                  <GenderInput
                    type="radio"
                    value="girl"
                    name="gender"
                    // onBlur={() => handleBlur("gender")}
                    // checked={formik.values.gender === "girl"}
                    onChange={() => setGender("girl")}
                  />
                  <GenderLabel htmlFor="Woman">For girl</GenderLabel>
                </GenderBtn>
                <GenderBtn>
                  <GenderInput
                    type="radio"
                    value="man"
                    name="gender"
                    // onBlur={() => handleBlur("gender")}
                    // checked={formik.values.gender === "man"}
                    onChange={() => setGender("man")}
                  />
                  <GenderLabel htmlFor="Man">For man</GenderLabel>
                </GenderBtn>
              </RadioBtn>

              <Label>
                Your weight in kilograms:
                <CalcInput
                  type="text"
                  name="weight"
                  className={touched.weight && errors.weight ? "invalid" : ""}
                  onInput={(e) => {
                    handleChange(e);
                    setWeight(values.weight);
                  }}
                  value={values.weight}
                />
                <ErrorMsg name="weight" component="span" />
              </Label>
              {/* {formik.errors.weight && formik.touched.weight && (onBlur={() => handleBlur("weight")}             )} */}
              <Label>
                The time of active participation in sports or other activities with a high physical load:
                <CalcInput type="text" name="time" className={touched.time && errors.time ? "invalid" : ""} onChange={() => setTime(values.time)} />
                {/* <ModalInput onBlur={() => handleBlur("time")} type="text" name="time" />onChange={handleChange} */}
                <ErrorMsg name="time" component="span" />
              </Label>
              {/* {formik.errors.time && formik.touched.time && (            )} */}
              <ResultCont>
                <TextResult>The required amount of water in liters per day:</TextResult>
                {/* {touched.gender && touched.weight && touched.time && !errors.time && !errors.weight ? calculate(values.gender, values.weight, values.time) : ""} */}
                <Littres>
                  {/* <Field type="number" name="result" /> */}
                  {result}L
                  {/* {touched.gender && touched.weight && touched.time && !errors.time && !errors.weight ? calcRate(values.gender, values.weight, values.time) : 0}L */}
                </Littres>
              </ResultCont>
              <BoldLabel>
                Write down how much water you will drink:
                <CalcInput type="text" id="water" name="rate" className={touched.rate && errors.rate ? "invalid" : ""} />
                <ErrorMsg name="rate" component="span" />
              </BoldLabel>
              {/* {formik.errors.rate && formik.touched.rate && (            )} */}
              <Btn type="submit">Save</Btn>
            </CalcForm>
          )}
        </Formik>
      </Container>
    </StyledModal>
  );
};
