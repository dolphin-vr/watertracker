import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Suspense } from "react";
import { StyledContainer } from "./SharedLayoutContainer.styled";

export const SharedLayout = () => {
  return (
    <StyledContainer>
      <Header />
      <Suspense fallback={<div>...loading</div>}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};
