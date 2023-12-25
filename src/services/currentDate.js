const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();

export const currentDate = `${year}-${month}-${day}`;
export const currentTime = `${hours}:${minutes};`;
