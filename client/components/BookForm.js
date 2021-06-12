import axios from "axios";
import { useState } from "react";
import apiUrl from "../apiUrl";
import styles from "../styles/BookForm.module.css";

export default function BookForm({ toggle, editMode, bookDetails, setBooks, setBookDetails }) {
  const [title, setTitle] = useState(editMode ? bookDetails.title : "");
  const [author, setAuthor] = useState(editMode ? bookDetails.author : "");
  const [publishedYear, setPublishedYear] = useState("");
  const [imageURL, setImageURL] = useState(editMode ? bookDetails.imageURL : "");
  const [price, setPrice] = useState(editMode ? bookDetails.price : "");
  const [details, setDetails] = useState(editMode ? bookDetails.details : "");

  const EditBook = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl + `/book/updateBook/${bookDetails._id}`, {
        title,
        author,
        publishedYear,
        imageURL,
        price,
        details,
      })
      .then(() => {
        //updating in local state as well
        toggle();
        setBookDetails({ title, author, publishedYear, imageURL, price, details });
      })
      .catch((err) => {
        alert("input fields cannot be empty :" + err);
      });
  };

  const AddBook = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl + "/book/addBook", {
        title,
        author,
        publishedYear,
        imageURL,
        price,
        details,
      })
      .then((res) => {
        toggle();
        //adding book to local state
        setBooks((prev) => [...prev, { _id: res.data.id, title, author, publishedYear, price, imageURL, details }]);
      })
      .catch((err) => {
        alert("input fields cannot be empty :" + err);
      });
  };

  return (
    <div className={styles.BookForm}>
      <p style={{ textAlign: "center" }}>{editMode ? "Edit Book" : "Add New Book"}</p>
      <form onSubmit={editMode ? EditBook : AddBook}>
        <input
          type="text"
          placeholder="Type book title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type book author here"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Type book published date here"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type book details here"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type book image url here"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type book price here"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>Submit</button>
        <button onClick={toggle} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
