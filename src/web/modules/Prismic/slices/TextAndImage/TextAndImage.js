import React from "react";
import RichText from "web/components/atoms/RichText/RichText";
import Image from "web/components/atoms/Image";

const TextAndImage = ({ content }) => {
  const { text, image, image_position } = content.primary;

  return (
    <>
      <div className={`text-image-slice ${image_position}`}>
        <div className="text-image-slice__inner">
          <div className="text-image-slice__content">
            <div className="text-image-slice__image">
              <Image image={image} />
            </div>
            <div className="richtext">
              <RichText content={text} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextAndImage;
