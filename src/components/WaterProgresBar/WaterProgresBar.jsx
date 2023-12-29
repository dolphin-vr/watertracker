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
      <ProgressContainer
        style={{
          width: "100%",
          height: "8px",
          backgroundColor: "#C6D7FF",
          position: "relative",
          borderRadius: "5px",
        }}
      >
        <ProgressBar
          style={{
            width: `${quantity}%`,
            height: "8px",
            position: "absolute",
            backgroundColor: "#8BAEFF",
            borderRadius: "5px",
          }}
        ></ProgressBar>
      </ProgressContainer>
      <WaterProgresBarText>
        <span>0%</span>
        <span>100%</span>
      </WaterProgresBarText>
    </WaterProgresBarContainer>
  );
};
