import { Today } from "../../components/Today/Today";
import { WaterСonsumptionTracker } from "../../components/WaterСonsumptionTracker/WaterСonsumptionTracker";
import { WhyDrinkWater } from "../../components/WhyDrinkWater/WhyDrinkWater";
import { StyledSection } from "../HomePage/HomePage.styled";
import { Container } from "./UnSignedHomePage.styled";
const UnSignedHomePage = () => {
  return (
    <StyledSection>
      <Container>
        <WaterСonsumptionTracker />
        <WhyDrinkWater />
      </Container>
    </StyledSection>
  );
};
export default UnSignedHomePage;
