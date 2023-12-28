import styled from "styled-components";

const WaterProgresBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;

  @media (min-width: 768px) {
    width: 656px;
  }

  @media (min-width: 1440px) {
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

const ProgressContainer = styled.div``;

const ProgressBar = styled.div``;

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
