import styled from "styled-components";
import { Link } from "react-router-dom";

export const WaterTrackerLogoText = styled.h2`
   color: ${({ theme }) => theme.colors.primary.blue};
   text-transform: uppercase;
   font-size: 12px;
   font-weight: 700;
   width: 58px;
`;

export const LogoContainer = styled(Link)`
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing(1)};
`;

export const Nowrap = styled.span`
   white-space: nowrap;
`;
