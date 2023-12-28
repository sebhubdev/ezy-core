import React from "react";
import HeaderSeparator from "web/components/atoms/HeaderSeparator/HeaderSeparator";
import { Link } from "react-router-dom";

const Error204 = () => {
  return (
    <div className="error-204">
      <div className="error-204__content">
        <HeaderSeparator />
        <h1>Not content to show in this page</h1>
        <Link to={`/`}>Go home !</Link>
      </div>
    </div>
  );
};

export default Error204;
