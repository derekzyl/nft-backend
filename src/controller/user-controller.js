const NFT = require("../model/user-model");
const Query = require("../utils/query");

/**
 *
 * @param {allusers} req
 * @param {*allusers} res
 *  this fetches all the users that are registered on the platform
 */
exports.getNft = async (req, res) => {



  try {
  const queryObj = {...req.query}
  const excludedFields =['sort', 'page', 'limit', 'fields']

         
  excludedFields.forEach((el)=>  delete queryObj[el] )

 let queryStr = JSON.stringify(queryObj)
 queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match)=> `$${match}`)
 let  nft  =  NFT.find(JSON.parse(queryStr))


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
      message: "successfully fetched all the users 😎",
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

exports.getSingleNft = async (req, res) => {
  const { username } = req.params;
  console.log(username)

  try {
    const oneUser = await NFT.findOne({username});
    if (oneUser) {
      res.status(200).json({
        success: true,
        user: oneUser,
      });
    } else {
      throw new Error(` oops the user ${oneUser} was not found `);
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      error: err,
    });
  }
};
exports.postNft = async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const nft = await NFT.create(body);
    if (nft) {
      return res.status(200).json({
        message: "user successfully created",
        nft: nft,
      });
    } else throw new Error("user wasnt created");
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};
exports.updateNft = async (req, res) => {
  const { body } = req.body;
  const { id } = req.params;
  try {
    const nft = await NFT.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
  } catch (err) {}
};
