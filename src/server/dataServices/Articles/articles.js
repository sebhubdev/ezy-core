import http from "server/dataServices/http.js";

const articlesDataService = {
  generateArticle: (data = {}) => {
    return http.post("/generate-article/", data);
  },
};

export default articlesDataService;
