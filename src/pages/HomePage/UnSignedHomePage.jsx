// import { Today } from "../../components/Today/Today";
import { WaterСonsumptionTracker } from "../../components/WaterСonsumptionTracker/WaterСonsumptionTracker";
import { WhyDrinkWater } from "../../components/WhyDrinkWater/WhyDrinkWater";
import { Container, StyledMain, StyledSection } from "./UnSignedHomePage.styled";
const UnSignedHomePage = () => {
  return (
    <StyledMain>
      <StyledSection>
        <Container>
          <WaterСonsumptionTracker />
          <WhyDrinkWater />
        </Container>
      </StyledSection>
    </StyledMain>
  );
};
export default UnSignedHomePage;
