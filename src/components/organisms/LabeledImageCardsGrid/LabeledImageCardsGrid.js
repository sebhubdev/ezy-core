import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LabeledImageCard from "components/molecules/LabeledImageCard";
import resolveUrl from "components/helpers/resolveUrl";
import { LayoutContext } from "layout/GenericLayout";

const LabeledImageCardsGrid = ({ cards }) => {
  const { routes } = useContext(LayoutContext);

  return (
    <>
      <div className="labeled-image-cards-grid slice">
        {cards.map((card, key) => {
          const url = resolveUrl(card.link, routes);
          return (
            <Link key={key} to={url}>
              <LabeledImageCard card={card} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default LabeledImageCardsGrid;
