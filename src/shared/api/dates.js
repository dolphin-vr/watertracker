const date = new Date();
// const year = date.getFullYear();
// const month = (date.getMonth() + 1).toString().padStart(2, "0");
// const day = date.getDate().toString().padStart(2, "0");
// const hours = date.getHours();
// const minutes = date.getMinutes();

export const currentDate = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;
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
// ==========
// absent if no records in DB at this date
// 	date: yyyy-mm-dd,
// 	doses: number,
// 	percentage: number,
// }
export const daysTable = (days, month, today)=>{
	return days.map(el=>{
		const day = month.find(d=> {
			console.log('d.date.getDate()=', d.date.getDate());
			console.log('el= ', el);
			const fl = (d.date.getDate()===el)
			console.log('fl= ', fl);
			return fl
		}) || {};
		day.id = el;
		day.isToday = (day.date===today);
	})
}

