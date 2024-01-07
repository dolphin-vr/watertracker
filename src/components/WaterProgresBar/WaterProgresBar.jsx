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

  return (
    <WaterProgresBarContainer>
      <WaterProgresBarTitle>Today</WaterProgresBarTitle>
      <ProgressContainer width={waterProgress}>
        <ProgressBar width={waterProgress}></ProgressBar>
      </ProgressContainer>
      <WaterProgresBarText>
        <span>0%</span>
        <AccentSpan>50%</AccentSpan>
        <span>100%</span>
      </WaterProgresBarText>
    </WaterProgresBarContainer>
  );
};
