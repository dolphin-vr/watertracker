// import { lazy } from "react";
import MainPage from "../MainPage/MainPage";
import { useSelector } from "react-redux";
import { WelcomePage } from "./WelcomePage";
// const WelcomePage = lazy(() => import("./WelcomePage"));

const HomePage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {isLoggedIn? <MainPage/>: <WelcomePage />}
      </>
  );
};
export default HomePage;
