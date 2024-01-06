import styled from 'styled-components';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* border: 1px solid black; */
  width: 264px;
  background: #ECF2FF;

  @media (min-width: 768px) {
    width: 656px;
  }

  @media (min-width: 1440px) {
    width: 544px;
  }
`;

const MonthHeader = styled.div`
  display: flex;
  margin-bottom: 16px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
`;

const MonthLabel = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Pagination = styled.span`
  display: flex;
  font-size: 16px;
  align-items: center;
  color: #407bff;
`;

const PaginationButton = styled.button`
  width: 14px;
  height: 14px;
  margin: 0 8px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #407bff;
`;

const DaysContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 26px;
  list-style: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 22px;
  }
`;

const DayTile = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* padding: 5px; */
  width: 32px;
  height: 52px;

  @media (min-width: 768px) {
    width: 34px;
    height: 58px;
  }

  @media (min-width: 1440px) {
    width: 34px;
    height: 56px;
  }
`;

const DayButton = styled.button`
display: flex;
flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 100%;
  height: 100%;
  `;

const DayCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

const TodayCircle = styled(DayCircle)`
  border: 1px solid #007bff;
  width: 30px;
  height: 30px;
`;

const DayNotCompelete = styled(DayCircle)`
border: 1px solid #FF9D43;
width: 30px;
height: 30px;
`;


const CompletionText = styled.div`
  font-size: 12px;
  color: #9EBBFF;
`;

export {
  CalendarContainer,
  MonthHeader,
  MonthLabel,
  Pagination,
  PaginationButton,
  DaysContainer,
  DayTile,
  DayButton,
  DayCircle,
  TodayCircle,
  CompletionText,
  DayNotCompelete,
};

