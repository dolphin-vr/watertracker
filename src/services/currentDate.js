const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const day = date.getDate().toString().padStart(2, "0");
const hours = date.getHours();
const minutes = date.getMinutes();

export const currentDate = `${year}-${month}-${day}`;
export const currentTime = `${hours}:${minutes};`;

export default currentDate;