import styled from "styled-components";

const getTileBgr = props => {
	if (props.isToday) {
		return props.theme.colors.secondary.today
	} else{
		return 'transparent'
	}
}

const getBorderColor = props => {
	if (props.percent===100 || props.percent===0) {
		return 'transparent'
	}
	if (props.percent<100) {
		return props.theme.colors.secondary.Orange
	} else{
		return props.theme.colors.secondary.violet
	}
};

const getFontColor = props => {
	if (props.percent===0) {
		return props.theme.colors.secondary.grey
	}
	return props.theme.colors.primary.Black
};

const DayTile = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
	gap: 4px;
  width: 32px;
  height: 52px;
	padding: 4px;
	background-color: ${getTileBgr};

  @media (min-width: 768px) {
    width: 34px;
    height: 58px;
  }

  @media (min-width: 1440px) {
    width: 42px;
    height: 60px;
  }
`;
/* padding: 5px; */

const Circle = styled.button`
  cursor: pointer;
  width: 32px;
  height: 32px;
	border: 1px solid ${getBorderColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
	color: ${getFontColor};
  background-color: ${props => props.theme.colors.primary.White};
  font-size: 14px;

  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;
  // margin-bottom: 5px;

const Label = styled.p`
margin: 0;
text-align: center;
font-size: 12px;
color: ${props => props.theme.colors.secondary.Blue};
`

const Table = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`

export {
  DayTile,
  Circle,
  Label,
	Table,
};
