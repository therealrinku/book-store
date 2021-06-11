import styles from "../../styles/Bookdetail.module.css";

export default function BookDetails() {
  return (
    <div className={styles.bookDetails}>
      <p style={{ textAlign: "center", fontSize: "25px" }}>Book Details</p>

      <section>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71EGWJeU3iL.jpg" alt="book" />
        <div>
          <p className={styles.bookTitle}>Think and Grow Rich</p>
          <span>
            <p>Author</p>
            <p>Robert Kiyosaki</p>
          </span>

          <span>
            <p>Published Date</p>
            <p>1999</p>
          </span>

          <span>
            <p>Price</p>
            <p>$ 12</p>
          </span>
        </div>
      </section>
    </div>
  );
}
