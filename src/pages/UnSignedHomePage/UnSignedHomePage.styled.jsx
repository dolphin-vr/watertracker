import styled from "styled-components";

export const Container = styled.div`
/* pc */
  /* width: 1044px;
  margin: 0 auto;
  display: flex;
  gap: 61px;
  padding: 0 15px;
  align-items: flex-end; */
  /* mobile */
  width: 320px;
  margin: 0 auto;
  padding: 0 15px;
  @media screen and (min-width: 767px) {
    width: 734px;
  }
  @media screen and (min-width: 1439px) {
    width: 1044px;
    display: flex;
    gap: 81px;
    align-items: flex-end; 
  }
`;
