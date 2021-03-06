import styles from "../styles/Authpage.module.css";
import Link from "next/link";
import { VscNote } from "react-icons/vsc";
import { FiArrowRight } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import UserContext from "../UserContext";
import { useRouter } from "next/router";

export default function auth() {
  const [loginMode, setLoginMode] = useState(true);

  const [serverIsBusy, setServerIsBusy] = useState(false);

  const router = useRouter();
  //form handlers;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserEmail, setAccessToken, setIsAdmin } = useContext(UserContext);

  const Signup = (e) => {
    e.preventDefault();
    setServerIsBusy(true);

    if (password.length >= 6) {
      axios
        .post(apiUrl + "/auth/register", { email, password })
        .then((res) => {
          setServerIsBusy(false);
          alert("successfully created an account, now you can login");
          setLoginMode(true);
        })
        .catch((err) => {
          alert(err.message);
          setServerIsBusy(false);
        });
    } else {
      alert("password must be 8 characters or long.");
    }
  };

  const Login = (e) => {
    e.preventDefault();
    setServerIsBusy(true);

    axios
      .post(apiUrl + "/auth/login", { email, password })
      .then((res) => {
        router.push("/");
        setAccessToken(res.data.token);
        setUserEmail(res.data.email);
        setIsAdmin(res.data.isAdmin);
      })
      .catch((err) => {
        alert(err.message);
        setServerIsBusy(false);
      });
  };

  //clearing state on mode change
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [loginMode]);

  return (
    <div className={styles.authpage}>
      <span>
        <VscNote />
        <Link href="/">BookStore</Link>
      </span>
      <h2>{loginMode ? "Login to BookStore" : "Create a BookStore account"}</h2>

      <form onSubmit={loginMode ? Login : Signup}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button disabled={serverIsBusy}>
          <p>{loginMode ? "Login" : "Sign Up"}</p>
          <FiArrowRight />
        </button>
      </form>

      <p style={{ margin: "25px 0 -10px 0", color: "gray" }}>
        {!loginMode ? "Already have an account?" : "Don't have an account?"}
      </p>
      <button style={{ border: "none" }} onClick={() => setLoginMode((prev) => !prev)}>
        {loginMode ? "Signup" : "Login"} to BookStore
      </button>
    </div>
  );
}
