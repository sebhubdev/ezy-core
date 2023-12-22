import fetch from "node-fetch";
import * as prismic from "@prismicio/client";

const repoName = "chiro-bressuire";
const client = prismic.createClient(repoName, { fetch });

export default client;
