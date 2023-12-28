import React from "react";
import loadable from "@loadable/component";
import Loading from "web/components/molecules/Loading";

export default [
  {
    type: "home",
    path: "/",
    component: loadable(() => import("web/pages/Home"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "home",
  },
  {
    type: "services",
    path: "/services",
    component: loadable(() => import("web/pages/Services"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "byType",
  },
  {
    type: "service",
    path: "/service/:uid",
    component: loadable(() => import("web/pages/Service"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "service",
  },
  {
    type: "about",
    path: "/about",
    component: loadable(() => import("web/pages/About"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "byType",
  },
  {
    type: "contact",
    path: "/contact",
    component: loadable(() => import("web/pages/Contact"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "byType",
  },
  {
    type: "legal",
    path: "/legal/:uid",
    component: loadable(() => import("web/pages/Legal"), {
      fallback: <Loading />,
    }),
    needRequest: true,
    request: "legal",
  },
  {
    path: "/not-content/",
    component: loadable(() => import("web/pages/Errors/Error204"), {
      fallback: <Loading />,
    }),
    needRequest: false,
  },
  {
    path: "*",
    component: loadable(() => import("web/pages/Error404"), {
      fallback: <Loading />,
    }),
    needRequest: false,
  },
];
