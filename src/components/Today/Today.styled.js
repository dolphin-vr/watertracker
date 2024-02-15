import styled from "styled-components";

const TodayWrapper = styled.div`
   margin-bottom: ${({ theme }) => theme.spacing(6)};

   display: flex;
   flex-direction: column;
   justify-content: space-between;
   min-height: 256px;

   @media (min-width: 767px) {
      width: 656px;
   }

   @media (min-width: 1439px) {
      width: 544px;
   }
`;

const TodayTitle = styled.p`
   color: ${({ theme }) => theme.colors.primary.black};
   font-size: 24px;
   font-weight: 500;
   line-height: 1.25;
   margin: 0;
   margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const TodayText = styled.p`
   color: ${({ theme }) => theme.colors.primary.blue};
   padding: ${({ theme }) => theme.spacing(3)} 0;
   font-size: 18px;
   font-weight: 400;
   line-height: 1.33;
   margin: 0;
`;

const TodayList = styled.ul`
   display: flex;
   flex-direction: column;
   padding-right: ${({ theme }) => theme.spacing(1)};
   height: 196px;
   overflow-y: scroll;
   margin-bottom: ${({ theme }) => theme.spacing(2)};

   &::-webkit-scrollbar {
      width: 4px;
   }

   &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.secondary.blue};
      border-radius: 4px;
   }

   &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.secondary.whiteblue};
   }
`;

const TodayItem = styled.li`
   padding: ${({ theme }) => theme.spacing(3)} 0;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.whiteblue};
`;

const QuantityWrap = styled.span`
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing(4)};
`;

const ButtonsWrap = styled.span`
   display: flex;
   gap: ${({ theme }) => theme.spacing(1)};
`;

const TodayQuantity = styled.span`
   color: ${({ theme }) => theme.colors.primary.blue};
   font-size: 18px;
   font-weight: 400;
   line-height: 1.33;
`;

const TodayTime = styled.span`
   color: ${({ theme }) => theme.colors.primary.black};
   font-size: 12px;
   font-weight: 400;
   line-height: 2;
`;

const SvgButtonCreate = styled.button`
   border: none;
   border-bottom: 1px solid transparent;
   background-color: transparent;
   cursor: pointer;

   :hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.blue};
   }
`;

const SvgButtonDel = styled.button`
   border: none;
   border-bottom: 1px solid transparent;
   background-color: transparent;
   cursor: pointer;

   :hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.red};
   }
`;

const AddWaterButton = styled.button`
   border: none;
   background-color: transparent;
   color: ${({ theme }) => theme.colors.primary.blue};
   padding-left: ${({ theme }) => theme.spacing(6)};
   cursor: pointer;
   font-size: 16px;
   font-weight: 500;
   line-height: 1.25;
   position: relative;
   transition: all ${({ theme }) => theme.transition};
   stroke: ${({ theme }) => theme.colors.primary.blue};
   width: 110px;

   &:hover {
      color: ${({ theme }) => theme.colors.secondary.orange};
      stroke: ${({ theme }) => theme.colors.secondary.orange};
   }
`;

const StyledSvgGlass = styled.svg`
   width: 26px;
   height: 26px;
   stroke: ${({ theme }) => theme.colors.secondary.Bue};
`;

const StyledSvgPencil = styled.svg`
   width: 20px;
   height: 20px;
   padding-bottom: 2px;
   stroke: ${({ theme }) => theme.colors.secondary.blue};
`;

const StyledSvgTrash = styled.svg`
   width: 20px;
   height: 20px;
   padding-bottom: 2px;
   stroke: ${({ theme }) => theme.colors.secondary.red};
`;

const StyledSvgPlus = styled.svg`
   width: 22px;
   height: 22px;
   position: absolute;
   left: 0;
   bottom: 0px;
`;

export {
   TodayWrapper,
   TodayTitle,
   TodayText,
   TodayList,
   TodayItem,
   QuantityWrap,
   ButtonsWrap,
   TodayQuantity,
   TodayTime,
   SvgButtonCreate,
   SvgButtonDel,
   AddWaterButton,
   StyledSvgGlass,
   StyledSvgPencil,
   StyledSvgTrash,
   StyledSvgPlus,
};
