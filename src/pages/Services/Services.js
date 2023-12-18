import React from "react";
import SlicesZone from "modules/Prismic/SlicesZone";

const Services = ({ data }) => {
  const { slices, type } = data;

  return (
    <div className={`page ${type}-page small-content`}>
      {slices && <SlicesZone slices={slices} />}
    </div>
  );
};

export default Services;
