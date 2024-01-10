import styled from "styled-components";
import sprite from "../../images/sprite.svg";
const getbgr = (elem) => {
   if (elem === 1) {
      return {
         m: `url(${sprite}#m-bg)`,
         t: `url(${sprite}#t-bg)`,
         d: `url(${sprite}#d-bg)`,
      };
   }
   return {
      m: "none",
      t: "none",
      d: "none",
   };
};

export const StyledMain = styled.main`
   padding: 24px 0 0;
   background-image: linear-gradient(to bottom, #ffffff 50%, #d7e3ff44 50%, #d7e3ff44 100%);
   @media screen and (min-width: 320px) and (min-height: 961px) {
      height: calc(100vh - 80px);
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   @media screen and (min-width: 768px) {
      width: 768px;
      padding: 24px 0 0;
   }
   @media screen and (min-width: 768px) and (min-height: 801px) {
      height: calc(100vh - 88px);
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   @media screen and (min-width: 1440px) {
      width: 1440px;
      margin: 0 auto;
      padding-top: 20px;
   }
   @media screen and (min-width: 1440px) and (min-height: 741px) {
      height: calc(100vh - 60px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 0;
   }
`;

export const StyledSection = styled.section`
   background-image: url(${sprite}#welc-bg-m);
   background-size: cover;
   background-position: 0 0;
   background-repeat: no-repeat;
   padding: 0px 20px 40px;
   /* padding-bottom: 40px; */
   height: 880px;
   @media screen and (min-width: 768px) {
      height: 712px;
      width: 768px;
      padding: 16px 32px;
      background-image: url(${sprite}#welc-bg-t);
      background-size: auto;
      /* background-position: 448px 320px, 0 -80px, 0px 0px; */
      /* padding-bottom: 0;
    padding-top: 16px; url(${sprite}#welc-bt-t), url(${sprite}#welc-bb-t), */
   }
   @media screen and (min-width: 1440px) {
      background-image: url(${sprite}#welc-bg-d);
      background-size: contain;
      background-position: 0 0, 0 0px, 0 0;
      width: 100%;
      height: 692px;
      margin: 0 auto;
      padding-bottom: 0;
      padding-top: 32px;
   }
`;

export const Container = styled.div`
   @media screen and (min-width: 1440px) {
      width: 1014px;
      display: flex;
      gap: 81px;
      align-items: flex-end;
      margin: 0 auto;
      padding: 0 20px;
   }
`;

// export const StyledContainerUnsign = styled.div`

// background-image:${({unsign}) => getbgr(unsign).m};
//     background-size: cover;
//     background-position: 0 80px;
//     background-repeat: no-repeat;
// @media screen and (min-width: 768px) {
//     background-image:${({unsign}) => getbgr(unsign).t};
//   }
//   @media screen and (min-width: 1440px) {
//     background-image:${({unsign}) => getbgr(unsign).d};
//     background-size: contain;
//     background-position: 980px 490px ,0 0, 0 432px;
//     height: 100vh;
//     width: 1440px;
//     margin: 0 auto;
//   }
// `
