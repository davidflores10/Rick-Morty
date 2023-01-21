import axios from "axios";

const http = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  withCredentials: false,
});

export default http;
