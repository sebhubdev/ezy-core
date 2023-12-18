import React from "react";

const Image = ({ image }) => {
  const { url: src, alt } = image;
  return <img src={src} alt={alt} />;
};

export default Image;
