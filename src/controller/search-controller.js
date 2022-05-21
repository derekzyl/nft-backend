
const NFT = require("../model/user-model");
const CollectionData = require("../model/collection-model");
const NftCollection = require("../model/nft-model");


exports.getSearch=async (req, res)=>{

    try{
    if(req.query.search){

        const {search} = req.query


        console.log(search)
        let data = {nft: [], collection: [], user: []}
        let collection = CollectionData
        let nft = NftCollection 
        let user = NFT
    
    
        data.collection = await collection.find({collection_id:  `${search}`}).limit(3) 
        data.nft=await nft.find({name: `${search}`}).limit(3)
        data.user = await user.find({username: `${search}`}).limit(3)
      
       if(data){
           return res.status(200).json({
               success:true,
               data
           })

       }
     
      
          }
        
    




        }
          catch(e){
              return res.status(500).json({
                  error: e
              })
          }
}