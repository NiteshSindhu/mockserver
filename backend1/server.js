const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connection = require("./config/db");
const userRoutes = require("./Routes/user.routes");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("listening on port " + process.env.PORT);
  } catch (err) {
    console.log("error listening");
  }
});
