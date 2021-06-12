const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("connected to mongodb");
});

const app = express();

app.use(cors());
app.use(express.json());

const authRoute = require("./routes/auth");
const bookRoute = require("./routes/book");

app.use("auth", authRoute);
app.use("book", bookRoute);

module.exports = app;
