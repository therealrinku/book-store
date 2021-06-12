const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const authRoute = require("./routes/auth");
const bookRoute = require("./route/book");

app.use("auth", authRoute);
app.use("book", bookRoute);

module.exports = app;
