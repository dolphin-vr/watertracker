import styled from "styled-components";

const CalendarContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 272px;

  @media (min-width: 768px) {
    width: 656px;
  }

  @media (min-width: 1440px) {
    width: 544px;
  }
`;

const DaysContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing(2)} 18px;
  grid-auto-rows: 52px;
  grid-auto-flow: row dense;

  @media (min-width: 768px) {
    height: 284px;
    grid-template-columns: repeat(10, 1fr);
    gap: ${({ theme }) => theme.spacing(5)} 34px;
    grid-auto-rows: 58px;
    grid-auto-flow: row dense;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(10, 1fr);
    gap: ${({ theme }) => theme.spacing(5)} 22px;
    grid-auto-rows: 56px;
    grid-auto-flow: row dense;
  }
`;

export { CalendarContainer, DaysContainer };
