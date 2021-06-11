import styles from "../styles/Homepage.module.css";
import Link from "next/link";
import { useState } from "react";
import BookForm from "../components/BookForm";
import Backdrop from "../components/Backdrop";

export default function HomePage() {
  const [showBookForm, setShowBookForm] = useState(false);

  const books = [
    {
      bookId: 1,
      bookName: "Think and Grow Rich",
      bookImage: "https://images-na.ssl-images-amazon.com/images/I/71EGWJeU3iL.jpg",
    },
    {
      bookId: 2,
      bookName: "How to win friends and influence people",
      bookImage: "https://images-na.ssl-images-amazon.com/images/I/61bfGzdMr2L.jpg",
    },
    {
      bookId: 3,
      bookName: "Rich Dad Poor Dad",
      bookImage:
        "https://lh3.googleusercontent.com/proxy/TYNj9avpAaZtjlLRfm7-83c2XU9KwrxYV9Txe6bCr0nmkwlELKQLkx-PJPzDgm8_KJX6OTyjJRmbaP3ARXXAM8o4yjX8SySPTAvLiHH98whrZPGrpgH_iGQT5TYaHSs",
    },
    {
      bookId: 4,
      bookName: "Power of Now",
      bookImage: "https://upload.wikimedia.org/wikipedia/en/6/66/TPON_Cover_LG.jpg",
    },
    {
      bookId: 5,
      bookName: "The richest man in babylon",
      bookImage: "https://www.whatyouwilllearn.com/wp-content/uploads/2017/02/The-Richest-Man-in-Babylon.jpg",
    },
  ];

  const toggleBookForm = () => {
    setShowBookForm((prev) => !prev);
  };

  return (
    <div className={styles.homepage}>
      <p style={{ textAlign: "center", fontSize: "25px" }}>All Books</p>

      {showBookForm ? (
        <>
          <Backdrop toggle={toggleBookForm} />
          <BookForm />
        </>
      ) : null}

      <button onClick={toggleBookForm} className={styles.AddBookButton}>
        Add New Book
      </button>

      <section className={styles.books}>
        {books.map((book, i) => {
          return (
            <div key={i}>
              <Link href={`/book/${book.bookId}`}>
                <img src={book.bookImage} alt={book.bookName} />
              </Link>
              <p>{book.bookName}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
