import axios from "axios";

const instance = axios.create({
  baseURL: `https://backwomantech-production.up.railway.app/`,
});

export default instance;
