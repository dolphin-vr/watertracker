import axios from "axios";

//для перевіпки додва такий бек
const BASE_URL = "http://watertracker.onrender.com/api";

axios.defaults.baseURL = BASE_URL;

export const getDayPortions = (params) => {
  return axios.get(`/water/today/2023-12-07`);
};
