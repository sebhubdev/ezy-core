import React from "react";
import Btn from "components/atoms/Btn";
import RichText from "components/atoms/RichText/RichText";
import { useLinkResolver } from "hooks";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { title, description, image, button_label, link } = item;

  const url = useLinkResolver(link);
  return (
    <div className="slice-card">
      <div className="slice-card__inner">
        <Link className="slice-card__image" to={url}>
          <img src={image.url} alt={image.alt} />
        </Link>

        <div className="slice-card__content">
          <Link to={url}>
            <h3 className="slice-card__title">{title}</h3>
          </Link>
          <div className="slice-card__description">
            <RichText content={description} />
          </div>
          <Btn to={url} appearance="link" classes="slice-card__link">
            {button_label}
          </Btn>
        </div>
      </div>
    </div>
  );
};

const Cards = ({ content }) => {
  const { title } = content.primary;
  const { items } = content;
  return (
    <>
      <div className="cards-slice">
        <h2>{title}</h2>

        <div className="cards-slice__items">
          {items.map((item, key) => {
            return <Card key={key} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
