import RichText from "./RichText";
import Cards from "./Cards";
import PageTitle from "./PageTitle/PageTitle";
import Separator from "./Separator";
import Image from "./Image";
import TextAndImage from "./TextAndImage";

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
