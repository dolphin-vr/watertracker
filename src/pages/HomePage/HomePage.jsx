import { lazy, useState } from "react";
import MainHomepage from "../MainHomepage/MainHomepage";
import { StyledSection } from "./HomePage.styled";
const UnSignedHomePage = lazy(() => import("../UnSignedHomePage/UnSignedHomePage")
);

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // isLoggedIn = true
  const handleButtonClick = () => {
    setIsLoggedIn(prev => !prev)
  }
  return (
    <StyledSection> 
      <button onClick={handleButtonClick}>{isLoggedIn? "logOut" : "signIn"}</button>
      {isLoggedIn? <MainHomepage/>: <UnSignedHomePage />}
    </StyledSection>
  );
};
export default HomePage;
