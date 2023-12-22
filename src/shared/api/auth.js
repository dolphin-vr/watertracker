import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})


const setToken = token => {
	if (token) {
			return instance.defaults.headers.authorization = `Bearer ${token}`;
	}
	instance.defaults.headers.authorization = "";
}

if (setToken) {Math.random()}
// console.log(setToken)