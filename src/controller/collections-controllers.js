const NftCollection = require("../model/collections-nftmodel");
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
    const theQuery = new Query(NftCollection.find().populate("NFT"), req.query)
    .limit()
    .filter()
    .paginate()
    .sort();

    const collections = await theQuery.query;
    return res.status(200).json({
      success: true,
      data: {
        collections,
      },
    });
  } catch (err) {
    return res.status(400).json({
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
  const { id } = req.params;
  try {
    const singleCollection = await NftCollection.findById(id).populate("NFT");
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
        message: "successfully created",
        collection: collection,
      });
    } else throw new Error(`collection wasn't created`);
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
        message: "successfully updated",
        collection: collection,
      });
    } else throw new Error("collection was not successfully updated");
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};
