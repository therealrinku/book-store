import styles from "../styles/Homepage.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import Backdrop from "../components/Backdrop";
import axios from "axios";
import apiUrl from "../apiUrl";
import LoadingView from "../components/LoadingView";

export default function HomePage() {
  const [showBookForm, setShowBookForm] = useState(false);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiUrl + "/book/all")
      .then((res) => {
        setLoading(false);
        setBooks(res.data);
      })
      .catch((err) => {
        setLoading(false);
        alert(err.message);
      });
  }, []);

  const toggleBookForm = () => {
    setShowBookForm((prev) => !prev);
  };

  return (
    <>
      {loading ? (
        <LoadingView />
      ) : (
        <div className={styles.homepage}>
          <p style={{ textAlign: "center", fontSize: "25px" }}>All Books</p>

          {showBookForm ? (
            <>
              <Backdrop toggle={toggleBookForm} />
              <BookForm toggle={toggleBookForm} />
            </>
          ) : null}

          <button onClick={toggleBookForm} className={styles.AddBookButton}>
            Add New Book
          </button>

          <section className={styles.books}>
            {books.map((book, i) => {
              return (
                <div key={i}>
                  <Link href={`/book/${book._id}`}>
                    <img src={book.imageURL} alt={book.title} />
                  </Link>
                  <p>{book.title}</p>
                </div>
              );
            })}
          </section>
        </div>
      )}
    </>
  );
}
