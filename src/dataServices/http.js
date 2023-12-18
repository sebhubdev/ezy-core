import axios from "axios";

let token = "";

if (typeof document != "undefined") {
  token = JSON.parse(localStorage?.getItem("token"));
}

const http = axios.create({
  baseURL: process.env.API_URI,
  headers: {
    "Content-Type": "application/json",
    Test: "hola",
  },
});

if (token) http.defaults.headers.common["Authorization"] = token;

export default http;
