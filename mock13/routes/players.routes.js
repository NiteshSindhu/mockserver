const express = require('express');
const PlayerModel = require('../model/players.model');


const playersRouter = express.Router();


playersRouter.get("/", async (req, res) => {
    try {
        const players = await PlayerModel.find();
        res.send({ players });
     } catch (err) {
        res.send({err});
    }
})

playersRouter.post("/", async (req, res) => {
    try { 
        await PlayerModel.insertMany(req.body);
        res.send({msg:"successful"})
    }
    catch (err) {
        res.send({err})
    }
})

module.exports = playersRouter;
