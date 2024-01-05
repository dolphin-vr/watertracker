import { lazy } from "react";
import MainPage from "../MainPage/MainPage";
// import { StyledSection } from "./HomePage.styled";
import { useSelector } from "react-redux";
const WelcomePage = lazy(() => import("./WelcomePage")
);

const HomePage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // console.log(isLoggedIn);
  return (
    <>
      {isLoggedIn? <MainPage/>: <WelcomePage />}
      </>
  );
};
export default HomePage;
