import fetch from "node-fetch";
import * as prismic from "@prismicio/client";

const repoName = process.env.PRISMIC_REPOSITORY;
const client = prismic.createClient(repoName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  fetch,
});

export default client;
