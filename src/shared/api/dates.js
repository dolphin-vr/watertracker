const today = new Date();
// const year = date.getFullYear();
// const month = (date.getMonth() + 1).toString().padStart(2, "0");
// const day = date.getDate().toString().padStart(2, "0");
// const hours = date.getHours();
// const minutes = date.getMinutes();

export const currentDate = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
// export const currentTime = `${hours}:${minutes};`;

// export default currentDate;

export const dateISO = (date) => {
	return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}` // T${date.getHours()}:${date.getMinutes()}
}

// return array of integer 1-31 
export const days = (date) => {
	const numDays = new Date(date.getFullYear(), date.getMonth() + 1, 0). getDate();
	return Array.from({length: numDays}, (_, i) => i + 1)
}


// return array of objects
// {
// 	id: {1-31},
// 	isToday: bool,
// 	date: yyyy-mm-dd,
// ==========
// if no records in DB at this date == 0
// 	doses: number,
// 	percentage: number,
// }
export const daysTable = (date, month, today)=>{
	const numDays = new Date(date.getFullYear(), date.getMonth() + 1, 0). getDate();
	const days = Array.from({length: numDays}, (_, i) => i + 1)
	return days.map(el=>{
		const day = month.find(d=> {
			return (parseInt(d.date.slice(8))===el)
		}) || {percentage: 0, doses: 0, date: dateISO(new Date(date.setDate(el)))};
		day.id = el;
		day.isToday = (day.date===today);
		return day
	})
}

export const isCurrentMonth = date => {	return date.getMonth() === today.getMonth() }

// today.setDate(today.getDate() + 1)
export const nextMonth = date => {
	new Date(date.getFullYear(), date.getMonth() + 1, 1);

}