import fetch from "node-fetch";
import * as prismic from "@prismicio/client";

const repoName = process.env.PRISMIC_REPOSITORY;
const client = prismic.createClient(repoName, { fetch });

export default client;
