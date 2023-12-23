import { Outlet } from "react-router-dom";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>...loading</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
