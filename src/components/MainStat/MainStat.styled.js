import styled from "styled-components";

export const Wrapper = styled.div`
  width: 280px;
  height: 480px;
  margin: 0 auto;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 704px;
		height: 532px;
  }

  @media (min-width: 1440px) {
    width: 592px;
    height: 740px;
    margin: 0;
  }
`;
