import http from "server/dataServices/http.js";

const usersDataService = {
  login: (data) => {
    return http.post("/login/", data);
  },
  me: () => {
    return http.get("/me/");
  },
};

export default usersDataService;
