import styled from "styled-components";
import background from "../../images/mainPage/background-home-screen.png";
// import backgroundMobile from "../../images/mainPage/background-home-screen-mobile.png";

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(6)} 0
    ${({ theme }) => theme.spacing(10)} 0;
  background: transperent;

  @media (min-width: 767px) {
    max-width: 768px;
    margin: 0 auto;
  }

  @media (min-width: 1439px) {
    max-width: 1440px;
    flex-direction: row;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

const Backgound = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const DailyNormaWrapper = styled.div``;

const MainPageStatistic = styled.div`
  padding: 0 0 ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: 1439px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing(8)};
    flex-direction: column;
    justify-content: space-between;
    padding: 0px;
  }
`;

const WaterProgressWrap = styled.div`
  @media (min-width: 767px) {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};
  }

  @media (min-width: 1439px) {
    width: 544px;
  }
`;

const MainPagePortions = styled.div`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(2)};
  background: ${(props) => props.theme.colors.secondary.White};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  background: #ecf2ff;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media (min-width: 767px) {
    padding: ${({ theme }) => theme.spacing(8)}
      ${({ theme }) => theme.spacing(6)};
  }
`;

const AddPortionButton = styled.button`
  padding: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.primary.Blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${(props) => props.theme.colors.primary.White};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  position: relative;
  cursor: pointer;

  @media (min-width: 767px) {
    height: 44px;
  }
`;
const StyledSvgPlus = styled.svg`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 60px;
  bottom: 7px;

  @media (min-width: 767px) {
    left: 100px;
    bottom: 10px;
  }

  @media (min-width: 1439px) {
    left: 65px;
  }
`;

export {
  MainPageContainer,
  MainPageStatistic,
  MainPagePortions,
  WaterProgressWrap,
  DailyNormaWrapper,
  AddPortionButton,
  Backgound,
  StyledSvgPlus,
};
