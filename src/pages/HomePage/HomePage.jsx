import { lazy, useState } from "react";
import MainHomepage from "../MainHomepage/MainHomepage";
const UnSignedHomePage = lazy(() => import("../UnSignedHomePage/UnSignedHomePage")
);

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleButtonClick = () => {
    setIsLoggedIn(prev => !prev)
  }
  return (
    <section> 
      <button onClick={handleButtonClick}>{isLoggedIn? "logOut" : "signIn"}</button>
      {isLoggedIn? <MainHomepage/>: <UnSignedHomePage />}
    </section>
  );
};
export default HomePage;
