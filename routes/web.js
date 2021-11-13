const express = require("express");
const router = express.Router();
const fileController = require("../controller/file.controller.js");
const categoryController = require("../controller/category.controller.js");

let routes = (app) => {
  router.get("/", (req, res) => {
    res.send("Hello world !");
  });

  router.post("/multiple-upload", fileController.multipleUpload);

  router.post("/createCategory", categoryController.createCategory);
  router.get("/getCategories", categoryController.getAllCategories);

  return app.use("/", router);
};

module.exports = routes;
