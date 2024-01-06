// import { Today } from "../../components/Today/Today";
import { WaterСonsumptionTracker } from "../../components/WaterСonsumptionTracker/WaterСonsumptionTracker";
import { WhyDrinkWater } from "../../components/WhyDrinkWater/WhyDrinkWater";
import { Container, StyledMain, StyledSection } from "./WelcomePage.styled";
const WelcomePage = () => {
  return (
    <StyledMain>
      <StyledSection>
          <h2>NODE_ENV {import.meta.env.VITE_NODE_ENV}</h2>
          <h2>PUBLIC_URL {import.meta.env.VITE_PUBLIC_URL}</h2>
        <Container>
          <WaterСonsumptionTracker />
          <WhyDrinkWater />
        </Container>
      </StyledSection>
    </StyledMain>
  );
};
export default WelcomePage;
