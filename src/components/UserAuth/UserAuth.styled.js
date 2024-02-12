import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserAuthLink = styled(Link)`
   display: flex;
   align-items: center;
   background-color: transparent;
   border: none;
   color: ${({ theme }) => theme.colors.primary.blue};
   font-size: 16px;
   line-height: 1.25;
   gap: ${({ theme }) => theme.spacing(2)};
   cursor: pointer;
`;

export const UserAuthLinkHover = styled.span`
   &:hover {
      color: ${({ theme }) => theme.colors.secondary.orange};
   }
`;
