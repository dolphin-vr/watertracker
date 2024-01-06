import styled from "styled-components";
import backgroundImg from "../../images/background-mainPage.png";

// 1440;
// 768;
// 320;

const MainHomepageBackground = styled.div`
  width: 100%;
  margin: 0 auto;
  // background-image: url(${backgroundImg});
  background-color: tomato;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const MainHomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 40px 0;
  // background: url(${backgroundImg});

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

const MainHomepageStatistic = styled.div`
  padding: 0 0 40px;
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

const MainHomepagePortions = styled.div`
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
  MainHomepageBackground,
  MainHomepageContainer,
  MainHomepageStatistic,
  MainHomepagePortions,
  WaterProgressWrap,
  DailyNormaWrapper,
  AddPortionButton,
};
