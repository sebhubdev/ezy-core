import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./main.scss";
import { loadableReady } from "@loadable/component";

if (process.env.SSR_APP === "false") {
  const root = ReactDom.createRoot(document.getElementById("root"));
  if (module.hot) {
    module.hot.accept();
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
} else {
  const initialData = window.__INITIAL_DATA__;

  delete window.__INITIAL_DATA__;

  loadableReady(() => {
    ReactDom.hydrateRoot(
      document.getElementById("root"),
      <BrowserRouter>
        <App initialData={initialData} />
      </BrowserRouter>
    );
  });
}
