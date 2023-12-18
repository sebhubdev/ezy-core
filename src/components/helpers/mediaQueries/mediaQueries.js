const breakPoints = {
  tablet: "700px",
  mobile: "480px",
};

const checkTablet = () => {
  if (typeof window === "undefined") return false;

  return window.matchMedia(
    `(max-width: ${breakPoints.tablet}) and (min-width: ${breakPoints.mobile})`
  );
};

const checkMobile = () => {
  if (typeof window === "undefined") return false;

  return window.matchMedia(`(max-width: ${breakPoints.mobile})`);
};

const isTablet = checkTablet().matches;
const isMobile = checkMobile().matches;

export { isMobile, isTablet };
