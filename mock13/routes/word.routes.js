const express = require("express");

const wordRouter = express.Router();

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function generateString() {
  let length = Math.floor(Math.random() * 10) + 1;
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

wordRouter.get("/", (req, res) => {
  const word = generateString();
  const length = word.length;
  res.send({ word, length });
});

module.exports = wordRouter;
