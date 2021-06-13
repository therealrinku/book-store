import styles from "../styles/Homepage.module.css";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import BookForm from "../components/BookForm";
import Backdrop from "../components/Backdrop";
import axios from "axios";
import apiUrl from "../apiUrl";
import LoadingView from "../components/LoadingView";
import { useRouter } from "next/router";
import UserContext from "../UserContext";

export default function HomePage() {
  const [showBookForm, setShowBookForm] = useState(false);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { isAdmin, accessToken } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(apiUrl + "/book/all", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
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
          <p style={{ textAlign: "center", fontSize: "25px" }}>
            {books.length === 0 ? "No any Books Added Yet" : "All Books"}
          </p>

          {showBookForm ? (
            <>
              <Backdrop toggle={toggleBookForm} />
              <BookForm toggle={toggleBookForm} setBooks={setBooks} />
            </>
          ) : null}

          {isAdmin ? (
            <section style={{ textAlign: "center" }}>
              <button onClick={toggleBookForm} className={styles.homePageButton}>
                Add New Book
              </button>

              <button onClick={() => router.push("/users")} className={styles.homePageButton}>
                Users List
              </button>
            </section>
          ) : null}

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
