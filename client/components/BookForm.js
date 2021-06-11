import styles from "../styles/BookForm.module.css";

export default function BookForm({ toggle }) {
  return (
    <div className={styles.BookForm}>
      <form>
        <input type="text" placeholder="Type book title here" />
        <input type="text" placeholder="Type book author here" />
        <input type="text" placeholder="Type book published date here" />
        <input type="text" placeholder="Type book details here" />
        <input type="text" placeholder="Type book image url here" />
        <input type="text" placeholder="Type book price here" />
        <button>Submit</button>
        <button onClick={toggle} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
