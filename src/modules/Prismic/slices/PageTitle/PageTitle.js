import React from "react";
import Heading from "components/atoms/Typo/Heading";
import RichText from "components/atoms/RichText/RichText";

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
