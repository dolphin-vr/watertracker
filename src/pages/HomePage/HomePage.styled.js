import styled from "styled-components";
export const StyledSection = styled.section`


background-image: url('../../../src/images/unsignedHome/mb-unsignhome-bg.png');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;



padding-bottom: 40px;   
@media screen and (min-width: 767px) {
    padding-bottom: 50px;
    background-image: url('../../../src/images/unsignedHome/tablet-unsignhome-bg.png');
  }
  @media screen and (min-width: 1439px) {
    padding-bottom: 0;
    background-image:  url('.../../../src/images/unsignedHome/pc-unsignhome-bubbles.png'), url('../../../src/images/unsignedHome/pc-unsignhome-bg.png');
    background-size: contain;
    background-position: center, center bottom; 
  }
`