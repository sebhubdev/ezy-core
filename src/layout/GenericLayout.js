import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "components/molecules/Loading";
import GeneralHelmet from "components/molecules/GeneralHelmet/GeneralHelmet";
import BackToTop from "components/molecules/BackToTop";
import CookiesBanner from "components/organisms/CookiesBanner";

const LayoutContext = createContext();

const LayoutProvider = LayoutContext.Provider;

const GenericLayout = ({
  header,
  footer,
  layoutData,
  routes,
  pageData,
  pathname,
  loading,
  currentLang,
  layoutContainer,
}) => {
  const headerHeight = 135;
  layoutData.headerHeight = headerHeight;

  const [layoutScroll, setLayoutScroll] = useState(0);
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  const handleScroll = () => {
    const scroll = layoutContainer.current.scrollTop;
    setLayoutScroll(scroll);
  };

  useEffect(() => {
    setIsBackToTopVisible(layoutScroll > 200 ? true : false);
  }, [layoutScroll]);

  return (
    <>
      {pageData.meta && <GeneralHelmet meta={pageData.meta} />}
      <LayoutProvider value={layoutData}>
        <div
          className="generic-layout"
          ref={layoutContainer}
          onScroll={handleScroll}
        >
          {header}
          <div className={`generic-layout__content`}>
            <>
              {loading ? (
                <Loading />
              ) : (
                <Routes>
                  {routes.map((route, key) => {
                    const { path, component: Component } = route;
                    return (
                      <Route
                        key={key}
                        path={path}
                        element={
                          <Component
                            data={pageData}
                            pathname={pathname}
                            currentLang={currentLang}
                            loading={loading}
                            layoutScroll={layoutScroll}
                            layoutContainer={layoutContainer}
                          />
                        }
                      />
                    );
                  })}
                </Routes>
              )}
            </>
            <BackToTop
              container={layoutContainer}
              isVisible={isBackToTopVisible}
            />
          </div>
          {footer}
          <CookiesBanner />
        </div>
      </LayoutProvider>
    </>
  );
};

export default GenericLayout;

export { LayoutContext };
