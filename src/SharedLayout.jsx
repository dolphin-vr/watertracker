import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>...loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
