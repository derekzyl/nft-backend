const mongoose = require("mongoose");
const nftSchema = new mongoose.Schema({

  name: String,
  
  username: {
    type: String,
    unique: true,
  },
  
  followers: {
    type: Number,
  },
  wallet_id:{
    type: String
  },
creations: Number,
bio:String,

  following: {
    type: Number,
  },
 
  banner_image: {
    type: String,
  },
  profile_image: {
    type: String,
  },
  facebook: {
    type: String,
  },

  instagram: {
    type: String,
  },
  twitter: {
    type: String,
  },
  invited_by: {
    type: String,
  },
  offers_made: {
    type: Number,
  },
  offers_received: {
    type: Number,
  },
  Collections:Number,
  Created:Number,
  Collected:Number,
  isVerified: {
    type: Boolean,
    default:false
  },
});
const NFT = mongoose.model("NFT", nftSchema);
module.exports = NFT;
