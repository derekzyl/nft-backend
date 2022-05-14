const express = require("express");

const collectionRouter = express.Router();
const collectionController = require("../controller/nft-controllers");

collectionRouter
  .route("/")
  .get(collectionController.getCollections)
  .post(collectionController.postCollections);




  
collectionRouter
  .route("/:asset_id")
  .get(collectionController.getSingleCollection)
  .patch(collectionController.updateCollections);


  
  module.exports = collectionRouter;