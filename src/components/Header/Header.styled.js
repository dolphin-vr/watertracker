import styled from 'styled-components';

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${({ theme }) => theme.spacing(2)};
    margin: 0 auto;
    width: 280px;

    @media (min-width: 768px) {
        width: 704px;
    }

    @media (min-width: 1440px) {
        width: 1216px;
    }
`;

