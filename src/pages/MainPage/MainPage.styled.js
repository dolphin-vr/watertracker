import styled from "styled-components";
import signbgm from "../../assets/sign-m.svg";
import mainbgt from "../../assets/mainbgt.svg";
import signbgd from "../../assets/sign-d.svg";
import bottle from "../../assets/bottle.svg";
import { Icon } from "../../components/Icon/Icon";

export const Main = styled.main`
  /* height: 634px; */
  padding-top: 24px;
  background-image: url(${bottle}), url(${signbgm});
  background-repeat: no-repeat;
  background-size: 280px 192px, cover;
  background-position: center 128px, center top;
  /* outline: 1px solid orange; */

  @media screen and (min-width: 768px) {
    /* height: 600px; */
    position: relative;
    background-image: url(${bottle}), url(${mainbgt});
    background-size: 564px 328px, cover;
    background-position: center top 72px, center;
  }
  @media screen and (min-width: 1440px) {
    min-height: 740px;
    height: calc(100vh - 60px);
    margin: 0 auto;
    padding-top: 60px;
    /* padding-left: 100px; */
    /* height: 740px; */
    display: flex;
    justify-content: center;
    gap: 32px;
    /* flex-direction: row-reverse; */
    background-image: url(${bottle}), url(${signbgd});
    background-size: 592px, cover;
    background-size: 592px, contain;
    background-position: left calc(100% / 2 + -288px) top 108px, center;
  }
`;

const MainPagePortions = styled.div`
  width: 280px;
  /* height: 836px; */
  margin: 0 auto;
  /* outline: 1px solid red; */
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: ${({ theme }) => theme.spacing(6)} 0;
  /* padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(2)}; */
  background: ${({ theme }) => theme.colors.secondary.white};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  /* background: #ecf2ff; */
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  /* outline: 1px solid green; */

  @media (min-width: 768px) {
    width: 704px;
    padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(6)};
  }

  @media (min-width: 1440px) {
    width: 592px;
    height: 688px;
    margin: 0;
  }
`;

const MainPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  background: transperent;

  @media screen and (min-width: 320px) and (min-height: 1310px) {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) and (min-height: 1281px) {
    height: calc(100vh - 88px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    flex-direction: row;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) and (min-height: 801px) {
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledSection = styled.section`
  background-size: cover;
  background-position: 0 48px;
  background-repeat: no-repeat;
  height: 1310px;

  @media screen and (min-width: 768px) {
    background-size: auto;
    background-position: 0 0;
    height: 1274px;
    width: 100%;
  }
  @media screen and (min-width: 1440px) {
    background-size: contain;
    background-position: 0 38px;
    margin: 0 auto;
    height: 680px;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 20px 48px;
  @media screen and (min-width: 768px) {
    padding: 40px 32px 44px;
  }
  @media screen and (min-width: 1440px) {
    padding: 20px 0 40px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 32px;
    justify-content: center;
    flex-direction: row;
  }
`;

const Backgound = styled.div`
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

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 508px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing(8)};
    flex-direction: column;
    justify-content: space-between;
    padding: 0px;
    height: 626px;
  }
`;

const WaterProgressWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: ${({ theme }) => theme.spacing(3)}; */
  }

  @media (min-width: 1440px) {
    /* width: 544px; */
  }
`;

const AddPortionButton = styled.button`
  padding: ${({ theme }) => theme.spacing(2)};
  padding-left: 34px;
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${({ theme }) => theme.colors.primary.white};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  position: relative;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 336px;
    height: 44px;
  }
  @media (min-width: 1440px) {
    width: 178px;
  }
`;

export const SvgIcon = styled(Icon)`
  position: absolute;
  left: calc((100% - 128px) / 2);
  bottom: 7px;
  width: 24px;
  height: 24px;
  @media (min-width: 767px) {
    left: 104px;
    bottom: 10px;
  }
  @media (min-width: 1439px) {
    left: 30px;
  }
`;

const StyledSvg = styled.svg`
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

export { MainPageContainer, MainPageStatistic, MainPagePortions, WaterProgressWrap, DailyNormaWrapper, AddPortionButton, Backgound, StyledSvg, StyledSection, StyledDiv };
