const NFT = require("../model/nft-model")
const Query = require("../utils/query")

exports.getNft = async (req, res)=>{

 const nft = await NFT.find().populate('NftCollection')
try{ 
    if (nft)
    
    {
        theNft = Query(nft, req.query)
        res.status(200).json({
            success:true,
            users: theNft
        })
    }
    else{
        throw new Error("No NFT found")
    }
    }catch(err){
        res.status(404).json({error:err,
        })
    }

}
exports.postNft = async( req, res)=>{
    const {body}= req
 try{   const nft = await NFT.create(body)
    if (nft){
        return res.status(200).json({
            message: 'suucessfully created',
            nft: nft
        })    }
        else throw (new Error('nft wasnt created'))}
        catch(err){
            return res.status(400).json({
                error:err
            })        }

}
exports.updateNft = async (req, res)=>{
    const {body} = req.body
    const {id}= req.params
  try{  const nft = await NFT.findByIdAndUpdate(id, body, {
        new : true,
        runValidators: true
    })}
    catch(err){}
}