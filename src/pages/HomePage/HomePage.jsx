import { lazy, useState } from "react";
import MainHomepage from "../MainHomepage/MainHomepage";
import { StyledSection } from "./HomePage.styled";
import { useSelector } from "react-redux";
const UnSignedHomePage = lazy(() => import("../UnSignedHomePage/UnSignedHomePage")
);

const HomePage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn);
  return (
    <>
      {isLoggedIn? <MainHomepage/>: <UnSignedHomePage />}
      </>
  );
};
export default HomePage;
