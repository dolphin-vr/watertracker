import styled from "styled-components";

const DailyNormaWrapper = styled.div`
  height: 290px;
  background-repeat: no-repeat;
  background-position: center bottom;

  @media (min-width: 767px) {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (min-width: 1439px) {
    height: 100%;
    background-size: auto;
  }
`;

const DailyNormaContainer = styled.div`
  max-width: 166px;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(5)};
  background-color: ${(props) => props.theme.colors.primary.White};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.secondary.White};
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
`;

const DailyNormaTitle = styled.p`
  margin: 0px;
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

const DailyNormaInfo = styled.p`
  display: flex;
  align-items: center;
  margin: 0px;
  color: ${(props) => props.theme.colors.primary.Blue};
  font-size: 22px;
  font-weight: 700;
  line-height: 100%;
`;

const DailyNormaSpan = styled.span`
  padding: 0px ${({ theme }) => theme.spacing(3)} 0px
    ${({ theme }) => theme.spacing(1)};
`;

const DailyNormaBth = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary.Blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.secondary.Orange};
  }
`;

export {
  DailyNormaContainer,
  DailyNormaTitle,
  DailyNormaInfo,
  DailyNormaSpan,
  DailyNormaBth,
  DailyNormaWrapper,
};
