import styled from "styled-components";

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 40px 0;
  background: transperent;

  @media (min-width: 767px) {
    max-width: 768px;
    margin: 0 auto;
  }

  @media (min-width: 1439px) {
    max-width: 1440px;
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }
`;

const DailyNormaWrapper = styled.div``;

const MainPageStatistic = styled.div`
  padding: 0 0 40px;

  @media screen and (min-width: 1439px) {
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px;
  }
`;

const WaterProgressWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  @media (min-width: 1440px) {
    width: 544px;
  }
`;

const MainPagePortions = styled.div`
  padding: 24px 8px;
  background: ${(props) => props.theme.colors.secondary.secondaryWhite};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  background: #ecf2ff;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
`;

const AddPortionButton = styled.button`
  padding: 8px;
  width: 100%;
  border: none;
  border-radius: 10px;
  background: var(--Primery-Color-Blue, #407bff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: var(--Primery-Color-White, #fff);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  @media (min-width: 768px) {
    height: 44px;
  }
`;

export {
  MainPageContainer,
  MainPageStatistic,
  MainPagePortions,
  WaterProgressWrap,
  DailyNormaWrapper,
  AddPortionButton,
};
