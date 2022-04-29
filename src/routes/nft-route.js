const nftController = require('../controller/nft-controller');

const nftUsers = require('express').Router();




nftUsers.route('/')
.get(nftController.getNft)
.post(nftController.postNft)

nftUsers.route('username/:username')
.get(nftController.getSingleNft)

 nftUsers.route('/:id')
 .patch(nftController.updateNft)
 
module.exports = nftUsers