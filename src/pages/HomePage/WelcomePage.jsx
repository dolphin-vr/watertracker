import { WaterСonsumptionTracker } from "../../components/WaterСonsumptionTracker/WaterСonsumptionTracker";
import { WhyDrinkWater } from "../../components/WhyDrinkWater/WhyDrinkWater";
import { Container, StyledMain } from "./WelcomePage.styled";

export const WelcomePage = () => {
  return (
    <StyledMain>
        <Container>
          <WaterСonsumptionTracker />
          <WhyDrinkWater />
        </Container>
    </StyledMain>
  );
};
