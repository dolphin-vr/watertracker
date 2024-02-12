import styled from "styled-components";

export const UserAvatarIMG = styled.img`
   width: 28px;
   height: 28px;
   margin-left: ${({ theme }) => theme.spacing(2)};
   margin-right: ${({ theme }) => theme.spacing(1)};
   border-radius: 50%;
   object-fit: contain;
`;

export const UserContainer = styled.div`
   display: flex;
   cursor: pointer;
   align-items: center;
   position: relative;
`;

export const UserWrapper = styled.div`
   border: none;
   background: transparent;
`;

export const UserName = styled.p`
   color: ${({ theme }) => theme.colors.primary.black};
   text-align: right;
   font-size: 18px;
   font-weight: 400;
   line-height: 1.33;
`;

export const UserNameV = styled.p`
   color: ${({ theme }) => theme.colors.primary.black};
   text-align: right;
   font-size: 18px;
   font-weight: 400;
   line-height: 1.33;
`;

export const UserAppCase = styled.div`
   width: 28px;
   height: 28px;
   border: 1px solid ${({ theme }) => theme.colors.primary.blue};
   margin-left: ${({ theme }) => theme.spacing(2)};
   margin-right: ${({ theme }) => theme.spacing(1)};
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const UserLetter = styled.p`
   color: ${({ theme }) => theme.colors.primary.blue};
   font-size: 18px;
   font-weight: 400;
   line-height: 1.33;
`;
