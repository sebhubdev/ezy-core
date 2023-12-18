import axios from "axios";

const prismicInstance = axios.create({
  baseURL: "https://revoltogreen2.cdn.prismic.io/api/v2/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default prismicInstance;