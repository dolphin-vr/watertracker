import styled from "styled-components";

const getTileBgr = (props) => {
   if (props.istoday === "true") {
      return props.theme.colors.secondary.today;
   } else {
      return "transparent";
   }
};

const getBorderColor = (props) => {
   if (props.percent === 100 || props.percent === 0) {
      return "transparent";
   }
   if (props.percent < 100) {
      return props.theme.colors.secondary.orange;
   } else {
      return props.theme.colors.secondary.violet;
   }
};

const getFontColor = (props) => {
   if (props.percent === 0) {
      return props.theme.colors.secondary.grey;
   }
   return props.theme.colors.primary.black;
};

export const DayTile = styled.li`
   width: ${({ theme }) => theme.spacing(8)};
   height: ${({ theme }) => theme.spacing(13)};
   background-color: ${getTileBgr};

   @media (min-width: 768px) {
      width: 34px;
      height: 58px;
   }

   @media (min-width: 1440px) {
      width: 34px;
      height: 56px;
   }
`;
/* padding: 5px; */

export const DayButton = styled.button`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: ${({ theme }) => theme.spacing(1)};
   background: none;
   border: none;
   cursor: pointer;
   padding: 0;
   width: 100%;
   height: 100%;
`;

export const Circle = styled.p`
   margin: 0;
   width: ${({ theme }) => theme.spacing(8)};
   height: ${({ theme }) => theme.spacing(8)};
   border: 1px solid ${getBorderColor};
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${getFontColor};
   background-color: ${({ theme }) => theme.colors.primary.white};
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 1, 29; /* 128.571% */

   @media (min-width: 768px) {
      width: 34px;
      height: 34px;
   }
`;
// margin-bottom: 5px;

export const Label = styled.p`
   margin: 0;
   text-align: center;
   font-size: 12px;
   color: ${({ theme }) => theme.colors.secondary.blue};
`;
