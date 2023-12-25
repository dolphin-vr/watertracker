import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.secondary.secondaryWhite};
  width: 494px;
  height: 332px;
  padding: 32px 24px;
  border-radius: 10px;
`;
export const StyledLi = styled.li`
  margin: ${(props) => {
    if (!props.lastelementli) {
      return "0 0 16px";
    }
    return "0";
  }};
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const StyledParagraph = styled.p`
  color: ${(props) => props.theme.colors.primary.primaryBlack};
  font-family: Roboto;
  font-size: 16px;
  line-height: 20px; /* 125% */
  margin: 0;
`;
export const StyledHeader = styled.h2`
  color: ${(props) => props.theme.colors.primary.primaryBlack};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin: 0 0 12px;
`;
export const StyledUl = styled.ul`
  /* list-style: circle;
  color: ${(props) => props.theme.colors.primary.primaryBlue}; */
`;
export const StyledSvg = styled.svg`
  width: 8px;
  height: 8px;
`;
export const StyledCircle = styled.circle`
  fill: ${(props) => props.theme.colors.primary.primaryBlue};
`;
