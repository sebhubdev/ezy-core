import helpers from "./helpers";

export default {
  home: (pageData) => {
    const { data, uid, type } = pageData;
    const meta = helpers.getMeta(data);
    const { slices } = data;

    return { ...meta, slices, uid, type };
  },
  constructionpage: (data) => {
    const meta = helpers.getMeta(data);
    const { title, description } = data;
    return { ...meta, title, description };
  },

  getNavs: (navs) => {
    const result = {};
    if (!navs) return result;
    navs.map((nav) => {
      result[nav.uid] = nav.data.items;
    });
    return result;
  },
  getUrlsFromNavs: (navs) => {
    const result = {};
    for (let key in navs) {
      navs[key].map((item) => {
        result[item.link.type] = {};
        result[item.link.type].url = item.link.uid;
      });
    }
    return result;
  },
  getUrlsFromRoutesData: (routesData) => {
    const result = {};
    routesData.map((route) => {
      result[route.document.type] = {};
      result[route.document.type].url = route.document.uid;
    });
    return result;
  },
};
