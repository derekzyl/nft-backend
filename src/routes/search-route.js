const express = require("express");

const searchRouter = express.Router();
const searchController = require("../controller/search-controller");

searchRouter
  .route("/")
  .get(searchController.getSearch)


module.exports= searchRouter
