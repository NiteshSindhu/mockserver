const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: String,
    score:Number
});

const PlayerModel = mongoose.model("gamer", playerSchema);


module.exports = PlayerModel;