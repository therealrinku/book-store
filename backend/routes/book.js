const router = require("express").Router();
const Book = require("../models/bookModel");
require("dotenv").config();

router.get("/all", async (req, res) => {
  const books = await Book.find();
  res.status(200).send(books);
});

router.post("/addBook", (req, res) => {
  const { title, price, author, details, imageURL } = req.body;
  const publishedDate = Date.parse(req.body.publishedDate);
  const newBook = new Book({ title, price, author, details, imageURL, publishedDate });

  newBook
    .save()
    .then(() => res.status(200).send("Successfully added a new book."))
    .catch((err) => {
      res.send(400).send(err);
    });
});

router.get("/:id", async (req, res) => {
  const Book = await Book.findOne({ _id: req.params.id });

  if (Book) {
    res.status(200).send(Book);
  } else {
    return res.status(400).send("Book not found");
  }
});

router.post("/delete/:id", async (req, res) => {
  Book.findByIdAndDelete(req.params.id, (err) => {
    if (!err) res.send(200).send("Successfully delete the book.");
    else res.send(400).send("Something went wrong.");
  });
});

module.exports = router;
