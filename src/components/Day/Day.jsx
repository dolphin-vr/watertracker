import { Circle, DayTile, Label } from "./Day.styled";

export const Day = ({day, percent, isToday, onClick={onClick}}) => {
	return (
		<DayTile isToday={isToday}>
			<Circle percent={percent}>{day} onClick=</Circle>
			<Label>{percent} %</Label>
		</DayTile>
	)
}
