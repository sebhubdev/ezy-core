import React from "react";
import HeaderSeparator from "components/atoms/HeaderSeparator/HeaderSeparator";
import { Link } from "react-router-dom";

const Error404 = ({ pathname, currentLang }) => {
  return (
    <div className="error-404">
      <div className="error-404__content">
        <HeaderSeparator />
        <h1>Page Not found</h1>
        <Link to={`/`}>Go home !</Link>
      </div>
    </div>
  );
};

export default Error404;
