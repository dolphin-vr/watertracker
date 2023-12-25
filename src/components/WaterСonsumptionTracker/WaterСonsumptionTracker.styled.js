import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 439px;
  height: 366px;
`;
export const StyledHeader = styled.h2`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
  margin: 0 0 16px;
  color: ${(props) => props.theme.colors.primary.primaryBlack};
`;
export const StyledPreHeader = styled.p`
  font-family: Roboto;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0em;
  margin: 0 0 24px;
  color: ${(props) => props.theme.colors.primary.primaryBlack};
`;
export const StyledParagraph = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  margin: 0 0 12px;
  color: ${(props) => props.theme.colors.primary.primaryBlack};
`;
export const StyledListParagraph = styled.p`
  font-family: Roboto;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0em;
  margin: 0;
  color: ${(props) => props.theme.colors.primary.primaryBlack};
`;
export const StyledNavLink = styled(NavLink)`
  display: block;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.colors.primary.primaryWhite};
  background-color: ${(props) => props.theme.colors.primary.primaryBlue};
  padding: 10px 30px;
  border-radius: 10px;
  width: 384px;
  height: 44px;
  text-align: center;
  margin: 24px 0 0 0;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  text-decoration: none;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &.active {
    background-color: ${(props) => props.theme.colors.primary.primaryBlue};
  }
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
`;
