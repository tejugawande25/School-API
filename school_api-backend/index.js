require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/route.js");
const bodyParser = require("body-parser");


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/schools",router);



app.listen(process.env.PORT,() =>{
    console.log(`server is running on ${process.env.PORT}`);
})