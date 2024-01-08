import {DayTile, DayButton, Circle, Label} from "./Day.styled";

export const Day = ({day, onClick}) => {
	console.log(Date.now())
	return (
		<DayTile isToday={day.isToday}>
			<DayButton onClick={()=> onClick(day)}>
				<Circle percent={day.percentage}>{day.id}</Circle>
				<Label>{day.percentage ? `${day.percentage}  %` : ""}</Label>
			</DayButton>
		</DayTile>
	)
}
