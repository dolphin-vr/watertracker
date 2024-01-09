import styled from "styled-components";
import sprite from "../../images/sprite.svg";
const getbgr = elem => {
  if (elem === 1) {
    return {
      m: `url(${sprite}#m-bg)`,
      t: `url(${sprite}#t-bg)`,
      d: `url(${sprite}#d-bg)`
      
    }
  }
  return {
      m: "none",
      t: "none",
      d: "none"
    }
}
export const Container = styled.div`
  @media screen and (min-width: 1440px) {
    width: 1054px;
    display: flex;
    gap: 81px;
    align-items: flex-end; 
    margin: 0 auto;
  padding: 0 20px;  
  } 
`;
export const StyledSection = styled.section`
background-image: url(${sprite}#m-bg);
    background-size: cover; 
    background-position: 0 0; 
    background-repeat: no-repeat; 
    padding-bottom: 40px;
    height: 880px;
@media screen and (min-width: 768px) {
    background-image: url(${sprite}#d-bg);
    background-position: 0px 0px; 
    height: 712px;
    padding-bottom: 0;
    padding-top: 16px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${sprite}#d-bg);
    background-size: contain;
    background-position: 0 0 ,0 0, 0 0; 
    width: 100%;
    height: 692px;
    margin: 0 auto;
    padding-bottom: 0;
    padding-top: 32px
  }
`
export const StyledMain = styled.main`
padding-top: 24px;
@media screen and (min-width: 320px) and (min-height: 961px) {
  height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
justify-content: center;
}
@media screen and (min-width: 768px) {
  padding-top: 24px;
  }
    @media screen and (min-width: 768px) and (min-height: 801px) {
    height: calc(100vh - 88px);
    display: flex;
    flex-direction: column;
justify-content: center;
  }
  @media screen and (min-width: 1440px){
    padding-top: 20px;
  }
  @media screen and (min-width: 1440px) and (min-height: 741px) {
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
justify-content: center;
padding-top: 0;
  }
  
`
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
