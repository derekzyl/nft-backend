const express = require("express");
const bodyParser = require("body-parser");

const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const collectionRouter = require("./src/routes/creators-collectors");
const nftUsers = require("./src/routes/nft-route");
const app = express();


app.use(express.json())
// app.use('/',(req,res,next)=>{
//    res.status(200).json({
//        message: 'Welcome to the NFT API'
//    })
//    next()
// })
app.use("/nft", nftUsers);
app.use("/collection", collectionRouter);
app.use(morgan("dev"));

app.all('*', (req, res, next)=>{
    const err = new Error(` cannot find ${req.originalUrl} on this server`);
next(err)
})

module.exports = app