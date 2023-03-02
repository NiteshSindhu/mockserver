const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const playersRouter = require("./routes/players.routes");
const wordRouter = require("./routes/word.routes");
const connection = require("./config/db");

const app = express();

app.use(express.json());
app.use(cors());
// connect players
app.use("/players",playersRouter)
//connect word
app.use("/word", wordRouter);


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("listening on port " + process.env.PORT);
  } catch (err) {
    console.log("error listening");
  }
});
