const router = require("express").Router();
const Book = require("../models/bookModel");

const TokenVerifier = require("../tokenVerifier");
require("dotenv").config();

router.get("/all", TokenVerifier, async (req, res) => {
  const books = await Book.find();
  res.status(200).send(books);
});

router.post("/updateBook/:id", TokenVerifier, (req, res) => {
  const { title, price, author, details, imageURL, publishedYear } = req.body;

  Book.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      price,
      author,
      details,
      imageURL,
      publishedYear,
    },
    (err) => {
      if (err) return res.status(400).send(err);
      res.status(200).send("Successfully updated the book");
    }
  );
});

router.post("/addBook", TokenVerifier, (req, res) => {
  const { title, price, author, details, imageURL, publishedYear } = req.body;
  const newBook = new Book({ title, price, author, details, imageURL, publishedYear });

  newBook
    .save()
    .then((data) => {
      res.status(200).send({ id: data._id });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/:id", TokenVerifier, (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(book);
  });
});

router.post("/delete/:id", TokenVerifier, async (req, res) => {
  Book.findByIdAndDelete(req.params.id, (err) => {
    if (!err) return res.status(200).send("Successfully delete the book.");
    else res.status(400).send("Something went wrong.");
  });
});

module.exports = router;
