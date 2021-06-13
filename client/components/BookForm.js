import axios from "axios";
import { useContext, useState } from "react";
import apiUrl from "../apiUrl";
import styles from "../styles/BookForm.module.css";
import UserContext from "../UserContext";

export default function BookForm({ toggle, editMode, bookDetails, setBooks, setBookDetails }) {
  const [title, setTitle] = useState(editMode ? bookDetails.title : "");
  const [author, setAuthor] = useState(editMode ? bookDetails.author : "");
  const [publishedYear, setPublishedYear] = useState(editMode ? bookDetails.publishedYear : "");
  const [imageURL, setImageURL] = useState(editMode ? bookDetails.imageURL : "");
  const [price, setPrice] = useState(editMode ? bookDetails.price : "");
  const [details, setDetails] = useState(editMode ? bookDetails.details : "");

  const { accessToken } = useContext(UserContext);

  const EditBook = (e) => {
    e.preventDefault();
    axios
      .post(
        apiUrl + `/book/updateBook/${bookDetails._id}`,
        {
          title,
          author,
          publishedYear,
          imageURL,
          price,
          details,
        },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
      .then(() => {
        //updating in local state as well
        toggle();
        setBookDetails({ _id: bookDetails._id, title, author, publishedYear, imageURL, price, details });
      })
      .catch((err) => {
        alert("input fields cannot be empty :" + err);
      });
  };

  const AddBook = (e) => {
    e.preventDefault();
    axios
      .post(
        apiUrl + "/book/addBook",
        {
          title,
          author,
          publishedYear,
          imageURL,
          price,
          details,
        },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
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
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="author">Author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <label htmlFor="year">Published Year</label>
        <input type="number" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} />
        <label htmlFor="details">Book Details</label>
        <input type="text" value={details} onChange={(e) => setDetails(e.target.value)} />
        <label htmlFor="image">Image URL</label>
        <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        <label htmlFor="price">Price</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button>Submit</button>
        <button onClick={toggle} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
