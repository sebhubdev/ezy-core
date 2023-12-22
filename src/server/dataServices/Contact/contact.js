import http from "server/dataServices/http.js";

const contactDataService = {
  sendContact: (data) => {
    return http.post("/sendcontact/", data);
  },
};

export default contactDataService;
