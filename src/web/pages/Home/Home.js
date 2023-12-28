import React from "react";
import SlicesZone from "web/modules/Prismic/SlicesZone";
import NoContentMessage from "web/components/atoms/NoContentMessage";

const Home = ({ data }) => {
  const { slices } = data;

  return (
    <div className={`page home-page small-content`}>
      {slices && <SlicesZone slices={slices} />}
      {!slices && <NoContentMessage />}
    </div>
  );
};

export default Home;
