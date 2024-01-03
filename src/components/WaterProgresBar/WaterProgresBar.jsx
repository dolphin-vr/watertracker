// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getPortionsList } from "../../redux/todayOperations.js";
import {
  WaterProgresBarContainer,
  WaterProgresBarTitle,
  ProgressContainer,
  ProgressBar,
  WaterProgresBarText,
} from "./WaterProgresBar.styled";

export const WaterProgresBar = () => {
  const quantity = 70;

  return (
    <WaterProgresBarContainer>
      <WaterProgresBarTitle>Today</WaterProgresBarTitle>
      <ProgressContainer>
        <ProgressBar
          style={{
            width: `${quantity}%`,
          }}
        ></ProgressBar>
      </ProgressContainer>
      <WaterProgresBarText>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </WaterProgresBarText>
    </WaterProgresBarContainer>
  );
};
