import styled from "styled-components";

const TodayWrapper = styled.div`
  max-width: 400px;
  padding: 24px 8px;
  border-radius: 10px;
  background: var(--Secondary-color-2, #ecf2ff);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media (min-width: 768px) {
    width: 656px;
  }

  @media (min-width: 1440px) {
    width: 544px;
  }
`;

const TodayTitle = styled.p`
  color: var(--Primery-Color-Black, #2f2f2f);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin: 0;
  matgin-bottom: 10px;
`;

const TodayText = styled.p`
  color: var(--Primery-Color-Blue, #407bff);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
`;

const TodayList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const TodayItem = styled.li`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d7e3ff;
`;

const TodayQuantity = styled.span`
  color: var(--Primery-Color-Blue, #407bff);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;

const TodayTime = styled.span`
  color: var(--Primery-Color-Black, #2f2f2f);
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
`;

const AddWaterButton = styled.button`
  border: none;
  background-color: transparent;
  color: var(--Primery-Color-Blue, #407bff);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

export {
  TodayWrapper,
  TodayTitle,
  TodayText,
  TodayList,
  TodayItem,
  TodayQuantity,
  TodayTime,
  AddWaterButton,
};
