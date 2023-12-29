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

const MainHomepageStatistic = styled.div``;

const MainHomepagePortions = styled.div``;

export {
  MainHomepageContainer,
  MainHomepageStatistic,
  MainHomepagePortions,
  DailyNormaWrapper,
};
