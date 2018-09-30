import axios from "axios";

const port = 3001;
const version = "v1";

const Api = axios.create({
  baseURL: `http://localhost:${port}/${version}/`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
});

export default {
  loadServers() {
    console.log("loading all servers");
    return Api.get("/servers");
  }
};
