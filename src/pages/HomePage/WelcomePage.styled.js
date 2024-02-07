import styled from "styled-components";
import sprite from "../../images/sprite.svg";
import waved from "../../images/wave-d.svg";
import wavet from "../../images/wave-t.svg";
import bublm from "../../images/bubl-m.svg";
import bublt from "../../images/bubl-t.svg";
import bubld from "../../images/bubl-d.svg";
import bottle from "../../images/bottle.svg";

export const StyledMain = styled.main`
   background-image: url(${bublm}), url(${wavet});
   background-repeat: no-repeat;
   background-position: center bottom;
   background-size: auto;
   @media screen and (min-width: 768px) {
      height: calc(100vh - 56px);
      min-height: 736px;
      background-image: url(${bottle}), url(${bublt}), url(${wavet});
      background-size: 402px 352px, auto, cover;
      background-position: left calc(100% / 2 + 268px) top 334px, center top 24px, center bottom;
   }
   @media screen and (min-width: 1440px) {
      background-image: url(${bottle}), url(${bubld}), url(${waved});
      background-size: 290px 254px, auto, auto;
      background-position: left calc(100% / 2 + 432px) top 456px, center top 24px, center bottom;
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
   max-width: 320px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   gap: 40px;
   padding: 24px 20px 40px;
   @media screen and (min-width: 768px) {
      max-width: 704px;
      padding: 40px 32px 50px;
      gap: 60px;
   }
   @media screen and (min-width: 1440px) {
      max-width: 1014px;
      flex-direction: row;
      gap: 80px;
      align-items: flex-end;
      padding: 80px 0 0;
   }
`;

