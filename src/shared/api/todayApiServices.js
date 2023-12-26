import axios from "axios";

const BASE_URL = "http://watertracker.onrender.com/api";

axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODk3NTU2YzVkNmE4NjdiMDg5NzNkYiIsImlhdCI6MTcwMzUwNzI4NiwiZXhwIjoxNzA2MDk5Mjg2fQ.k75FHO9azNcYZ6eKzQiM4XehxdA-o-GC0Gff5GGJ7kg`;

export const getDayPortions = (params) => {
  console.log(params);
  return axios.get(`/water/today/${params}`);
};
