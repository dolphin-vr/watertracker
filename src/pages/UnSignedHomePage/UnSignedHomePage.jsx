import { Today } from "../../components/Today/Today";
import { WaterСonsumptionTracker } from "../../components/WaterСonsumptionTracker/WaterСonsumptionTracker";
import { WhyDrinkWater } from "../../components/WhyDrinkWater/WhyDrinkWater";
import { Container } from "./UnSignedHomePage.styled";
const UnSignedHomePage = () => {
  return (
    <Container>
      <WaterСonsumptionTracker />
      <WhyDrinkWater />
      <Today />
    </Container>
  );
};
export default UnSignedHomePage;
