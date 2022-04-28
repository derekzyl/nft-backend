const express = require('express');
const bodyParser = require('body-parser');
const nftUsers = require('./src/routes/nft-route');
const { default: mongoose } = require('mongoose');

const app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next)=>{
    console.log('testing ')
    next();
}
)

app.use('/api/v1/users', nftUsers)

const db = 'mongodb+srv://nft:thenft@cluster0.51mrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('connected to database 🌈 🌈 🌈')
})
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port ${port} 😁`); })