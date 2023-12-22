import React from "react";
import Heading from "web/components/atoms/Typo/Heading";
import RichText from "web/components/atoms/RichText/RichText";

const PageTitle = ({ content }) => {
  const { title, description } = content;
  return (
    <>
      <div className="page-title-slice">
        <Heading>{title}</Heading>
        <RichText content={description} />
      </div>
    </>
  );
};

export default PageTitle;
