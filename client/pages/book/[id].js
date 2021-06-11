import GoBackButton from "../../components/GoBackButton";
import styles from "../../styles/Bookdetail.module.css";

export default function BookDetails() {
  return (
    <div className={styles.bookDetails}>
      <GoBackButton />

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

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </section>
    </div>
  );
}
