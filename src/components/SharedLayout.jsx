import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header/Header";
import { Toaster } from 'react-hot-toast';

const toastOptions = {
  position: 'center-top',
  style: {
    width: '100%',
    fontSize: '22px',
  },
  success: {
    duration: 5000,
    style: {
      background: '#9ebbff',
    },
  },
  loading: {
    style: {
      background: '#9ebbff',
    },
  },
  error: {
    style: {
      background:  '#d1b0fc',
    },
  },
}

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>...loading</div>}>
        <Outlet />
      </Suspense>
      <Toaster toastOptions={ toastOptions} />
    </>  
  );
};
