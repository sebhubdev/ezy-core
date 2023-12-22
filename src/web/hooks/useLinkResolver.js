import React from "react";
import routes from "server/routes";

const useLinkResolver = (link) => {
  const { type, uid } = link;
  const route = routes.find((route) => {
    return route.type === type;
  }) || { path: "/" };
  let url = route.path;

  url = url.replace(`:uid`, uid);
  return url;
};

export default useLinkResolver;
