import { useSelector } from "react-redux";
import {
  WaterProgresBarContainer,
  WaterProgresBarTitle,
  ProgressContainer,
  ProgressBar,
  WaterProgresBarText,
  AccentSpan,
} from "./WaterProgresBar.styled";
import { selectPercentage } from "../../redux/water/todaySelectors";

export const WaterProgresBar = () => {
  const waterProgress = useSelector(selectPercentage);
  const quantity = waterProgress;

  return (
    <WaterProgresBarContainer>
      <WaterProgresBarTitle>Today</WaterProgresBarTitle>
      <ProgressContainer>
        <ProgressBar width={quantity}></ProgressBar>
      </ProgressContainer>
      <WaterProgresBarText>
        <span>0%</span>
        <AccentSpan>50%</AccentSpan>
        <span>100%</span>
      </WaterProgresBarText>
    </WaterProgresBarContainer>
  );
};
