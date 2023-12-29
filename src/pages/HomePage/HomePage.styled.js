import styled from "styled-components";
export const StyledSection = styled.section`


background-image: url('../../../public/mobile-unsignedHomepage-background.png');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;



padding-bottom: 40px;   
@media screen and (min-width: 767px) {
    padding-bottom: 50px;
    background-image: url('../../../public/tablet-unsignedHomepage-background.png');
  }
  @media screen and (min-width: 1439px) {
    padding-bottom: 0;
    background-image:  url('../../../public/dekstop-unsignedHomepage-bubbles.png'), url('../../../public/deskstop-unsignedHomepage-background.png');
    background-size: contain;
    background-position: center, center bottom; 
    height: 100vh;
  }
`