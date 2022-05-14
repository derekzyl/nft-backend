const NftCollection = require("../model/nft-model");
const Query = require("../utils/query");

/**
 *
 * @param {query} req
 * @param {all collections} res
 * @returns  depends on the query param sort, populate, filter, paginate
 */

exports.getCollections = async (req, res) => {
  console.log("i got to collection as of now get");
  try {
    const queryObj = {...req.query}
    const excludedFields =['sort', 'page', 'limit', 'fields']
  
           
    excludedFields.forEach((el)=>  delete queryObj[el] )
  
   let queryStr = JSON.stringify(queryObj)
   queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match)=> `$${match}`)
   let  nft  =  NftCollection.find(JSON.parse(queryStr))
  
  
  if (req.query.sort){
    const sortBy = req.query.sort.split(',').join(' ')
  
    nft=nft.sort(sortBy)
  }
  
  
  if(req.query.limit){
  
      const limit = parseInt(req.query.limit)
      nft= nft.limit(limit)
     
  }
  else{   nft.limit(16)}
  
  
  if(req.query.fields){
  
    const fields = req.query.sort.split(',').join(' ')
    nft= nft.select(fields)
   
  }
  else{   nft.select('-_V')}
  
  
  
  const page = req.query.page * 1 || 1
  const limit = req.query.limit * 1 || 16
  const skip = (page - 1) * limit
  nft = nft.skip(skip).limit(limit)
   
  
      // console.log(`${await NFT.find()}`)
    
     
  
      // const theNft = new Query(NFT.find(),  req.query)
       
      //   .limit()
      //   .paginate()
      //   .sort();
      
      // const nft = await theNft.query;
      const nfts = await nft
      console.log(nfts, "of nft")
  
      res.status(200).json({
        success: true,
        message: "successfully fetched all the nft 😎",
        data: {
          nfts
        },
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        error: err,
      });
    }


};

/**
 *
 * @param {id} req
 * @param {*singleCollection} res
 * @param {*none} next
 * @returns it returns a single collection with the owner of the collection id
 * and the creator
 *
 */
exports.getSingleCollection = async (req, res, next) => {
 
  const { username } = req.params;
  try {
    const singleCollection = await NftCollection.find(username)
    if (singleCollection) {
      return res.status(200).json({
        success: true,
        collection: singleCollection,
      });
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
};

/**
 *
 * @param {body} req
 * @param {*collection} res
 * @returns returns the post request to create  new  collection
 */
exports.postCollections = async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const collection = await NftCollection.create(body);
    if (collection) {
      return res.status(200).json({
        message: "nft successfully created",
        collection: collection,
      });
    } else throw new Error(`nft wasn't created`);
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

/**
 *
 * @param {id, body} req
 * @param {collection} res
 * @returns updated collections
 */
exports.updateCollections = async (req, res) => {
  const { body } = req.body;
  const { id } = req.params;
  try {
    const collection = await NftCollection.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (collection) {
      return res.status(200).json({
        message: "nft successfully updated",
        collection: collection,
      });
    } else throw new Error("nft was not successfully updated");
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};
