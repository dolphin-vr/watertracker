import styled from "styled-components";
import sprite from "../../images/sprite.svg";

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
   background-image: url(${sprite}#main-bg-m);
   background-size: cover;
   background-position: 0 48px;
   background-repeat: no-repeat;
   height: 1310px;

   @media screen and (min-width: 768px) {
      background-image: url(${sprite}#main-bg-t);
      background-size: auto;
      background-position: 0 0;
      height: 1274px;
      width: 100%;
   }
   @media screen and (min-width: 1440px) {
      background-image: url(${sprite}#main-bg-d);
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
   /* background-image: url(${sprite}#main-bg-d); */
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
   background: ${({ theme }) => theme.colors.secondary.white};
   box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
   background: #ecf2ff;
   border-radius: 10px;
   box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

   @media (min-width: 767px) {
      padding: ${({ theme }) => theme.spacing(8)}${({ theme }) => theme.spacing(6)};
   }
`;

const AddPortionButton = styled.button`
   padding: ${({ theme }) => theme.spacing(2)};
   width: 100%;
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
   StyledSection,
   StyledDiv,
};
