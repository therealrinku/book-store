const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    author: { type: String, required: true },
    details: { type: String, required: true },
    imageURL: { type: String, required: true },
    publishedDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
