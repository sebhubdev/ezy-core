import React from "react";
import RichTextComponent from "components/atoms/RichText/RichText";

const RichText = ({ content }) => {
  const { content: text } = content.primary;
  return (
    <div className="richtext-slice slice">
      <RichTextComponent content={text} />
    </div>
  );
};

export default RichText;
