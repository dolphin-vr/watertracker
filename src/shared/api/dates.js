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

export const daysTable = (days, month, today)=>{
	days.map(el=>{
		const day = month.find(d=> d.date.getDate()===el);
		day.id = el;
		day.isToday = (day.date===today);
	})
}

export const days = (date) => {
	const numDays = new Date(date.getFullYear(), date.getMonth() + 1, 0). getDate();
	return Array.from({length: numDays}, (_, i) => i + 1)
}

