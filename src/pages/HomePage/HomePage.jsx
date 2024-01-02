import { lazy, useState } from "react";
// import MainHomepage from "../MainHomepage/MainHomepage";
import SettingModal from "../../components/SettingModal/SettingModal";
const UnSignedHomePage = lazy(() => import("../UnSignedHomePage/UnSignedHomePage")
);

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // isLoggedIn = true
  const handleButtonClick = () => {
    setIsLoggedIn(prev => !prev)
  }
  return (
    <section> 
      <button onClick={handleButtonClick}>{isLoggedIn? "logOut" : "signIn"}</button>
      {isLoggedIn ? <SettingModal /> : <UnSignedHomePage />}
      
    </section>
  );
};
export default HomePage;
