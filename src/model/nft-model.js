const mongoose = require("mongoose");
const NFT = require("./user-model");

const NftCollectionSchema = new mongoose.Schema({

    name: String,

 
  nft_image: {
    type: String,
    unique:true
    
  },
  price_in_USD: Number,
  price_in_BNB: Number,
  collection_name:String,

  owner: String,

  creator:String,
  isImage:{
    type:Boolean,
    default: false,
  },
  creator_image:String,
  owner_image:String,

  isCollected: {
    type: Boolean,
    default: false,
    
  },
  isCreated: {
    type: Boolean,
    default: false,
  },
  isBid:{
    type: Boolean,
    default: false,
  },

  ipfs: String,
  bsScan: String,
  description: String,
  history: [
    {
      minted: 
        {
          history_image:String,
          username: String,
          date: Date,
        },
      
      listed: [
        {
          history_image:String,
          date: Date,
          price_in_BNB: Number,
          price_in_USD: Number,
          username: String,
        },
      ],
      transferred: [
        {
          history_image:String,
          date: Date,
          price_in_BNB: Number,
          price_in_USD: Number,
          username: String,
        },
      ],
    },
  ],



});

const NftCollection = mongoose.model("NftCollection", NftCollectionSchema);

module.exports = NftCollection;
