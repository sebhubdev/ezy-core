import React from "react";

const Image = ({ content }) => {
  const { image } = content.primary;

  return (
    <div className="image-slice">
      <img src={image.url} alt={image.alt} />
    </div>
  );
};

export default Image;
