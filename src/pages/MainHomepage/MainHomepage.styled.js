import styled from "styled-components";

const MainHomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  padding: 24px 20px 40px 20px;
  background: transperent;

  @media (min-width: 768px) {
    width: 656px;
  }

  @media (min-width: 1440px) {
    width: 544px;
  }
`;

const DailyNormaWrapper = styled.div``;

const MainHomepageStatistic = styled.div`
  padding: 0 0 40px;
`;

const MainHomepagePortions = styled.div``;

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
`;

export {
  MainHomepageContainer,
  MainHomepageStatistic,
  MainHomepagePortions,
  DailyNormaWrapper,
  AddPortionButton,
};
