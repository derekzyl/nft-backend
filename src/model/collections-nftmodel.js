 const mongoose = require('mongoose')
const NFT = require('./nft-model')

 const NftCollectionSchema = new mongoose.Schema({
     
         name: String,
         image: {
                 type:String,
                       required: [true, 'this is a required image field']
         },
         price_in_USD: Number,
         owner: String,
         creator: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'NFT'
         },
         owner: 
         { type: mongoose.Schema.Types.ObjectId,
          ref: 'NFT'},
         isCreation: 
         {
type: Boolean,
default: false
         },
isCollection:{
 type: Boolean,
 default: false
         },
       
        
ipfs: String,
bscSan: String,
history: [

{
minted:[{
        username: String,
        date: Date,
}],
listed:[{
        date: Date,
        price: Number,
        username: String
}],
transferred:[
        {
                date: Date,
                price: Number,
                username: String
        }
]


}
         ],



     
 })

    const NftCollection = mongoose.model('NftCollection', NftCollectionSchema)

    module.exports = NftCollection