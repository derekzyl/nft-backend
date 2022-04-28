const mongoose = require("mongoose");
const nftSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  username: {
    type: String,
    unique: true,
  },

  followers: {
    type: Number,
  },

  following: {
    type: Number,
  },
bio:String,
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
  collections: 
   [
      { type: mongoose.Schema.Types.ObjectId,
       ref: 'NftCollection'}
],
  created:   [
   { type: mongoose.Schema.Types.ObjectId,
    ref: "NftCollection"}
],
collected:[
{type: mongoose.Schema.Types.ObjectId,
ref: "NftCollection"}
],
  verified: {
    type: Boolean,
  },
});
const NFT = mongoose.model("NFT", nftSchema);
module.exports = NFT;
