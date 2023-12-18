import * as prismicH from "@prismicio/helpers";

const getTextFromRichText = richText => {
  return richText ? prismicH.asText(richText) : "";
};

export default getTextFromRichText;
