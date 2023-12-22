import React from "react";
import SlicesZone from "web/modules/Prismic/SlicesZone";

const About = ({ data }) => {
  const { slices, type } = data;

  return (
    <div className={`page ${type}-page small-content`}>
      {slices && <SlicesZone slices={slices} />}
    </div>
  );
};

export default About;
