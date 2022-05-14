const nftController = require('../controller/user-controller');

const nftUsers = require('express').Router();




nftUsers.route('/')
.get(nftController.getNft)
.post(nftController.postNft)

nftUsers.route('/:username')
.get(nftController.getSingleNft)

 nftUsers.route('assets/:id')
 .patch(nftController.updateNft)
 
module.exports = nftUsers