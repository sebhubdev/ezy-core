import RichText from "modules/Prismic/slices/RichText";
import Cards from "modules/Prismic/slices/Cards";
import PageTitle from "modules/Prismic/slices/PageTitle/PageTitle";
import Separator from "modules/Prismic/slices/Separator";
import Image from "modules/Prismic/slices/Image";
import TextAndImage from "modules/Prismic/slices/TextAndImage";

export default {
  richtext: {
    Slice: RichText,
  },
  cards: {
    Slice: Cards,
  },
  page_title: {
    Slice: PageTitle,
  },
  separator: {
    Slice: Separator,
  },
  image: {
    Slice: Image,
  },

  image_text: {
    Slice: TextAndImage,
  },
};
