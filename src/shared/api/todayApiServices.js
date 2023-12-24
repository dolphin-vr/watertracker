import axios from "axios";
//для перевіпки додва такий бек
const BASE_URL = "https://65244ab6ea560a22a4e9b4c5.mockapi.io/portions/";

axios.defaults.baseURL = BASE_URL;

export const getDayPortions = () => {
  return axios.get();
};

export const addPortion = (portion) => {
  return axios.post("", portion);
};

export const removePortion = (id) => {
  return axios.delete(`/${id}`, "");
};
