import styled from "styled-components";
import Modal from "react-modal";
import DatePicker from "react-datepicker";

export const ModalStyled = styled(Modal)`
   &.overlay {
      background: none;
   }
`;

export const ModalWrap = styled.div`
   position: fixed;
   background-color: ${({ theme }) => theme.colors.primary.white};
   border-radius: 10px;
   width: 280px;
   height: ${(props) => (props.initialWater !== 0 ? "643px" : "538px")};
   padding: 24px 12px;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   @media (min-width: 768px) {
      width: 704px;
      height: ${(props) => (props.initialWater !== 0 ? "578px" : "503px")};
      padding: 32px 24px;
   }
   @media (min-width: 1440px) {
      width: 592px;
      height: ${(props) => (props.initialWater !== 0 ? "578px" : "503px")};
      padding: 32px 24px;
   }
`;

export const Title = styled.h2`
   margin: 0;
   font-size: 26px;
   margin-bottom: 24px;
`;

export const BtnClose = styled.button`
   background-color: transparent;
   width: 24px;
   height: 24px;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   position: absolute;
   top: 28px;
   right: 12px;
   padding: 0;
   cursor: pointer;
   @media (min-width: 768px) {
      top: 36px;
      right: 24px;
   }
`;

export const Text = styled.p`
   margin: 0;
   font-size: 18px;
   margin-bottom: 16px;
   font-weight: 500;
`;

export const BtnWrap = styled.div`
   display: flex;
   padding: 0;
   gap: 7px;
   align-items: center;
   margin-bottom: 24px;
`;

export const TextLabel = styled.p`
   margin: 0;
   font-size: 16px;
   margin-bottom: 12px;
`;

export const BtnCounter = styled.button`
   border-radius: 30px;
   width: 44px;
   height: 44px;
   border: none;
   background: transparent;
   border: 1px solid ${({ theme }) => theme.colors.secondary.blue};
   justify-content: center;
   align-items: center;
   display: flex;
   cursor: pointer;
   box-shadow: 0 2px 4px rgba(64, 123, 255, 0.2);
   &:hover,
   &:focus {
      border-color: ${({ theme }) => theme.colors.primary.blue};
   }
`;

export const Counter = styled.p`
   font-size: 18px;
   width: 92px;
   height: 36px;
   border-radius: 40px;
   margin: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${({ theme }) => theme.colors.secondary.whiteblue};
   font-weight: 700;
   color: ${({ theme }) => theme.colors.primary.blue};
`;

export const StyledText = styled.span`
   font-size: 16px;
`;

export const StyledName = styled.span`
   font-size: 18px;
   font-weight: 500;
`;

export const WrapInput = styled.div`
   display: flex;
   flex-direction: column;
   gap: 12px;
   margin-bottom: 20px;
   &:hover,
   &:focus {
      border-color: ${({ theme }) => theme.colors.primary.blue};
   }
`;

export const StyledInput = styled.input`
   width: 100%;
   height: 44px;
   border: none;
   line-height: normal;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   outline: none;
   border: 1px solid ${({ theme }) => theme.colors.secondary.whiteblue};
   border-radius: 6px;
   padding-left: 10px;
   color: ${({ theme }) => theme.colors.primary.blue};
   &:hover,
   &:focus {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary.blue};
   }
`;

export const WrapCounter = styled.div`
   display: flex;
   flex-direction: column;
   gap: 16px;
   justify-content: center;
   align-items: center;
   @media (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-end;
      gap: 34px;
   }
`;

export const NumberCounter = styled.p`
   margin: 0;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.primary.blue};
`;

export const BtnSave = styled.button`
   width: 256px;
   height: 36px;
   font-size: 16px;
   border-radius: 10px;
   background-color: ${({ theme }) => theme.colors.primary.blue};
   border: none;
   color: ${({ theme }) => theme.colors.primary.white};
   box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
   cursor: pointer;
   &:hover,
   &:focus {
      opacity: 0.7;
   }
   @media (min-width: 768px) {
      width: 180px;
      height: 44px;
   }
`;

export const StyledDatePicker = styled(DatePicker)`
   display: block;
   border-radius: 5px;
   width: 100%;
   height: 44px;
   outline: none;
   border: 1px solid ${({ theme }) => theme.colors.secondary.whiteblue};
   color: ${({ theme }) => theme.colors.primary.blue};
   padding-left: 10px;
   &:hover,
   &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary.blue};
   }
`;

export const Container = styled.div`
   display: flex;
   background-color: ${({ theme }) => theme.colors.secondary.whiteblue};
   gap: 16px;
   width: 256px;
   height: 52px;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   padding: 24px 14px;
   margin-bottom: 24px;
`;

export const Amount = styled.span`
   font-size: 18px;
   color: ${({ theme }) => theme.colors.primary.blue};
`;

export const Time = styled.span`
   font-size: 12px;
`;

export const ErrorWrap = styled.div`
   color: ${({ theme }) => theme.colors.secondary.red};
   font-size: 14px;
`;
