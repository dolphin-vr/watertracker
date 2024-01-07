import styled from "styled-components";
import bottleImgMobile from "../../images/bottle-mainPage-mobile.png";
import bottleImgDesktop from "../../images/bottle-mainPage-desktop.png";

const DailyNormaWrapper = styled.div`
  height: 290px;
  background: url(${bottleImgMobile});
  background-repeat: no-repeat;
  background-position: center bottom;

  @media (min-width: 767px) {
    background: url(${bottleImgDesktop});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (min-width: 1439px) {
    height: 100%;
    background-size: cover;
  }
`;

const DailyNormaContainer = styled.div`
  max-width: 166px;
  padding: 8px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #ecf2ff;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
`;

const DailyNormaTitle = styled.p`
  margin: 0px;
  padding-bottom: 12px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

const DailyNormaInfo = styled.p`
  display: flex;
  align-items: center;
  margin: 0px;
  color: #407BFF;
  font-size: 22px;
  font-weight: 700;
  line-height: 100%;
`;

const DailyNormaSpan = styled.span`
  padding: 0px 12px 0px 5px;
`;

const DailyNormaBth = styled.button`
  border: none;
  background-color: transparent;
  color: #8baeff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;

export {
  DailyNormaContainer,
  DailyNormaTitle,
  DailyNormaInfo,
  DailyNormaSpan,
  DailyNormaBth,
  DailyNormaWrapper,
};
