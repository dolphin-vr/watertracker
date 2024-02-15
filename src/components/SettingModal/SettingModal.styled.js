import styled from "styled-components";
import Modal from "react-modal";

export const ModalStyled = styled(Modal)`
   &.overlay {
      background: none;
   }
`;

export const Container = styled.div`
   max-width: 100%;
   padding: 32px 12px;
   z-index: 100;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -25%);
   background-color: ${({ theme }) => theme.colors.primary.white};
   border-radius: 10px;

   @media screen and (min-width: 768px) {
      padding: 32px 24px;
      width: 704px;
   }
   @media screen and (max-width: 768px) {
      margin-top: 100px;
   }
   @media screen and (min-width: 1440px) {
      transform: translate(-50%, -50%);
      padding: 32px 24px;
      width: 1008px;
   }
`;

export const UploadSvg = styled.svg`
   width: 16px;
   height: 16px;
   margin-right: 8px;
`;
export const TitleContainer = styled.div`
   margin-bottom: 24px;
   h2 {
      font-size: 26px;
      font-weight: 500;
      font-style: normal;
      line-height: 1.24;
   }

   @media screen and (min-width: 768px) {
      h3 {
         font-size: 26px;
         line-height: 1.23;
      }
   }
`;

export const ContainerAvatar = styled.div`
   width: 220px;
   display: flex;
   align-items: center;
`;

export const Avatar = styled.img`
   border-radius: 50%;
   width: 80px;
   height: 80px;
   background: lightgray 50% / cover no-repeat;
`;

export const InputImg = styled.input`
   display: none;
`;

export const LinkImgUpload = styled.span`
   color: ${({ theme }) => theme.colors.primary.blue};
   cursor: pointer;
   margin-left: 8px;
   font-family: Roboto;
   font-size: 14px;
   font-style: normal;
   font-weight: 500;
`;

export const TitleH5 = styled.h5`
   font-size: 18px;
   font-weight: 500;
   line-height: 20px;
   margin-bottom: 12px;
   @media screen and (min-width: 768px) {
      margin-top: 24px;
   }
`;

// ================== STYLE FORM SETTIHGMODAL================
export const ContainerGender = styled.div`
   display: flex;
`;

export const BoxGender = styled.label`
   margin-bottom: 58px;
   @media screen and (max-width: 768px) {
      margin-bottom: 24px;
   }
`;

export const ContainerBlockSeting = styled.div`
   @media screen and (min-width: 1440px) {
      display: flex;
      gap: 24px;
   }
`;

export const ContainerInfoUser = styled.div`
   @media screen and (min-width: 1440px) {
      width: 392px;
   }
`;

export const ContainerChangePass = styled.div`
   @media screen and (min-width: 1440px) {
      width: 100%;
      margin-top: 10px;
   }
`;

export const LabelInput = styled.label`
   font-size: 18px;
   display: flex;
   flex-direction: column;
   position: relative;
`;

export const InputStyle = styled.input`
   width: 100%;
   height: 44px;

   border: 1px solid ${({ theme }) => theme.colors.secondary.whiteblue};
   color: ${({ theme }) => theme.colors.secondary.blue};
   border-radius: 6px;
   margin: 8px 0px 16px 0px;
   font-size: 16px;

   padding: 16px 8px;

   &.input-error {
      border: 2px solid ${({ theme }) => theme.colors.secondary.red};
   }

   &:active,
   &:focus,
   &:hover {
      color: ${({ theme }) => theme.colors.primary.blue};
   }

   @media screen and (min-width: 768px) {
      width: 336px;
      height: 44px;
   }

   @media screen and (min-width: 1440px) {
      width: 384px;
      height: 44px;
   }
`;

export const ButtonSubmit = styled.button`
   color: ${({ theme }) => theme.colors.primary.white};
   font-weight: 500;
   line-height: 20px;
   font-size: 16px;
   border: none;
   display: block;

   width: 256px;
   height: 38px;
   padding: 8px 30px;
   border-radius: 10px;
   background: rgba(64, 123, 255, 1);
   box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

   @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 44px;
      margin-right: 24px;
   }

   @media screen and (min-width: 1440px) {
      width: 160px;
      height: 44px;

      margin-left: 380px;
   }
`;
export const ErrorMessageStyled = styled.span`
   color: ${({ theme }) => theme.colors.secondary.red};
   font-size: 14px;
   line-height: 1.28;
   margin-top: 4px;
`;

export const Backdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.8);
   overflow: auto;
`;

export const CloseBtn = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.colors.primary.white};
   border: none;
   width: 24px;
   height: 24px;
   padding: 0;
   position: absolute;
   top: 28px;
   right: 24px;
   cursor: pointer;
`;

export const Title = styled.h3`
   color: ${({ theme }) => theme.colors.primary.black};
   font-size: 26px;
   font-weight: 500;
   line-height: 32px;
   margin-bottom: 24px;
   display: block;
`;

export const GenderInput = styled.input`
   position: relative;
   height: 14px;
   width: 14px;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   outline: none;
   margin-right: 8px;

   &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({ theme }) => theme.colors.primary.white};
      border: 1px solid rgb(64, 123, 255);
   }

   &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: rgb(64, 123, 255);
      transform: translate(-50%, -50%);
      visibility: visible;
   }
`;

export const Label = styled.label`
   &:first-of-type {
      margin-right: 24px;
   }
`;

export const TitlePas = styled.h3`
   margin-top: 0px;
   margin-bottom: 12px;
`;

export const IconBtn = styled.button`
   position: absolute;
   border: none;
   top: 38px;
   left: 220px;
   background-color: transparent;
   border: none;
   width: 16px;
   height: 16px;
   padding: 0;
   stroke: ${({ theme }) => theme.colors.primary.blue};

   @media screen and (min-width: 768px) {
      left: 300px;
   }

   @media screen and (min-width: 1440px) {
      left: 345px;
   }
`;

export const MainForm = styled.form`
   @media (min-width: 1440px) {
      display: flex;
      gap: 24px;
   }
`;
