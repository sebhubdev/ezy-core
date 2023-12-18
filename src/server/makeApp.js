import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../App";
import { Helmet } from "react-helmet";
import serialize from "serialize-javascript";
import { ChunkExtractor } from "@loadable/server";

const doc = (initialData, appString, helmet, scriptTags) => {
  const lang = initialData.lang.path;
  return `<!DOCTYPE html>
  <html lang="${lang}">
  
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3.0, minimum-scale=1">
      <meta name="mobile-web-app-capable" content="yes">
      <meta charset="utf-8">
      <meta name="theme-color" content="#f3c161">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="shortcut icon" href="/statics/img/favicon.png">
      <link href="/statics/main.css" rel="stylesheet">
      ${helmet?.title.toString() || ""}
      ${helmet?.meta.toString() || ""}
  
      <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8663558719177965"
          crossorigin="anonymous"
        ></script>

        
  
  
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-2GHY9KG61D"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
  
        gtag('config', 'G-2GHY9KG61D');
      </script>
  
  </head>
  
  <body>
      <script>window.__INITIAL_DATA__ = ${serialize(initialData)}</script>
      <div id="root">${appString}</div>
      ${scriptTags}
  </body>
  </html>`;
};

const statsFile = "./statics/loadable-stats.json";
const extractor = new ChunkExtractor({ statsFile });

const makeApp = (initialData, location) => {
  const appString = renderToString(
    extractor.collectChunks(
      <StaticRouter location={location} context={initialData}>
        <App initialData={initialData} />
      </StaticRouter>
    )
  );

  const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();
  const helmet = Helmet.renderStatic();
  const html = doc(initialData, appString, helmet, scriptTags);
  return html;
};

export default makeApp;
