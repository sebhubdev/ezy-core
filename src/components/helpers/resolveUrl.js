/**
 * @param {string} url Initial Url
 * @param {array} routes The sites routes
 */
const resolveUrl = (url, routes) => {
  const { type } = url;
  const childUrl = `/${url.uid}`;
  const childRoute = routes.find((route) => route.type === type);
  let resolvedUrl = childUrl;
  if (childRoute?.parent) {
    const parentRoute = routes.find(
      (route) => route.type === childRoute.parent
    );
    resolvedUrl = parentRoute.path + childUrl;
  }
  return resolvedUrl;
};

export default resolveUrl;
