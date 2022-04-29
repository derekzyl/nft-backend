const  mongoose  = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


const app = require("./app")




const db = process.env.database;

 mongoose
.connect(db, 
    { useNewUrlParser: true,  }).then(
    ()=> {
        console.log(` db is connected to network 🌈 🌈 🌈`)
    }
);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port} 😁`);
});
