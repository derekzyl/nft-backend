const nftController = require('../controller/nft-controller');

const nftUsers = require('express').Router();




nftUsers.route('/')
.get(nftController.getNft)
.post(nftController.postNft)
.patch(nftController.updateNft)

module.exports = nftUsers