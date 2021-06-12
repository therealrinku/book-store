const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, null: false },
    price: { type: String, required: true, null: false },
    author: { type: String, required: true, null: false },
    details: { type: String, required: true, null: false },
    imageURL: { type: String, required: true, null: false },
    publishedYear: { type: Number, required: true, null: false },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
