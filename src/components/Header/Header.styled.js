import styled from 'styled-components';

export const HeaderStyled = styled.div`
   width: 280px;
   margin: 0 auto;
   padding-top: ${({ theme }) => theme.spacing(2)};
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media (min-width: 768px) {
      width: 704px;
   }

   @media (min-width: 1440px) {
      width: 1216px;
   }
`;

