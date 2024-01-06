import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WaterTrackerLogoText = styled.h2`
    color: #407BFF;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    width: 58px;
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const Nowrap = styled.span`
    white-space: nowrap;
`;