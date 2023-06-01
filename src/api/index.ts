import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-e529.onrender.com/",
  // headers: { "X-Jsio-Token": "31067ca705373bf18d7c3e1277583b3b" },
});

