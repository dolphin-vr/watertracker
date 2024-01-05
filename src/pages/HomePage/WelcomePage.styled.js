import styled from "styled-components";

const getbgr = elem => {
  if (elem === 1) {
    return {
      m: "url('../../../src/images/unsignedHome/mb-unsignhome-bg.png')",
      t: "url('../../../src/images/unsignedHome/tablet-unsignhome-bg.png')",
      d: "url('.../../../src/images/unsignedHome/pc-unsignhome-bubbles.png'), url('../../../src/images/unsignedHome/pc-unsignhome-bg.png')"
    }
  }
  return {
      m: "none",
      t: "none",
      d: "none"
    }
}
export const Container = styled.div`
  @media screen and (min-width: 1439px) {
    width: 1054px;
    display: flex;
    gap: 81px;
    align-items: flex-end; 
    margin: 0 auto;
  padding: 0 20px;  
  } 
`;
export const StyledSection = styled.section`
/* background-image: url('../../../src/images/unsignedHome/mb-unsignhome-bg.png');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
 */

padding-bottom: 40px;   
@media screen and (min-width: 767px) {
    padding-bottom: 50px;
    /* background-image: url('../../../src/images/unsignedHome/tablet-unsignhome-bg.png'); */
  }
  @media screen and (min-width: 1439px) {
    padding-bottom: 0;
    /* background-image:  url('.../../../src/images/unsignedHome/pc-unsignhome-bubbles.png'), url('../../../src/images/unsignedHome/pc-unsignhome-bg.png');
    background-size: contain;
    background-position: center, center bottom;  */
  }
`
export const StyledMain = styled.main`
margin-top: 24px;
@media screen and (min-width: 767px) {
  margin-top: 40px;
  }
  @media screen and (min-width: 1439px) {
    margin-top: 80px;
  }
  
`


export const StyledContainerUnsign = styled.div`

background-image:${({unsign}) => getbgr(unsign).m};
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
 
@media screen and (min-width: 767px) {
    background-image:${({unsign}) => getbgr(unsign).t};
  }
  @media screen and (min-width: 1439px) {
    background-image:${({unsign}) => getbgr(unsign).d};
    background-size: contain;
    background-position: center, center bottom; 
    height: 100vh;
  }
  
`
