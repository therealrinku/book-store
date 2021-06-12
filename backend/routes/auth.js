const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/register", (req, res) => {
  const { email } = req.body;

  //hashing the password
  bcrypt.hash(req.body.password, 10, (err, password) => {
    if (err) return res.status(400).send("Something went wrong.");

    const newUser = new User({ email, password });
    newUser
      .save()
      .then(() => res.status(200).send("user created successfully"))
      .catch((err) => {
        res.status(400).send(err);
      });
  });
});

router.post("/login", async (req, res) => {
  const userObject = await User.findOne({ email: req.body.email });

  if (!userObject) return res.status(400).send("invalid email");

  const { email, password } = userObject;
  //decrypting and comparing the passwords
  bcrypt.compare(req.body.password, password, (err, matched) => {
    if (err) return res.status(400).send(err);
    if (!matched) return res.status(400).send("invalid password");

    const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET);
    return res.status(200).send({ token, email });
  });
});

module.exports = router;
