import React from "react";
import LoadingIcon from "components/atoms/LoadingIcon";

const Loading = () => {
  return (
    <div className="loading">
      <LoadingIcon />
      <span className="loading__msg">Loading...</span>
    </div>
  );
};

export default Loading;
