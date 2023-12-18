import * as prismic from "@prismicio/client";
import client from "./client";
import resolvers from "./resolvers";

export default {
  loadById: async (documentId) => {
    const data = await client.getSingle(documentId);
    return data;
  },
  loadAllNavs: async (currentLang) => {
    const data = await client.getByType("menu", {
      lang: currentLang.code,
    });
    return data.results;
  },

  home: async (_, __, currentLang) => {
    const pageData = (
      await client.get({
        predicates: prismic.predicates.at("document.type", "home"),
        pageSize: 10,
        page: 1,
        lang: currentLang.code,
      })
    ).results[0];

    const pageResult = resolvers.home(pageData);

    return {
      pageData: {
        ...pageResult,
        currentLang,
      },
    };
  },

  byType: async (type, __, currentLang) => {
    const pageData = (
      await client.get({
        predicates: prismic.predicates.at("document.type", type),
        pageSize: 10,
        page: 1,
        lang: currentLang.code,
      })
    ).results[0];

    const pageResult = resolvers.home(pageData);

    return {
      pageData: {
        ...pageResult,
        currentLang,
      },
    };
  },

  legal: async (_, uid, currentLang) => {
    const pageData = (
      await client.get({
        predicates: prismic.predicates.at("my.legal.uid", uid),
        pageSize: 10,
        page: 1,
        lang: currentLang.code,
      })
    ).results[0];

    const pageResult = resolvers.home(pageData);

    return {
      pageData: {
        ...pageResult,
        currentLang,
      },
    };
  },

  service: async (_, uid, currentLang) => {
    const pageData = (
      await client.get({
        predicates: prismic.predicates.at("my.service.uid", uid),
        pageSize: 10,
        page: 1,
        lang: currentLang.code,
      })
    ).results[0];

    const pageResult = resolvers.home(pageData);

    return {
      pageData: {
        ...pageResult,
        currentLang,
      },
    };
  },
};
