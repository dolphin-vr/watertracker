import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Suspense } from "react";
import { StyledContainer } from "./SharedLayoutContainer.styled";

export const SharedLayout = () => {
  // const isUnsign = 1
  return (
            <StyledContainer>
              <Header />
             <Suspense fallback={<div>...loading</div>}>
               <Outlet />
             </Suspense>
           </StyledContainer>
    
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
