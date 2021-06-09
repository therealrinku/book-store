import styles from "../styles/Authpage.module.css";
import Link from "next/link";
import { VscNote } from "react-icons/vsc";
import { FiArrowRight } from "react-icons/fi";

export default function auth() {
  return (
    <div className={styles.authpage}>
      <span>
        <VscNote />
        <Link href="/">BookStore</Link>
      </span>
      <h2>Create a BookStore account</h2>

      <form>
        <label for="email">Email Address</label>
        <input type="email" id="email" placeholder="cr7@example.com" />
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="*****" />
        <button>
          <p>Sign Up</p>
          <FiArrowRight />
        </button>
      </form>

      <p style={{ margin: "25px 0 -10px 0", color: "gray" }}>Already have an account?</p>
      <button style={{ border: "none" }}>Login to BookStore</button>
    </div>
  );
}
