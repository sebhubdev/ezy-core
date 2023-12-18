import React from "react";
import SlicesZone from "modules/Prismic/SlicesZone";

const Service = ({ data }) => {
  const { slices, type } = data;

  return (
    <div className={`page ${type}-page small-content`}>
      {slices && <SlicesZone slices={slices} />}
    </div>
  );
};

export default Service;
