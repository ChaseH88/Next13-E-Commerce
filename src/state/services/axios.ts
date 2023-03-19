import Axios from "axios";

const API_BASE_URL: string = "http://localhost:3000/api";
const axios = Axios.create({
  withCredentials: true,
  baseURL: API_BASE_URL,
});

export default axios;
