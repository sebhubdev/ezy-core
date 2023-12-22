import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import getFirstData from "api/getFirstData";
import headers from "./headers";
import routes from "api/routes";
import loaders from "api/Prismic/loaders";
import langs from "api/langs.json";
import makeApp from "./makeApp";
import apiroutes from "./api/routes.js";

dotenv.config();

const app = express();
app.use(cors());

// app.use(express.json());
// if (process.env.REMOTE == "true") {
//   app.use("/", headers, express.static("/"));
// } else {
//   app.use("/statics", headers, express.static("build/statics"));
// }


app.use("/statics", headers, express.static("build/statics"));

routes.map((route) => {
  app.get(route.path, async (req, res) => {
    let isError = false;
    const params = req.params;

    const lang = params.lang || "fr";

    // if (!langs[params.lang] || !params.lang) {
    //   const defaultLang = Object.keys(langs).find(
    //     (lang) => langs[lang].default === true
    //   );
    //   res.redirect(`/${defaultLang || "en"}/`);
    //   return;
    // }
    const initialData = await getFirstData(langs[lang]);

    initialData.lang = langs[lang];
    initialData.pageData = {};

    if (route.redirection) {
      res.redirect(`/${lang}/${route.redirection}`);
      return;
    }

    if (route.needRequest) {
      if (loaders[route.request]) {
        await loaders[route.request](
          route.type || null,
          route.uid || null,
          langs[lang]
        )
          .then((data) => {
            initialData.pageData = data.pageData;
          })
          .catch((err) => {
            res.redirect(`/${lang}/not-found/`);
            isError = true;
          });
      } else {
        res.redirect(`/${params.lang}/not-found/`);
        isError = true;
      }
    }

    if (isError) return;

    const app = makeApp(initialData, req.url);
    res.send(app);
  });
});

const PORT = process.env.PORT;

apiroutes(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
