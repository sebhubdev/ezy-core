const router = require("express").Router();
const contactController = require("./contact.controller.js");

module.exports = (app) => {
  router.post("/sendcontact/", contactController.sendContact);

  app.use("/api/v1/", router);
};
