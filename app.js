const express = require("express");
const bodyParser = require("body-parser");

const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const collectionRouter = require("./src/routes/nfts-route");
const nftUsers = require("./src/routes/users-route");
const routerCollection = require("./src/routes/collection-route");
const app = express();


app.use(express.json())
// app.use( (req,res)=>{
//     const [walleID, nftID] = req.url.split("/").slice(2)
//     console.log(walleID, nftID)
// })

app.use("/users", nftUsers);
app.use("/nft", collectionRouter);
app.use('/collection', routerCollection )


app.use(morgan("dev"));

app.all('*', (req, res, next)=>{
    const err = new Error(` cannot find ${req.originalUrl} on this server`);
next(err)
})

module.exports = app