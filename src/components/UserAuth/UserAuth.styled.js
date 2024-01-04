import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserAuthLink = styled(Link)`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: #407BFF;
    font-size: 16px;
    line-height: 1.25;
    gap: 8px;
    cursor: pointer;
`;

export const UserAuthLinkHover = styled.span`
    &:hover {
        color: #FF9D43; ///var(--Secondary-color-5)
    }
`;
