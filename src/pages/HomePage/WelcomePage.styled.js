import styled from "styled-components";
import waved from "../../assets/wave-d.svg";
import wavet from "../../assets/wave-t.svg";
import bublm from "../../assets/bubl-m.svg";
import bublt from "../../assets/bubl-t.svg";
import bubld from "../../assets/bubl-d.svg";
import bottle from "../../assets/bottle.svg";

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
