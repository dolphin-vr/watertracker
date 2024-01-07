import styled from "styled-components";

const WaterProgresBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;

  @media (min-width: 767px) {
    margin-bottom: 0;
  }

  @media (min-width: 1439px) {
    width: 544px;
  }
`;

const WaterProgresBarTitle = styled.p`
  color: var(--Primery-Color-Blue, #407bff);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 8px 0;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #c6d7ff;
  position: relative;
  border-radius: 5px;
`;

const ProgressBar = styled.div`
  ${(props) => {
    console.log(props);
  }}
  height: 8px;
  position: absolute;
  background-color: #8baeff;
  border-radius: 5px;
`;

const WaterProgresBarText = styled.div`
  display: flex;
  justify-content: space-between;
  color: #407bff;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  padding-top: 10px;
`;

export {
  WaterProgresBarContainer,
  WaterProgresBarTitle,
  ProgressContainer,
  ProgressBar,
  WaterProgresBarText,
};
