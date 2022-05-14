const { default: mongoose } = require("mongoose");

 


 const CollectionModel = new mongoose.Schema({
    collectionName:String,
    itemNumber: Number,
    owners:Number,
    volumeTraded: Number,
    floorPrice:Number,
    owner:String,
    createdBy: String,
    description: String,
    discord: String,
    instagram:String
 })

 const CollectionData = mongoose.model('CollectionData', CollectionModel )
 module.exports = CollectionData