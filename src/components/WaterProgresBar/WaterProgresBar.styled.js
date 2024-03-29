import styled from "styled-components";

const getProgressBar = ({ width, theme }) => {
  if (width > 200) {
    return `
      width: 100%;
      background-color: ${theme.colors.secondary.violet};
    `;
  }
  if (width > 100) {
    const newWidth = width - 100;
    return `
      width: ${newWidth}%;
      background-color: ${theme.colors.secondary.violet};
    `;
  } else {
    return `
      width: ${width}%;
      background-color: ${theme.colors.secondary.blue};
    `;
  }
};

const getProgresContainer = ({ width, theme }) => {
  if (width > 100) {
    return `
      background-color: ${theme.colors.secondary.blue};
    `;
  } else {
    return `
      background-color: ${theme.colors.secondary.whiteblue};
    `;
  }
};

const WaterProgresBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  width: 100%;

  @media (min-width: 768px) {
    width: 356px;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    width: 392px;
  }
`;

const WaterProgresBarTitle = styled.p`
  color: var(--Primery-Color-blue, #407bff);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 ${({ theme }) => theme.spacing(2)} 0;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  position: relative;
  border-radius: 5px;
  ${getProgresContainer};
`;

const ProgressBar = styled.div`
  height: 8px;
  width: 0%;
  position: absolute;
  border-radius: 5px;
  ${getProgressBar};
`;

const WaterProgresBarText = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primary.blue};
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

const AccentSpan = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

const getProgressPosition = ({ width }) => {
  if (width > 200) {
    return `
      left: 100%;
    `;
  }
  if (width > 100) {
    const newWidth = width - 100;
    return `
      left: ${newWidth}%;
    `;
  } else {
    return `
      left: ${width-1}%;
    `;
  }
};
const ProgressPoiner = styled.span`
  position: absolute;
  top: -3px;
  ${getProgressPosition};
  width: 14px;
  height: 14px;
  background-color: ${({ theme }) => theme.colors.primary.white};
  border: 2px solid ${({ theme }) => theme.colors.primary.blue};
  border-radius: 50%;
`;

export { WaterProgresBarContainer, WaterProgresBarTitle, ProgressContainer, ProgressBar, WaterProgresBarText, AccentSpan, ProgressPoiner };
