import loaders from "api/Prismic/loaders";
import resolvers from "../api/Prismic/resolvers";

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
