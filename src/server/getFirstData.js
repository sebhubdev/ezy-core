import loaders from "server/Prismic/loaders";
import resolvers from "server/Prismic/resolvers";

const getFirstData = async (currentLang) => {
  const navsData = resolvers.getNavs(
    await loaders
      .loadAllNavs(currentLang)
      .then((data) => data)
      .catch((err) => {})
  );

  return { navsData };
};

export default getFirstData;
