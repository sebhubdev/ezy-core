import * as prismicH from "@prismicio/helpers";

export default {
  getMeta: (data) => {
    return {
      meta: {
        title: data.meta_title,
        description: data.meta_description,
      },
    };
  },
  getArticleReadingTime: (data) => {
    const articleDesc = prismicH.asText(data.description);
    let content = `${data.title} ${articleDesc}`;
    // console.log("getArticleReadingTime : ", content);
    const slicesContent = data.slices
      .map((slice) => {
        const { primary, items } = slice;
        let sliceContent = "";
        switch (slice.slice_type) {
          case "text":
            sliceContent += prismicH.asText(primary.text);
            break;
          case "text_image_btn":
            sliceContent += primary.title || "";
            sliceContent += prismicH.asText(primary.description);
            break;
          default:
            console.log(
              "This Slice doesn't have a resolver or slice doesn't exists"
            );
        }
        return sliceContent;
      })
      .join(" ");
    content += slicesContent;
    const readingTime = Math.round(content.split(" ").length / 200);
    return readingTime;
  },
};
