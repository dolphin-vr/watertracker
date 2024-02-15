import styled from "styled-components";

export const StyledDiv = styled.div`
   background-color: ${({ theme }) => theme.colors.secondary.white};
   width: 100%;
   padding: 24px 16px;
   border-radius: 10px;
   /* margin-top: 40px; */
   box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
   @media screen and (min-width: 768px) {
      width: 446px;
      padding: 32px 24px;
      /* margin-bottom: 50px; */
      /* margin-top: 60px; */
   }
   @media screen and (min-width: 1440px) {
      /* margin-top: 0px; */
      /* display: flex; */
   }
`;
export const StyledLi = styled.li`
   display: flex;
   align-items: center;
   gap: 8px;
`;
export const StyledParagraph = styled.p`
   color: ${({ theme }) => theme.colors.primary.black};
   font-family: Roboto;
   font-size: 16px;
   line-height: 1.25; /* 125% */
   margin: 0;
`;
export const StyledHeader = styled.h2`
   color: ${({ theme }) => theme.colors.primary.black};
   font-family: Roboto;
   font-size: 18px;
   font-weight: 500;
   line-height: 1.11;
   margin: 0 0 12px;
`;
export const StyledUl = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 16px;
   /* list-style: circle;
  color: ${({ theme }) => theme.colors.primary.primaryblue}; */
`;
