import styled from "styled-components";


export const Wrapper = styled.div`
  padding: ${props => props.theme.spacing(2)};
  border: 1px solid ${getBorderColor};
  border-radius: ${props => props.theme.radii.sm};
`;

const getTileBgr = props => {
	if (props.isToday) {
		return props.theme.colors.secondary.today
	} else{
		return 'transparent'
	}
}

const getBorderColor = props => {
	if (props.percent===100) {
		return 'transparent'
	} else{
		return props.theme.colors.secondary.Orange
	}
};

const DayTile = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 5px; */
  width: 32px;
  height: 52px;
	background-color: ${getTileBgr};

  @media (min-width: 768px) {
    width: 34px;
    height: 58px;
  }

  @media (min-width: 1440px) {
    width: 34px;
    height: 56px;
  }
`;

const Circle = styled.button`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${getBorderColor};
  background-color: ${props => props.theme.colors.primary.White};
  font-size: 14px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

const Label = styled.p`
font-size: 12px;
color: ${props => props.theme.colors.secondary.Blue};
`

export {
  DayTile,
  Circle,
  Label,
};
