const { default: mongoose } = require("mongoose");

 


 const CollectionModel = new mongoose.Schema({
    collection_name:{
        type:String,
    
    },




    collection_id:{
        type:String,
        unique:true,
    },
    item_number: Number,

    owners:Number,

    volume_traded: Number,
    floor_price:Number,

    creator:String,

    created_by: String,
    description: String,
    discord: String,
    instagram:String,
    website:String,  
    facebook:String,
 })

 const CollectionData = mongoose.model('CollectionData', CollectionModel )
 module.exports = CollectionData