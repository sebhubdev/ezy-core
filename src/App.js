import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GenericLayout from "web/layout/GenericLayout";
import Header from "web/layout/Header/Header";
import Footer from "web/layout/Footer/Footer";
import resolveRequest from "server/resolveRequest";
import getFirstData from "server/getFirstData";
import Construction from "web/pages/Construction";
import usersDataService from "server/dataServices/User";
import routes from "server/routes";
import loaders from "server/Prismic/loaders";
import langs from "server/langs.json";
import { I18nProvider } from "i18n";

const isSSR = process.env.SSR_APP === "true";

const isSiteUnderConstruction = process.env.SITE_UNDER_CONSTRUCTION === "true";

const App = ({ initialData }) => {
  const [pageData, setPageData] = useState(isSSR ? initialData.pageData : {});
  const [navsData, setNavsData] = useState(isSSR ? initialData.navsData : null);
  const [userData, setUserData] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [actualPath, setActualPath] = useState(null);
  const [currentLang, setCurrentLang] = useState(
    isSSR ? initialData.lang : null
  );

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Hay que reparar bien el sistema de lenguaje del sitio antes de usar esto
  // const lang = pathname.split("/")[1];
  const lang = "fr";

  const route = resolveRequest(pathname, routes);

  const layoutContainer = useRef(null);

  const getCurrentUSer = () => {
    let token;
    token = JSON.parse(localStorage?.getItem("token"));

    if (token) {
      usersDataService
        .me()
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => {
          if (err.response) console.log(err.response.data.error);
        });
    }
  };

  const getPageData = () => {
    if (route.redirection) {
      navigate(`/${route.redirection}`);
      setLoading(false);
      return;
    }
    if (route.needRequest) {
      if (loaders[route.request]) {
        loaders[route.request](
          route.type || null,
          route.uid || null,
          langs[lang]
        )
          .then((data) => {
            setPageData(data.pageData);
            setLoading(false);
          })
          .catch((err) => {
            navigate(`/not-found/`);
            setLoading(false);
          });
      } else {
        navigate(`/not-found/`);
        setPageData({});
        setLoading(false);
      }
    } else {
      setPageData({});
      setLoading(false);
    }
  };

  if (mounted) {
    // ver si la lang esta gurdada en local Storage
    // si esta guardada redirigir a la home con la lang guardada
    let savedLang = localStorage.getItem("lang");
    if (savedLang) {
      savedLang = JSON.parse(savedLang);
      if (savedLang.path !== lang) {
        // aca solo vamos a preguntar si quieren cambiar el idioma pero por ahora lo dajamos asi
        // window.location.href = `/${savedLang.path}/`;
      }
    }

    !userData && getCurrentUSer();
  }

  useEffect(() => {
    setMounted(true);
    setActualPath(pathname);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    setLoading(true);
    setActualPath(pathname);
    getPageData();
    layoutContainer.current.scrollTo({
      top: 0,
      left: 1,
      behavior: "smooth",
    });
    return;
  }, [pathname]);

  if (!isSSR) {
    useEffect(() => {
      setLoading(true);
      setCurrentLang(langs[lang]);
      getFirstData(langs[lang]).then((response) => {
        setNavsData(response.navsData);
      });

      getPageData();
    }, []);
  }

  const header = (
    <Header
      nav={navsData && navsData["main-nav"]}
      userData={userData}
      setUserData={setUserData}
      currentLang={currentLang}
    />
  );
  const footer = <Footer nav={navsData && navsData["footer-nav"]} />;

  if (!isSSR && !mounted) return;

  return (
    <>
      {isSiteUnderConstruction ? (
        <Construction data={pageData} />
      ) : (
        <>
          <I18nProvider value={currentLang}>
            <GenericLayout
              header={header}
              footer={footer}
              pageData={pageData}
              pathname={pathname}
              loading={(loading || actualPath !== pathname) && mounted}
              routes={routes}
              currentLang={currentLang}
              layoutContainer={layoutContainer}
              layoutData={{
                routes: routes,
                pathname,
                loading,
              }}
            />
          </I18nProvider>
        </>
      )}
    </>
  );
};
export default App;
