import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import { Suspense } from "react";
import { StyledContainer } from "./SharedLayoutContainer.styled";
import { StyledContainerUnsign } from "../pages/HomePage/UnSignedHomePage.styled";

export const SharedLayout = () => {
  const {pathname} = useLocation();
  const isUnsign = pathname === "/" ? 1 : 0
  // const isUnsign = 1
  return (
    <StyledContainerUnsign unsign={isUnsign}>
            <StyledContainer>
              <Header />
             <Suspense fallback={<div>...loading</div>}>
               <Outlet />
             </Suspense>
           </StyledContainer>
         </StyledContainerUnsign>
    
        // <>
        // {isUnsign ? <StyledContainerUnsign>
        //     <StyledContainer>
        //       <Header />
        //       <Suspense fallback={<div>...loading</div>}>
        //         <Outlet />
        //       </Suspense>
        //     </StyledContainer>
        //   </StyledContainerUnsign>   : <StyledContainer>
        //       <Header />
        //       <Suspense fallback={<div>...loading</div>}>
        //         <Outlet />
        //       </Suspense>
        //     </StyledContainer>
        //    } 
        // </>

  );
};
