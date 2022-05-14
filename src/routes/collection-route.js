const express = require("express");

const routerCollection = express.Router();
const collectionControl = require("../controller/collection-controller");

routerCollection
  .route("/")
  .get(collectionControl.getCollections)
  .post(collectionControl.postCollections);




  
  routerCollection
  .route("/:owner")
  .get(collectionControl.getSingleCollection)
  .patch(collectionControl.updateCollections);
  
 module.exports = routerCollection