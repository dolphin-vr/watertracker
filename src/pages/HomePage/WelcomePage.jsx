import { WaterСonsumptionTracker } from "../../components/WaterСonsumptionTracker/WaterСonsumptionTracker";
import { WhyDrinkWater } from "../../components/WhyDrinkWater/WhyDrinkWater";
import { Container, StyledMain, StyledSection } from "./WelcomePage.styled";

export const WelcomePage = () => {
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
