import styled from "styled-components";

const MonthHeader = styled.div`
   display: flex;
   margin-bottom: ${({ theme }) => theme.spacing(4)};
   align-items: center;
   justify-content: space-between;
`;

const MonthLabel = styled.span`
   color: ${({ theme }) => theme.colors.primary.black};
   font-family: Roboto;
   font-size: 24px;
   font-style: normal;
   font-weight: 500;
   line-height: 1.25; /* 125% */
   @media (min-width: 768px) {
      font-size: 26px;
   }
`;
const PaginationConteiner = styled.div`
   display: flex;
   align-items: center;
`;

const Pagination = styled.span`
   color: ${({ theme }) => theme.colors.primary.blue};
   text-align: center;
   font-family: Roboto;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 1.25; /* 125% */
`;

const PaginationButtonL = styled.svg`
   margin-right: ${({ theme }) => theme.spacing(3)};
   cursor: pointer;
   background: none;
   border: none;
   color: ${({ theme }) => theme.colors.primary.blue};
`;

const PaginationButtonR = styled.svg`
   margin-left: ${({ theme }) => theme.spacing(3)};
   cursor: pointer;
   background: none;
   border: none;
`;
export { MonthHeader, MonthLabel, Pagination, PaginationButtonL, PaginationButtonR, PaginationConteiner };
