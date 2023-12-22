import React from "react";
import Heading from "web/components/atoms/Typo/Heading";
import { useLinkResolver } from "web/hooks";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { title, image, uid, currentLang } = category;
  const pathLink = useLinkResolver("category", {
    lang: currentLang.path,
    uid: uid,
  });
  return (
    <div className="category-card">
      <div className="category-card__inner">
        <Link to={pathLink}>
          <div className="category-card__image">
            <img src={image.url} alt={image.alt} />
          </div>
        </Link>
        <div className="category-card__content">
          <Link to={pathLink}>
            <Heading level="4">{title}</Heading>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
