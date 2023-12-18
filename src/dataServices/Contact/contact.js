import http from "../http.js";

const contactDataService = {
  sendContact: (data) => {
    return http.post("/sendcontact/", data);
  },
};

export default contactDataService;
