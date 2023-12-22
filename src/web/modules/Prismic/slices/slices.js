import RichText from "web/modules/Prismic/slices/RichText";
import Cards from "web/modules/Prismic/slices/Cards";
import PageTitle from "web/modules/Prismic/slices/PageTitle/PageTitle";
import Separator from "web/modules/Prismic/slices/Separator";
import Image from "web/modules/Prismic/slices/Image";
import TextAndImage from "web/modules/Prismic/slices/TextAndImage";

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
