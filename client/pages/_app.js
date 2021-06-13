import "../styles/globals.css";
import Head from "next/head";
import UserContext from "../UserContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userEmail, setUserEmail] = useState("adminuse@gmail.com");
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <Head>
        <title>BookStore</title>
        <link rel="icon" href="https://bit.ly/3zfmByz" />
        <meta title="description" content="get free books to read" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>

      <UserContext.Provider value={{ accessToken, setAccessToken, userEmail, setUserEmail, isAdmin, setIsAdmin }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
