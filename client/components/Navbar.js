import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import UserContext from "../UserContext";

export default function Navbar() {
  const { userEmail, setUserEmail, setIsAdmin, setAccessToken } = useContext(UserContext);
  const router = useRouter();

  const Logout = () => {
    router.push("/");
    setUserEmail("");
    setIsAdmin(false);
    setAccessToken("");
  };

  return (
    <nav className={styles.Navbar}>
      <legend>
        <Link href="/">Book Store</Link>
        <button onClick={Logout}>
          {userEmail} <i style={{ color: "red" }}>Logout</i>
        </button>
      </legend>
    </nav>
  );
}
