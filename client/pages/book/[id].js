import GoBackButton from "../../components/GoBackButton";
import styles from "../../styles/Bookdetail.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";
import LoadingView from "../../components/LoadingView";

export default function BookDetails({ bookId }) {
  const [bookDetails, setBookDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiUrl + `/book/${bookId}`)
      .then((res) => {
        setLoading(false);
        setBookDetails(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  // const parsedPublishedDate = new Date(bookDetails.publishedDate);

  return (
    <>
      {loading ? (
        <LoadingView />
      ) : bookDetails.title ? (
        <div className={styles.bookDetails}>
          <GoBackButton />

          <p style={{ textAlign: "center", fontSize: "25px" }}>Book Details</p>

          <section>
            <img src={bookDetails.imageURL} alt="book" />
            <div>
              <p className={styles.bookTitle}>Think and Grow Rich</p>
              <span>
                <p>Author</p>
                <p>{bookDetails.author}</p>
              </span>

              <span>
                <p>Published Date</p>
                <p>{bookDetails.publishedDate}</p>
              </span>

              <span>
                <p>Price</p>
                <p>${bookDetails.price}</p>
              </span>

              <p>{bookDetails.details}</p>
            </div>
          </section>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
          <GoBackButton />
          <p style={{ textAlign: "center" }}>Book not found or something went wrong!</p>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      bookId: context.params.id,
    },
  };
}
