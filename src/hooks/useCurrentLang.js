import React from "react";
import langs from "api/langs.json";

const useCurrentLang = () => {
  const [currentLang, setCurrentLang] = React.useState(null);
  React.useEffect(() => {
    const langpath = window.location.pathname.split("/")[1];
    setCurrentLang(langs[langpath]);
  }, []);
  return currentLang;
};

export default useCurrentLang;
