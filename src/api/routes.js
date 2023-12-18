import React from "react";
import loadable from "@loadable/component";
import Loading from "components/molecules/Loading";

export default [
  {
    type: "home",
    path: "/",
    component: loadable(() => import("pages/Home"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "home",
  },
  {
    type: "services",
    path: "/services",
    component: loadable(() => import("pages/Services"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "byType",
  },
  {
    type: "service",
    path: "/service/:uid",
    component: loadable(() => import("pages/Service"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "service",
  },
  {
    type: "about",
    path: "/about",
    component: loadable(() => import("pages/About"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "byType",
  },
  {
    type: "contact",
    path: "/contact",
    component: loadable(() => import("pages/Contact"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "byType",
  },
  {
    type: "legal",
    path: "/legal/:uid",
    component: loadable(() => import("pages/Legal"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "legal",
  },
  {
    path: "*",
    component: loadable(() => import("pages/Error404"), {
      fallback: <Loading />,
    }),
    needRequest: false,
  },
];
