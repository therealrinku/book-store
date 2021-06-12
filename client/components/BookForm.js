import { useState } from "react";
import styles from "../styles/BookForm.module.css";

export default function BookForm({ toggle, editMode }) {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");

  const AddBook = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.BookForm}>
      <form onSubmit={editMode ? null : AddBook}>
        <input
          type="text"
          placeholder="Type book title here"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type book author here"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="date"
          placeholder="Type book published date here"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
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
