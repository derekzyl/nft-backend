const mongoose = require("mongoose");
const NFT = require("./user-model");

const NftCollectionSchema = new mongoose.Schema({

    name: String,
  assets: {
    type: String,
  },
  asset_id: Number,
  price_in_USD: Number,
  price_in_BNB: Number,
  collectionName:String,
  owner: String,
  creator:String,
  walletId:String,
  owner: String,
  isCollected: {
    type: Boolean,
    default: false,
  },
  isCreated: {
    type: Boolean,
    default: false,
  },

  ipfs: String,
  bscSan: String,
  history: [
    {
      minted: 
        {
          username: String,
          date: Date,
        },
      
      listed: [
        {
          date: Date,
          price_in_BNB: Number,
          price_in_USD: Number,
          username: String,
        },
      ],
      transferred: [
        {
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
