const url = "mongodb+srv://niteshsindhu:nitesh@cluster0.ntjigwz.mongodb.net/Flight?retryWrites=true&w=majority";
const mongoose = require("mongoose");

const connection = mongoose.connect(url);

module.exports=connection