import { Circle, DayTile, Label } from "./Day.styled";

export const Day = ({day, percent, isToday}) => {
	return (
		<DayTile isToday={isToday}>
			<Circle percent={percent}>{day}</Circle>
			<Label>{percent} %</Label>
		</DayTile>
	)
}
