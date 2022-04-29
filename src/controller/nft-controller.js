const NFT = require("../model/nft-model");
const Query = require("../utils/query");

/**
 *
 * @param {allusers} req
 * @param {*allusers} res
 *  this fetches all the users that are registered on the platform
 */
exports.getNft = async (req, res) => {
    console.log(`${await NFT.find()}`)
  try {
    console.log("i got to nft as of now  👌  get");

    const theNft = new Query(NFT.find().populate("NFTCollection"), req.query)
      .filter()
      .limit()
      .paginate()
      .sort();

    const nftUser = await theNft;

    res.status(200).json({
      success: true,
      message: "successfully fetched all the users 😎",
      data: {
        nftUser: nftUser,
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

  try {
    const oneUser = await NFT.findOne(username);
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
        message: "successfully created",
        nft: nft,
      });
    } else throw new Error("nft wasnt created");
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
