const NftCollection = require("../model/collections-nftmodel")
const Query = require("../utils/query")



exports.getCollections = async (req, res)=>{
 const {query} = req
    try{
        const collections = await NftCollection.find().populate('NFT')
        if(collections){
            theQuery = Query(collections, query)
            return res.status(200).json({
                success: true,
                collections:theQuery
            })
        }
        else throw new Error('no collections found')
    }
    catch(err){
        return res.status(400).json({
            error: err
        })
    }}
  exports.postCollections = async (req, res)=>{
    const {body} = req
    try{
        const collection = await NftCollection.create(body)
        if(collection){
            return res.status(200).json({
                message: 'suucessfully created',
                collection: collection
            })    }
            else throw (new Error(`collection wasn't created`))}
            catch(err){
                return res.status(400).json({
                    error:err
                })        }
  }
    exports.updateCollections = async (req, res)=>{
        const {body} = req.body
        const {id}= req.params
      try{  const collection = await NftCollection.findByIdAndUpdate(id, body, {
            new : true,
            runValidators: true
        })
        if(collection){
            return res.status(200).json({
                message: 'successfully updated',
                collection: collection
            })    }
        }
        catch(err){
            return res.status(400).json({
                error:err
            })        
        }}
