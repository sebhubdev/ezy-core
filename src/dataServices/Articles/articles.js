import http from "../http.js";

const articlesDataService = {
  generateArticle: (data = {}) => {
    return http.post("/generate-article/", data);
  },
};

export default articlesDataService;
